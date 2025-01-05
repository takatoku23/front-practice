FROM node:lts

# pnpmのインストール
RUN npm install -g pnpm

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係のインストール
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# ソースコードをコピー
COPY . .

# デフォルトコマンド
CMD ["pnpm", "start"]
