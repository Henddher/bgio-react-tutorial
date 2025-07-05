// src/server.js
import { Server, Origins } from "boardgame.io/server";
import { TicTacToe } from "./Game.js";

const server = Server({
  games: [TicTacToe],
  origins: [Origins.LOCALHOST],
});

server.run(8000);
