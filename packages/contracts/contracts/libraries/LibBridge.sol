// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IDiamondCut } from "../interfaces/IDiamondCut.sol";
import { IERC20 } from "./../interfaces/IERC20.sol";
import { IRouter } from "../interfaces/IOpenOcean.sol";
import {LibDiamond} from "../libraries/LibDiamond.sol";

library LibBridge {
    bytes32 constant DIAMOND_STORAGE_POSITION = keccak256("com.cicleo.facets.paymentmanager");

    struct DiamondStorage {
        /// @notice Mapping to store the nonce of each tx per user
        mapping(address => uint256) userNonce;
    }

    function diamondStorage() internal pure returns (DiamondStorage storage ds) {
        bytes32 position = DIAMOND_STORAGE_POSITION;
        assembly {
            ds.slot := position
        }
    }

    
}   
