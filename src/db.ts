import { Pool } from 'pg';

const connectionString = 'postgres://rfczhyfz:vkmgr-Z9PvhhX6pP_x90I7tLas-98H1q@kesavan.db.elephantsql.com/rfczhyfz';

const db = new Pool({ connectionString });

export default db;