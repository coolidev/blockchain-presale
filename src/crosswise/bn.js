import { BN } from 'web3-utils';

export const BIG_TEN = new BN(10);

export const getBalanceNumber = (balance, decimals) => {
  return getBalanceAmount(balance, decimals).toNumber();
};

export const getFullDisplayBalance = (
  balance,
  decimals,
  displayDecimals
) => {
  return (
    getBalanceNumber(balance, decimals - displayDecimals)
    / Math.pow(10, displayDecimals)
  ).toFixed(displayDecimals);
};

export const getBalanceAmount = (amount, decimals) => {
  return new BN(amount).div(BIG_TEN.pow(new BN(decimals)));
};
