import {Pool} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    password: '1234',
    database: 'TechPlayZone',
    port: 5432
})