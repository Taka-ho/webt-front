FROM alpine:latest

# 必要なパッケージのインストール
RUN apk update && apk add --no-cache nodejs npm

# Node.jsのインストール
RUN apk add --no-cache nodejs npm

# Reactの環境構築
RUN npm install -g create-react-app

# アプリケーションのディレクトリを作成
RUN mkdir /app
WORKDIR /app
# ソースコードをコピー
COPY monaco-test /app
# アプリケーションの依存関係をインストール

RUN npm install
# ビルド
RUN npm run build

# ポートの公開
EXPOSE 3000

# サーバーの起動
CMD ["npm", "start"]
