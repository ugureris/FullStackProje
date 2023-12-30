# Car Management System

## About the Project
This application allows registered users to add and manage their own cars in the system.

## Technologies Used
- Spring Boot
- Hibernate
- React
- Chakra
- Nginx

Note: This service is used to run back-end and front-end applications on the same port and to overcome CORS while running locally.

- MySQL 8.0

## Installation
1. First, run the nginx.exe application.
2. Then start the back-end.
3. For the front-end:
   - Run `npm install` or `yarn install`
   - Run `npm start`

## Important Notes
- The Spring application runs on port 8080, and Npm runs on port 3000. To enable communication between the two applications, Nginx is configured with proxy_pass to allow both applications to serve on port 80 and communicate.
- To avoid CORS issues, you can access it through the browser directly from localhost (localhost:80) instead of localhost:3000.
- The configured `nginx.conf` file can be found in the relevant section of the repository.
