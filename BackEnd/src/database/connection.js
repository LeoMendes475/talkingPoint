import { Sequelize } from 'sequelize';


import mysql from 'mysql2/promise';

async function connect() {

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: ''
    });

    return connection;
}

// exporta a função connect
export default {connect};
