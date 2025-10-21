

// // import express from "express";
// // import http from "http";
// // import { Server } from "socket.io";
// // import cors from "cors";
// // import jwt from "jsonwebtoken";
// // import crypto from "crypto";

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // const JWT_SECRET = "replace_this_with_a_strong_secret"; // change in production

// // const server = http.createServer(app);
// // const io = new Server(server, {
// //   cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
// // });

// // // In-memory stores (demo). Replace with DB in prod.
// // const users = []; // { id, username, password }
// // const rooms = {}; // roomId: { ownerId, allowed: Set(userId) }

// // // ---------- Helper functions ----------
// // function generateId(len = 8) {
// //   return crypto.randomBytes(len).toString("hex");
// // }

// // function createToken(user) {
// //   return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
// //     expiresIn: "12h",
// //   });
// // }

// // function verifyToken(token) {
// //   try {
// //     return jwt.verify(token, JWT_SECRET);
// //   } catch (e) {
// //     return null;
// //   }
// // }

// // // ---------- Auth endpoints (signup/login) ----------
// // app.post("/signup", (req, res) => {
// //   const { username, password } = req.body;
// //   if (!username || !password) return res.status(400).json({ error: "Missing" });
// //   if (users.find((u) => u.username === username))
// //     return res.status(409).json({ error: "Username taken" });

// //   const id = generateId(4);
// //   const user = { id, username, password }; // NOTE: plain password for demo only
// //   users.push(user);
// //   const token = createToken(user);
// //   res.json({ token, user: { id, username } });
// // });

// // app.post("/login", (req, res) => {
// //   const { username, password } = req.body;
// //   const user = users.find((u) => u.username === username && u.password === password);
// //   if (!user) return res.status(401).json({ error: "Invalid credentials" });
// //   const token = createToken(user);
// //   res.json({ token, user: { id: user.id, username: user.username } });
// // });

// // // (Optional) list users (for demo)
// // app.get("/users", (req, res) => {
// //   res.json(users.map((u) => ({ id: u.id, username: u.username })));
// // });

// // // ---------- Socket.IO auth middleware ----------
// // io.use((socket, next) => {
// //   const token = socket.handshake.auth?.token;
// //   if (!token) return next(new Error("Authentication error: token missing"));
// //   const payload = verifyToken(token);
// //   if (!payload) return next(new Error("Authentication error: invalid token"));
// //   socket.user = payload; // attach user info to socket
// //   return next();
// // });

// // io.on("connection", (socket) => {
// //   console.log("Connected:", socket.id, "user:", socket.user.username);

// //   // Create a room (owner creates and is automatically allowed)
// //   socket.on("create_room", (cb) => {
// //     const roomId = generateId(5);
// //     rooms[roomId] = { ownerId: socket.user.id, allowed: new Set([socket.user.id]) };
// //     console.log(`Room created ${roomId} by ${socket.user.username}`);
// //     cb?.({ ok: true, roomId });
// //   });

// //   // Invite a user to a room (only owner can invite)
// //   socket.on("invite_user", ({ roomId, targetUsername }, cb) => {
// //     const room = rooms[roomId];
// //     if (!room) return cb?.({ ok: false, error: "Room not found" });
// //     if (room.ownerId !== socket.user.id)
// //       return cb?.({ ok: false, error: "Only owner can invite" });

// //     const targetUser = users.find((u) => u.username === targetUsername);
// //     if (!targetUser) return cb?.({ ok: false, error: "User not found" });

// //     room.allowed.add(targetUser.id);
// //     console.log(`${socket.user.username} invited ${targetUsername} to ${roomId}`);
// //     cb?.({ ok: true });
// //   });

// //   // Join room (authenticated)
// //   socket.on("join_room", ({ roomId }, cb) => {
// //     const room = rooms[roomId];
// //     if (!room) return cb?.({ ok: false, error: "Room not found" });

// //     if (!room.allowed.has(socket.user.id)) {
// //       return cb?.({ ok: false, error: "You are not invited to this room" });
// //     }

// //     socket.join(roomId);
// //     console.log(`${socket.user.username} joined room ${roomId}`);
// //     cb?.({ ok: true, roomId });
// //   });

// //   // Leave room
// //   socket.on("leave_room", ({ roomId }, cb) => {
// //     socket.leave(roomId);
// //     cb?.({ ok: true });
// //   });

// //   // Room message
// //   socket.on("room_message", ({ roomId, message }, cb) => {
// //     const room = rooms[roomId];
// //     if (!room) return cb?.({ ok: false, error: "Room not found" });
// //     if (!room.allowed.has(socket.user.id)) return cb?.({ ok: false, error: "Not allowed" });

