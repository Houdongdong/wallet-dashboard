import type { 
  WalletResponse, 
  ExchangeRateResponse, 
  WalletBalanceWithUSD,
  CurrencyResponse,
} from '../types/wallet';

// 导入模拟数据
import currenciesData from '../data/currencies.json';
import liveRatesData from '../data/live-rates.json';
import walletBalanceData from '../data/wallet-balance.json';

/**
 * 获取钱包数据
 * @returns Promise<WalletResponse> 钱包数据响应
 */
export const getWalletData = async (): Promise<WalletResponse> => {
  // 模拟API延迟
  await new Promise(resolve => setTimeout(resolve, 500));
  return walletBalanceData;
};

/**
 * 获取汇率数据
 * @returns Promise<ExchangeRateResponse> 汇率数据响应
 */
export const getExchangeRates = async (): Promise<ExchangeRateResponse> => {
  // 模拟API延迟
  await new Promise(resolve => setTimeout(resolve, 500));
  return liveRatesData;
};

/**
 * 获取货币信息
 * @returns Promise<CurrencyResponse> 货币信息响应
 */
export const getCurrencies = async (): Promise<CurrencyResponse> => {
  // 模拟API延迟
  await new Promise(resolve => setTimeout(resolve, 500));
  return currenciesData;
};

/**
 * 计算钱包余额的价值
 * @param walletData 钱包数据
 * @param exchangeRates 汇率数据
 * @param currencies 货币信息
 * @returns WalletBalanceWithUSD[] 带美元价值的钱包余额列表
 */
export const calculateWalletBalances = (
  walletData: WalletResponse,
  exchangeRates: ExchangeRateResponse,
  currencies: CurrencyResponse
): WalletBalanceWithUSD[] => {
  return walletData.wallet.map(balance => {
    // 查找对应货币的汇率
    const rateTier = exchangeRates.tiers.find(tier => tier.from_currency === balance.currency);
    const rate = rateTier?.rates[0]?.rate ? parseFloat(rateTier.rates[0].rate) : 0;
    
    // 查找对应货币的详细信息
    const currencyInfo = currencies.currencies.find(c => c.symbol === balance.currency);

    // 返回带美元价值的余额信息
    return {
      ...balance,
      usdValue: balance.amount * rate,
      currencyInfo
    };
  });
}; 