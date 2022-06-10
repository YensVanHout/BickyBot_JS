import DiscordJS, { Intents } from "discord.js";

import WOKCommands from "wokcommands";
import path from "path";

//import mongoose from "mongoose";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => res.send("Hello World!"));

app.listen(port, () => {});

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.on("ready", async () => {

  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    typeScript: true,
    testServers: ["948213338150694932"],
    botOwners: ["155784814551629826"],
    //mongoUri: process.env["MONGODB"],
  })
    .setDefaultPrefix("!")
    .setDisplayName("Bicky Bot");
});

client.login(process.env["TOKEN"]);
