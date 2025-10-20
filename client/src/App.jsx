// // // import React from 'react';
// // // import { io } from 'socket.io-client';
// // // import {useEffect, useState } from 'react'
// // // const socket = io.connect('http://localhost:5173');
// // // const App = () => {
// // //   const [message, setMessage] = useState("");
// // //   const [messageReceived, setMessageReceived] = useState("");

// // //   const sendMessage = () => {
// // //     // emit a chat message to the server
// // //     socket.emit('chat message', {  message });
// // //   }

// // //   useEffect(()=>{
// // //     socket.on("chat message",(msg)=>{
// // //       setMessageReceived(msg.message);
// // //       alert(msg.text);
// // //     });
// // //   },[socket]);

// // //   return (
// // //     <div className="flex items-center gap-2 p-4">
// // //       <input
// // //         placeholder="Chat..." onChange={(event)=>{
// // //           setMessage(event.target.value);
// // //         }}
// // //         className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none"
// // //       />
// // //       <button onClick={sendMessage} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
// // //         <img className='h-6'
// // //           src="https://img.icons8.com/?size=100&id=47809&format=png&color=000000"
// // //           alt="Send"
// // //         />
// // //       </button>
// // //       <h1>Message:</h1>
// // //       {messageReceived}
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // // import React, { useEffect, useState } from 'react';
// // // import { io } from 'socket.io-client';

// // // const socket = io('http://localhost:3001'); // ✅ Correct server URL

// // // const App = () => {
// // //   const [message, setMessage] = useState("");
// // //   const [messages, setMessages] = useState([]);

// // //   const sendMessage = () => {
// // //     if (message.trim() === "") return;
// // //     socket.emit("chat message", { message });
// // //     setMessage("");
// // //   };

// // //   useEffect(() => {
// // //     socket.on("chat message", (msg) => {
// // //       setMessages((prev) => [...prev, msg.message]);
// // //     });

// // //     // cleanup to avoid duplicate listeners
// // //     return () => socket.off("chat message");
// // //   }, []);

// // //   return (
// // //     <div className="flex flex-col items-center p-4">
// // //       <div className="border border-gray-300 rounded-md w-80 h-64 overflow-y-auto p-2 mb-4">
// // //         {messages.map((msg, idx) => (
// // //           <p key={idx} className="bg-gray-100 p-2 rounded mb-2">
// // //             {msg}
// // //           </p>
// // //         ))}
// // //       </div>

// // //       <div className="flex items-center gap-2">
// // //         <input
// // //           value={message}
// // //           placeholder="Chat..."
// // //           onChange={(e) => setMessage(e.target.value)}
// // //           className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none w-64"
// // //         />
// // //         <button
// // //           onClick={sendMessage}
// // //           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
// // //         >
// // //           Send
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // // import React, { useEffect, useState } from "react";
// // // import { io } from "socket.io-client";

// // // const socket = io("http://localhost:3001");

// // // const App = () => {
// // //   const [room, setRoom] = useState("");
// // //   const [joined, setJoined] = useState(false);
// // //   const [message, setMessage] = useState("");
// // //   const [messages, setMessages] = useState([]);

// // //   const joinRoom = () => {
// // //     if (room.trim() === "") return alert("Enter a valid room ID");
// // //     socket.emit("join_room", room);
// // //     setJoined(true);
// // //   };

// // //   const sendMessage = () => {
// // //     if (message.trim() === "") return;
// // //     socket.emit("chat_message", { roomId: room, message });
// // //     setMessage("");
// // //   };

// // //   useEffect(() => {
// // //     socket.on("chat_message", (data) => {
// // //       setMessages((prev) => [...prev, data.message]);
// // //     });

// // //     return () => socket.off("chat_message");
// // //   }, []);

// // //   return (
// // //     <div className="flex flex-col items-center p-4">
// // //       {!joined ? (
// // //         <div className="flex gap-2">
// // //           <input
// // //             placeholder="Enter Room ID"
// // //             value={room}
// // //             onChange={(e) => setRoom(e.target.value)}
// // //             className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none"
// // //           />
// // //           <button
// // //             onClick={joinRoom}
// // //             className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
// // //           >
// // //             Join Room
// // //           </button>
// // //         </div>
// // //       ) : (
// // //         <>
// // //           <h2 className="text-lg font-semibold mb-2">Room: {room}</h2>
// // //           <div className="border border-gray-300 rounded-md w-80 h-64 overflow-y-auto p-2 mb-4">
// // //             {messages.map((msg, idx) => (
// // //               <p key={idx} className="bg-gray-100 p-2 rounded mb-2">
// // //                 {msg}
// // //               </p>
// // //             ))}
// // //           </div>

// // //           <div className="flex items-center gap-2">
// // //             <input
// // //               value={message}
// // //               placeholder="Type message..."
// // //               onChange={(e) => setMessage(e.target.value)}
// // //               className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none w-64"
// // //             />
// // //             <button
// // //               onClick={sendMessage}
// // //               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
// // //             >
// // //               Send
// // //             </button>
// // //           </div>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // import React, { useState, useEffect } from "react";
// // import { io } from "socket.io-client";

