<!-- run project -->
    npm run dev


 <!-- comandos do sequelize-cli -->
   <!-- criar banco -->
    npx sequelize db:create

   <!-- criar migrations -->
    npx sequelize migration:create --name=nome

   <!-- rodar as migrations -->
    npx sequelize db:migrate