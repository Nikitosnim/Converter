FROM node:lts as dependencies
WORKDIR /converternim
COPY package.json package-lock.json ./
RUN npm ci 

FROM node:lts as builder
WORKDIR /converternim
COPY . .
COPY --from=dependencies /converternim/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /converternim
env NODE_ENV production

COPY --from=builder /converternim/public ./public
COPY --from=builder /converternim/package.json ./package.json
COPY --from=builder /converternim/.next ./.next
COPY --from=builder /converternim/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]