// // const socket = io("http://localhost:3001");

// // const App = () => {
// //   const [username, setUsername] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [messages, setMessages] = useState([]);
// //   const [roomMessages, setRoomMessages] = useState([]);
// //   const [room, setRoom] = useState("");
// //   const [joined, setJoined] = useState(false);

// //   // Join a room
// //   const joinRoom = () => {
// //     if (room.trim() === "") return alert("Enter a valid room ID");
// //     socket.emit("join_room", room);
// //     setJoined(true);
// //   };

// //   // Send message to global chat
// //   const sendGlobalMessage = () => {
// //     if (!message.trim() || !username.trim()) return;
// //     const data = { username, message };
// //     socket.emit("global_message", data);
// //     setMessage("");
// //   };

// //   // Send message to private room
// //   const sendRoomMessage = () => {
// //     if (!message.trim() || !username.trim() || !room.trim()) return;
// //     const data = { roomId: room, username, message };
// //     socket.emit("room_message", data);
// //     setMessage("");
// //   };

// //   useEffect(() => {
// //     // Global message listener
// //     socket.on("receive_global_message", (data) => {
// //       setMessages((prev) => [...prev, data]);
// //     });

// //     // Room message listener
// //     socket.on("receive_room_message", (data) => {
// //       setRoomMessages((prev) => [...prev, data]);
// //     });

// //     // Cleanup
// //     return () => {
// //       socket.off("receive_global_message");
// //       socket.off("receive_room_message");
// //     };
// //   }, []);

// //   return (
// //     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
// //       <h1 className="text-2xl font-bold mb-4">💬 Chat Application</h1>

// //       {/* Username Input */}
// //       <input
// //         type="text"
// //         placeholder="Enter your username"
// //         value={username}
// //         onChange={(e) => setUsername(e.target.value)}
// //         className="border border-gray-400 rounded-md px-3 py-2 mb-4 focus:outline-none"
// //       />

// //       {/* Room Section */}
// //       <div className="flex gap-2 mb-6">
// //         <input
// //           type="text"
// //           placeholder="Enter Room ID"
// //           value={room}
// //           onChange={(e) => setRoom(e.target.value)}
// //           className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none"
// //         />
// //         <button
// //           onClick={joinRoom}
// //           className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
// //         >
// //           Join Room
// //         </button>
// //       </div>

// //       {/* Chat Mode Buttons */}
// //       <div className="flex gap-4 mb-6">
// //         <button
// //           onClick={() => setJoined(false)}
// //           className={`px-4 py-2 rounded-lg ${
// //             !joined ? "bg-blue-600 text-white" : "bg-gray-300"
// //           }`}
// //         >
// //           🌍 Global Chat
// //         </button>
// //         <button
// //           onClick={() => {
// //             if (room.trim()) setJoined(true);
// //             else alert("Join a room first!");
// //           }}
// //           className={`px-4 py-2 rounded-lg ${
// //             joined ? "bg-blue-600 text-white" : "bg-gray-300"
// //           }`}
// //         >
// //           🔒 Private Chat
// //         </button>
// //       </div>

// //       {/* Chat Box */}
// //       <div className="border border-gray-300 rounded-md w-80 h-64 overflow-y-auto p-2 mb-4 bg-white">
// //         {(joined ? roomMessages : messages).map((msg, idx) => (
// //           <div
// //             key={idx}
// //             className={`flex ${
// //               msg.username === username ? "justify-end" : "justify-start"
// //             }`}
// //           >
// //             <div
// //               className={`m-1 p-2 rounded-lg max-w-[70%] ${
// //                 msg.username === username
// //                   ? "bg-blue-500 text-white"
// //                   : "bg-gray-200 text-black"
// //               }`}
// //             >
// //               <strong>{msg.username}:</strong> {msg.message}
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Message Input */}
// //       <div className="flex items-center gap-2">
// //         <input
// //           value={message}
// //           placeholder="Type your message..."
// //           onChange={(e) => setMessage(e.target.value)}
// //           className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none w-64"
// //         />
// //         <button
// //           onClick={joined ? sendRoomMessage : sendGlobalMessage}
// //           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
// //         >
// //           Send
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const API = "http://localhost:3001";

// export default function App() {
//   const [token, setToken] = useState("");
//   const [user, setUser] = useState(null);
//   const [socket, setSocket] = useState(null);

//   const [usernameInput, setUsernameInput] = useState("");
//   const [passwordInput, setPasswordInput] = useState("");

//   const [globalMessages, setGlobalMessages] = useState([]);
//   const [roomMessages, setRoomMessages] = useState([]);
//   const [currentRoom, setCurrentRoom] = useState("");
//   const [joinedRooms, setJoinedRooms] = useState(new Set());

//   const [inviteUsername, setInviteUsername] = useState("");
//   const [messageInput, setMessageInput] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Clear messages after 3 seconds
//   useEffect(() => {
//     if (error || success) {
//       const timer = setTimeout(() => {
//         setError("");
//         setSuccess("");
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [error, success]);

