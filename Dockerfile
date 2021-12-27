FROM node:16-buster-slim

WORKDIR /dashboards

COPY . .

RUN npm ci

CMD ["npm", "run", "start"]
