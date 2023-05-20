/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CicleoSubscriptionBridgeManager,
  CicleoSubscriptionBridgeManagerInterface,
} from "../../../contracts/SubscriptionBridgeManager.sol/CicleoSubscriptionBridgeManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lifi",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "subscriptionManagerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountMaxPerPeriod",
        type: "uint256",
      },
    ],
    name: "EditSubscriptionLimit",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "subscriptionManagerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountMaxPerPeriod",
        type: "uint256",
      },
    ],
    name: "changeSubscriptionLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lifi",
    outputs: [
      {
        internalType: "contract ILiFiDiamond",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
            name: "subscriptionManagerId",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "subscriptionId",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "priceInSubToken",
            type: "uint256",
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
        internalType: "address",
        name: "referral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "payFunctionWithBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
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
            name: "subscriptionManagerId",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "subscriptionId",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "priceInSubToken",
            type: "uint256",
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
        internalType: "address",
        name: "user",
        type: "address",
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
    ],
    name: "renewSubscriptionByBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "nextPaymentTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "subscriptionDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "subscriptionLimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161173238038061173283398101604081905261002f91610054565b600180546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61169f806100936000396000f3fe6080604052600436106100555760003560e01c806332b323a61461005a57806335c82bd0146100c657806346d1cc22146100db578063564b81ef146101135780638b753a2f1461012e578063a42125091461014e575b600080fd5b34801561006657600080fd5b506100a6610075366004610987565b6000602081815293815260408082208552928152828120909352825290208054600182015460029092015490919083565b604080519384526020840192909252908201526060015b60405180910390f35b6100d96100d4366004610d86565b610161565b005b3480156100e757600080fd5b506001546100fb906001600160a01b031681565b6040516001600160a01b0390911681526020016100bd565b34801561011f57600080fd5b506040514681526020016100bd565b34801561013a57600080fd5b506100d9610149366004610e70565b610264565b6100d961015c366004610e9c565b6102c6565b60608901518951600090815260208181526040808320828e01518452825280832033845290915290206002015410156101d35760405162461bcd60e51b815260206004820152600f60248201526e082dadeeadce840e8dede40d0d2ced608b1b60448201526064015b60405180910390fd5b61021a8933468786868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060c08b01516103cd565b60c08601528851600090815260208181526040808320828d015184528252808320338085529252909120600101849055610259908a908a8a8a8a610403565b505050505050505050565b60008381526020818152604080832085845282528083203380855290835292819020600201849055518381528492869290917fc50df9abeda1236c3cc22ec2e8bd50ee79eda415f485fa7e7978c9239971b51c910160405180910390a4505050565b60608601518651600090815260208181526040808320828b0151845282528083206001600160a01b038a168452909152902060020154101561033c5760405162461bcd60e51b815260206004820152600f60248201526e082dadeeadce840e8dede40d0d2ced608b1b60448201526064016101ca565b8551600090815260208181526040808320828a0151845282528083206001600160a01b038916845290915290205442116103a35760405162461bcd60e51b8152602060048201526008602482015267546f6f206c61746560c01b60448201526064016101ca565b6103b286868360c00151610805565b60c08201526103c5868686868686610403565b505050505050565b60606103f8826103f3888a602001518b604001518a8d608001518e606001518c8c61086c565b6108da565b979650505050505050565b60808601516040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561044957600080fd5b505afa15801561045d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104819190610f4e565b608088015160c08701516040516323b872dd60e01b81526001600160a01b038a81166004830152306024830152604482019290925292935016906323b872dd90606401602060405180830381600087803b1580156104de57600080fd5b505af11580156104f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105169190610f72565b508651600090815260208181526040808320828b0151845282528083206001600160a01b038a1684529091529020600101546105529042610fac565b8751600090815260208181526040808320828c0151845282528083206001600160a01b038b811685529252918290209290925560c087015160808a015191516370a0823160e01b81523060048201529092849216906370a082319060240160206040518083038186803b1580156105c857600080fd5b505afa1580156105dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106009190610f4e565b61060a9190610fc4565b101561064a5760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b60448201526064016101ca565b608087015160015460c087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915291169063095ea7b390604401602060405180830381600087803b1580156106a257600080fd5b505af11580156106b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106da9190610f72565b50816060015134146107205760405162461bcd60e51b815260206004820152600f60248201526e4572726f72206d73672e76616c756560881b60448201526064016101ca565b821561079557600154604051636baab60f60e11b81526001600160a01b039091169063d7556c1e90349061075e9089908990899089906004016111e4565b6000604051808303818588803b15801561077757600080fd5b505af115801561078b573d6000803e3d6000fd5b50505050506107fc565b600154604051633b00e80760e01b81526001600160a01b0390911690633b00e8079034906107c99089908790600401611315565b6000604051808303818588803b1580156107e257600080fd5b505af11580156107f6573d6000803e3d6000fd5b50505050505b50505050505050565b6060610864826103f38587602001516040805160248101929092526001600160a01b03929092166044808301919091528251808303909101815260649091019091526020810180516001600160e01b031663bc0dee8360e01b17905290565b949350505050565b604051606090633c5532f360e11b908190610899908b908b908e908c908c908c908c908c9060240161133a565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915291505098975050505050505050565b6060600080600080868060200190518101906108f691906113dc565b935093509350935085836001855161090e9190610fc4565b8151811061091e5761091e611561565b602002602001015160a00181905250838383836040516020016109449493929190611577565b60405160208183030381529060405294505050505092915050565b6001600160a01b038116811461097457600080fd5b50565b80356109828161095f565b919050565b60008060006060848603121561099c57600080fd5b833592506020840135915060408401356109b58161095f565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b03811182821017156109f9576109f96109c0565b60405290565b60405160e081016001600160401b03811182821017156109f9576109f96109c0565b604051601f8201601f191681016001600160401b0381118282101715610a4957610a496109c0565b604052919050565b600060a08284031215610a6357600080fd5b60405160a081018181106001600160401b0382111715610a8557610a856109c0565b80604052508091508235815260208301356020820152604083013560ff81168114610aaf57600080fd5b6040820152606083810135908201526080830135610acc8161095f565b6080919091015292915050565b60006001600160401b03821115610af257610af26109c0565b50601f01601f191660200190565b600082601f830112610b1157600080fd5b8135610b24610b1f82610ad9565b610a21565b818152846020838601011115610b3957600080fd5b816020850160208301376000918101602001919091529392505050565b801515811461097457600080fd5b803561098281610b56565b60006101408284031215610b8257600080fd5b610b8a6109d6565b90508135815260208201356001600160401b0380821115610baa57600080fd5b610bb685838601610b00565b60208401526040840135915080821115610bcf57600080fd5b50610bdc84828501610b00565b604083015250610bee60608301610977565b6060820152610bff60808301610977565b6080820152610c1060a08301610977565b60a082015260c082013560c082015260e082013560e0820152610100610c37818401610b64565b90820152610120610c49838201610b64565b9082015292915050565b60008083601f840112610c6557600080fd5b5081356001600160401b03811115610c7c57600080fd5b6020830191508360208260051b8501011115610c9757600080fd5b9250929050565b600060e08284031215610cb057600080fd5b610cb86109ff565b905081358152602082013560208201526040820135604082015260608201356060820152610ce860808301610977565b608082015260a08201356001600160401b0380821115610d0757600080fd5b610d1385838601610b00565b60a084015260c0840135915080821115610d2c57600080fd5b50610d3984828501610b00565b60c08301525092915050565b60008083601f840112610d5757600080fd5b5081356001600160401b03811115610d6e57600080fd5b602083019150836020828501011115610c9757600080fd5b60008060008060008060008060006101608a8c031215610da557600080fd5b610daf8b8b610a51565b985060a08a01356001600160401b0380821115610dcb57600080fd5b610dd78d838e01610b6f565b995060c08c0135915080821115610ded57600080fd5b610df98d838e01610c53565b909950975060e08c0135915080821115610e1257600080fd5b610e1e8d838e01610c9e565b9650610e2d6101008d01610977565b95506101208c013594506101408c0135915080821115610e4c57600080fd5b50610e598c828d01610d45565b915080935050809150509295985092959850929598565b600080600060608486031215610e8557600080fd5b505081359360208301359350604090920135919050565b6000806000806000806101208789031215610eb657600080fd5b610ec08888610a51565b955060a0870135610ed08161095f565b945060c08701356001600160401b0380821115610eec57600080fd5b610ef88a838b01610b6f565b955060e0890135915080821115610f0e57600080fd5b610f1a8a838b01610c53565b9095509350610100890135915080821115610f3457600080fd5b50610f4189828a01610c9e565b9150509295509295509295565b600060208284031215610f6057600080fd5b5051919050565b805161098281610b56565b600060208284031215610f8457600080fd5b8151610f8f81610b56565b9392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610fbf57610fbf610f96565b500190565b600082821015610fd657610fd6610f96565b500390565b60005b83811015610ff6578181015183820152602001610fde565b83811115611005576000848401525b50505050565b60008151808452611023816020860160208601610fdb565b601f01601f19169290920160200192915050565b60006101408251845260208301518160208601526110578286018261100b565b91505060408301518482036040860152611071828261100b565b915050606083015161108e60608601826001600160a01b03169052565b5060808301516110a960808601826001600160a01b03169052565b5060a08301516110c460a08601826001600160a01b03169052565b5060c083015160c085015260e083015160e0850152610100808401516110ed8287018215159052565b50506101209283015115159390920192909252919050565b6000808335601e1984360301811261111c57600080fd5b83016020810192503590506001600160401b0381111561113b57600080fd5b803603831315610c9757600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8051825260208101516020830152604081015160408301526060810151606083015260018060a01b036080820151166080830152600060a082015160e060a08501526111c260e085018261100b565b905060c083015184820360c08601526111db828261100b565b95945050505050565b600060608083526111f781840188611037565b602084820381860152818783528183019050818860051b840101896000805b8b8110156112f157868403601f190185528235368e900360de1901811261123b578283fd5b8d0160e0813561124a8161095f565b6001600160a01b03908116875282890135906112658261095f565b16868901526040611277838201610977565b6001600160a01b03169087015261128f828b01610977565b6001600160a01b03168a8701526080828101359087015260a06112b481840184611105565b83838a01526112c6848a01828461114a565b935050505060c06112d8818401610b64565b1515960195909552509385019391850191600101611216565b50505086810360408801526113068189611173565b9b9a5050505050505050505050565b6040815260006113286040830185611037565b82810360208401526111db8185611173565b88815260ff881660208201526001600160a01b03878116604083015260608201879052858116608083015260a08201859052831660c082015261010060e082018190526000906113068382018561100b565b80516109828161095f565b600082601f8301126113a857600080fd5b81516113b6610b1f82610ad9565b8181528460208386010111156113cb57600080fd5b610864826020830160208701610fdb565b600080600080608085870312156113f257600080fd5b8451935060208501516001600160401b038082111561141057600080fd5b818701915087601f83011261142457600080fd5b815181811115611436576114366109c0565b61144560208260051b01610a21565b8082825260208201915060208360051b86010192508a83111561146757600080fd5b602085015b838110156115335780518581111561148357600080fd5b860160e0818e03601f1901121561149957600080fd5b6114a16109ff565b6114ad6020830161138c565b81526114bb6040830161138c565b60208201526114cc6060830161138c565b60408201526114dd6080830161138c565b606082015260a0820151608082015260c0820151878111156114fe57600080fd5b61150d8f602083860101611397565b60a08301525061151f60e08301610f67565b60c08201528452506020928301920161146c565b5080975050505050506115486040860161138c565b91506115566060860161138c565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b8381101561163757898303609f19018552815180516001600160a01b039081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e08986018190529061160b8287018261100b565b91505060c08083015192506116238187018415159052565b5095870195935050908501906001016115a5565b50506001600160a01b038a1660408901529550611655945050505050565b6001600160a01b03831660608301526111db56fea2646970667358221220497014c9ca496084462c5daeb07c7cb75790abddece492d3d2bf6e4999a8b74364736f6c63430008090033";

type CicleoSubscriptionBridgeManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CicleoSubscriptionBridgeManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CicleoSubscriptionBridgeManager__factory extends ContractFactory {
  constructor(...args: CicleoSubscriptionBridgeManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _lifi: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CicleoSubscriptionBridgeManager> {
    return super.deploy(
      _lifi,
      overrides || {}
    ) as Promise<CicleoSubscriptionBridgeManager>;
  }
  override getDeployTransaction(
    _lifi: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_lifi, overrides || {});
  }
  override attach(address: string): CicleoSubscriptionBridgeManager {
    return super.attach(address) as CicleoSubscriptionBridgeManager;
  }
  override connect(signer: Signer): CicleoSubscriptionBridgeManager__factory {
    return super.connect(signer) as CicleoSubscriptionBridgeManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CicleoSubscriptionBridgeManagerInterface {
    return new utils.Interface(
      _abi
    ) as CicleoSubscriptionBridgeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CicleoSubscriptionBridgeManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CicleoSubscriptionBridgeManager;
  }
}