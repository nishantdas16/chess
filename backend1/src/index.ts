import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();

wss.on("connection", function connection(userSocket) {
  gameManager.addUser(userSocket);
  userSocket.on("disconnect", () => gameManager.removeUser(userSocket));
});
