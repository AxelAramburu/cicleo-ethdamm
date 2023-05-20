// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IERC20 } from "../interfaces/IERC20.sol";
import { IRouter, SwapDescription, IOpenOceanCaller } from "../interfaces/IOpenOcean.sol";
import {LibDiamond} from "../libraries/LibDiamond.sol";
import {LibAdmin}   from "../libraries/LibAdmin.sol";

struct PaymentManagerData {
    /// @notice Address of the treasury account
    address treasuryAccount;
    /// @notice Token of the backed payment
    IERC20 paymentToken;
    /// @notice Name of the payment manager
    string name;
}

contract PaymentManagerFacet {
    bytes32 internal constant NAMESPACE =
        keccak256("com.cicleo.facets.paymentmanager");

    struct Storage {
        /// @notice Mapping to store the payment subscriptions info
        mapping(uint256 => PaymentManagerData) paymentManagers;
        /// @notice Count of all payment manager ids
        uint256 paymentManagerCount;
    }

    //-------Events --------------

    event PaymentManagerCreated(
        uint256 indexed paymentManagerId,
        address indexed user,
        address indexed paymentToken,
        address treasuryAccount
    );

    event PaymentManagerTokenChanged(
        uint256 indexed subscriptionId,
        address indexed paymentToken
    );

    event PaymentManagerTreasuryChanged(
        uint256 indexed subscriptionId,
        address indexed treasury
    );

    event PaymentManagerOwnerChanged(
        uint256 indexed subscriptionId,
        address indexed owner
    );

    //-----Modifiers -----------------

    modifier onlyOwner(uint256 paymentManagerId) {
        require(LibAdmin.getSecurity().verifyIfOwner(msg.sender, paymentManagerId), "Not owner");
        _;
    }


    //----External View function--------------

    function getPaymentManagerInfo(uint256 subscriptionId) public view returns (PaymentManagerData memory, uint8 tokenDecimals, string memory tokenSymbol) {
        Storage storage ds = getStorage();
        return (ds.paymentManagers[subscriptionId], ds.paymentManagers[subscriptionId].paymentToken.decimals(), ds.paymentManagers[subscriptionId].paymentToken.symbol());
    }

    //----External Functions -----------------------

    function createPaymentManager(
        string memory name,
        address paymentToken,
        address treasuryAccount
    ) external {
        Storage storage ds = getStorage();

        uint256 paymentManagerId = ds.paymentManagerCount + 1;
        ds.paymentManagers[paymentManagerId] = PaymentManagerData({
            treasuryAccount: treasuryAccount,
            paymentToken: IERC20(paymentToken),
            name: name
        });

        ds.paymentManagerCount = paymentManagerId;

        LibAdmin.getSecurity().mintNft(msg.sender, paymentManagerId);

        emit PaymentManagerCreated(paymentManagerId, msg.sender, paymentToken, treasuryAccount);
    }

    function editPaymentManagerToken(
        uint256 ids,
        address paymentToken
    ) external onlyOwner(ids) {
        Storage storage ds = getStorage();

        ds.paymentManagers[ids].paymentToken = IERC20(paymentToken);
        
        emit PaymentManagerTokenChanged(ids, paymentToken);
    }

    function editPaymentManagerTreasury(
        uint256 ids,
        address newTreasury
    ) external onlyOwner(ids) {
        Storage storage ds = getStorage();

        ds.paymentManagers[ids].treasuryAccount = newTreasury;
        
        emit PaymentManagerTreasuryChanged(ids, newTreasury);
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