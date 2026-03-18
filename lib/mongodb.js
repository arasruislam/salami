import mongoose from "mongoose";
import dns from "dns";

// Try setting the DNS servers to Google's as a workaround for SRV resolution issues
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {
  console.warn("[MONGODB] DNS setServers failed, falling back to system DNS.");
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      connectTimeoutMS: 10000, // 10 seconds timeout
    };

    console.log("Connecting to MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("MongoDB Connected Successfully");
        return mongoose;
      })
      .catch((err) => {
        if (err.message.includes("querySrv ECONNREFUSED")) {
          console.error("\n[MONGODB ERROR] DNS Resolution Failed for SRV record.");
          console.error("TIP: Your network/DNS might not support MongoDB SRV records.");
          console.error("FIX: In MongoDB Atlas, go to 'Connect' -> 'Drivers' -> 'Node.js' and select 'version 2.2.12 or later' to get the 'Standard Connection String' (the long one starting with mongodb://).\n");
        }
        throw err;
      });
  }
  
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; // Reset promise so next attempt can retry
    throw e;
  }
  
  return cached.conn;
}

export default dbConnect;
