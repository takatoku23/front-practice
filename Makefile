# Docker Compose コマンド
DC = docker compose

# サービス名
TYPESCRIPT = typescript
REACT = react
TODO_APP = todo-app

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
build-react:
	$(DC) build $(REACT)

build-todo:
	$(DC) build $(TODO_APP)

build-typescript:
	$(DC) build $(TYPESCRIPT)

# React コンテナに入る
react:
	$(DC) exec $(REACT) sh

# Todo App コンテナに入る
todo:
	$(DC) exec $(TODO_APP) sh

# TypeScript コンテナに入る
typescript:
	$(DC) exec $(TYPESCRIPT) sh

# React の ESLint 実行
lint-react:
	$(DC) exec $(REACT) pnpm lint

# Todo App のフォーマット実行
format-todo:
	$(DC) exec $(TODO_APP) pnpm format

# TypeScript の型チェック実行
type-check:
	$(DC) exec $(TYPESCRIPT) pnpm type-check

# 全サービスのログ表示
logs:
	$(DC) logs

# React サービスのログ表示
logs-react:
	$(DC) logs $(REACT)

# Todo App サービスのログ表示
logs-todo:
	$(DC) logs $(TODO_APP)

# TypeScript サービスのログ表示
logs-typescript:
	$(DC) logs $(TYPESCRIPT)
