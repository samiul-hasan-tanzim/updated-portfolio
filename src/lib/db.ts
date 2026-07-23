import mongoose from "mongoose";

const cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = {
  conn: null,
  promise: null,
};

export async function connectDB() {
  if (cached.conn) return cached.conn;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI missing in env");

  cached.promise = mongoose.connect(uri, {
    dbName: process.env.DB_NAME || "portfolio",
    bufferCommands: false,
  });

  cached.conn = await cached.promise;
  return cached.conn;
}
