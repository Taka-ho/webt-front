FROM alpine:latest

# 必要なパッケージのインストール
RUN apk update && apk add --no-cache nodejs npm

# Node.jsのインストール
RUN apk add --no-cache nodejs npm

# Reactの環境構築
RUN npm install -g create-react-app
RUN npm install -g express-generator

# アプリケーションのディレクトリを作成
RUN mkdir /app
WORKDIR /app

# ソースコードをコピー
COPY webt-front /app
COPY webt-backend /app

# アプリケーションの依存関係をインストール
RUN npm install

# ポートの公開
EXPOSE 3000
EXPOSE 3030
# サーバーの起動
CMD ["npm", "start"]
