import {Pool} from 'pg';

export const pool = new Pool({
    user: 'avnadmin',
    host:'pg-techplayzone-elianlalangui-648f.a.aivencloud.com',
    password: 'AVNS_bB_El9iT8VQ5W9SyMOB',
    database: 'defaultdb',
    port: 22247,
    sslmode: 'requiere',
    ssl: {rejectUnauthorized: false}
})
