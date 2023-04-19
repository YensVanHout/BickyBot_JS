import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";

const Database = require("@replit/database")
const db = new Database()

let maxId: number = 0;
db.list().then((indexes: number[]) => {
  maxId = indexes.length++
  console.log(maxId)
});

export default {
  category: "General",
  description:
    "Gebruik deze command in combinatie met een subcommand om Bicky Bot te gebruiken",
  slash: "both",
  testOnly: true,
  callback: async ({ args }) => {
    if (args.includes("help")) {
      return "Bicky Bot ondersteunt momenteel de volgende commands:\n`/bb help`: Haal alle huidige commands op. (dit bericht)\n`/bb socials`: Krijg de huidige social media links van Bickychips.";
    }

    if (args.includes("socials")) {
      return "Op deze platformen kan je BickyChips vinden:\nInstagram: https://www.instagram.com/bickychips/\nTwitch: https://www.twitch.tv/bickychips_\nTwitter: https://twitter.com/KellGraphy\nDiscord: https://discord.gg/uBDTGuMhqQ\nTiktok: https://www.tiktok.com/@bickychips";
    }

    if (args.includes("addquote") && args.length >= 2) {

      const quote = args[1].replace("'", "\\'");

      db.set(maxId, quote).then(() => { });
      maxId++

      return "added new quote " + quote + ' at index `' + (maxId - 1) + '`.';
    }

    if (args.includes("deletequote") && args.length >= 2) {

      const index: number = Number(args[1]);
      let removedQuote: string = '';
      let found: boolean = false;


      db.get(args[1]).then((value: string) => {
        removedQuote = value ? value : 'quote not found';
        found = value ? true : false;
      });



      if (found == false) {
        return removedQuote;
      }
      else if (found == true) {
        return db.delete(args[1]).then(() => `\`${removedQuote}\`` + ' has been deleted from the database.');
      }


    }

    if (args.includes("getquote") && args.length >= 2) {
      return db.get(args[1]).then((value: string) => {
        return value ? value : 'quote not found';
      });
    }

    if (args.includes("randomquote") && args.length == 1) {
      return db.list().then((indexes: number[]) => {
        let count: number = indexes.length;
        let random: number = Math.floor(Math.random() * count);
        return db.get(random).then((value: string) => value)
      }
      )
    }

    if (args.includes('getallquotes') && args.length == 1) {
      db.list().then((indexes: number[]) => {
        indexes = indexes.sort(function(a: number, b: number) {
          return a - b;
        });

        indexes.forEach((index: number) => {
          db.get(index).then((quote: string) => {
            console.log(`${index} ${quote}`);
          });
        })
      }
      )

    }

    //    if (args.includes('resync') && args.length == 1) {
    //     quotes.forEach((quote: string) => {
    //        db.set(maxId, quote).then(() => { });
    //        maxId++
    //      })
    //    }

  },
  options: [
    {
      name: "command",
      description: "help for all possible subcommands",
      required: true,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
    },
    {
      name: "parameter",
      description: "quote, id",
      required: false,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
    },
  ],
} as ICommand;


