FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 8080
RUN apk update
RUN apk add python3
COPY . /tmp
USER 1000
CMD ["sh","/tmp/start.sh"]