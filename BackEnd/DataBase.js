import mysql from 'mysql2/promise';
import { config } from './config.js';

export const getConnection = async () => {
    try {
        return await mysql.createConnection({
            host: config.server,
            user: config.user,
            password: config.password,
            database: config.database,
            connectTimeout: 30000,
            timeout: 60000,
            ssl: {
                rejectUnauthorized: false
            }
        });
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        throw new Error('Error de conexión con la base de datos');
    }
};
