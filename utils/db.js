import { Sequelize } from "sequelize";

const db = new Sequelize('kp','root','',{
        host: 'localhost',
        dialect: 'mysql'
});

export default db;
