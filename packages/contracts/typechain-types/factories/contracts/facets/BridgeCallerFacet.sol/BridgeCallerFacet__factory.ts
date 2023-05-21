/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BridgeCallerFacet,
  BridgeCallerFacetInterface,
} from "../../../../contracts/facets/BridgeCallerFacet.sol/BridgeCallerFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "paymentManagerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "PaymentBridged",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymentManagerId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address",
          },
        ],
        internalType: "struct PaymentParameters",
        name: "paymentParams",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "bridge",
            type: "string",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "hasSourceSwaps",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasDestinationCall",
            type: "bool",
          },
        ],
        internalType: "struct ILiFi.BridgeData",
        name: "_bridgeData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "approveTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fromAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "requiresDeposit",
            type: "bool",
          },
        ],
        internalType: "struct LibSwap.SwapData[]",
        name: "_swapData",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "dstPoolId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dstGasForCall",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lzFee",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "refundAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callTo",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct StargateData",
        name: "_stargateData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "inPrice",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "payWithCicleoWithBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611cfc806100206000396000f3fe60806040526004361061001e5760003560e01c80639dde78ec14610023575b600080fd5b61003d60048036038101906100389190610d95565b61003f565b005b610047610121565b8860000181815250506100a4883384848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508760c0015161012e565b8460c001819052506100bb8833898989898961014e565b87604001513373ffffffffffffffffffffffffffffffffffffffff1689602001517f34b0fdd9d953b6aa6d5c5b45ac1815e58cd0223ac531a961758360a9d4c3d26a8b6060015160405161010f919061162f565b60405180910390a45050505050505050565b6000804690508091505090565b60606101448261013f87878761053b565b6105c6565b9050949350505050565b6000876080015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161018d91906115b4565b60206040518083038186803b1580156101a557600080fd5b505afa1580156101b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101dd9190610eb8565b90506000731231deb6f5749ef6ce6943a275a1d3e7486f4eae9050886080015173ffffffffffffffffffffffffffffffffffffffff166323b872dd8930866040518463ffffffff1660e01b8152600401610239939291906115cf565b602060405180830381600087803b15801561025357600080fd5b505af1158015610267573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028b9190610d68565b5082828a6080015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102cb91906115b4565b60206040518083038186803b1580156102e357600080fd5b505afa1580156102f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031b9190610eb8565b61032591906119d4565b1015610366576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035d90611651565b60405180910390fd5b886080015173ffffffffffffffffffffffffffffffffffffffff1663095ea7b382856040518363ffffffff1660e01b81526004016103a5929190611606565b602060405180830381600087803b1580156103bf57600080fd5b505af11580156103d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f79190610d68565b508360600151341461043e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043590611671565b60405180910390fd5b60008686905011156104c1578073ffffffffffffffffffffffffffffffffffffffff1663d7556c1e34898989896040518663ffffffff1660e01b815260040161048a9493929190611691565b6000604051808303818588803b1580156104a357600080fd5b505af11580156104b7573d6000803e3d6000fd5b5050505050610530565b8073ffffffffffffffffffffffffffffffffffffffff16633b00e8073489876040518463ffffffff1660e01b81526004016104fd9291906116df565b6000604051808303818588803b15801561051657600080fd5b505af115801561052a573d6000803e3d6000fd5b50505050505b505050505050505050565b606060006309ac248e60e01b90508085858560405160240161055f93929190611716565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509150509392505050565b6060600080600080868060200190518101906105e29190610ee5565b93509350935093508583600185516105fa91906119d4565b8151811061060b5761060a611b44565b5b602002602001015160a0018190525083838383604051602001610631949392919061175b565b60405160208183030381529060405294505050505092915050565b600061065f61065a846117cc565b6117a7565b9050808382526020820190508285602086028201111561068257610681611bc0565b5b60005b858110156106d057815167ffffffffffffffff8111156106a8576106a7611bac565b5b8086016106b58982610c6e565b85526020850194506020840193505050600181019050610685565b5050509392505050565b60006106ed6106e8846117f8565b6117a7565b90508281526020810184848401111561070957610708611bc5565b5b610714848285611aa2565b509392505050565b600061072f61072a846117f8565b6117a7565b90508281526020810184848401111561074b5761074a611bc5565b5b610756848285611ab1565b509392505050565b600061077161076c84611829565b6117a7565b90508281526020810184848401111561078d5761078c611bc5565b5b610798848285611aa2565b509392505050565b6000813590506107af81611c3c565b92915050565b6000815190506107c481611c3c565b92915050565b6000813590506107d981611c53565b92915050565b6000815190506107ee81611c53565b92915050565b60008083601f84011261080a57610809611bac565b5b8235905067ffffffffffffffff81111561082757610826611ba7565b5b60208301915083602082028301111561084357610842611bc0565b5b9250929050565b600082601f83011261085f5761085e611bac565b5b815161086f84826020860161064c565b91505092915050565b60008135905061088781611c6a565b92915050565b60008151905061089c81611c6a565b92915050565b6000813590506108b181611c81565b92915050565b60008083601f8401126108cd576108cc611bac565b5b8235905067ffffffffffffffff8111156108ea576108e9611ba7565b5b60208301915083600182028301111561090657610905611bc0565b5b9250929050565b600082601f83011261092257610921611bac565b5b81356109328482602086016106da565b91505092915050565b600082601f8301126109505761094f611bac565b5b815161096084826020860161071c565b91505092915050565b60008135905061097881611c98565b92915050565b600082601f83011261099357610992611bac565b5b81356109a384826020860161075e565b91505092915050565b600061014082840312156109c3576109c2611bb1565b5b6109ce6101406117a7565b905060006109de848285016108a2565b600083015250602082013567ffffffffffffffff811115610a0257610a01611bbb565b5b610a0e8482850161097e565b602083015250604082013567ffffffffffffffff811115610a3257610a31611bbb565b5b610a3e8482850161097e565b6040830152506060610a52848285016107a0565b6060830152506080610a66848285016107a0565b60808301525060a0610a7a848285016107a0565b60a08301525060c0610a8e84828501610d3e565b60c08301525060e0610aa284828501610d3e565b60e083015250610100610ab784828501610878565b61010083015250610120610acd84828501610878565b6101208301525092915050565b600060a08284031215610af057610aef611bb1565b5b610afa60a06117a7565b90506000610b0a84828501610d3e565b6000830152506020610b1e84828501610d3e565b6020830152506040610b3284828501610d3e565b604083015250606082013567ffffffffffffffff811115610b5657610b55611bbb565b5b610b628482850161097e565b6060830152506080610b7684828501610969565b60808301525092915050565b600060e08284031215610b9857610b97611bb1565b5b610ba260e06117a7565b90506000610bb284828501610d3e565b6000830152506020610bc684828501610d3e565b6020830152506040610bda84828501610d3e565b6040830152506060610bee84828501610d3e565b6060830152506080610c02848285016107ca565b60808301525060a082013567ffffffffffffffff811115610c2657610c25611bbb565b5b610c328482850161090d565b60a08301525060c082013567ffffffffffffffff811115610c5657610c55611bbb565b5b610c628482850161090d565b60c08301525092915050565b600060e08284031215610c8457610c83611bb1565b5b610c8e60e06117a7565b90506000610c9e848285016107b5565b6000830152506020610cb2848285016107b5565b6020830152506040610cc6848285016107b5565b6040830152506060610cda848285016107b5565b6060830152506080610cee84828501610d53565b60808301525060a082015167ffffffffffffffff811115610d1257610d11611bbb565b5b610d1e8482850161093b565b60a08301525060c0610d328482850161088d565b60c08301525092915050565b600081359050610d4d81611caf565b92915050565b600081519050610d6281611caf565b92915050565b600060208284031215610d7e57610d7d611bd4565b5b6000610d8c8482850161088d565b91505092915050565b60008060008060008060008060c0898b031215610db557610db4611bd4565b5b600089013567ffffffffffffffff811115610dd357610dd2611bca565b5b610ddf8b828c01610ada565b985050602089013567ffffffffffffffff811115610e0057610dff611bca565b5b610e0c8b828c016109ac565b975050604089013567ffffffffffffffff811115610e2d57610e2c611bca565b5b610e398b828c016107f4565b9650965050606089013567ffffffffffffffff811115610e5c57610e5b611bca565b5b610e688b828c01610b82565b9450506080610e798b828c01610d3e565b93505060a089013567ffffffffffffffff811115610e9a57610e99611bca565b5b610ea68b828c016108b7565b92509250509295985092959890939650565b600060208284031215610ece57610ecd611bd4565b5b6000610edc84828501610d53565b91505092915050565b60008060008060808587031215610eff57610efe611bd4565b5b6000610f0d87828801610d53565b945050602085015167ffffffffffffffff811115610f2e57610f2d611bca565b5b610f3a8782880161084a565b9350506040610f4b878288016107df565b9250506060610f5c878288016107df565b91505092959194509250565b6000610f748383611424565b905092915050565b6000610f8883836114fa565b905092915050565b610f9981611a1a565b82525050565b610fa881611a08565b82525050565b610fb781611a08565b82525050565b6000610fc983856118af565b935083602084028501610fdb8461185a565b8060005b8781101561101f578484038952610ff68284611995565b6110008582610f68565b945061100b83611895565b925060208a01995050600181019050610fdf565b50829750879450505050509392505050565b600061103c82611874565b61104681856118af565b93508360208202850161105885611864565b8060005b8581101561109457848403895281516110758582610f7c565b9450611080836118a2565b925060208a0199505060018101905061105c565b50829750879550505050505092915050565b6110af81611a2c565b82525050565b6110be81611a38565b82525050565b60006110d083856118c0565b93506110dd838584611aa2565b6110e683611bd9565b840190509392505050565b60006110fc8261187f565b61110681856118c0565b9350611116818560208601611ab1565b61111f81611bd9565b840191505092915050565b60006111358261187f565b61113f81856118d1565b935061114f818560208601611ab1565b61115881611bd9565b840191505092915050565b61116c81611a7e565b82525050565b600061117d8261188a565b61118781856118e2565b9350611197818560208601611ab1565b6111a081611bd9565b840191505092915050565b60006111b68261188a565b6111c081856118f3565b93506111d0818560208601611ab1565b6111d981611bd9565b840191505092915050565b60006111f1600f836118f3565b91506111fc82611bea565b602082019050919050565b6000611214600f836118f3565b915061121f82611c13565b602082019050919050565b60006101408301600083015161124360008601826110b5565b506020830151848203602086015261125b8282611172565b915050604083015184820360408601526112758282611172565b915050606083015161128a6060860182610f9f565b50608083015161129d6080860182610f9f565b5060a08301516112b060a0860182610f9f565b5060c08301516112c360c0860182611596565b5060e08301516112d660e0860182611596565b506101008301516112eb6101008601826110a6565b506101208301516113006101208601826110a6565b508091505092915050565b600060a0830160008301516113236000860182611596565b5060208301516113366020860182611596565b5060408301516113496040860182611596565b50606083015184820360608601526113618282611172565b91505060808301516113766080860182611163565b508091505092915050565b600060e0830160008301516113996000860182611596565b5060208301516113ac6020860182611596565b5060408301516113bf6040860182611596565b5060608301516113d26060860182611596565b5060808301516113e56080860182610f90565b5060a083015184820360a08601526113fd82826110f1565b91505060c083015184820360c086015261141782826110f1565b9150508091505092915050565b600060e083016114376000840184611904565b6114446000860182610f9f565b506114526020840184611904565b61145f6020860182610f9f565b5061146d6040840184611904565b61147a6040860182610f9f565b506114886060840184611904565b6114956060860182610f9f565b506114a360808401846119bd565b6114b06080860182611596565b506114be60a0840184611932565b85830360a08701526114d18382846110c4565b925050506114e260c084018461191b565b6114ef60c08601826110a6565b508091505092915050565b600060e0830160008301516115126000860182610f9f565b5060208301516115256020860182610f9f565b5060408301516115386040860182610f9f565b50606083015161154b6060860182610f9f565b50608083015161155e6080860182611596565b5060a083015184820360a086015261157682826110f1565b91505060c083015161158b60c08601826110a6565b508091505092915050565b61159f81611a74565b82525050565b6115ae81611a74565b82525050565b60006020820190506115c96000830184610fae565b92915050565b60006060820190506115e46000830186610fae565b6115f16020830185610fae565b6115fe60408301846115a5565b949350505050565b600060408201905061161b6000830185610fae565b61162860208301846115a5565b9392505050565b6000602082019050818103600083015261164981846111ab565b905092915050565b6000602082019050818103600083015261166a816111e4565b9050919050565b6000602082019050818103600083015261168a81611207565b9050919050565b600060608201905081810360008301526116ab818761122a565b905081810360208301526116c0818587610fbd565b905081810360408301526116d48184611381565b905095945050505050565b600060408201905081810360008301526116f9818561122a565b9050818103602083015261170d8184611381565b90509392505050565b60006060820190508181036000830152611730818661130b565b905061173f6020830185610fae565b8181036040830152611751818461112a565b9050949350505050565b600060808201905061177060008301876115a5565b81810360208301526117828186611031565b90506117916040830185610fae565b61179e6060830184610fae565b95945050505050565b60006117b16117c2565b90506117bd8282611ae4565b919050565b6000604051905090565b600067ffffffffffffffff8211156117e7576117e6611b73565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561181357611812611b73565b5b61181c82611bd9565b9050602081019050919050565b600067ffffffffffffffff82111561184457611843611b73565b5b61184d82611bd9565b9050602081019050919050565b6000819050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061191360208401846107a0565b905092915050565b600061192a6020840184610878565b905092915050565b6000808335600160200384360303811261194f5761194e611bcf565b5b83810192508235915060208301925067ffffffffffffffff82111561197757611976611ba2565b5b60018202360384131561198d5761198c611bb6565b5b509250929050565b60008235600160e0038336030381126119b1576119b0611bcf565b5b82810191505092915050565b60006119cc6020840184610d3e565b905092915050565b60006119df82611a74565b91506119ea83611a74565b9250828210156119fd576119fc611b15565b5b828203905092915050565b6000611a1382611a54565b9050919050565b6000611a2582611a54565b9050919050565b60008115159050919050565b6000819050919050565b6000611a4d82611a08565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611a8982611a90565b9050919050565b6000611a9b82611a54565b9050919050565b82818337600083830152505050565b60005b83811015611acf578082015181840152602081019050611ab4565b83811115611ade576000848401525b50505050565b611aed82611bd9565b810181811067ffffffffffffffff82111715611b0c57611b0b611b73565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b7f4572726f72206d73672e76616c75650000000000000000000000000000000000600082015250565b611c4581611a08565b8114611c5057600080fd5b50565b611c5c81611a1a565b8114611c6757600080fd5b50565b611c7381611a2c565b8114611c7e57600080fd5b50565b611c8a81611a38565b8114611c9557600080fd5b50565b611ca181611a42565b8114611cac57600080fd5b50565b611cb881611a74565b8114611cc357600080fd5b5056fea264697066735822122080ba49fdc8ab0383fecbe7064c7916087de712134db50ca4fa8bc7c5ce41cc3664736f6c63430008060033";

type BridgeCallerFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeCallerFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeCallerFacet__factory extends ContractFactory {
  constructor(...args: BridgeCallerFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BridgeCallerFacet> {
    return super.deploy(overrides || {}) as Promise<BridgeCallerFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BridgeCallerFacet {
    return super.attach(address) as BridgeCallerFacet;
  }
  override connect(signer: Signer): BridgeCallerFacet__factory {
    return super.connect(signer) as BridgeCallerFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeCallerFacetInterface {
    return new utils.Interface(_abi) as BridgeCallerFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeCallerFacet {
    return new Contract(address, _abi, signerOrProvider) as BridgeCallerFacet;
  }
}
