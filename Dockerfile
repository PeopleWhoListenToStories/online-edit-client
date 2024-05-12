# FROM node:alpine AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install --frozen-lockfile --registry=https://registry.npm.taobao.org
# ​
# # Rebuild the source code only when needed
# FROM node:alpine AS builder
# WORKDIR /app
# COPY . .
# COPY --from=deps /app/node_modules ./node_modules
# RUN npm run build && npm run install --production --ignore-scripts --prefer-offline --registry=https://registry.npm.taobao.org
# ​
# # Production image, copy all the files and run next
# FROM node:alpine AS runner
# WORKDIR /app
# ​
# ENV NODE_ENV production
# ​
# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001
# ​
# # You only need to copy next.config.js if you are NOT using the default configuration
# # COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json
# ​
# USER nextjs
# ​
# EXPOSE 3000
# ​
# ENV PORT 3000
# ​
# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry.
# # ENV NEXT_TELEMETRY_DISABLED 1
# ​
# CMD ["node_modules/.bin/next", "start"]

FROM node:latest

RUN mkdir -p /app

WORKDIR /app

COPY . ./

RUN npm config set registry http://registry.npm.taobao.org/

COPY package.json /app/package.json

RUN rm -rf /app/pnpm-lock.yaml
RUN cd /app && rm -rf /app/node_modules && npm install -g pnpm && pnpm install

RUN cd /app && rm -rf /app/.next && pnpm build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD pnpm start

