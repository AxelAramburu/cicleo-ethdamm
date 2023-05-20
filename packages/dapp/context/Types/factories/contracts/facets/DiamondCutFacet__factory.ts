/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DiamondCutFacet,
  DiamondCutFacetInterface,
} from "../../../contracts/facets/DiamondCutFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initializationContractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "InitializationFunctionReverted",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612038806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004a600480360381019061004591906110ec565b61004c565b005b6100546102a4565b600061005e61033f565b905060008160020160009054906101000a900461ffff1661ffff16905060008190506000806007831611156100aa57836001016000600384901c81526020019081526020016000205490505b60005b898990508110156101b9576101a483838c8c858181106100d0576100cf611baf565b5b90506020028101906100e291906117d4565b60000160208101906100f491906110bf565b8d8d8681811061010757610106611baf565b5b905060200281019061011991906117d4565b602001602081019061012b9190611181565b8e8e8781811061013e5761013d611baf565b5b905060200281019061015091906117d4565b806040019061015f9190611771565b80806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061036c565b809350819450505080806001019150506100ad565b508282146101e157818460020160006101000a81548161ffff021916908361ffff1602179055505b600060078316111561020c5780846001016000600385901c8152602001908152602001600020819055505b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67389898989896040516102439594939291906115c6565b60405180910390a16102998787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610e5b565b505050505050505050565b6102ac61033f565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461033d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033490611631565b60405180910390fd5b565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b600080600061037961033f565b905060008451116103bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b690611651565b60405180910390fd5b600060028111156103d3576103d2611b80565b5b8560028111156103e6576103e5611b80565b5b14156106205761040e86604051806060016040528060248152602001611f8f60249139610f82565b60005b845181101561061a57600085828151811061042f5761042e611baf565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020549050600073ffffffffffffffffffffffffffffffffffffffff168160601c73ffffffffffffffffffffffffffffffffffffffff1614610503576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fa906116d1565b60405180910390fd5b8a60001b8960601b6bffffffffffffffffffffffff191617846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020819055506000600560078d16901b905080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c817fffffffff0000000000000000000000000000000000000000000000000000000060001b901c198c16179a5060e08114156105fc578a85600101600060038f901c8152602001908152602001600020819055506000801b9a505b8b8061060790611b08565b9c50508380600101945050505050610411565b50610e4a565b6001600281111561063457610633611b80565b5b85600281111561064757610646611b80565b5b14156108db5761066f86604051806060016040528060288152602001611fdb60289139610f82565b60005b84518110156108d55760008582815181106106905761068f611baf565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002054905060008160601c90503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076090611731565b60405180910390fd5b8973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cf906116f1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083f90611751565b60405180910390fd5b8960601b6bffffffffffffffffffffffff19166bffffffffffffffffffffffff60001b831617856000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020819055508380600101945050505050610672565b50610e49565b6002808111156108ee576108ed611b80565b5b85600281111561090157610900611b80565b5b1415610e0d57600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610976576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096d90611711565b60405180910390fd5b6000600389901c9050600060078a16905060005b8651811015610deb576000801b8a14156109cd5782806109a990611ade565b935050836001016000848152602001908152602001600020549950600791506109dc565b81806109d890611ade565b9250505b6000806000808a85815181106109f5576109f4611baf565b5b602002602001015190506000886000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020549050600073ffffffffffffffffffffffffffffffffffffffff168160601c73ffffffffffffffffffffffffffffffffffffffff161415610aca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac190611671565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168160601c73ffffffffffffffffffffffffffffffffffffffff161415610b3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b33906116b1565b60405180910390fd5b600587901b8f901b9450817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610c5957886000016000867bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020546bffffffffffffffffffffffff19166bffffffffffffffffffffffff60001b821617896000016000877bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020819055505b886000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000206000905560008160001c61ffff169050600381901c9450600560078216901b9350505050858214610d6157600087600101600084815260200190815260200160002054905081847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c827fffffffff0000000000000000000000000000000000000000000000000000000060001b901c198216179050808860010160008581526020019081526020016000208190555050610db2565b80837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c817fffffffff0000000000000000000000000000000000000000000000000000000060001b901c198e16179c505b6000851415610ddb57866001016000878152602001908152602001600020600090556000801b9c505b838060010194505050505061098a565b5080600883610dfa91906119b5565b610e04919061195f565b99505050610e48565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3f90611691565b60405180910390fd5b5b5b878792509250509550959350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e9557610f7e565b610eb782604051806060016040528060288152602001611fb360289139610f82565b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610edf919061157f565b600060405180830381855af49150503d8060008114610f1a576040519150601f19603f3d011682016040523d82523d6000602084013e610f1f565b606091505b509150915081610f7b57600081511115610f3c5780518082602001fd5b83836040517f192105d7000000000000000000000000000000000000000000000000000000008152600401610f72929190611596565b60405180910390fd5b50505b5050565b6000823b9050600081118290610fce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc5919061160f565b60405180910390fd5b50505050565b600081359050610fe381611f50565b92915050565b60008083601f840112610fff57610ffe611be8565b5b8235905067ffffffffffffffff81111561101c5761101b611be3565b5b60208301915083602082028301111561103857611037611bfc565b5b9250929050565b60008135905061104e81611f67565b92915050565b60008083601f84011261106a57611069611be8565b5b8235905067ffffffffffffffff81111561108757611086611be3565b5b6020830191508360018202830111156110a3576110a2611bfc565b5b9250929050565b6000813590506110b981611f7e565b92915050565b6000602082840312156110d5576110d4611c10565b5b60006110e384828501610fd4565b91505092915050565b60008060008060006060868803121561110857611107611c10565b5b600086013567ffffffffffffffff81111561112657611125611c06565b5b61113288828901610fe9565b9550955050602061114588828901610fd4565b935050604086013567ffffffffffffffff81111561116657611165611c06565b5b61117288828901611054565b92509250509295509295909350565b60006020828403121561119757611196611c10565b5b60006111a5848285016110aa565b91505092915050565b60006111ba83836112c9565b60208301905092915050565b60006111d28383611515565b905092915050565b6111e381611a0f565b82525050565b6111f281611a0f565b82525050565b60006112048385611840565b935061120f826117fc565b8060005b85811015611248576112258284611909565b61122f88826111ae565b975061123a83611826565b925050600181019050611213565b5085925050509392505050565b60006112618385611851565b93508360208402850161127384611806565b8060005b878110156112b757848403895261128e8284611937565b61129885826111c6565b94506112a383611833565b925060208a01995050600181019050611277565b50829750879450505050509392505050565b6112d281611a21565b82525050565b60006112e48385611862565b93506112f1838584611a9c565b6112fa83611c15565b840190509392505050565b600061131082611810565b61131a8185611862565b935061132a818560208601611aab565b61133381611c15565b840191505092915050565b600061134982611810565b6113538185611873565b9350611363818560208601611aab565b80840191505092915050565b61137881611a8a565b82525050565b60006113898261181b565b611393818561187e565b93506113a3818560208601611aab565b6113ac81611c15565b840191505092915050565b60006113c460228361187e565b91506113cf82611c26565b604082019050919050565b60006113e7602b8361187e565b91506113f282611c75565b604082019050919050565b600061140a60378361187e565b915061141582611cc4565b604082019050919050565b600061142d60278361187e565b915061143882611d13565b604082019050919050565b6000611450602e8361187e565b915061145b82611d62565b604082019050919050565b600061147360358361187e565b915061147e82611db1565b604082019050919050565b600061149660388361187e565b91506114a182611e00565b604082019050919050565b60006114b960368361187e565b91506114c482611e4f565b604082019050919050565b60006114dc602f8361187e565b91506114e782611e9e565b604082019050919050565b60006114ff60388361187e565b915061150a82611eed565b604082019050919050565b600060608301611528600084018461188f565b61153560008601826111da565b506115436020840184611920565b611550602086018261136f565b5061155e60408401846118a6565b85830360408701526115718382846111f8565b925050508091505092915050565b600061158b828461133e565b915081905092915050565b60006040820190506115ab60008301856111e9565b81810360208301526115bd8184611305565b90509392505050565b600060608201905081810360008301526115e1818789611255565b90506115f060208301866111e9565b81810360408301526116038184866112d8565b90509695505050505050565b60006020820190508181036000830152611629818461137e565b905092915050565b6000602082019050818103600083015261164a816113b7565b9050919050565b6000602082019050818103600083015261166a816113da565b9050919050565b6000602082019050818103600083015261168a816113fd565b9050919050565b600060208201905081810360008301526116aa81611420565b9050919050565b600060208201905081810360008301526116ca81611443565b9050919050565b600060208201905081810360008301526116ea81611466565b9050919050565b6000602082019050818103600083015261170a81611489565b9050919050565b6000602082019050818103600083015261172a816114ac565b9050919050565b6000602082019050818103600083015261174a816114cf565b9050919050565b6000602082019050818103600083015261176a816114f2565b9050919050565b6000808335600160200384360303811261178e5761178d611bf2565b5b80840192508235915067ffffffffffffffff8211156117b0576117af611bed565b5b6020830192506020820236038313156117cc576117cb611c01565b5b509250929050565b6000823560016060038336030381126117f0576117ef611bf2565b5b80830191505092915050565b6000819050919050565b6000819050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061189e6020840184610fd4565b905092915050565b600080833560016020038436030381126118c3576118c2611c0b565b5b83810192508235915060208301925067ffffffffffffffff8211156118eb576118ea611bde565b5b60208202360384131561190157611900611bf7565b5b509250929050565b6000611918602084018461103f565b905092915050565b600061192f60208401846110aa565b905092915050565b60008235600160600383360303811261195357611952611c0b565b5b82810191505092915050565b600061196a82611a80565b915061197583611a80565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119aa576119a9611b51565b5b828201905092915050565b60006119c082611a80565b91506119cb83611a80565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611a0457611a03611b51565b5b828202905092915050565b6000611a1a82611a60565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000819050611a5b82611f3c565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611a9582611a4d565b9050919050565b82818337600083830152505050565b60005b83811015611ac9578082015181840152602081019050611aae565b83811115611ad8576000848401525b50505050565b6000611ae982611a80565b91506000821415611afd57611afc611b51565b5b600182039050919050565b6000611b1382611a80565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611b4657611b45611b51565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b7f4c69624469616d6f6e644375743a2043616e2774207265706c61636520696d6d60008201527f757461626c652066756e6374696f6e0000000000000000000000000000000000602082015250565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e207468617420646f65736e27742065786973740000000000000000602082015250565b60038110611f4d57611f4c611b80565b5b50565b611f5981611a0f565b8114611f6457600080fd5b50565b611f7081611a21565b8114611f7b57600080fd5b50565b60038110611f8b57600080fd5b5056fe4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465a264697066735822122040d12c4c908d099a921f708db1b3b443134bcf3f92c9d25ee3c231b0c040007064736f6c63430008060033";

type DiamondCutFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondCutFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondCutFacet__factory extends ContractFactory {
  constructor(...args: DiamondCutFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondCutFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondCutFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondCutFacet {
    return super.attach(address) as DiamondCutFacet;
  }
  override connect(signer: Signer): DiamondCutFacet__factory {
    return super.connect(signer) as DiamondCutFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondCutFacetInterface {
    return new utils.Interface(_abi) as DiamondCutFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondCutFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondCutFacet;
  }
}