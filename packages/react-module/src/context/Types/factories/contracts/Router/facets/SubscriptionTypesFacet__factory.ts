/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SubscriptionTypesFacet,
  SubscriptionTypesFacetInterface,
} from "../../../../contracts/Router/facets/SubscriptionTypesFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "subscriptionManagerId",
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
        internalType: "uint8",
        name: "subscriptionId",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "SubscriptionEdited",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "subscriptionManagerId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "id",
        type: "uint8",
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
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "editSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getActiveSubscriptionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getSubscriptionManager",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "tokenSymbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "tokenDecimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "activeSubscriptionCount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "treasury",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "isActive",
                type: "bool",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
            ],
            internalType: "struct SubscriptionStruct[]",
            name: "subscriptions",
            type: "tuple[]",
          },
          {
            internalType: "address[]",
            name: "owners",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "subscriptionDuration",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "referralPercent",
            type: "uint16",
          },
        ],
        internalType: "struct SubscriptionManagerStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getSubscriptions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct SubscriptionStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getSubscriptionsManager",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "tokenSymbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "activeSubscriptionCount",
            type: "uint256",
          },
        ],
        internalType: "struct MinimifiedSubscriptionManagerStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "subscriptionManagerId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserSubscriptionStatus",
    outputs: [
      {
        internalType: "uint8",
        name: "subscriptionId",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "subscriptionManagerId",
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
    ],
    name: "newSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "subscriptions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct SubscriptionStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611b37806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a1e01cc41161005b578063a1e01cc414610113578063b3c8d27f14610133578063d8652b6c14610146578063d960c6891461016757600080fd5b80632230abd51461008d5780634f617711146100be57806358c43809146100d3578063963b701d146100f3575b600080fd5b6100a061009b36600461128c565b610187565b6040805160ff90931683529015156020830152015b60405180910390f35b6100d16100cc36600461139e565b61021d565b005b6100e66100e1366004611416565b610338565b6040516100b591906114ca565b6101066101013660046114dd565b61043a565b6040516100b591906114fa565b610126610121366004611596565b6106f5565b6040516100b59190611648565b6100d1610141366004611765565b610b7d565b610159610154366004611596565b610d0e565b6040519081526020016100b5565b61017a610175366004611596565b610d99565b6040516100b591906117b5565b600080600061019585610f7b565b6040516306ffd81f60e41b81526001600160a01b03868116600483015291925090821690636ffd81f090602401604080518083038186803b1580156101d957600080fd5b505afa1580156101ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021191906117c8565b90969095509350505050565b846102278161101e565b60ff85161580159061023d57508460ff1660ff14155b61027a5760405162461bcd60e51b8152602060048201526009602482015268165bdd4818d85b89dd60ba1b60448201526064015b60405180910390fd5b60408051606081018252858152831515602080830191825282840187815260008b8152600080516020611ae283398151915280845286822060ff8d168352845295902084518155925160018401805460ff19169115159190911790555180516102e992600285019201906111de565b505060408051878152851515602082015260ff8916925033918a917fc820829a9c9a64f568783b2fcd60b05bd9f5503e1f2fe4ecab85607342a1e038910160405180910390a450505050505050565b604080516060808201835260008083526020808401829052838501839052868252600080516020611ae283398151915280825285832060ff8881168552908352928690208651948501875280548552600181015490931615159184019190915260028201805494959194918401916103af906117f7565b80601f01602080910402602001604051908101604052809291908181526020018280546103db906117f7565b80156104285780601f106103fd57610100808354040283529160200191610428565b820191906000526020600020905b81548152906001019060200180831161040b57829003601f168201915b50505050508152505091505092915050565b60606000610446611091565b604051630a441df160e21b81526001600160a01b03858116600483015291925060009183169063291077c49060240160006040518083038186803b15801561048d57600080fd5b505afa1580156104a1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104c99190810190611856565b90506000815167ffffffffffffffff8111156104e7576104e76112cb565b60405190808252806020026020018201604052801561054357816020015b6105306040518060800160405280600081526020016060815260200160608152602001600081525090565b8152602001906001900390816105055790505b50905060005b82518110156106ec576000610576848381518110610569576105696118e7565b6020026020010151610f7b565b90506040518060800160405280858481518110610595576105956118e7565b60200260200101518152602001826001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156105db57600080fd5b505afa1580156105ef573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261061791908101906118fd565b8152602001826001600160a01b0316637b61c3206040518163ffffffff1660e01b815260040160006040518083038186803b15801561065557600080fd5b505afa158015610669573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261069191908101906118fd565b81526020016106b88685815181106106ab576106ab6118e7565b6020026020010151610d0e565b8152508383815181106106cd576106cd6118e7565b60200260200101819052505080806106e49061198a565b915050610549565b50949350505050565b6107786040518061018001604052806000815260200160006001600160a01b031681526020016060815260200160006001600160a01b0316815260200160608152602001600081526020016000815260200160006001600160a01b03168152602001606081526020016060815260200160008152602001600061ffff1681525090565b6000610782611091565b9050600061078f84610f7b565b9050604051806101800160405280858152602001826001600160a01b03168152602001826001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156107eb57600080fd5b505afa1580156107ff573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261082791908101906118fd565b8152602001826001600160a01b0316639d76ea586040518163ffffffff1660e01b815260040160206040518083038186803b15801561086557600080fd5b505afa158015610879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089d91906119a5565b6001600160a01b03168152602001826001600160a01b0316637b61c3206040518163ffffffff1660e01b815260040160006040518083038186803b1580156108e457600080fd5b505afa1580156108f8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261092091908101906118fd565b8152602001826001600160a01b0316633b97e8566040518163ffffffff1660e01b815260040160206040518083038186803b15801561095e57600080fd5b505afa158015610972573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099691906119c2565b60ff1681526020016109a786610d0e565b8152602001826001600160a01b03166361d027b36040518163ffffffff1660e01b815260040160206040518083038186803b1580156109e557600080fd5b505afa1580156109f9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1d91906119a5565b6001600160a01b03168152602001610a3486610d99565b8152602001836001600160a01b031663cbf69478876040518263ffffffff1660e01b8152600401610a6791815260200190565b60006040518083038186803b158015610a7f57600080fd5b505afa158015610a93573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610abb91908101906119df565b8152602001826001600160a01b0316637a94a6336040518163ffffffff1660e01b815260040160206040518083038186803b158015610af957600080fd5b505afa158015610b0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b319190611a6e565b8152602001610b6f8660009081527fb614cc20afefd276f60a08638fc53c1ea3092f7f93df945b3977c828850a40f3602052604090205461ffff1690565b61ffff169052949350505050565b82610b878161101e565b60008481527f9640cafb40b0879c549f0d3e684f5f0bfa30b9c382b1706036c49f78210d365b602052604081208054600080516020611ae28339815191529260019291610bd890849060ff16611a87565b82546101009290920a60ff81810219909316918316021790915560008781526001840160205260409020548116109050610c405760405162461bcd60e51b8152602060048201526009602482015268165bdd4818d85b89dd60ba1b6044820152606401610271565b604080516060810182528581526001602080830182815283850188815260008b815287845286812088860185528782205460ff168252845295909520845181559051928101805460ff1916931515939093179092559251805192939192610cad92600285019201906111de565b5050506000858152600182810160209081526040928390205483518881529182019290925260ff90911691339188917fc820829a9c9a64f568783b2fcd60b05bd9f5503e1f2fe4ecab85607342a1e038910160405180910390a45050505050565b6000600080516020611ae2833981519152815b600084815260018301602052604090205460ff16811015610d9257600084815260208390526040812090610d56836001611aac565b815260208101919091526040016000206001015460ff1615610d8057610d7d600184611aac565b92505b80610d8a8161198a565b915050610d21565b5050919050565b60008181527f9640cafb40b0879c549f0d3e684f5f0bfa30b9c382b1706036c49f78210d365b6020526040812054606091600080516020611ae28339815191529160ff1667ffffffffffffffff811115610df557610df56112cb565b604051908082528060200260200182016040528015610e4257816020015b60408051606080820183526000808352602083015291810191909152815260200190600190039081610e135790505b50905060005b600085815260018401602052604090205460ff16811015610f7357600085815260208490526040812090610e7d836001611aac565b81526020808201929092526040908101600020815160608101835281548152600182015460ff161515938101939093526002810180549192840191610ec1906117f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610eed906117f7565b8015610f3a5780601f10610f0f57610100808354040283529160200191610f3a565b820191906000526020600020905b815481529060010190602001808311610f1d57829003601f168201915b505050505081525050828281518110610f5557610f556118e7565b60200260200101819052508080610f6b9061198a565b915050610e48565b509392505050565b60007fd8f6e013ff0cbc66ded25851d52c18673042e44ec585aeabfa2e9126bad1f74e54604051633eb0cceb60e21b8152600481018490526001600160a01b039091169063fac333ac9060240160206040518083038186803b158015610fe057600080fd5b505afa158015610ff4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101891906119a5565b92915050565b6110283382611132565b61108e5760405162461bcd60e51b815260206004820152603160248201527f4c696241646d696e3a204d75737420686f6c64206f776e65727061737320666f60448201527039103a3434b99039bab136b0b730b3b2b960791b6064820152608401610271565b50565b7fd8f6e013ff0cbc66ded25851d52c18673042e44ec585aeabfa2e9126bad1f74e5460408051630a90f32360e31b815290516000926001600160a01b0316916354879918916004808301926020929190829003018186803b1580156110f557600080fd5b505afa158015611109573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112d91906119a5565b905090565b60007fd8f6e013ff0cbc66ded25851d52c18673042e44ec585aeabfa2e9126bad1f74e54604051630e2b5e3160e01b81526001600160a01b0385811660048301526024820185905290911690630e2b5e319060440160206040518083038186803b15801561119f57600080fd5b505afa1580156111b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d79190611ac4565b9392505050565b8280546111ea906117f7565b90600052602060002090601f01602090048101928261120c5760008555611252565b82601f1061122557805160ff1916838001178555611252565b82800160010185558215611252579182015b82811115611252578251825591602001919060010190611237565b5061125e929150611262565b5090565b5b8082111561125e5760008155600101611263565b6001600160a01b038116811461108e57600080fd5b6000806040838503121561129f57600080fd5b8235915060208301356112b181611277565b809150509250929050565b60ff8116811461108e57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561130a5761130a6112cb565b604052919050565b600067ffffffffffffffff82111561132c5761132c6112cb565b50601f01601f191660200190565b600082601f83011261134b57600080fd5b813561135e61135982611312565b6112e1565b81815284602083860101111561137357600080fd5b816020850160208301376000918101602001919091529392505050565b801515811461108e57600080fd5b600080600080600060a086880312156113b657600080fd5b8535945060208601356113c8816112bc565b935060408601359250606086013567ffffffffffffffff8111156113eb57600080fd5b6113f78882890161133a565b925050608086013561140881611390565b809150509295509295909350565b6000806040838503121561142957600080fd5b8235915060208301356112b1816112bc565b60005b8381101561145657818101518382015260200161143e565b83811115611465576000848401525b50505050565b6000815180845261148381602086016020860161143b565b601f01601f19169290920160200192915050565b8051825260208101511515602083015260006040820151606060408501526114c2606085018261146b565b949350505050565b6020815260006111d76020830184611497565b6000602082840312156114ef57600080fd5b81356111d781611277565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561158857603f19898403018552815160808151855288820151818a87015261154f8287018261146b565b9150508782015185820389870152611567828261146b565b60609384015196909301959095525094870194925090860190600101611521565b509098975050505050505050565b6000602082840312156115a857600080fd5b5035919050565b600081518084526020808501808196508360051b8101915082860160005b858110156115f75782840389526115e5848351611497565b988501989350908401906001016115cd565b5091979650505050505050565b600081518084526020808501945080840160005b8381101561163d5781516001600160a01b031687529582019590820190600101611618565b509495945050505050565b60208152815160208201526000602083015161166f60408401826001600160a01b03169052565b50604083015161018080606085015261168c6101a085018361146b565b915060608501516116a860808601826001600160a01b03169052565b506080850151601f19808685030160a08701526116c5848361146b565b935060a087015160c087015260c087015160e087015260e087015191506101006116f9818801846001600160a01b03169052565b8088015192505061012081878603018188015261171685846115af565b9450808801519250506101408187860301818801526117358584611604565b908801516101608881019190915288015161ffff811685890152909450915061175b9050565b5090949350505050565b60008060006060848603121561177a57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561179f57600080fd5b6117ab8682870161133a565b9150509250925092565b6020815260006111d760208301846115af565b600080604083850312156117db57600080fd5b82516117e6816112bc565b60208401519092506112b181611390565b600181811c9082168061180b57607f821691505b6020821081141561182c57634e487b7160e01b600052602260045260246000fd5b50919050565b600067ffffffffffffffff82111561184c5761184c6112cb565b5060051b60200190565b6000602080838503121561186957600080fd5b825167ffffffffffffffff81111561188057600080fd5b8301601f8101851361189157600080fd5b805161189f61135982611832565b81815260059190911b820183019083810190878311156118be57600080fd5b928401925b828410156118dc578351825292840192908401906118c3565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561190f57600080fd5b815167ffffffffffffffff81111561192657600080fd5b8201601f8101841361193757600080fd5b805161194561135982611312565b81815285602083850101111561195a57600080fd5b61196b82602083016020860161143b565b95945050505050565b634e487b7160e01b600052601160045260246000fd5b600060001982141561199e5761199e611974565b5060010190565b6000602082840312156119b757600080fd5b81516111d781611277565b6000602082840312156119d457600080fd5b81516111d7816112bc565b600060208083850312156119f257600080fd5b825167ffffffffffffffff811115611a0957600080fd5b8301601f81018513611a1a57600080fd5b8051611a2861135982611832565b81815260059190911b82018301908381019087831115611a4757600080fd5b928401925b828410156118dc578351611a5f81611277565b82529284019290840190611a4c565b600060208284031215611a8057600080fd5b5051919050565b600060ff821660ff84168060ff03821115611aa457611aa4611974565b019392505050565b60008219821115611abf57611abf611974565b500190565b600060208284031215611ad657600080fd5b81516111d78161139056fe9640cafb40b0879c549f0d3e684f5f0bfa30b9c382b1706036c49f78210d365aa2646970667358221220b4c3f6152ad86250316a4c3068659981c9d7c31a1932982371cd052863c0b1ac64736f6c63430008090033";

type SubscriptionTypesFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubscriptionTypesFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SubscriptionTypesFacet__factory extends ContractFactory {
  constructor(...args: SubscriptionTypesFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SubscriptionTypesFacet> {
    return super.deploy(overrides || {}) as Promise<SubscriptionTypesFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SubscriptionTypesFacet {
    return super.attach(address) as SubscriptionTypesFacet;
  }
  override connect(signer: Signer): SubscriptionTypesFacet__factory {
    return super.connect(signer) as SubscriptionTypesFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubscriptionTypesFacetInterface {
    return new utils.Interface(_abi) as SubscriptionTypesFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SubscriptionTypesFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SubscriptionTypesFacet;
  }
}
