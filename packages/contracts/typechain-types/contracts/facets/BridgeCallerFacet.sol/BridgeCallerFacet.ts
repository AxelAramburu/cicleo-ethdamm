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
} from "../../../common";

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

export interface BridgeCallerFacetInterface extends utils.Interface {
  functions: {
    "payWithCicleoWithBridge((uint256,uint256,uint256,string,address),(bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint256,uint256,uint256,address,bytes,bytes),bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "payWithCicleoWithBridge"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "payWithCicleoWithBridge",
    values: [
      PaymentParametersStruct,
      ILiFi.BridgeDataStruct,
      LibSwap.SwapDataStruct[],
      StargateDataStruct,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "payWithCicleoWithBridge",
    data: BytesLike
  ): Result;

  events: {
    "PaymentBridged(uint256,address,uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PaymentBridged"): EventFragment;
}

export interface PaymentBridgedEventObject {
  paymentManagerId: BigNumber;
  user: string;
  price: BigNumber;
  name: string;
}
export type PaymentBridgedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string],
  PaymentBridgedEventObject
>;

export type PaymentBridgedEventFilter = TypedEventFilter<PaymentBridgedEvent>;

export interface BridgeCallerFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeCallerFacetInterface;

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
    payWithCicleoWithBridge(
      paymentParams: PaymentParametersStruct,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  payWithCicleoWithBridge(
    paymentParams: PaymentParametersStruct,
    _bridgeData: ILiFi.BridgeDataStruct,
    _swapData: LibSwap.SwapDataStruct[],
    _stargateData: StargateDataStruct,
    signature: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    payWithCicleoWithBridge(
      paymentParams: PaymentParametersStruct,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PaymentBridged(uint256,address,uint256,string)"(
      paymentManagerId?: PromiseOrValue<BigNumberish> | null,
      user?: PromiseOrValue<string> | null,
      price?: PromiseOrValue<BigNumberish> | null,
      name?: null
    ): PaymentBridgedEventFilter;
    PaymentBridged(
      paymentManagerId?: PromiseOrValue<BigNumberish> | null,
      user?: PromiseOrValue<string> | null,
      price?: PromiseOrValue<BigNumberish> | null,
      name?: null
    ): PaymentBridgedEventFilter;
  };

  estimateGas: {
    payWithCicleoWithBridge(
      paymentParams: PaymentParametersStruct,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    payWithCicleoWithBridge(
      paymentParams: PaymentParametersStruct,
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _stargateData: StargateDataStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
