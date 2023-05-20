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
  PayableOverrides,
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
  subscriptionManagerId: PromiseOrValue<BigNumberish>;
  subscriptionId: PromiseOrValue<BigNumberish>;
  priceInSubToken: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
};

export type PaymentParametersStructOutput = [
  BigNumber,
  BigNumber,
  number,
  BigNumber,
  string
] & {
  chainId: BigNumber;
  subscriptionManagerId: BigNumber;
  subscriptionId: number;
  priceInSubToken: BigNumber;
  token: string;
};

export type StargateDataStruct = {
  dstPoolId: PromiseOrValue<BigNumberish>;
  minAmountLD: PromiseOrValue<BigNumberish>;
  dstGasForCall: PromiseOrValue<BigNumberish>;
  lzFee: PromiseOrValue<BigNumberish>;
  refundAddress: PromiseOrValue<string>;
  callTo: PromiseOrValue<BytesLike>;
  callData: PromiseOrValue<BytesLike>;
};

export type StargateDataStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string,
  string
] & {
  dstPoolId: BigNumber;
  minAmountLD: BigNumber;
  dstGasForCall: BigNumber;
  lzFee: BigNumber;
  refundAddress: string;
  callTo: string;
  callData: string;
};

export declare namespace ILiFi {
  export type BridgeDataStruct = {
    transactionId: PromiseOrValue<BytesLike>;
    bridge: PromiseOrValue<string>;
    integrator: PromiseOrValue<string>;
    referrer: PromiseOrValue<string>;
    sendingAssetId: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    minAmount: PromiseOrValue<BigNumberish>;
    destinationChainId: PromiseOrValue<BigNumberish>;
    hasSourceSwaps: PromiseOrValue<boolean>;
    hasDestinationCall: PromiseOrValue<boolean>;
  };

  export type BridgeDataStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    boolean,
    boolean
  ] & {
    transactionId: string;
    bridge: string;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receiver: string;
    minAmount: BigNumber;
    destinationChainId: BigNumber;
    hasSourceSwaps: boolean;
    hasDestinationCall: boolean;
  };
}

export declare namespace LibSwap {
  export type SwapDataStruct = {
    callTo: PromiseOrValue<string>;
    approveTo: PromiseOrValue<string>;
    sendingAssetId: PromiseOrValue<string>;
    receivingAssetId: PromiseOrValue<string>;
    fromAmount: PromiseOrValue<BigNumberish>;
    callData: PromiseOrValue<BytesLike>;
    requiresDeposit: PromiseOrValue<boolean>;
  };

  export type SwapDataStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    boolean
  ] & {
    callTo: string;
    approveTo: string;
    sendingAssetId: string;
    receivingAssetId: string;
    fromAmount: BigNumber;
    callData: string;
    requiresDeposit: boolean;
  };
}

