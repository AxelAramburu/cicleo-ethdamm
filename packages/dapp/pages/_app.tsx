import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { fantom, fantomTestnet, polygon } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import {
    getDefaultWallets,
    RainbowKitProvider,
    Theme,
    darkTheme,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import merge from "lodash.merge";

const myTheme = merge(darkTheme(), {
    colors: {
        accentColor: "#0061FF",
        connectButtonBackground: "#0061FF",
    },
} as Theme);
  
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [fantomTestnet, polygon],
  [publicProvider()],
)
  
const { connectors } = getDefaultWallets({
    appName: 'Cicleo Payment',
    projectId: 'YOUR_PROJECT_ID',
    chains
});

const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
})
  

export default function App({ Component, pageProps }: AppProps) {
    return (<WagmiConfig config={config}>

      <RainbowKitProvider chains={chains} theme={myTheme}>
            <Component {...pageProps} />
        </RainbowKitProvider>
    </WagmiConfig>)
}
