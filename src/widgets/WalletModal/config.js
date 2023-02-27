import metaMaskIcon from '../../assets/images/metamask-icon.svg';
import trueWalletIcon from '../../assets/images/truewallet-icon.svg';
import walletConnectIcon from '../../assets/images/walletconnect-icon.svg';

const connectorNames = {
  Injected: 'Injected',
  BSC: 'bsc',
  WalletConnect: 'WalletConnect',
}

export const connectors = [
  {
    title: 'MetaMask',
    desc: `Desktop Chrome or Mobile MetaMask Dapp browser`,
    icon: metaMaskIcon,
    connectorId: connectorNames.Injected,
  },
  {
    title: 'TrustWallet',
    desc: `TrustWallet Dapp browser only`,
    icon: trueWalletIcon,
    connectorId: connectorNames.Injected,
  },
  {
    title: 'WalletConnect',
    desc: `Mobile Chrome with MetaMask, TrustWallet, Coinomi, & more`,
    icon: walletConnectIcon,
    connectorId: connectorNames.WalletConnect,
  },
];

export const connectorLocalStorageKey = 'connectorId';