//   // Connect socket after login (token present)
//   useEffect(() => {
//     if (!token) return;

//     const s = io(API, { 
//       auth: { token },
//       reconnection: true,
//       reconnectionAttempts: 5,
//       reconnectionDelay: 1000
//     });

//     s.on("connect", () => {
//       setSuccess("Connected to server");
//     });

//     s.on("connect_error", (err) => {
//       console.error("Socket connect error:", err.message);
//       setError("Socket auth error: " + err.message);
//     });

//     s.on("disconnect", (reason) => {
//       console.log("Disconnected:", reason);
//       if (reason === "io server disconnect") {
//         // Server forcibly disconnected, try to reconnect
//         s.connect();
//       }
//     });

//     s.on("receive_global_message", (data) => {
//       setGlobalMessages((prev) => [...prev, data]);
//     });

//     s.on("receive_room_message", (data) => {
//       // Only append if we're in that room
//       if (joinedRooms.has(data.roomId)) {
//         setRoomMessages((prev) => {
//           // Prevent duplicates
//           const exists = prev.some(
//             (m) => m.username === data.username && 
//                    m.message === data.message && 
//                    m.timestamp === data.timestamp
//           );
//           if (exists) return prev;
//           return [...prev, data];
//         });
//       }
//     });

//     setSocket(s);

//     return () => {
//       s.disconnect();
//       setSocket(null);
//     };
//   }, [token]); // Remove currentRoom from dependencies to prevent reconnection

//   // Signup
//   const signup = async () => {
//     if (!usernameInput.trim() || !passwordInput.trim()) {
//       setError("Username and password are required");
//       return;
//     }

//     try {
//       const res = await fetch(API + "/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           username: usernameInput.trim(), 
//           password: passwordInput 
//         }),
//       });
//       const data = await res.json();
      
//       if (res.ok) {
//         setToken(data.token);
//         setUser(data.user);
//         setSuccess("Signed up & logged in as " + data.user.username);
//         setUsernameInput("");
//         setPasswordInput("");
//       } else {
//         setError(data.error || "Signup failed");
//       }
//     } catch (err) {
//       setError("Network error: " + err.message);
//     }
//   };

//   // Login
//   const login = async () => {
//     if (!usernameInput.trim() || !passwordInput.trim()) {
//       setError("Username and password are required");
//       return;
//     }

//     try {
//       const res = await fetch(API + "/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           username: usernameInput.trim(), 
//           password: passwordInput 
//         }),
//       });
//       const data = await res.json();
      
//       if (res.ok) {
//         setToken(data.token);
//         setUser(data.user);
//         setSuccess("Logged in as " + data.user.username);
//         setUsernameInput("");
//         setPasswordInput("");
//       } else {
//         setError(data.error || "Login failed");
//       }
//     } catch (err) {
//       setError("Network error: " + err.message);
//     }
//   };

//   // Logout
//   const logout = () => {
//     setToken("");
//     setUser(null);
//     setSocket(null);
//     setGlobalMessages([]);
//     setRoomMessages([]);
//     setCurrentRoom("");
//     setJoinedRooms(new Set());
//     setSuccess("Logged out successfully");
//   };

//   // Create room
//   const createRoom = () => {
//     if (!socket) {
//       setError("Login first");
//       return;
//     }
    
//     socket.emit("create_room", (res) => {
//       if (res?.ok) {
//         setCurrentRoom(res.roomId);
//         setJoinedRooms((prev) => new Set([...prev, res.roomId]));
//         setRoomMessages([]);
//         setSuccess("Room created: " + res.roomId);
//       } else {
//         setError(res?.error || "Failed to create room");
//       }
//     });
//   };

//   // Invite user to currentRoom
//   const inviteUser = () => {
//     if (!socket) {
//       setError("Login first");
//       return;
//     }
//     if (!currentRoom) {
//       setError("Create or join a room first");
//       return;
//     }
//     if (!inviteUsername.trim()) {
//       setError("Enter username to invite");
//       return;
//     }
    
//     socket.emit("invite_user", { 
//       roomId: currentRoom, 
//       targetUsername: inviteUsername.trim() 
//     }, (res) => {
//       if (res?.ok) {
//         setSuccess(`Invited ${inviteUsername} to ${currentRoom}`);
//         setInviteUsername("");
//       } else {
//         setError(res?.error || "Invite failed");
//       }
//     });
//   };

//   // Join room
//   const joinRoom = () => {
//     if (!socket) {
//       setError("Login first");
//       return;
//     }
//     if (!currentRoom.trim()) {
//       setError("Enter a room ID to join");
//       return;
//     }
    
//     socket.emit("join_room", { roomId: currentRoom.trim() }, (res) => {
//       if (res?.ok) {
//         setJoinedRooms((prev) => new Set([...prev, currentRoom.trim()]));
//         setRoomMessages([]);
//         setSuccess("Joined room " + currentRoom);
//       } else {
//         setError(res?.error || "Join failed");
//       }
//     });
//   };

