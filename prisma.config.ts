import path from 'node:path';
import type { PrismaConfig } from 'prisma';

const config: PrismaConfig = {
  earlyAccess: true,
  schema: path.join('src', 'prisma'),
};

export default config;
