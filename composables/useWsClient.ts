import { Manager } from 'socket.io-client';

export default function useWsClient() {
  const wsManager = new Manager("localhost:8765");

  const socket = wsManager.socket('/');

  // socket.
  socket.on("open", () => {
    socket.send("Hello Server!");
  });

  // Listen for messages
  socket.on("message", (event) => {
    console.log("Message from server ", event.data);
  });

  socket.on("connect_error", (err) => {
    console.log(`Socket.io connect_error`, err);
  });

  socket.on("server_response", (event) => {
    console.log(`server response: `, event);
  });

  return socket
}