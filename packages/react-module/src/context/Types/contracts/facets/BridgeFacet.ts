/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type PaymentParametersStruct = {
  chainId: PromiseOrValue<BigNumberish>;
  paymentManagerId: PromiseOrValue<BigNumberish>;
  price: PromiseOrValue<BigNumberish>;
  name: PromiseOrValue<string>;
  token: PromiseOrValue<string>;
};

export type PaymentParametersStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  chainId: BigNumber;
  paymentManagerId: BigNumber;
  price: BigNumber;
  name: string;
  token: string;
};

export interface BridgeFacetInterface extends utils.Interface {
  functions: {
    "bridgePayment((uint256,uint256,uint256,string,address),address,bytes)": FunctionFragment;
    "getChainID()": FunctionFragment;
    "getEthSignedMessageHash(bytes32)": FunctionFragment;
    "getMessage(uint256,address,uint256,string,uint256)": FunctionFragment;
    "getMessageHash(uint256,address,uint256,string,uint256)": FunctionFragment;
    "getUserNonce(address)": FunctionFragment;
    "splitSignature(bytes)": FunctionFragment;
    "verify(uint256,address,uint256,string,uint256,bytes)": FunctionFragment;
    "verifyString(string,uint8,bytes32,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bridgePayment"
      | "getChainID"
      | "getEthSignedMessageHash"
      | "getMessage"
      | "getMessageHash"
      | "getUserNonce"
      | "splitSignature"
      | "verify"
      | "verifyString"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bridgePayment",
    values: [
      PaymentParametersStruct,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEthSignedMessageHash",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMessage",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMessageHash",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserNonce",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "splitSignature",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyString",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "bridgePayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEthSignedMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMessage", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "splitSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyString",
    data: BytesLike
  ): Result;

  events: {
    "PaymentDoneWithCicleo(uint256,address,string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PaymentDoneWithCicleo"): EventFragment;
}

export interface PaymentDoneWithCicleoEventObject {
  paymentManagerId: BigNumber;
  user: string;
  nameOfPayment: string;
  price: BigNumber;
}
export type PaymentDoneWithCicleoEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  PaymentDoneWithCicleoEventObject
>;

export type PaymentDoneWithCicleoEventFilter =
  TypedEventFilter<PaymentDoneWithCicleoEvent>;

export interface BridgeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeFacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bridgePayment(
      paymentParams: PaymentParametersStruct,
      user: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getChainID(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEthSignedMessageHash(
      _messageHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMessage(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMessageHash(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getUserNonce(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    splitSignature(
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    verify(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyString(
      message: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { signer: string }>;
  };

  bridgePayment(
    paymentParams: PaymentParametersStruct,
    user: PromiseOrValue<string>,
    signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getChainID(overrides?: CallOverrides): Promise<BigNumber>;

  getEthSignedMessageHash(
    _messageHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getMessage(
    paymentManagerId: PromiseOrValue<BigNumberish>,
    user: PromiseOrValue<string>,
    price: PromiseOrValue<BigNumberish>,
    name: PromiseOrValue<string>,
    nonce: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getMessageHash(
    paymentManagerId: PromiseOrValue<BigNumberish>,
    user: PromiseOrValue<string>,
    price: PromiseOrValue<BigNumberish>,
    name: PromiseOrValue<string>,
    nonce: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getUserNonce(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  splitSignature(
    sig: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

  verify(
    paymentManagerId: PromiseOrValue<BigNumberish>,
    user: PromiseOrValue<string>,
    price: PromiseOrValue<BigNumberish>,
    name: PromiseOrValue<string>,
    nonce: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyString(
    message: PromiseOrValue<string>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    bridgePayment(
      paymentParams: PaymentParametersStruct,
      user: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getChainID(overrides?: CallOverrides): Promise<BigNumber>;

    getEthSignedMessageHash(
      _messageHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getMessage(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getMessageHash(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getUserNonce(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    splitSignature(
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    verify(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyString(
      message: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "PaymentDoneWithCicleo(uint256,address,string,uint256)"(
      paymentManagerId?: PromiseOrValue<BigNumberish> | null,
      user?: PromiseOrValue<string> | null,
      nameOfPayment?: PromiseOrValue<string> | null,
      price?: null
    ): PaymentDoneWithCicleoEventFilter;
    PaymentDoneWithCicleo(
      paymentManagerId?: PromiseOrValue<BigNumberish> | null,
      user?: PromiseOrValue<string> | null,
      nameOfPayment?: PromiseOrValue<string> | null,
      price?: null
    ): PaymentDoneWithCicleoEventFilter;
  };

  estimateGas: {
    bridgePayment(
      paymentParams: PaymentParametersStruct,
      user: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getChainID(overrides?: CallOverrides): Promise<BigNumber>;

    getEthSignedMessageHash(
      _messageHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMessage(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMessageHash(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserNonce(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    splitSignature(
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyString(
      message: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bridgePayment(
      paymentParams: PaymentParametersStruct,
      user: PromiseOrValue<string>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getChainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEthSignedMessageHash(
      _messageHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMessage(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMessageHash(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserNonce(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    splitSignature(
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verify(
      paymentManagerId: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyString(
      message: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
