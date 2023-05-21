/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AdminFacet,
  AdminFacetInterface,
} from "../../../contracts/facets/AdminFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getPaymentManagersByUser",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "treasuryAccount",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
        ],
        internalType: "struct AdminFacet.PaymentManagerData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridgeExecutor",
        type: "address",
      },
    ],
    name: "setBridgeExecutor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_security",
        type: "address",
      },
    ],
    name: "setSecurity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_taxAccount",
        type: "address",
      },
    ],
    name: "setTaxAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_taxPercentage",
        type: "uint16",
      },
    ],
    name: "setTaxPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611348806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063cba25e4b1161005b578063cba25e4b146100ec578063d0385b5e14610108578063e2fbd74514610124578063f2fde38b146101405761007d565b80634cb51a211461008257806352228054146100b25780638da5cb5b146100ce575b600080fd5b61009c60048036038101906100979190610bbf565b61015c565b6040516100a99190610eb4565b60405180910390f35b6100cc60048036038101906100c79190610bbf565b610459565b005b6100d66104b4565b6040516100e39190610e99565b60405180910390f35b61010660048036038101906101019190610bbf565b6104c3565b005b610122600480360381019061011d9190610bbf565b61051e565b005b61013e60048036038101906101399190610c7e565b610579565b005b61015a60048036038101906101559190610bbf565b6105f8565b005b6060600061016861060c565b905060008160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166332314000856040518263ffffffff1660e01b81526004016101c99190610e99565b60006040518083038186803b1580156101e157600080fd5b505afa1580156101f5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061021e9190610bec565b90506000815167ffffffffffffffff81111561023d5761023c6111e5565b5b60405190808252806020026020018201604052801561027657816020015b6102636109b2565b81526020019060019003908161025b5790505b50905060005b825181101561044d57600083828151811061029a576102996111b6565b5b6020026020010151905060006102af82610639565b90506040518060a00160405280826000015173ffffffffffffffffffffffffffffffffffffffff168152602001826020015173ffffffffffffffffffffffffffffffffffffffff16815260200182604001518152602001826020015173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561035057600080fd5b505afa158015610364573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061038d9190610c35565b8152602001826020015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156103dc57600080fd5b505afa1580156103f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104149190610cab565b60ff1681525084848151811061042d5761042c6111b6565b5b6020026020010181905250505080806104459061110f565b91505061027c565b50809350505050919050565b6104616107b3565b600061046b61060c565b9050818160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60006104be61084e565b905090565b6104cb6107b3565b60006104d561060c565b9050818160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6105266107b3565b600061053061060c565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6103e88161ffff16106105c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b890610ef6565b60405180910390fd5b6105c96107b3565b60006105d361060c565b9050818160010160146101000a81548161ffff021916908361ffff1602179055505050565b6106006107b3565b61060981610881565b50565b6000807fd8f6e013ff0cbc66ded25851d52c18673042e44ec585aeabfa2e9126bad1f74e90508091505090565b610641610a10565b600061064b610958565b90508060000160008481526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054610729906110ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610755906110ac565b80156107a25780601f10610777576101008083540402835291602001916107a2565b820191906000526020600020905b81548152906001019060200180831161078557829003601f168201915b505050505081525050915050919050565b6107bb610985565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461084c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084390610ed6565b60405180910390fd5b565b6000610858610985565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600061088b610985565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b6000807fd99b573b44155c1da097fb84c2f030c9f8daa830c708ef6625b3e30f7ba2234e90508091505090565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160608152602001600060ff1681525090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b6000610a70610a6b84610f3b565b610f16565b90508083825260208201905082856020860282011115610a9357610a92611219565b5b60005b85811015610ac35781610aa98882610b95565b845260208401935060208301925050600181019050610a96565b5050509392505050565b6000610ae0610adb84610f67565b610f16565b905082815260208101848484011115610afc57610afb61121e565b5b610b07848285611079565b509392505050565b600081359050610b1e816112b6565b92915050565b600082601f830112610b3957610b38611214565b5b8151610b49848260208601610a5d565b91505092915050565b600082601f830112610b6757610b66611214565b5b8151610b77848260208601610acd565b91505092915050565b600081359050610b8f816112cd565b92915050565b600081519050610ba4816112e4565b92915050565b600081519050610bb9816112fb565b92915050565b600060208284031215610bd557610bd4611228565b5b6000610be384828501610b0f565b91505092915050565b600060208284031215610c0257610c01611228565b5b600082015167ffffffffffffffff811115610c2057610c1f611223565b5b610c2c84828501610b24565b91505092915050565b600060208284031215610c4b57610c4a611228565b5b600082015167ffffffffffffffff811115610c6957610c68611223565b5b610c7584828501610b52565b91505092915050565b600060208284031215610c9457610c93611228565b5b6000610ca284828501610b80565b91505092915050565b600060208284031215610cc157610cc0611228565b5b6000610ccf84828501610baa565b91505092915050565b6000610ce48383610e0d565b905092915050565b610cf581610ffe565b82525050565b610d0481610ffe565b82525050565b6000610d1582610fa8565b610d1f8185610fcb565b935083602082028501610d3185610f98565b8060005b85811015610d6d5784840389528151610d4e8582610cd8565b9450610d5983610fbe565b925060208a01995050600181019050610d35565b50829750879550505050505092915050565b610d8881611055565b82525050565b6000610d9982610fb3565b610da38185610fdc565b9350610db3818560208601611079565b610dbc8161122d565b840191505092915050565b6000610dd4602283610fed565b9150610ddf8261123e565b604082019050919050565b6000610df7601783610fed565b9150610e028261128d565b602082019050919050565b600060a083016000830151610e256000860182610cec565b506020830151610e386020860182610d7f565b5060408301518482036040860152610e508282610d8e565b91505060608301518482036060860152610e6a8282610d8e565b9150506080830151610e7f6080860182610e8a565b508091505092915050565b610e9381611048565b82525050565b6000602082019050610eae6000830184610cfb565b92915050565b60006020820190508181036000830152610ece8184610d0a565b905092915050565b60006020820190508181036000830152610eef81610dc7565b9050919050565b60006020820190508181036000830152610f0f81610dea565b9050919050565b6000610f20610f31565b9050610f2c82826110de565b919050565b6000604051905090565b600067ffffffffffffffff821115610f5657610f556111e5565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610f8257610f816111e5565b5b610f8b8261122d565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006110098261101e565b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061106082611067565b9050919050565b60006110728261101e565b9050919050565b60005b8381101561109757808201518184015260208101905061107c565b838111156110a6576000848401525b50505050565b600060028204905060018216806110c457607f821691505b602082108114156110d8576110d7611187565b5b50919050565b6110e78261122d565b810181811067ffffffffffffffff82111715611106576111056111e5565b5b80604052505050565b600061111a8261103e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561114d5761114c611158565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f5461782070657263656e7461676520746f6f2068696768000000000000000000600082015250565b6112bf81610ffe565b81146112ca57600080fd5b50565b6112d681611010565b81146112e157600080fd5b50565b6112ed8161103e565b81146112f857600080fd5b50565b61130481611048565b811461130f57600080fd5b5056fea2646970667358221220ca71b4494fa7ae9f02991ddee4bef0518fe79d1bd0154e2364dfea79a1f1a0a464736f6c63430008060033";

type AdminFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdminFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AdminFacet__factory extends ContractFactory {
  constructor(...args: AdminFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AdminFacet> {
    return super.deploy(overrides || {}) as Promise<AdminFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AdminFacet {
    return super.attach(address) as AdminFacet;
  }
  override connect(signer: Signer): AdminFacet__factory {
    return super.connect(signer) as AdminFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdminFacetInterface {
    return new utils.Interface(_abi) as AdminFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdminFacet {
    return new Contract(address, _abi, signerOrProvider) as AdminFacet;
  }
}
