import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient(); // create a new client only when its not there
  }
  prisma = global.prisma; //Caching the connection by attaching it to the global (to "reuse" the same connection)
}
export default prisma;
