import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";
import mongoose from "mongoose";
import quoteSchema from "../quote-schema";

export default {
  category: "General",
  description:
    "Gebruik deze command in combinatie met een subcommand om Bicky Bot te gebruiken",
  slash: "both",
  testOnly: true,
  callback: async ({ args }) => {
    console.log(args);
    if (args.includes("help")) {
      return "Bicky Bot ondersteunt momenteel de volgende commands:\n`/bb help`: Haal alle huidige commands op. (dit bericht)\n`/bb socials`: Krijg de huidige social media links van Bickychips.";
    }

    if (args.includes("socials")) {
      return "Op deze platformen kan je BickyChips vinden:\nInstagram: https://www.instagram.com/bickychips/\nTwitch: https://www.twitch.tv/bickychips_\nTwitter: https://twitter.com/KellGraphy\nDiscord: https://discord.gg/uBDTGuMhqQ\nTiktok: https://www.tiktok.com/@bickychips";
    }

    if (args.includes("addquote") && args.length > 1) {
      const quote = args[1].replace("'", "\\'");
      await new quoteSchema({
        quote: args[1],
      }).save();
      return "added new quote " + quote;
    }
  },
  options: [
    {
      name: "subcommand",
      description: "help for all possible subcommands",
      required: true,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
    },
    {
      name: "quote",
      description: "add quote to bot",
      required: true,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
    },
  ],
} as ICommand;
