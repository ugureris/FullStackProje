
# Araç Kayıt Sistemi

## Proje Hakkında
Sisteme kayıt olan kullanıcıların kendi araçlarını sisteme ekleyebildiği bir uygulama.

### Kullanılan Teknolojiler
- Spring Boot 
- Hibernate
- React 
- Chakra

- Nginx
    * Back-end ve front-end uygulamalarını aynı portta çalıştırabilmek ve lokalde çalışırken CORS'u aşabilmek için kullandığımız servis.
- MySQL 8.0

### Kurulum

###### Öncelikle nginx.exe uygulaması çalıştırılmalı

##### Daha sonra back-end kaldırılmalı

#### Front-end

* npm
`npm install`
* yarn
`yarn install`

`npm start`

### Önemli

- Spring uygulaması 8080 portundan ve Npm ise 3000 portundan kalkmaktadır, iki uygulamanın haberleşebilmesi adına aynı porttan kalkabilmesi için Nginx proxy_pass ile ayarlanarak ikisinin de 80 üzerinden hizmet vermesi ve iletişim kurması sağlanmaktadır. Bu sebeple Cors ile karşılaşılmaması adına `localhost:3000` URL'i üzerinden değil doğrudan `localhost` (localhost:80) ile browser'dan erişim sağlayabilirsiniz.

- Ayarlı nginx.conf dosyasına repostory'nin ilgili alanından ulaşabilirsiniz.
