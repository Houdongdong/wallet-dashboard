/**
 * 货币基本信息接口
 */
export interface Currency {
  coin_id: string;        // 货币ID
  name: string;           // 货币名称
  symbol: string;         // 货币符号
  token_decimal: number;  // 货币小数位数
  colorful_image_url: string;  // 彩色图标URL
  gray_image_url: string;      // 灰色图标URL
}

/**
 * 货币列表响应接口
 */
export interface CurrencyResponse {
  currencies: Currency[];  // 货币列表
  total: number;          // 货币总数
  ok: boolean;            // 请求是否成功
}

/**
 * 钱包余额接口
 */
export interface WalletBalance {
  currency: string;  // 货币符号
  amount: number;    // 余额数量
}

/**
 * 钱包响应接口
 */
export interface WalletResponse {
  ok: boolean;           // 请求是否成功
  warning: string;       // 警告信息
  wallet: WalletBalance[];  // 钱包余额列表
}

/**
 * 汇率信息接口
 */
export interface ExchangeRate {
  amount: string;  // 金额
  rate: string;    // 汇率
}

/**
 * 汇率层级接口
 */
export interface ExchangeRateTier {
  from_currency: string;  // 源货币
  to_currency: string;    // 目标货币
  rates: ExchangeRate[];  // 汇率列表
  time_stamp: number;     // 时间戳
}

/**
 * 汇率响应接口
 */
export interface ExchangeRateResponse {
  ok: boolean;           // 请求是否成功
  warning: string;       // 警告信息
  tiers: ExchangeRateTier[];  // 汇率层级列表
}

/**
 * 带美元价值的钱包余额接口
 */
export interface WalletBalanceWithUSD extends WalletBalance {
  usdValue: number;      // 美元价值
  currencyInfo?: Currency;  // 货币详细信息
} 