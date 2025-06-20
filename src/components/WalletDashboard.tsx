import { useState, useEffect } from 'react';
import type { WalletBalanceWithUSD } from '../types/wallet';
import { getWalletData, getExchangeRates, getCurrencies, calculateWalletBalances } from '../services/walletService';
import './WalletDashboard.css';

/**
 * 钱包仪表盘组件
 * 显示用户的钱包余额、货币信息和总资产价值
 */
export const WalletDashboard = () => {
  // 状态管理
  const [balances, setBalances] = useState<WalletBalanceWithUSD[]>([]);  // 钱包余额列表
  const [loading, setLoading] = useState(true);  // 加载状态
  const [error, setError] = useState<string | null>(null);  // 错误信息

  // 数据获取和计算
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 并行获取所有需要的数据
        const [walletData, exchangeRates, currencies] = await Promise.all([
          getWalletData(),
          getExchangeRates(),
          getCurrencies()
        ]);
        
        // 计算带美元价值的余额
        const calculatedBalances = calculateWalletBalances(walletData, exchangeRates, currencies);
        setBalances(calculatedBalances);
        setError(null);
      } catch (err) {
        setError('Failed to fetch wallet data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 加载状态显示
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // 错误状态显示
  if (error) {
    return <div className="error">{error}</div>;
  }

  // 计算总资产价值
  const totalUsdValue = balances.reduce((sum, balance) => sum + balance.usdValue, 0);

  // 渲染钱包仪表盘
  return (
    <div className="wallet-dashboard">
      <h1>Wallet Dashboard</h1>
      
      {/* 总资产价值显示 */}
      <div className="total-balance">
        <h2>Total Balance: ${totalUsdValue.toFixed(2)} USD</h2>
      </div>

      {/* 货币余额卡片网格 */}
      <div className="balances-grid">
        {balances.map((balance) => (
          <div key={balance.currency} className="balance-card">
            {/* 货币信息头部 */}
            {balance.currencyInfo && (
              <div className="currency-header">
                <img 
                  src={balance.currencyInfo.colorful_image_url} 
                  alt={balance.currencyInfo.name}
                  className="currency-icon"
                />
                <h3>{balance.currencyInfo.name}</h3>
              </div>
            )}
            {/* 余额显示 */}
            <p className="amount">
              {balance.amount.toFixed(balance.currencyInfo?.token_decimal || 8)} {balance.currency}
            </p>
            {/* 美元价值显示 */}
            <p className="usd-value">${balance.usdValue.toFixed(2)} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 