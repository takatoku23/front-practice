# Front Practice プロジェクト

このプロジェクトは、TypeScript、React、Viteを使用したサンプルアプリケーションです。Docker Composeを使用して複数のサービスを管理しています。

---

## 環境構築手順

---

### 1. リポジトリのクローン

```bash
git clone https://github.com/iacc/front-practice-typescript-react.git
cd front-practice-typescript-react
```

---

### 2. 全サービスのビルド

以下のコマンドで全てのサービスをビルドします。

```bash
make build
```

**キャッシュを無効化してビルドする場合**:

```bash
make build-no-cache
```

---

### 3. アプリケーション立ち上げ

```bash
make up
```

### 4. 依存関係のインストール

各サービスの依存関係をインストールします。

```bash
make install-all
```

---

### 5. reactの開発環境URL

以下のurlにアクセスし、reactの環境が立ち上がっているかを確認

`http://localhost:3002/`
