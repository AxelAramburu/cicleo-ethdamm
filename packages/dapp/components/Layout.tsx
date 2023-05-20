import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {ConnectButton} from "@rainbow-me/rainbowkit";

type Layout = {
    children: React.ReactNode,
}

const Layout:FC<Layout> = ({ children }) => {
    return (
        <div className="text-white bg-base-300 min-h-[100vh]">
            <div className="px-5 navbar bg-base-100">
                <div className="flex-1">
                    <Link href="/">
                        <Image
                            src="/images/logo_with_text_white.png"
                            alt="Cicleo logo"
                            width={1004 / 5}
                            height={341 / 5}
                        />
                    </Link>
                    
                </div>
                <div className="flex-none">
                    <ConnectButton/>
                </div>
            </div>

            <div className="h-full px-4 pt-8 xl:px-20">
                {children}
            </div>
        </div>
    )
}

export default Layout;