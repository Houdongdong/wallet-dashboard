# Wallet Dashboard 钱包仪表盘

A modern wallet dashboard built with React, TypeScript, and Vite.  
一个现代化的钱包资产仪表盘，基于 React、TypeScript 和 Vite 构建。

---

## ✨ Features 功能特性
- Display wallet balances and total USD value
- Multi-currency support with real-time exchange rates
- Modular and extensible code structure
- TypeScript type safety
- 快速展示钱包余额与总资产美元价值
- 多币种支持，实时汇率
- 模块化、易扩展
- TypeScript 类型安全

---

## 🚀 Quick Start 快速开始

```bash
# 1. 安装依赖 Install dependencies
npm install

# 2. 启动开发服务器 Start dev server
npm run dev

# 3. 构建生产环境 Build for production
npm run build

# 4. 预览生产环境 Preview production
npm run preview
```

---

## 📁 Project Structure 目录结构

```
wallet-dashboard/
├── public/                # 静态资源 Static assets
├── src/
│   ├── assets/            # 图片等资源 Images & assets
│   ├── components/        # 主要组件 Main components
│   │   └── WalletDashboard.tsx  # 钱包仪表盘主组件
│   ├── data/              # 模拟数据 Mock data
│   ├── services/          # 数据处理与服务层 Services
│   ├── types/             # TypeScript 类型 Type definitions
│   ├── App.tsx            # 应用入口主组件 App entry
│   └── main.tsx           # 应用入口 Main entry
├── package.json           # 项目依赖 Project dependencies
├── vite.config.ts         # Vite 配置 Vite config
└── README.md              # 项目说明文档 This file
```

---

## 🛠️ Common Commands 常用命令
- `npm run dev` 启动开发环境
- `npm run build` 构建生产包
- `npm run preview` 预览生产包
- `npm run lint` 代码检查

---

## 🧩 ESLint 配置建议

如需生产级代码质量保障，建议启用类型感知的 ESLint 规则：

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // 或者更严格的规则 stricter rules
    // ...tseslint.configs.strictTypeChecked,
    // 可选：风格化规则 stylistic rules
    // ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

更多 React 相关规则可参考 [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) 和 [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)。

---

## 🤝 Contributing 贡献
欢迎提 issue 或 PR，一起让项目更好！

---

## 📄 License
MIT