//   // Leave room
//   const leaveRoom = () => {
//     if (!socket) {
//       setError("Login first");
//       return;
//     }
//     if (!currentRoom) {
//       setError("No room to leave");
//       return;
//     }

//     socket.emit("leave_room", { roomId: currentRoom }, (res) => {
//       if (res?.ok || !res) {
//         setJoinedRooms((prev) => {
//           const newSet = new Set(prev);
//           newSet.delete(currentRoom);
//           return newSet;
//         });
//         setSuccess("Left room " + currentRoom);
//         setCurrentRoom("");
//         setRoomMessages([]);
//       } else {
//         setError(res?.error || "Leave failed");
//       }
//     });
//   };

//   // Send room message
//   const sendRoomMessage = () => {
//     if (!socket) {
//       setError("Login first");
//       return;
//     }
//     if (!currentRoom) {
//       setError("Join a room first");
//       return;
//     }
//     if (!messageInput.trim()) {
//       setError("Message cannot be empty");
//       return;
//     }
    
//     socket.emit("room_message", { 
//       roomId: currentRoom, 
//       message: messageInput.trim() 
//     }, (res) => {
//       if (res?.ok) {
//         // Message will be received via socket event
//         setMessageInput("");
//       } else {
//         setError(res?.error || "Send failed");
//       }
//     });
//   };

//   // Send global message
//   const sendGlobalMessage = () => {
//     if (!socket) {
//       setError("Login first");
//       return;
//     }
//     if (!messageInput.trim()) {
//       setError("Message cannot be empty");
//       return;
//     }
    
//     socket.emit("global_message", { message: messageInput.trim() }, (res) => {
//       if (res?.ok) {
//         setMessageInput("");
//       } else {
//         setError(res?.error || "Send failed");
//       }
//     });
//   };

//   // Handle Enter key for inputs
//   const handleKeyPress = (e, action) => {
//     if (e.key === "Enter") {
//       action();
//     }
//   };

//   return (
//     <div style={{ padding: 20, fontFamily: "sans-serif", maxWidth: 1200, margin: "0 auto" }}>
//       <h2>JWT Authenticated Chat (Invite-Only Rooms)</h2>

//       {/* Error/Success Messages */}
//       {error && (
//         <div style={{ 
//           padding: 10, 
//           marginBottom: 10, 
//           backgroundColor: "#ffebee", 
//           color: "#c62828",
//           borderRadius: 4,
//           border: "1px solid #ef5350"
//         }}>
//           {error}
//         </div>
//       )}
//       {success && (
//         <div style={{ 
//           padding: 10, 
//           marginBottom: 10, 
//           backgroundColor: "#e8f5e9", 
//           color: "#2e7d32",
//           borderRadius: 4,
//           border: "1px solid #66bb6a"
//         }}>
//           {success}
//         </div>
//       )}

//       {/* Auth Section */}
//       {!token ? (
//         <div style={{ marginBottom: 20, padding: 15, border: "1px solid #ddd", borderRadius: 4 }}>
//           <h3>Login or Sign Up</h3>
//           <input 
//             placeholder="Username" 
//             value={usernameInput} 
//             onChange={(e) => setUsernameInput(e.target.value)}
//             onKeyPress={(e) => handleKeyPress(e, login)}
//             style={{ padding: 8, marginRight: 8, width: 200 }}
//           />
//           <input 
//             placeholder="Password" 
//             type="password" 
//             value={passwordInput} 
//             onChange={(e) => setPasswordInput(e.target.value)}
//             onKeyPress={(e) => handleKeyPress(e, login)}
//             style={{ padding: 8, marginRight: 8, width: 200 }}
//           />
//           <button onClick={signup} style={{ padding: 8, marginRight: 8 }}>Sign Up</button>
//           <button onClick={login} style={{ padding: 8 }}>Log In</button>
//         </div>
//       ) : (
//         <div style={{ marginBottom: 10, padding: 10, backgroundColor: "#f5f5f5", borderRadius: 4 }}>
//           <strong>Logged in as:</strong> {user?.username}
//           <button onClick={logout} style={{ marginLeft: 16, padding: 6 }}>Logout</button>
//         </div>
//       )}

//       {/* Room Management */}
//       {token && (
//         <>
//           <div style={{ marginBottom: 12, padding: 15, border: "1px solid #ddd", borderRadius: 4 }}>
//             <h3>Room Management</h3>
//             <div style={{ marginBottom: 10 }}>
//               <button onClick={createRoom} style={{ padding: 8 }}>Create New Room</button>
//               <span style={{ marginLeft: 20 }}>or</span>
//               <input 
//                 style={{ marginLeft: 10, padding: 8, width: 250 }} 
//                 placeholder="Enter room ID to join" 
//                 value={currentRoom} 
//                 onChange={(e) => setCurrentRoom(e.target.value)}
//                 onKeyPress={(e) => handleKeyPress(e, joinRoom)}
//               />
//               <button onClick={joinRoom} style={{ marginLeft: 8, padding: 8 }}>Join Room</button>
//               {currentRoom && (
//                 <button onClick={leaveRoom} style={{ marginLeft: 8, padding: 8, backgroundColor: "#ff5252", color: "white" }}>
//                   Leave Room
//                 </button>
//               )}
//             </div>

