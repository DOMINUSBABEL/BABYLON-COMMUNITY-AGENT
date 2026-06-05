FROM node:20-alpine
# Install Chromium dependencies for headless puppeteer operation
RUN apk add --no-cache       chromium       nss       freetype       harfbuzz       ca-certificates       ttf-freefont
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 4003
CMD ["node", "server.js"]