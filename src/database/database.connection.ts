// import pg from 'pg';

// const { Pool } = pg;

// const configDatabase = {
// 	connectionString: process.env.DATABASE_URL,
// };

// export const db = new Pool(configDatabase);

import pkg from '@prisma/client';

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export default prisma;
