// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { LibDiamond } from "../libraries/LibDiamond.sol";
import { IERC173 } from "../interfaces/IERC173.sol";
import { CicleoPaymentSecurity } from "./../Security.sol";

contract AdminFacet is IERC173 {
    bytes32 internal constant NAMESPACE =
        keccak256("com.cicleo.facets.admin");

    struct Storage {
        /// @notice Address of the tax account (for cicleo)
        address taxAccount;
        /// @notice Address of the LiFi executor
        address bridgeExecutor;
        /// @notice Percentage of tax to apply on each payment
        uint16 taxPercentage;
        /// @notice ERC721 Security Contract
        CicleoPaymentSecurity securityContract;
    }

    function transferOwnership(address _newOwner) external override {
        LibDiamond.enforceIsContractOwner();
        LibDiamond.setContractOwner(_newOwner);
    }

    function owner() external override view returns (address owner_) {
        owner_ = LibDiamond.contractOwner();
    }

    //----Admin payment manager function----------

    function setTaxAccount(address _taxAccount) external {
        LibDiamond.enforceIsContractOwner();
        Storage storage ds = getStorage();
        ds.taxAccount = _taxAccount;
    }

    function setBridgeExecutor(address _bridgeExecutor) external {
        LibDiamond.enforceIsContractOwner();
        Storage storage ds = getStorage();
        ds.bridgeExecutor = _bridgeExecutor;
    }

    //Out of 1000s
    function setTaxPercentage(uint16 _taxPercentage) external {
        require(_taxPercentage < 1000, "Tax percentage too high");
        LibDiamond.enforceIsContractOwner();
        Storage storage ds = getStorage();
        ds.taxPercentage = _taxPercentage;
    }

    function setSecurity(address _security) external {
        LibDiamond.enforceIsContractOwner();
        Storage storage ds = getStorage();
        ds.securityContract = CicleoPaymentSecurity(_security);
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
