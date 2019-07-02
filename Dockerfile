# build environment: run https://mherman.org/blog/dockerizing-a-react-app/
FROM node:alpine as build
WORKDIR /app
COPY package.json .
RUN npm install --silent
COPY . .
RUN npm run build

# production environment
FROM nginx
COPY --from=build /app/build/index.html /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html/Anatta
RUN rm /usr/share/nginx/html/Anatta/index.html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]