//             {currentRoom && (
//               <div style={{ marginTop: 10, padding: 10, backgroundColor: "#e3f2fd", borderRadius: 4 }}>
//                 <strong>Current Room:</strong> {currentRoom}
//                 <div style={{ marginTop: 8 }}>
//                   <input 
//                     placeholder="Username to invite" 
//                     value={inviteUsername} 
//                     onChange={(e) => setInviteUsername(e.target.value)}
//                     onKeyPress={(e) => handleKeyPress(e, inviteUser)}
//                     style={{ padding: 8, width: 200 }}
//                   />
//                   <button onClick={inviteUser} style={{ marginLeft: 8, padding: 8 }}>Invite User</button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Chat Areas */}
//           <div style={{ display: "flex", gap: 20, marginBottom: 12 }}>
//             <div style={{ flex: 1 }}>
//               <h4>Global Chat</h4>
//               <div style={{ 
//                 border: "1px solid #ccc", 
//                 height: 300, 
//                 overflow: "auto", 
//                 padding: 8,
//                 backgroundColor: "#fafafa",
//                 borderRadius: 4
//               }}>
//                 {globalMessages.length === 0 ? (
//                   <div style={{ color: "#999", fontStyle: "italic" }}>No messages yet</div>
//                 ) : (
//                   globalMessages.map((m, i) => (
//                     <div key={i} style={{ marginBottom: 8, padding: 4 }}>
//                       <strong style={{ color: "#1976d2" }}>{m.username}:</strong> {m.message}
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>

//             <div style={{ flex: 1 }}>
//               <h4>Room Chat {currentRoom ? `(${currentRoom})` : "(Join a room)"}</h4>
//               <div style={{ 
//                 border: "1px solid #ccc", 
//                 height: 300, 
//                 overflow: "auto", 
//                 padding: 8,
//                 backgroundColor: "#fafafa",
//                 borderRadius: 4
//               }}>
//                 {!currentRoom ? (
//                   <div style={{ color: "#999", fontStyle: "italic" }}>Join a room to chat</div>
//                 ) : roomMessages.length === 0 ? (
//                   <div style={{ color: "#999", fontStyle: "italic" }}>No messages in this room yet</div>
//                 ) : (
//                   roomMessages.map((m, i) => (
//                     <div key={i} style={{ marginBottom: 8, padding: 4 }}>
//                       <strong style={{ color: "#388e3c" }}>{m.username}:</strong> {m.message}
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Message Input */}
//           <div style={{ padding: 15, border: "1px solid #ddd", borderRadius: 4 }}>
//             <input 
//               style={{ width: "calc(100% - 150px)", padding: 10 }} 
//               placeholder="Type your message..." 
//               value={messageInput} 
//               onChange={(e) => setMessageInput(e.target.value)}
//               onKeyPress={(e) => handleKeyPress(e, currentRoom ? sendRoomMessage : sendGlobalMessage)}
//             />
//             <button 
//               onClick={currentRoom ? sendRoomMessage : sendGlobalMessage} 
//               style={{ 
//                 marginLeft: 8, 
//                 padding: 10,
//                 backgroundColor: currentRoom ? "#388e3c" : "#1976d2",
//                 color: "white",
//                 border: "none",
//                 borderRadius: 4,
//                 cursor: "pointer"
//               }}
//             >
//               {currentRoom ? "Send to Room" : "Send Global"}
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { MessageCircle, Users, LogOut, Send, Plus, UserPlus, LogIn, UserCheck, X, Hash } from "lucide-react";

