# api-first-ts
An API first Web Application Starter/Template in TypeScript

Install Node first

```
 # if on mac, and using NVM

npm install --global yarn

mkdir api-first-ts
cd api-first-ts

yarn init -y

# to show versions use: npm show typescript@* version

yarn add typescript@latest --dev
yarn add tslint@latest --dev
yarn add @types/express@latest --dev
yarn add express@latest
yarn add oas-tools@latest
yarn add js-yaml@latest
yarn add fs@latest
yarn add path@latest

# now always use 'npx tsc' to call tsc. Don't install globally.

# set up the project structure

mkdir -p dist \
&& mkdir -p src \
&& mkdir -p src/config \
&& mkdir -p src/controller \
&& mkdir -p src/lib \
&& mkdir -p src/middleware \
&& mkdir -p src/route \
&& mkdir -p src/model \
&& mkdir -p src/monitor

npx tsc --init

npx tslint --init

touch src/app.ts

Running the OpenAPI-Generator Docker:
https://github.com/OpenAPITools/openapi-generator

Using these settings
https://openapi-generator.tech/docs/generators/typescript-node/

Generate the Express server
https://github.com/OpenAPITools/openapi-generator/blob/master/samples/server/petstore/nodejs-express-server/README.md

Rename .js to .ts

Copy into src

Express/TS Article
https://developer.okta.com/blog/2018/11/15/node-express-typescript
