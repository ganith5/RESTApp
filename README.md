# RestApp
NodeJS + MongoDB + Express REST application

###Tools used
######Database: mLab (Hosted MongoDB)
######Middleware: 
    Web application framework: ExpressJS NPM package to create resources. 
    Express's routing module routes requests to appropriate request handlers.
    [What is ExpressJS?](https://evanhahn.com/understanding-express/)
######NodeJS: Javascript runtime built on Chrome V8 Javacsript engine


####Security
------------
The different kinds of authentication used :

   #####1) Basic authentication

        Basic authentication provided using PassportJS.
        Passport is authentication middleware for Node.js. 
        Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies 
        support authentication using a username and password, Facebook, Twitter, and more.
        

   #####2) Token based authentication

        First token requested from '/token' resource
        Resource requested by passing token in the request header. If token is valid, the request is provided access to the resource. 

        JWT or JSON Web Tokens is used to provide token based authentication

        What is JSON Web Token?
        ------------------------

        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact 
        and self-contained way for securely transmitting information between parties 
        as a JSON object. This information can be verified and trusted because it is 
        digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) 
        or a public/private key pair using RSA.

   #####3) OAuth
   
        OAuth is not a API or service but a standard that provides client appplications permission to access its services


