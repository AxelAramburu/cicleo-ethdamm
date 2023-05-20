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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export type SwapDescriptionStruct = {
  srcToken: PromiseOrValue<string>;
  dstToken: PromiseOrValue<string>;
  srcReceiver: PromiseOrValue<string>;
  dstReceiver: PromiseOrValue<string>;
  amount: PromiseOrValue<BigNumberish>;
  minReturnAmount: PromiseOrValue<BigNumberish>;
  guaranteedAmount: PromiseOrValue<BigNumberish>;
  flags: PromiseOrValue<BigNumberish>;
  referrer: PromiseOrValue<string>;
  permit: PromiseOrValue<BytesLike>;
};

export type SwapDescriptionStructOutput = [
  string,
  string,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  srcToken: string;
  dstToken: string;
  srcReceiver: string;
  dstReceiver: string;
  amount: BigNumber;
  minReturnAmount: BigNumber;
  guaranteedAmount: BigNumber;
  flags: BigNumber;
  referrer: string;
  permit: string;
};

export declare namespace IOpenOceanCaller {
  export type CallDescriptionStruct = {
    target: PromiseOrValue<BigNumberish>;
    gasLimit: PromiseOrValue<BigNumberish>;
    value: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<BytesLike>;
  };

  export type CallDescriptionStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    target: BigNumber;
    gasLimit: BigNumber;
    value: BigNumber;
    data: string;
  };
}

export interface IRouterInterface extends utils.Interface {
  functions: {
    "swap(address,(address,address,address,address,uint256,uint256,uint256,uint256,address,bytes),(uint256,uint256,uint256,bytes)[])": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "swap"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<string>,
      SwapDescriptionStruct,
      IOpenOceanCaller.CallDescriptionStruct[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export interface IRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRouterInterface;

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
    swap(
      caller: PromiseOrValue<string>,
      desc: SwapDescriptionStruct,
      calls: IOpenOceanCaller.CallDescriptionStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  swap(
    caller: PromiseOrValue<string>,
    desc: SwapDescriptionStruct,
    calls: IOpenOceanCaller.CallDescriptionStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    swap(
      caller: PromiseOrValue<string>,
      desc: SwapDescriptionStruct,
      calls: IOpenOceanCaller.CallDescriptionStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    swap(
      caller: PromiseOrValue<string>,
      desc: SwapDescriptionStruct,
      calls: IOpenOceanCaller.CallDescriptionStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swap(
      caller: PromiseOrValue<string>,
      desc: SwapDescriptionStruct,
      calls: IOpenOceanCaller.CallDescriptionStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