// //     const payload = { roomId, username: socket.user.username, message, userId: socket.user.id, ts: Date.now() };
// //     io.to(roomId).emit("receive_room_message", payload);
// //     cb?.({ ok: true });
// //   });

// //   // Global message (authenticated)
// //   socket.on("global_message", ({ message }, cb) => {
// //     const payload = { username: socket.user.username, message, userId: socket.user.id, ts: Date.now() };
// //     io.emit("receive_global_message", payload);
// //     cb?.({ ok: true });
// //   });

// //   // Disconnect
// //   socket.on("disconnect", (reason) => {
// //     console.log("Disconnected:", socket.user.username, reason);
// //   });
// // });

// // server.listen(3001, () => console.log("🚀 Server running on port 3001"));


// import express from "express";
// import http from "http";
// import { Server } from "socket.io";
// import cors from "cors";
// import jwt from "jsonwebtoken";
// import crypto from "crypto";
// import dotenv from "dotenv";

// dotenv.config(); // Load .env

// const app = express();
// app.use(cors({
//   origin: process.env.FRONTEND_URL || "https://yapit.onrender.com/", // Use FRONTEND_URL from .env
//   methods: ["GET", "POST"]
// }));
// app.use(express.json());

// const JWT_SECRET = process.env.JWT_SECRET || "c8f9b2e5d1a47f6b9c3d2e8a1f4b6c7d9e2f1a3b5c6d7e8f9a0b1c2d3e4f5a6b"; // fallback for local dev

// const PORT = process.env.PORT || 3001;

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: { origin: process.env.FRONTEND_URL || "https://yapit.onrender.com", methods: ["GET", "POST"] },
// });

// // In-memory stores (demo)
// const users = [];
// const rooms = {};

// // ---------- Helper functions ----------
// function generateId(len = 8) {
//   return crypto.randomBytes(len).toString("hex");
// }

// function createToken(user) {
//   return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
//     expiresIn: "12h",
//   });
// }

// function verifyToken(token) {
//   try {
//     return jwt.verify(token, JWT_SECRET);
//   } catch (e) {
//     return null;
//   }
// }

// // ---------- Auth endpoints ----------
// app.post("/signup", (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) return res.status(400).json({ error: "Missing" });
//   if (users.find((u) => u.username === username))
//     return res.status(409).json({ error: "Username taken" });

//   const id = generateId(4);
//   const user = { id, username, password }; // demo only
//   users.push(user);
//   const token = createToken(user);
//   res.json({ token, user: { id, username } });
// });

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find((u) => u.username === username && u.password === password);
//   if (!user) return res.status(401).json({ error: "Invalid credentials" });
//   const token = createToken(user);
//   res.json({ token, user: { id: user.id, username: user.username } });
// });

// // Socket.IO auth
// io.use((socket, next) => {
//   const token = socket.handshake.auth?.token;
//   if (!token) return next(new Error("Authentication error: token missing"));
//   const payload = verifyToken(token);
//   if (!payload) return next(new Error("Authentication error: invalid token"));
//   socket.user = payload;
//   next();
// });

// io.on("connection", (socket) => {
//   console.log("Connected:", socket.id, "user:", socket.user.username);

//   socket.on("create_room", (cb) => {
//     const roomId = generateId(5);
//     rooms[roomId] = { ownerId: socket.user.id, allowed: new Set([socket.user.id]) };
//     cb?.({ ok: true, roomId });
//   });

//   socket.on("invite_user", ({ roomId, targetUsername }, cb) => {
//     const room = rooms[roomId];
//     if (!room) return cb?.({ ok: false, error: "Room not found" });
//     if (room.ownerId !== socket.user.id)
//       return cb?.({ ok: false, error: "Only owner can invite" });

//     const targetUser = users.find((u) => u.username === targetUsername);
//     if (!targetUser) return cb?.({ ok: false, error: "User not found" });

//     room.allowed.add(targetUser.id);
//     cb?.({ ok: true });
//   });

//   socket.on("join_room", ({ roomId }, cb) => {
//     const room = rooms[roomId];
//     if (!room) return cb?.({ ok: false, error: "Room not found" });
//     if (!room.allowed.has(socket.user.id))
//       return cb?.({ ok: false, error: "You are not invited to this room" });

//     socket.join(roomId);
//     cb?.({ ok: true, roomId });
//   });

//   socket.on("leave_room", ({ roomId }, cb) => {
//     socket.leave(roomId);
//     cb?.({ ok: true });
//   });

//   socket.on("room_message", ({ roomId, message }, cb) => {
//     const room = rooms[roomId];
//     if (!room) return cb?.({ ok: false, error: "Room not found" });
//     if (!room.allowed.has(socket.user.id)) return cb?.({ ok: false, error: "Not allowed" });

