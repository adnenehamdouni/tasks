# Tasks Web App

# Spring Boot @ Angular 6 Sample

documentation url : http://localhost:8080/swagger-ui.html

# Sprint 1

- Create Project
- Create Task entity
- Create Task Repository
- Create Task Service
- Create Rest Controller for basic CRUD methods
- Configure Spring Security
- Add configuration for acces to h2 database / application.properties 
- Add commandRunner to inster first tasks into database
- open local console H2

Next for Angular project:

- Install node https://nodejs.org/en/download/

- configure npm : npm install npm@latest -g
sudo npm cache clean -f
sudo npm install -g n
sudo n stable

-check npm & node versions : 
npm -v :::: npm@6.7.0
node -v :::: v8.11.3


- install angular CLI : npm install @angular/cli@latest

to verify you are on the right version, run ng --version

- Create project frontend using angular CLI : ng new frontend --style=scss
- First Run : ng serve
- Configure Intellij to run angular project
- Run angular from NPM Tool Window (from package.json) on Intellij
- Take a tour on angular project (components, environnement, package.json...)


2. Bootstrapping

https://getbootstrap.com

found 14 vulnerabilities (9 low, 5 high)
  run `npm audit fix` to fix them, or `npm audit` for details
Adnenes-MBP:tutorial-angular-cli-v6-styling-bootstrap adnenehamdouni$ npm audit fix
npm WARN bootstrap@4.2.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.2.1 requires a peer of popper.js@^1.14.6 but none is installed. You must install peer dependencies yourself.

:::: 

npm i jquery@1.9.1 --save
npm i popper.js@^1.14.6 --save

----------
 jquery@1.9.1
added 1 package from 1 contributor and audited 35178 packages in 7.251s
found 1 high severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
npm audit fix --force`

----------

Create the UiModule
We generate the UiModule using the following command. Using the --module parameter we automatically import the UiModule in our main AppModule:
ng generate module ui --module app.module

Next we will generate our 3 components inside of this new module:
ng generate component ui/layout
ng generate component ui/header
ng generate component ui/footer


- Create Tasks, Tasks-add and Tasks-list components : ng g c

ng g c components/tasks
cd cd components/tasks/

ng g c tasks-add
ng g c tasks-list

- Install Bootstrap and FontAwesome
  We will use npm to install the dependencies:
  npm install --save bootstrap font-awesome (added to node-modules)


- Configure bootstrap to Angular project on angular.json


ng generate class task --type=model
ng generate service task
ng generate interface config

ng g enum my-new-enum


- AddTask service method
using postman 

