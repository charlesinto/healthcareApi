import { Pool } from "pg";

let pool = null

if(process.env.NODE_ENV === 'DEVELOPMENT'){
      pool = new Pool({
        connectionLimit : 10,
        host     : process.env.DATABSE_DEV_HOST,
        user     : process.env.DATABASE_DEV_USER,
        password : process.env.DATABASE_DEV_PASSWORD,
        database : process.env.DATABASE_DEV_DATABASE,
        port: 5432
      });
}

else if (process.env.NODE_ENV === 'TEST'){
    pool = new Pool({
        connectionLimit : 10,
        connectionString: process.env.DATABASE_PROD_C_STRING
      });
}

else if(process.env.NODE_ENV === 'PRODUCTION'){
    pool = new Pool({
        connectionLimit : 10,
        database : process.env.DATABASE_URL
      });
}


export default pool;