//     const payload = { roomId, username: socket.user.username, message, userId: socket.user.id, ts: Date.now() };
//     io.to(roomId).emit("receive_room_message", payload);
//     cb?.({ ok: true });
//   });

//   socket.on("global_message", ({ message }, cb) => {
//     const payload = { username: socket.user.username, message, userId: socket.user.id, ts: Date.now() };
//     io.emit("receive_global_message", payload);
//     cb?.({ ok: true });
//   });

//   socket.on("disconnect", (reason) => {
//     console.log("Disconnected:", socket.user.username, reason);
//   });
// });

// server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// server/index.js
import cors from "cors";
import crypto from "crypto";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import jwt from "jsonwebtoken";
import { Server } from "socket.io";

dotenv.config(); // Load .env

// ---------- App Setup ----------
const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({
  origin: FRONTEND_URL,
  methods: ["GET", "POST"],
}));
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString("hex");
const PORT = process.env.PORT || 3001;

// ---------- HTTP + Socket.IO ----------
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: FRONTEND_URL, methods: ["GET", "POST"] },
});

// ---------- In-memory stores (demo only) ----------
const users = []; // { id, username, password }
const rooms = {}; // { roomId: { ownerId, allowed: Set<userId> } }

// ---------- Helper Functions ----------
function generateId(len = 8) {
  return crypto.randomBytes(len).toString("hex");
}

function createToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "12h" });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

// ---------- Auth Endpoints ----------
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Missing username or password" });

  if (users.find(u => u.username === username)) return res.status(409).json({ error: "Username taken" });

  const id = generateId(4);
  const user = { id, username, password }; // demo only, no hashing
  users.push(user);

  const token = createToken(user);
  res.json({ token, user: { id, username } });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const token = createToken(user);
  res.json({ token, user: { id: user.id, username: user.username } });
});

// ---------- Socket.IO Middleware ----------
io.use((socket, next) => {
  const token = socket.handshake.auth?.token;
  if (!token) return next(new Error("Authentication error: token missing"));

  const payload = verifyToken(token);
  if (!payload) return next(new Error("Authentication error: invalid token"));

  socket.user = payload;
  next();
});

// ---------- Socket.IO Events ----------
io.on("connection", (socket) => {
  console.log(`Connected: ${socket.user.username} (${socket.id})`);

  // Create Room
  socket.on("create_room", (cb) => {
    const roomId = generateId(5);
    rooms[roomId] = { ownerId: socket.user.id, allowed: new Set([socket.user.id]) };
    cb?.({ ok: true, roomId });
  });

  // Invite User
  socket.on("invite_user", ({ roomId, targetUsername }, cb) => {
    const room = rooms[roomId];
    if (!room) return cb?.({ ok: false, error: "Room not found" });
    if (room.ownerId !== socket.user.id) return cb?.({ ok: false, error: "Only owner can invite" });

    const targetUser = users.find(u => u.username === targetUsername);
    if (!targetUser) return cb?.({ ok: false, error: "User not found" });

    room.allowed.add(targetUser.id);
    cb?.({ ok: true });
  });

  // Join Room
  socket.on("join_room", ({ roomId }, cb) => {
    const room = rooms[roomId];
    if (!room) return cb?.({ ok: false, error: "Room not found" });
    if (!room.allowed.has(socket.user.id)) return cb?.({ ok: false, error: "You are not invited" });

    socket.join(roomId);
    cb?.({ ok: true, roomId });
  });

  // Leave Room
  socket.on("leave_room", ({ roomId }, cb) => {
    socket.leave(roomId);
    cb?.({ ok: true });
  });

  // Room Message
  socket.on("room_message", ({ roomId, message }, cb) => {
    const room = rooms[roomId];
    if (!room) return cb?.({ ok: false, error: "Room not found" });
    if (!room.allowed.has(socket.user.id)) return cb?.({ ok: false, error: "Not allowed" });

    const payload = {
      roomId,
      username: socket.user.username,
      userId: socket.user.id,
      message,
      ts: Date.now(),
    };
    io.to(roomId).emit("receive_room_message", payload);
    cb?.({ ok: true });
  });

  // Global Message
  socket.on("global_message", ({ message }, cb) => {
    const payload = {
      username: socket.user.username,
      userId: socket.user.id,
      message,
      ts: Date.now(),
    };
    io.emit("receive_global_message", payload);
    cb?.({ ok: true });
  });

  // Disconnect
  socket.on("disconnect", (reason) => {
    console.log(`Disconnected: ${socket.user.username} (${reason})`);
  });
});

// ---------- Start Server ----------
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
