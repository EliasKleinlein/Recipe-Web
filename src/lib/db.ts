import { neon } from '@neondatabase/serverless';
import { z } from 'zod';

const DatabaseUrlSchema = z
  .string()
  .trim()
  .min(1, 'DATABASE_URL fehlt');

const databaseUrl = DatabaseUrlSchema.parse(
  process.env.DATABASE_URL
);

export const sql = neon(databaseUrl);
