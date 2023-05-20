/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LibBridgeManager,
  LibBridgeManagerInterface,
} from "../../contracts/LibBridgeManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subManagerId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "subscriptionId",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "paymentChainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "referral",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "getSubscribeDestinationCalldata",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61031a61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80633354f2e81461003a575b600080fd5b61004d610048366004610103565b610063565b60405161005a9190610269565b60405180910390f35b604051606090633c5532f360e11b908190610090908b908b908e908c908c908c908c908c90602401610283565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915291505098975050505050505050565b80356001600160a01b03811681146100e857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080600080600080610100898b03121561012057600080fd5b610129896100d1565b975060208901359650604089013560ff8116811461014657600080fd5b95506060890135945061015b60808a016100d1565b935060a0890135925061017060c08a016100d1565b915060e089013567ffffffffffffffff8082111561018d57600080fd5b818b0191508b601f8301126101a157600080fd5b8135818111156101b3576101b36100ed565b604051601f8201601f19908116603f011681019083821181831017156101db576101db6100ed565b816040528281528e60208487010111156101f457600080fd5b8260208601602083013760006020848301015280955050505050509295985092959890939650565b6000815180845260005b8181101561024257602081850181015186830182015201610226565b81811115610254576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061027c602083018461021c565b9392505050565b88815260ff881660208201526001600160a01b03878116604083015260608201879052858116608083015260a08201859052831660c082015261010060e082018190526000906102d58382018561021c565b9b9a505050505050505050505056fea26469706673582212201b6a81607912d3ab769facbdae697b942e45929d139f9b56930be7cb3d36ecb864736f6c63430008090033";

type LibBridgeManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibBridgeManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibBridgeManager__factory extends ContractFactory {
  constructor(...args: LibBridgeManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibBridgeManager> {
    return super.deploy(overrides || {}) as Promise<LibBridgeManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibBridgeManager {
    return super.attach(address) as LibBridgeManager;
  }
  override connect(signer: Signer): LibBridgeManager__factory {
    return super.connect(signer) as LibBridgeManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibBridgeManagerInterface {
    return new utils.Interface(_abi) as LibBridgeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibBridgeManager {
    return new Contract(address, _abi, signerOrProvider) as LibBridgeManager;
  }
}