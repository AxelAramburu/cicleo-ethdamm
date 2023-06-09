// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IERC20 } from "../interfaces/IERC20.sol";
import { IRouter, SwapDescription, IOpenOceanCaller } from "../interfaces/IOpenOcean.sol";
import {LibDiamond} from "../libraries/LibDiamond.sol";
import {LibPaymentManager} from "../libraries/LibPaymentManager.sol";
import {LibAdmin} from "../libraries/LibAdmin.sol";

contract PaymentFacet {
    bytes32 internal constant NAMESPACE =
        keccak256("com.cicleo.facets.payment");

    struct Storage {
        /// @notice Address of the OpenOcean router
        IRouter routerSwap;
    }

    //-------Events --------------

    event PaymentManagerCreated(
        uint256 indexed paymentManagerId,
        address indexed user,
        address indexed paymentToken,
        address treasuryAccount
    );

    event PaymentDoneWithCicleo(
        uint256 indexed paymentManagerId,
        address indexed user,
        string indexed nameOfPayment,
        uint256 price
    );

    //-------Internal Functions -------------- 

    function transferFrom(address user, IERC20 token, uint256 amount) internal {
        uint256 balanceBefore = token.balanceOf(address(this));
        token.transferFrom(user, address(this), amount);
        require(token.balanceOf(address(this)) >= balanceBefore + amount, "Transfer failed");
    }

    function distributeMoney(
        uint256 paymentManagerId,
        uint256 amount
    ) internal {
        LibPaymentManager.PaymentManagerData memory paymentInfo = LibPaymentManager.getPaymentManagerInfo(paymentManagerId);
        require(address(paymentInfo.paymentToken) != address(0), "Invalid subinfo");

        uint256 taxAmount = amount * LibAdmin.getTaxPercentage() / 1000;

        paymentInfo.paymentToken.transfer(paymentInfo.treasuryAccount, amount - taxAmount);
        paymentInfo.paymentToken.transfer(LibAdmin.getTaxAccount(), taxAmount);
    }

    //-----Admin function----------

    function setRouterSwap(IRouter routerSwap) external {
        LibDiamond.enforceIsContractOwner();
        Storage storage ds = getStorage();
        ds.routerSwap = routerSwap;
    }   

    //----External View function--------------

    function getRouterSwap() public view returns (IRouter) {
        Storage storage ds = getStorage();
        return ds.routerSwap;
    }

    //----External Functions -----------------------

    function payWithCicleo(
        uint256 paymentManagerId,
        uint256 price,
        string calldata nameOfPayment
    ) external {
        LibPaymentManager.PaymentManagerData memory paymentInfo = LibPaymentManager.getPaymentManagerInfo(paymentManagerId);
        require(address(paymentInfo.paymentToken) != address(0), "Invalid subinfo");

        transferFrom(msg.sender, paymentInfo.paymentToken, price);

        distributeMoney(paymentManagerId, price);

        emit PaymentDoneWithCicleo(paymentManagerId, msg.sender, nameOfPayment, price);
    }

    function payWithCicleoWithSwap(
        uint256 paymentManagerId,
        uint256 price,
        string calldata nameOfPayment,
        IOpenOceanCaller executor,
        SwapDescription memory desc,
        IOpenOceanCaller.CallDescription[] calldata calls
    ) external {
        LibPaymentManager.PaymentManagerData memory paymentInfo = LibPaymentManager.getPaymentManagerInfo(paymentManagerId);
        require(address(paymentInfo.paymentToken) != address(0), "Invalid subinfo");

        transferFrom(msg.sender, desc.srcToken, desc.amount);

        IRouter routerSwap = getRouterSwap();

        desc.srcToken.approve(address(routerSwap), desc.amount);

        uint256 balanceBefore = desc.dstToken.balanceOf(address(this));

        routerSwap.swap(executor, desc, calls);

        //Verify if the token have a transfer fees or if the swap goes okay
        uint256 balanceAfter = desc.dstToken.balanceOf(address(this));
        require(balanceAfter - balanceBefore >= price, "Swap failed");

        distributeMoney(paymentManagerId, price);

        emit PaymentDoneWithCicleo(paymentManagerId, msg.sender, nameOfPayment, price);
    }

    //----Diamond storage functions-------------------------------------//

    /// @notice fetch local storage
    function getStorage() private pure returns (Storage storage s) {
        bytes32 namespace = NAMESPACE;
        // solhint-disable-next-line no-inline-assembly
        assembly {
            s.slot := namespace
        }
    }
}