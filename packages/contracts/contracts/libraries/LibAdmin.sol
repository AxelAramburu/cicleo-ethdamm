// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IDiamondCut } from "../interfaces/IDiamondCut.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { IRouter } from "../interfaces/IOpenOcean.sol";
import {LibDiamond} from "../libraries/LibDiamond.sol";

library LibAdmin {
    bytes32 constant DIAMOND_STORAGE_POSITION = keccak256("com.cicleo.facets.admin");

    struct DiamondStorage {
        /// @notice Address of the tax account (for cicleo)
        address taxAccount;
        /// @notice Address of the LiFi executor
        address bridgeExecutor;
        /// @notice Percentage of tax to apply on each payment
        uint16 taxPercentage;
    }

    function diamondStorage() internal pure returns (DiamondStorage storage ds) {
        bytes32 position = DIAMOND_STORAGE_POSITION;
        assembly {
            ds.slot := position
        }
    }

    function getTaxAccount() internal view returns (address) {
        DiamondStorage storage ds = diamondStorage();
        return ds.taxAccount;
    }  

    function getBridgeExecutor() internal view returns (address) {
        DiamondStorage storage ds = diamondStorage();
        return ds.bridgeExecutor;
    } 

    function getTaxPercentage() internal view returns (uint16) {
        DiamondStorage storage ds = diamondStorage();
        return ds.taxPercentage;
    } 


}   
