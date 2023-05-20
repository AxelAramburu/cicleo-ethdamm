import React, { FC } from "react";
import Image from "next/image";
import {ConnectButton} from "@rainbow-me/rainbowkit";

type Layout = {
    children: React.ReactNode,
}

const Layout:FC<Layout> = ({ children }) => {
    return (
        <div className="text-white bg-base-300 min-h-[100vh]">
            <div className="navbar bg-base-100 px-5">
                <div className="flex-1">
                    <Image
                        src="/images/logo_with_text_white.png"
                        alt="Cicleo logo"
                        width={1004 / 5}
                        height={341 / 5}
                    />
                </div>
                <div className="flex-none">
                    <ConnectButton/>
                </div>
            </div>

            <div className="px-4 xl:px-20 h-full pt-8">
                {children}
            </div>
        </div>
    )
}

export default Layout;