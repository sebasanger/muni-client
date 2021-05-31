FROM nginx:latest

COPY /dist/muni /usr/share/nginx/html
