FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY /dist/product-management/browser /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
