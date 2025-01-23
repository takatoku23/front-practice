# Front Practice プロジェクト

このプロジェクトは、TypeScript、React、Viteを使用したサンプルアプリケーションです。Docker Composeを使用して複数のサービスを管理しています。

---

## 環境構築手順

---

### 1. リポジトリのクローン

```bash
git clone {}
cd front-practice
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

### 5. サービスの再起動

以下のコマンドで全てのサービスをバックグラウンドで起動します。

```bash
make restart
```

**特定のサービスを起動する場合**:

```bash
docker compose up typescript
docker compose up react
docker compose up todo-app
```

---

### 5. サービスへの接続

特定のサービスのコンテナに接続するには、以下を使用します。

- **TypeScript サービス**:

  ```bash
  make typescript
  ```

- **React サービス**:

  ```bash
  make react
  ```

- **Todo アプリ サービス**:

  ```bash
  make todo
  ```

---

### 6. ログの確認

全サービスのログを確認するには、以下を使用します。

```bash
make logs
```

特定のサービスのログを確認する場合:

```bash
make logs-typescript
make logs-react
make logs-todo
```

---