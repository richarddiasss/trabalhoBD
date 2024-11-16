import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const poolconnection =  mysql.createPool({
    host: "localhost",
    user: "root",
    database: "dbtrab",
    password: "richard2004", //process.env.DB_PASSWORD
})

const db =  drizzle(poolconnection);
 
export default db;


