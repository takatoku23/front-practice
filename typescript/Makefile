# Docker Compose コマンド
DC = docker compose

# サービス名
TYPESCRIPT = typescript
REACT = react
TODO_APP = todo-app

# コンテナ名のプレフィックス
DOCKER_CONTAINER_PREFIX = front-practice-

# コンテナ名
TYPESCRIPT_CONTAINER = $(DOCKER_CONTAINER_PREFIX)$(TYPESCRIPT)-1
REACT_CONTAINER = $(DOCKER_CONTAINER_PREFIX)$(REACT)-1
TODO_APP_CONTAINER = $(DOCKER_CONTAINER_PREFIX)$(TODO_APP)-1

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

build-todo:
	$(DC) build $(TODO_APP)

# 特定のサービスに入る
sh-typescript:
	docker exec -it $(TYPESCRIPT_CONTAINER) sh

sh-react:
	docker exec -it $(REACT_CONTAINER) sh

sh-todo:
	docker exec -it $(TODO_APP_CONTAINER) sh

# 依存関係のインストール
install-typescript:
	$(DC) run --rm $(TYPESCRIPT) pnpm install

install-react:
	$(DC) run --rm $(REACT) pnpm install

install-todo:
	$(DC) run --rm $(TODO_APP) pnpm install

install-all:
	$(MAKE) install-typescript
	$(MAKE) install-react
	$(MAKE) install-todo

# ログの確認
logs:
	$(DC) logs

logs-typescript:
	$(DC) logs $(TYPESCRIPT)

logs-react:
	$(DC) logs $(REACT)

logs-todo:
	$(DC) logs $(TODO_APP)

# 再起動
restart:
	$(MAKE) down
	$(MAKE) up

# 特定サービスの再起動
restart-typescript:
	$(DC) stop $(TYPESCRIPT)
	$(DC) up -d $(TYPESCRIPT)

restart-react:
	$(DC) stop $(REACT)
	$(DC) up -d $(REACT)

restart-todo:
	$(DC) stop $(TODO_APP)
	$(DC) up -d $(TODO_APP)

# 不要なコンテナの削除
prune:
	docker container prune -f
