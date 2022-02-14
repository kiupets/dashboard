FROM node:16-buster-slim AS build

WORKDIR /dashboard

ARG APP_BACKEND_URL

ENV REACT_APP_BACKEND_URL=$APP_BACKEND_URL
ENV CI=false

COPY . .

RUN npm ci
RUN npm run build

FROM nginx:1.21.0-alpine

COPY --from=build /dashboard/build /usr/share/nginx/html
COPY --from=build /dashboard/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
