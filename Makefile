# Docker Compose コマンド
DC = docker compose

# サービス名
TYPESCRIPT = typescript
REACT = react

# コンテナ名のプレフィックス
DOCKER_CONTAINER_PREFIX = front-practice-

# コンテナ名
TYPESCRIPT_CONTAINER = $(DOCKER_CONTAINER_PREFIX)$(TYPESCRIPT)-1
REACT_CONTAINER = $(DOCKER_CONTAINER_PREFIX)$(REACT)-1

# 全サービスの起動
up:
	$(DC) up -d

# 全サービスの停止
down:
	$(DC) down

# 全サービスのビルド（キャッシュ利用）
build:
	$(DC) build

# 全サービスのビルド（キャッシュ無効化）
build-no-cache:
	$(DC) build --no-cache

# 特定のサービスをビルド
build-typescript:
	$(DC) build $(TYPESCRIPT)

build-react:
	$(DC) build $(REACT)

# 特定のサービスに入る
sh-typescript:
	docker exec -it $(TYPESCRIPT_CONTAINER) sh

sh-react:
	docker exec -it $(REACT_CONTAINER) sh

# 依存関係のインストール
install-typescript:
	$(DC) run --rm $(TYPESCRIPT) pnpm install

install-react:
	$(DC) run --rm $(REACT) pnpm install

install-all:
	$(MAKE) install-typescript
	$(MAKE) install-react

# reactサービス立ち上げ（コンテナ内でyarn start実行）
up-react:
	$(DC) run --rm $(REACT) pnpm start

# typescriptサービス立ち上げ（コンテナ内でyarn start実行）
up-typescript:
	$(DC) run --rm $(TYPESCRIPT) pnpm build

# 不要なコンテナの削除
prune:
	docker container prune -f