export interface CicleoSubscriptionBridgeManagerInterface
  extends utils.Interface {
  functions: {
    "changeSubscriptionLimit(uint256,uint256,uint256)": FunctionFragment;
    "getChainID()": FunctionFragment;
    "lifi()": FunctionFragment;
    "payFunctionWithBridge((uint256,uint256,uint8,uint256,address),(bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint256,uint256,uint256,address,bytes,bytes),address,uint256,bytes)": FunctionFragment;
    "renewSubscriptionByBridge((uint256,uint256,uint8,uint256,address),address,(bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint256,uint256,uint256,address,bytes,bytes))": FunctionFragment;
    "users(uint256,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "changeSubscriptionLimit"
      | "getChainID"
      | "lifi"
      | "payFunctionWithBridge"
      | "renewSubscriptionByBridge"
      | "users"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeSubscriptionLimit",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lifi", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payFunctionWithBridge",
    values: [
      PaymentParametersStruct,
      ILiFi.BridgeDataStruct,
      LibSwap.SwapDataStruct[],
      StargateDataStruct,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renewSubscriptionByBridge",
    values: [
      PaymentParametersStruct,
      PromiseOrValue<string>,
      ILiFi.BridgeDataStruct,
      LibSwap.SwapDataStruct[],
      StargateDataStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "users",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeSubscriptionLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lifi", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payFunctionWithBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renewSubscriptionByBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;

  events: {
    "EditSubscriptionLimit(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EditSubscriptionLimit"): EventFragment;
}

export interface EditSubscriptionLimitEventObject {
  user: string;
  chainId: BigNumber;
  subscriptionManagerId: BigNumber;
  amountMaxPerPeriod: BigNumber;
}
export type EditSubscriptionLimitEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  EditSubscriptionLimitEventObject
>;

export type EditSubscriptionLimitEventFilter =
  TypedEventFilter<EditSubscriptionLimitEvent>;

export interface CicleoSubscriptionBridgeManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CicleoSubscriptionBridgeManagerInterface;

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
    changeSubscriptionLimit(
      chainId: PromiseOrValue<BigNumberish>,
      subscriptionManagerId: PromiseOrValue<BigNumberish>,
      amountMaxPerPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getChainID(overrides?: CallOverrides): Promise<[BigNumber]>;

    lifi(overrides?: CallOverrides): Promise<[string]>;

    payFunctionWithBridge(
      paymentParams: PaymentParametersStruct,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      referral: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renewSubscriptionByBridge(
      paymentParams: PaymentParametersStruct,
      user: PromiseOrValue<string>,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    users(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        nextPaymentTime: BigNumber;
        subscriptionDuration: BigNumber;
        subscriptionLimit: BigNumber;
      }
    >;
  };

  changeSubscriptionLimit(
    chainId: PromiseOrValue<BigNumberish>,
    subscriptionManagerId: PromiseOrValue<BigNumberish>,
    amountMaxPerPeriod: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getChainID(overrides?: CallOverrides): Promise<BigNumber>;

  lifi(overrides?: CallOverrides): Promise<string>;

  payFunctionWithBridge(
    paymentParams: PaymentParametersStruct,
    _bridgeData: ILiFi.BridgeDataStruct,
    _swapData: LibSwap.SwapDataStruct[],
    _stargateData: StargateDataStruct,
    referral: PromiseOrValue<string>,
    duration: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renewSubscriptionByBridge(
    paymentParams: PaymentParametersStruct,
    user: PromiseOrValue<string>,
    _bridgeData: ILiFi.BridgeDataStruct,
    _swapData: LibSwap.SwapDataStruct[],
    _stargateData: StargateDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  users(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      nextPaymentTime: BigNumber;
      subscriptionDuration: BigNumber;
      subscriptionLimit: BigNumber;
    }
  >;

  callStatic: {
    changeSubscriptionLimit(
      chainId: PromiseOrValue<BigNumberish>,
      subscriptionManagerId: PromiseOrValue<BigNumberish>,
      amountMaxPerPeriod: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getChainID(overrides?: CallOverrides): Promise<BigNumber>;

    lifi(overrides?: CallOverrides): Promise<string>;

    payFunctionWithBridge(
      paymentParams: PaymentParametersStruct,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      referral: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    renewSubscriptionByBridge(
      paymentParams: PaymentParametersStruct,
      user: PromiseOrValue<string>,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    users(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        nextPaymentTime: BigNumber;
        subscriptionDuration: BigNumber;
        subscriptionLimit: BigNumber;
      }
    >;
  };

  filters: {
    "EditSubscriptionLimit(address,uint256,uint256,uint256)"(
      user?: PromiseOrValue<string> | null,
      chainId?: PromiseOrValue<BigNumberish> | null,
      subscriptionManagerId?: PromiseOrValue<BigNumberish> | null,
      amountMaxPerPeriod?: null
    ): EditSubscriptionLimitEventFilter;
    EditSubscriptionLimit(
      user?: PromiseOrValue<string> | null,
      chainId?: PromiseOrValue<BigNumberish> | null,
      subscriptionManagerId?: PromiseOrValue<BigNumberish> | null,
      amountMaxPerPeriod?: null
    ): EditSubscriptionLimitEventFilter;
  };

  estimateGas: {
    changeSubscriptionLimit(
      chainId: PromiseOrValue<BigNumberish>,
      subscriptionManagerId: PromiseOrValue<BigNumberish>,
      amountMaxPerPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getChainID(overrides?: CallOverrides): Promise<BigNumber>;

    lifi(overrides?: CallOverrides): Promise<BigNumber>;

    payFunctionWithBridge(
      paymentParams: PaymentParametersStruct,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      referral: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renewSubscriptionByBridge(
      paymentParams: PaymentParametersStruct,
      user: PromiseOrValue<string>,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    users(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeSubscriptionLimit(
      chainId: PromiseOrValue<BigNumberish>,
      subscriptionManagerId: PromiseOrValue<BigNumberish>,
      amountMaxPerPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getChainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lifi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payFunctionWithBridge(
      paymentParams: PaymentParametersStruct,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      referral: PromiseOrValue<string>,
      duration: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renewSubscriptionByBridge(
      paymentParams: PaymentParametersStruct,
      user: PromiseOrValue<string>,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    users(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}