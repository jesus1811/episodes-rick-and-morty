import { Pool } from 'pg';

export const pool = new Pool({
  host: 'containers-us-west-70.railway.app',
  user: 'postgres',
  password: '2cimjYGwPyftMZxZ39US',
  database: 'rick_morty-images',
  port: 7588,
});
pool.connect((err) => {
  if (err) throw err;
  console.log('connected to postgresql');
});
