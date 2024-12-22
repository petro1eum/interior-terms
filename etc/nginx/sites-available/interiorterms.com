server {
    server_name interiorterms.com www.interiorterms.com;

    location / {
        proxy_pass http://20.51.251.225:1800;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    listen [::]:8080 ssl ipv6only=on; # изменено с 443
    listen 8080 ssl; # изменено с 443
    ssl_certificate /etc/letsencrypt/live/interiorterms.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/interiorterms.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.interiorterms.com) {
        return 301 https://$host:8080$request_uri; # добавлен порт
    }

    if ($host = interiorterms.com) {
        return 301 https://$host:8080$request_uri; # добавлен порт
    }

    listen 8081; # изменено с 80
    listen [::]:8081; # изменено с 80
    server_name interiorterms.com www.interiorterms.com;
    return 404;
}