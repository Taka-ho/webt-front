FROM alpine:latest

# 必要なパッケージのインストール
RUN apk update && apk add --no-cache nodejs npm

# Node.jsのインストール
RUN apk add --no-cache nodejs npm

# Reactの環境構築
RUN npm install -g create-react-app

# アプリケーションのディレクトリを作成
RUN mkdir /app

# ソースコードをコピー
COPY . /app
WORKDIR /app/front-core
# アプリケーションの依存関係をインストール
RUN npm install

# ポートの公開
EXPOSE 3000

# マウントポイントの設定
VOLUME /app/front-core

# サーバーの起動
CMD ["npm", "start"]
