// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IDiamondCut } from "../interfaces/IDiamondCut.sol";
import { IERC20 } from "./../interfaces/IERC20.sol";
import { IRouter } from "../interfaces/IOpenOcean.sol";
import {LibDiamond} from "../libraries/LibDiamond.sol";

library LibPaymentManager {
    struct PaymentManagerData {
        /// @notice Address of the treasury account
        address treasuryAccount;
        /// @notice Token of the backed payment
        IERC20 paymentToken;
        /// @notice name of the payment manager
        string name;
    }

    bytes32 constant DIAMOND_STORAGE_POSITION = keccak256("com.cicleo.facets.paymentmanager");

    struct DiamondStorage {
        /// @notice Mapping to store the payment managers info
        mapping(uint256 => PaymentManagerData) paymentManagers;
        /// @notice Count of all payment manager ids
        uint256 paymentManagerCount;
    }

    function diamondStorage() internal pure returns (DiamondStorage storage ds) {
        bytes32 position = DIAMOND_STORAGE_POSITION;
        assembly {
            ds.slot := position
        }
    }

    function getPaymentManagerInfo(uint256 paymentManagerId) internal view returns (PaymentManagerData memory) {
        DiamondStorage storage ds = diamondStorage();
        return ds.paymentManagers[paymentManagerId];
    }  

     function getPaymentManagerToken(uint256 paymentManagerId) internal view returns (IERC20) {
        DiamondStorage storage ds = diamondStorage();
        return ds.paymentManagers[paymentManagerId].paymentToken;
    }  
}   
