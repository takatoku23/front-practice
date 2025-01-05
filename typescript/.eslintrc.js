module.exports = {
  parser: '@typescript-eslint/parser', // TypeScript用のパーサ
  parserOptions: {
    ecmaVersion: 'latest', // 最新のECMAScript仕様を利用
    sourceType: 'module', // モジュールとして扱う
  },
  env: {
    browser: true, // ブラウザ環境向け
    node: true, // Node.js環境向け
  },
  extends: [
    'eslint:recommended', // ESLintの推奨ルール
    'plugin:@typescript-eslint/recommended', // TypeScriptの推奨ルール
    'plugin:import/recommended', // import順序ルール
    'prettier', // Prettierと統合
  ],
  plugins: [
    '@typescript-eslint', // TypeScript用プラグイン
    'import', // import関連ルール
  ],
  rules: {
    // TypeScript関連
    '@typescript-eslint/no-unused-vars': ['error'], // 未使用変数をエラー
    '@typescript-eslint/no-explicit-any': 'warn', // 明示的な`any`を警告
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 境界型の明示は不要
    '@typescript-eslint/no-inferrable-types': 'off', // 推論可能な型は許可

    // コード品質関連
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'no-console': 'warn', // console.logの使用を警告
    'prettier/prettier': 'error', // Prettier違反をエラーに
  },
};