const API = "https://yapit-vrdu.onrender.com/";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [globalMessages, setGlobalMessages] = useState([]);
  const [roomMessages, setRoomMessages] = useState([]);
  const [currentRoom, setCurrentRoom] = useState("");
  const [joinedRooms, setJoinedRooms] = useState(new Set());

  const [inviteUsername, setInviteUsername] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showInviteModal, setShowInviteModal] = useState(false);

  const globalMessagesEndRef = useRef(null);
  const roomMessagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    globalMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [globalMessages]);

  useEffect(() => {
    roomMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [roomMessages]);

  // Clear messages after 4 seconds
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  // Connect socket after login
  useEffect(() => {
    if (!token) return;

    const s = io(API, { 
      auth: { token },
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000
    });

    s.on("connect", () => {
      setSuccess("Connected to server");
    });

    s.on("connect_error", (err) => {
      console.error("Socket connect error:", err.message);
      setError("Connection error: " + err.message);
    });

    s.on("disconnect", (reason) => {
      console.log("Disconnected:", reason);
      if (reason === "io server disconnect") {
        s.connect();
      }
    });

    s.on("receive_global_message", (data) => {
      setGlobalMessages((prev) => [...prev, data]);
    });

    s.on("receive_room_message", (data) => {
      if (joinedRooms.has(data.roomId)) {
        setRoomMessages((prev) => {
          const exists = prev.some(
            (m) => m.username === data.username && 
                   m.message === data.message && 
                   m.timestamp === data.timestamp
          );
          if (exists) return prev;
          return [...prev, data];
        });
      }
    });

    setSocket(s);

    return () => {
      s.disconnect();
      setSocket(null);
    };
  }, [token]);

  const signup = async () => {
    if (!usernameInput.trim() || !passwordInput.trim()) {
      setError("Username and password are required");
      return;
    }

    try {
      const res = await fetch(API + "/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          username: usernameInput.trim(), 
          password: passwordInput 
        }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setToken(data.token);
        setUser(data.user);
        setSuccess("Welcome, " + data.user.username + "!");
        setUsernameInput("");
        setPasswordInput("");
      } else {
        setError(data.error || "Signup failed");
      }
    } catch (err) {
      setError("Network error: " + err.message);
    }
  };

  const login = async () => {
    if (!usernameInput.trim() || !passwordInput.trim()) {
      setError("Username and password are required");
      return;
    }

    try {
      const res = await fetch(API + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          username: usernameInput.trim(), 
          password: passwordInput 
        }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setToken(data.token);
        setUser(data.user);
        setSuccess("Welcome back, " + data.user.username + "!");
        setUsernameInput("");
        setPasswordInput("");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error: " + err.message);
    }
  };

  const logout = () => {
    setToken("");
    setUser(null);
    setSocket(null);
    setGlobalMessages([]);
    setRoomMessages([]);
    setCurrentRoom("");
    setJoinedRooms(new Set());
    setSuccess("Logged out successfully");
  };

  const createRoom = () => {
    if (!socket) {
      setError("Login first");
      return;
    }
    
    socket.emit("create_room", (res) => {
      if (res?.ok) {
        setCurrentRoom(res.roomId);
        setJoinedRooms((prev) => new Set([...prev, res.roomId]));
        setRoomMessages([]);
        setSuccess("Room created successfully!");
      } else {
        setError(res?.error || "Failed to create room");
      }
    });
  };

  const inviteUser = () => {
    if (!socket) {
      setError("Login first");
      return;
    }
    if (!currentRoom) {
      setError("Create or join a room first");
      return;
    }
    if (!inviteUsername.trim()) {
      setError("Enter username to invite");
      return;
    }
    
    socket.emit("invite_user", { 
      roomId: currentRoom, 
      targetUsername: inviteUsername.trim() 
    }, (res) => {
      if (res?.ok) {
        setSuccess(`${inviteUsername} invited successfully!`);
        setInviteUsername("");
        setShowInviteModal(false);
      } else {
        setError(res?.error || "Invite failed");
      }
    });
  };

  const joinRoom = () => {
    if (!socket) {
      setError("Login first");
      return;
    }
    if (!currentRoom.trim()) {
      setError("Enter a room ID to join");
      return;
    }
    
    socket.emit("join_room", { roomId: currentRoom.trim() }, (res) => {
      if (res?.ok) {
        setJoinedRooms((prev) => new Set([...prev, currentRoom.trim()]));
        setRoomMessages([]);
        setSuccess("Joined room successfully!");
      } else {
        setError(res?.error || "Join failed");
      }
    });
  };

  const leaveRoom = () => {
    if (!socket || !currentRoom) return;

    socket.emit("leave_room", { roomId: currentRoom }, (res) => {
      if (res?.ok || !res) {
        setJoinedRooms((prev) => {
          const newSet = new Set(prev);
          newSet.delete(currentRoom);
          return newSet;
        });
        setSuccess("Left room");
        setCurrentRoom("");
        setRoomMessages([]);
      }
    });
  };

  const sendRoomMessage = () => {
    if (!socket || !currentRoom) return;
    if (!messageInput.trim()) return;
    
    socket.emit("room_message", { 
      roomId: currentRoom, 
      message: messageInput.trim() 
    }, (res) => {
      if (res?.ok) {
        setMessageInput("");
      } else {
        setError(res?.error || "Send failed");
      }
    });
  };

  const sendGlobalMessage = () => {
    if (!socket) return;
    if (!messageInput.trim()) return;
    
    socket.emit("global_message", { message: messageInput.trim() }, (res) => {
      if (res?.ok) {
        setMessageInput("");
      } else {
        setError(res?.error || "Send failed");
      }
    });
  };

  const handleKeyPress = (e, action) => {
    if (e.key === "Enter") {
      action();
    }
  };

  // Styles
  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      padding: "20px"
    },
    mainCard: {
      maxWidth: "1400px",
      margin: "0 auto",
      backgroundColor: "rgba(255, 255, 255, 0.98)",
      borderRadius: "24px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
      overflow: "hidden"
    },
    header: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "24px 32px",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    headerTitle: {
      fontSize: "28px",
      fontWeight: "700",
      margin: 0,
      display: "flex",
      alignItems: "center",
      gap: "12px"
    },
    userInfo: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      fontSize: "14px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      padding: "10px 20px",
      borderRadius: "50px",
      backdropFilter: "blur(10px)"
    },
    content: {
      padding: "32px"
    },
    authCard: {
      maxWidth: "450px",
      margin: "60px auto",
      background: "white",
      padding: "40px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
    },
    authTitle: {
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "8px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "center"
    },
    authSubtitle: {
      textAlign: "center",
      color: "#666",
      marginBottom: "32px"
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "12px",
      border: "2px solid #e0e0e0",
      fontSize: "15px",
      marginBottom: "16px",
      outline: "none",
      transition: "all 0.3s",
      boxSizing: "border-box"
    },
    button: {
      padding: "14px 28px",
      borderRadius: "12px",
      border: "none",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px"
    },
    primaryButton: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      width: "100%"
    },
    secondaryButton: {
      backgroundColor: "white",
      color: "#667eea",
      border: "2px solid #667eea",
      width: "100%"
    },
    roomSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "24px",
      marginBottom: "24px"
    },
    roomCard: {
      backgroundColor: "#f8f9fa",
      borderRadius: "16px",
      padding: "24px",
      border: "2px solid transparent",
      transition: "all 0.3s"
    },
    activeRoomCard: {
      backgroundColor: "#e8f5e9",
      border: "2px solid #4caf50"
    },
    chatSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "24px",
      marginBottom: "24px"
    },
    chatBox: {
      backgroundColor: "white",
      borderRadius: "16px",
      border: "2px solid #e0e0e0",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      height: "500px"
    },
    chatHeader: {
      padding: "16px 20px",
      borderBottom: "2px solid #e0e0e0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)"
    },
    chatMessages: {
      flex: 1,
      overflowY: "auto",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    },
    message: {
      padding: "12px 16px",
      borderRadius: "12px",
      backgroundColor: "#f5f5f5",
      maxWidth: "80%",
      wordWrap: "break-word"
    },
    myMessage: {
      alignSelf: "flex-end",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white"
    },
    messageInput: {
      display: "flex",
      gap: "12px",
      padding: "20px",
      borderTop: "2px solid #e0e0e0",
      backgroundColor: "#fafafa"
    },
    notification: {
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "16px 24px",
      borderRadius: "12px",
      fontSize: "14px",
      fontWeight: "500",
      zIndex: 1000,
      animation: "slideIn 0.3s ease-out",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      maxWidth: "400px"
    },
    errorNotification: {
      backgroundColor: "#f44336",
      color: "white"
    },
    successNotification: {
      backgroundColor: "#4caf50",
      color: "white"
    },
    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      backdropFilter: "blur(4px)"
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "32px",
      maxWidth: "400px",
      width: "90%",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)"
    }
  };

  if (!token) {
    return (
      <div style={styles.container}>
        <style>{`
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          input:focus { border-color: #667eea; }
          button:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
          button:active { transform: translateY(0); }
        `}</style>
        
        {error && (
          <div style={{...styles.notification, ...styles.errorNotification}}>
            {error}
          </div>
        )}
        {success && (
          <div style={{...styles.notification, ...styles.successNotification}}>
            {success}
          </div>
        )}

        <div style={styles.authCard}>
          <h1 style={styles.authTitle}>Welcome Back</h1>
          <p style={styles.authSubtitle}>Sign in to continue to your chat</p>
          
          <input 
            style={styles.input}
            placeholder="Username" 
            value={usernameInput} 
            onChange={(e) => setUsernameInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, login)}
          />
          <input 
            style={styles.input}
            placeholder="Password" 
            type="password" 
            value={passwordInput} 
            onChange={(e) => setPasswordInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, login)}
          />
          
          <button 
            onClick={login} 
            style={{...styles.button, ...styles.primaryButton, marginBottom: "12px"}}
          >
            <LogIn size={18} /> Log In
          </button>
          
          <button 
            onClick={signup} 
            style={{...styles.button, ...styles.secondaryButton}}
          >
            <UserCheck size={18} /> Sign Up
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        input:focus { border-color: #667eea; }
        button:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
        button:active { transform: translateY(0); }
        .chat-messages::-webkit-scrollbar { width: 8px; }
        .chat-messages::-webkit-scrollbar-track { background: #f1f1f1; }
        .chat-messages::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
        .chat-messages::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>

      {error && (
        <div style={{...styles.notification, ...styles.errorNotification}}>
          {error}
        </div>
      )}
      {success && (
        <div style={{...styles.notification, ...styles.successNotification}}>
          {success}
        </div>
      )}

      {showInviteModal && (
        <div style={styles.modal} onClick={() => setShowInviteModal(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h3 style={{ margin: 0 }}>Invite User to Room</h3>
              <button 
                onClick={() => setShowInviteModal(false)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
              >
                <X size={24} color="#666" />
              </button>
            </div>
            <input 
              style={styles.input}
              placeholder="Username to invite" 
              value={inviteUsername} 
              onChange={(e) => setInviteUsername(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, inviteUser)}
              autoFocus
            />
            <button 
              onClick={inviteUser}
              style={{...styles.button, ...styles.primaryButton}}
            >
              <UserPlus size={18} /> Send Invitation
            </button>
          </div>
        </div>
      )}

      <div style={styles.mainCard}>
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>
            <MessageCircle size={32} /> ChatRoom
          </h1>
          <div style={styles.userInfo}>
            <Users size={18} />
            <span>{user?.username}</span>
            <button 
              onClick={logout}
              style={{
                ...styles.button,
                padding: "8px 16px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        <div style={styles.content}>
          <div style={styles.roomSection}>
            <div style={currentRoom ? {...styles.roomCard, ...styles.activeRoomCard} : styles.roomCard}>
              <h3 style={{ marginTop: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <Hash size={20} /> Create Room
              </h3>
              <button 
                onClick={createRoom}
                style={{...styles.button, ...styles.primaryButton}}
              >
                <Plus size={18} /> Create New Room
              </button>
            </div>

            <div style={styles.roomCard}>
              <h3 style={{ marginTop: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <Hash size={20} /> Join Room
              </h3>
              <input 
                style={{...styles.input, marginBottom: "12px"}}
                placeholder="Enter room ID" 
                value={currentRoom} 
                onChange={(e) => setCurrentRoom(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, joinRoom)}
              />
              <div style={{ display: "flex", gap: "12px" }}>
                <button 
                  onClick={joinRoom}
                  style={{...styles.button, ...styles.primaryButton, flex: 1}}
                >
                  Join
                </button>
                {currentRoom && (
                  <>
                    <button 
                      onClick={() => setShowInviteModal(true)}
                      style={{
                        ...styles.button,
                        backgroundColor: "#2196f3",
                        color: "white",
                        flex: 1
                      }}
                    >
                      <UserPlus size={18} /> Invite
                    </button>
                    <button 
                      onClick={leaveRoom}
                      style={{
                        ...styles.button,
                        backgroundColor: "#f44336",
                        color: "white",
                        padding: "14px"
                      }}
                    >
                      <X size={18} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div style={styles.chatSection}>
            <div style={styles.chatBox}>
              <div style={styles.chatHeader}>
                <h4 style={{ margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                  <MessageCircle size={20} color="#667eea" /> Global Chat
                </h4>
              </div>
              <div style={styles.chatMessages} className="chat-messages">
                {globalMessages.length === 0 ? (
                  <div style={{ color: "#999", textAlign: "center", marginTop: "40px" }}>
                    No messages yet. Start the conversation!
                  </div>
                ) : (
                  globalMessages.map((m, i) => (
                    <div 
                      key={i} 
                      style={m.username === user?.username ? {...styles.message, ...styles.myMessage} : styles.message}
                    >
                      <div style={{ fontSize: "12px", opacity: 0.8, marginBottom: "4px" }}>
                        {m.username}
                      </div>
                      <div>{m.message}</div>
                    </div>
                  ))
                )}
                <div ref={globalMessagesEndRef} />
              </div>
              {!currentRoom && (
                <div style={styles.messageInput}>
                  <input 
                    style={{...styles.input, flex: 1, marginBottom: 0}}
                    placeholder="Type a message..." 
                    value={messageInput} 
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, sendGlobalMessage)}
                  />
                  <button 
                    onClick={sendGlobalMessage}
                    style={{
                      ...styles.button,
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      padding: "14px 20px"
                    }}
                  >
                    <Send size={18} />
                  </button>
                </div>
              )}
            </div>

            <div style={styles.chatBox}>
              <div style={styles.chatHeader}>
                <h4 style={{ margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                  <Hash size={20} color="#4caf50" /> 
                  {currentRoom ? `Room: ${currentRoom}` : "Select a Room"}
                </h4>
              </div>
              <div style={styles.chatMessages} className="chat-messages">
                {!currentRoom ? (
                  <div style={{ color: "#999", textAlign: "center", marginTop: "40px" }}>
                    Join or create a room to start chatting
                  </div>
                ) : roomMessages.length === 0 ? (
                  <div style={{ color: "#999", textAlign: "center", marginTop: "40px" }}>
                    No messages in this room yet
                  </div>
                ) : (
                  roomMessages.map((m, i) => (
                    <div 
                      key={i} 
                      style={m.username === user?.username ? {...styles.message, ...styles.myMessage} : styles.message}
                    >
                      <div style={{ fontSize: "12px", opacity: 0.8, marginBottom: "4px" }}>
                        {m.username}
                      </div>
                      <div>{m.message}</div>
                    </div>
                  ))
                )}
                <div ref={roomMessagesEndRef} />
              </div>
              {currentRoom && (
                <div style={styles.messageInput}>
                  <input 
                    style={{...styles.input, flex: 1, marginBottom: 0}}
                    placeholder="Type a message..." 
                    value={messageInput} 
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, sendRoomMessage)}
                  />
                  <button 
                    onClick={sendRoomMessage}
                    style={{
                      ...styles.button,
                      backgroundColor: "#4caf50",
                      color: "white",
                      padding: "14px 20px"
                    }}
                  >
                    <Send size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}