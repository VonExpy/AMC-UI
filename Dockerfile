FROM node:16 AS ui-build
WORKDIR /app
COPY client/ ./client/
RUN cd client && npm install --force

FROM node:16 AS server-build
WORKDIR /app
COPY --from=ui-build /app/client/ ./client/
COPY package*.json ./
RUN npm install && npm run build
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]