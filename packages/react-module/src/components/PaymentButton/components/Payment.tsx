import LoadingState from "../../LoadingState";
import { formatNumber } from "@context/contract";
import { BigNumber, utils } from "ethers";
import React, { FC, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useContractWrite } from "wagmi";
import { ERC20__factory } from "@context/Types";

type ApprovalSelector = {
    isInfinity: boolean;
    setIsInfinity: (isInfinity: boolean) => void;
    textLabel: string;
    setApprovalAmount: (approvalAmount: number) => void;
    approvalAmount: number;
};

const ApprovalSelector: FC<ApprovalSelector> = ({
    isInfinity,
    setIsInfinity,
    textLabel,
    approvalAmount,
    setApprovalAmount,
}) => {
    const toggleInfinity = (e: any) => {
        setIsInfinity(e.target.checked);
    };

    const handleOnChangeValue = (e: any) => {
        setApprovalAmount(e.target.value);
    };

    return (
        <div className="cap-flex cap-space-x-5">
            <div className="cap-flex-grow">
                <div className="cap-form-control">
                    <label className="cap-label">
                        <span className="cap-label-text">Approval</span>
                    </label>
                    <label className="cap-input-group">
                        <input
                            type="number"
                            id="approveAmount"
                            placeholder="50"
                            name="approveAmount"
                            required={!isInfinity}
                            min={0}
                            disabled={isInfinity}
                            value={approvalAmount}
                            className="cap-input cap-input-bordered"
                            onChange={handleOnChangeValue}
                        />
                        <span className="cap-max-w-[30rem]">{textLabel}</span>
                    </label>
                </div>
            </div>

            <div className="cap-h-20 cap-w- cap-border-r cap-border-[#E5E7EB]" />

            <div className="cap-flex-grow cap-flex cap-items-center cap-justify-center">
                <div className="cap-flex cap-items-center cap-mb-4 ">
                    <input
                        id="infinity-checkbox"
                        type="checkbox"
                        name="infinity-checkbox"
                        onChange={toggleInfinity}
                        checked={isInfinity}
                        className="cap-checkbox"
                    />
                    <label htmlFor="infinity-checkbox" className="cap-label">
                        <span className="cap-label-text">
                            Unlimited approval
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

type Step = {
    onClick: () => void;
    isLoading: boolean;
    errorMessage: string;
    swapData: any;
    setIsInfinity?: (isInfinity: boolean) => void;
    isInfinity?: boolean;
    approvalAmount?: number;
    setApprovalAmount?: (approvalAmount: number) => void;
};

const formatPrice = (price: any, decimals: number, symbol: string) => {
    if (price == 0) {
        return "Free";
    }

    return `${Number(utils.formatUnits(price, decimals)).toFixed(2)} ${symbol}`;
};

const Step1: FC<Step> = ({
    onClick,
    isLoading,
    errorMessage,
    swapData,
    setIsInfinity,
    isInfinity,
    approvalAmount,
    setApprovalAmount,
}) => {
    return (
        <div className="cap-text-left cap-space-y-10">
            <div className="cap-px-8">
                <h3 className="cap-font-medium">
                    Approve {swapData.inToken.symbol}
                </h3>
                <p className="cap-text-sm">
                    Approve Cicleo to withdraw $
                    {swapData.inToken.symbol} from your wallet
                </p>

                <div className="cap-alert cap-alert-info cap-shadow-lg cap-mt-2">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="cap-stroke-current cap-flex-shrink-0 cap-w-6 cap-h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>
                            We advise you to use recommanded parameters. For
                            Metamask users click on "use default" button on the
                            approval window
                        </span>
                    </div>
                </div>

                <span className="cap-font-normal cap-text-red-400">
                    {errorMessage}
                </span>

                <div className="cap-mt-4">
                    {/* // @ts-ignore */}
                    <ApprovalSelector
                        textLabel={swapData.inToken.symbol}
                        isInfinity={isInfinity || false}
                        setIsInfinity={setIsInfinity || (() => {})}
                        setApprovalAmount={setApprovalAmount || (() => {})}
                        approvalAmount={approvalAmount || 0}
                    />
                </div>
            </div>

            <div className="cap-modal-action">
                <button
                    data-tooltip-target="step1"
                    data-tooltip-trigger="cap-hover"
                    className="cap-space-x-3 cap-btn cap-btn-primary"
                    onClick={onClick}
                >
                    <span>Approve</span>
                    {isLoading && <ClipLoader color={"#fff"} size={20} />}
                </button>
            </div>
        </div>
    );
};

const Step2: FC<Step> = ({
    onClick,
    isLoading,
    errorMessage,
    swapData,
}) => {
    return (
        <div className="cap-text-left cap-space-y-10">
            <div className="cap-px-8">
                <h3 className="cap-font-medium cap-text-xl">
                    Payment part
                </h3>
                <span className="cap-font-normal cap-text-red-400">
                    {errorMessage}
                </span>
            </div>

            <div className="cap-modal-action">
                <button
                    className="cap-space-x-3 cap-btn cap-btn-primary"
                    onClick={onClick}
                >
                    <span>
                        Pay for {utils.formatUnits(swapData.inAmount, swapData.inToken.decimals)}{" "}
                        {swapData.inToken.symbol}
                    </span>
                    {isLoading && (
                        <ClipLoader color={"#fff"} size={20} />
                    )}
                </button>
            </div>
        </div>
    );
};

interface FunctionStep {
    1: (isInfinityToken: boolean, tokenApproval: number, swapData: any)=> Promise<void>;
    2: () => Promise<void>;
}

type Approval = {
    isInfinity: boolean;
    setIsInfinity: (isInfinity: boolean) => void;
    amount: number;
    setAmount: (amount: number) => void;
}   

type Payment = {
    isLoaded: boolean;
    step: number;
    swapData: any;
    setStep: (step: number) => void;
    stepFunction: FunctionStep;
    errorMessage: string;
    loadingStep: number;
    tokenApproval: Approval;
};



const Payment: FC<Payment> = ({
    isLoaded,
    step,
    swapData,
    setStep,
    stepFunction,
    errorMessage,
    loadingStep,
    tokenApproval
}) => {

    if (isLoaded == false)
        return (
            <LoadingState text="Finding the best way to swap your tokens..." />
        );
    
    if (swapData == undefined)
        return (
            <LoadingState text="Still finding the best path to swap your tokens..." />
        );
    
    
    return (
        <div className="cap-space-y-4 cap-px-4 cap-mt-4">
            <div className="cap-shadow-lg cap-alert cap-alert-info">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="cap-flex-shrink-0 cap-w-6 cap-h-6 cap-stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>
                        To process your payment, we will require you to sign the
                        following 2 transactions:
                    </span>
                </div>
            </div>
            <div className="cap-pb-5 cap-flex cap-justify-center cap-flex-col">
                <ul className="cap-steps cap-steps-vertical lg:cap-steps-horizontal">
                    <li
                        className={`cap-step ${
                            step >= 1 && "cap-step-primary"
                        }`}
                    >
                        Approve {swapData.inToken.symbol}
                    </li>
                    <li
                        className={`cap-step ${
                            step == 2 && "cap-step-primary"
                        }`}
                    >
                        Pay
                    </li>
                </ul>

                <div className="cap-mt-8 ">
                    {step == 1 && (
                        <Step1
                            onClick={() => stepFunction[step](tokenApproval.isInfinity, tokenApproval.amount, swapData)}
                            isLoading={loadingStep == step}
                            errorMessage={errorMessage}
                            swapData={swapData}
                            isInfinity={tokenApproval.isInfinity}
                            setIsInfinity={tokenApproval.setIsInfinity}
                            approvalAmount={tokenApproval.amount}
                            setApprovalAmount={tokenApproval.setAmount}
                        />
                    )}

                    {step == 2 && (
                        <Step2
                            onClick={() => stepFunction[step]()}
                            isLoading={loadingStep == step}
                            errorMessage={errorMessage}
                            swapData={swapData}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Payment;
