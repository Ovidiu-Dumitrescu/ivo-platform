import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, bsc, polygon } from '@reown/appkit/networks'

// 1. Get projectId from https://cloud.reown.com
export const projectId = 'YOUR_PROJECT_ID' // Replace with your actual project ID

// 2. Create a metadata object - optional
const metadata = {
  name: 'IVO - Next Gen Crypto Token',
  description: 'IVO Token Presale & Staking Platform',
  url: 'https://ivo-token.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// 3. Set the networks
export const networks = [mainnet, arbitrum, bsc, polygon]

// 4. Create Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})
