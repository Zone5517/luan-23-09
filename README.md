Como rodar

Instalar TypeScript no projeto (caso não tenha):

npm install typescript --save-dev
npx tsc --init


Compilar .ts → .js (pode configurar outDir para ./public/ts se quiser):

npx tsc


Abrir ./public/index.html no navegador (já com os .js compilados).