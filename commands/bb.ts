import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";

//import mongoose from "mongoose";
//import quoteSchema from "../quote-schema";

const Database = require("@replit/database")
const db = new Database()

// const quotes: string[] = [
//   "Ik ben nog jong we kunnen nog veel samen spelen - 14/04/22",
//   "Die Vlady komt dan elke keer in mijn nek zuigen - 23/04/22",
//   "Ik wil die worst zo wat dieper steken he - 01/05/22",
//   "Alleeeeez waarom glij ik nu niet? - 04/05/22",
//   "Kzen aant komen kzen aant komen kzen aant komen! - 11/05/22",
//   "Ik wil ze zacht & hard jong - 11/05/22",
//   "Mijn poesjes zijn mijn baby's - 14/05/22",
//   "Ik heb twee poesjes ze zijn allebei zwart - 14/05/22",
//   "Ik ben sowieso 2 kamelen en 1 geit - 14/05/22",
//   "Ik vind het moeilijk om die gaatjes te vullen - 16/05/22",
//   "Tijdens dbd zat ik in de kast - 17/05/22",
//   "Ja ik heb er zin in gekregen - 19/05/22",
//   "Ik heb met zoveel mensen gespeeld dat ik het zelfs niet meer weet - 19/05/22",
//   "Hij is bij de generator die klaar gekomen is - 22/05/22",
//   "Da's weer zoiets dat ik er niet goed kan induwen he - 30/05/22",
//   "Dat was mijn eerste keer - 01/06/22",
//   "Allez ik zit er terug in - 01/06/22",
//   "Ik kom ik kom ik kom - 02/06/22",
//   "Ik suck kei hard - 02/06/22",
//   "Ineens 2 man op mij - 02/06/22",
//   "Van behind you're so lucky - 02/06/22",
//   "Daddy heal me 🥺 - 02/06/22",
//   "Mijn vriend is komen klagen dat ik te luid zen - 02/06/22",
//   "In mijn gat jong langs achter langs achter - 02/06/22",
//   "In mijn hoofd was het wel een headshot - 02/06/22",
//   "wilt ge mij zien spelen of wa? - 07/06/22",
//   "Ik ga u pakken he - 08/06/22",
//   "Ik speel met de Jens - 08/06/22",
//   "Hangt um er nog aan? Ik mag hopen van wel - 08/06/22",
//   "Ik heb al tegen hem gezegd dat ik niet ging komen - 08/06/22",
//   "Ik wist omdat hij het was, dat ik onze Willy moest nemen - 09/06/22",
//   "Ik wil gewoon dat jullie plezier hebben met mij -09/06/22",
//   "Ik besta vandaag exact 10 000 dagen! - 09/06/22",
//   "Ik zit boven, bij het rood licht - 09/06/22",
//   "Ge hebt geen hartslag - 09/06/22",
//   "Mijn eerste keer was, ahum, schaamtelijk - 09/06/22",
//   "Ik slaag ook met m'n zweep, kinkyyyyy - 09/06/22",
//   "Ik ga mezelf injecteren - 09/06/22",
//   "Hij's aant komen, hij's aant komen, hij's aant komen - 09/06/22",
//   "Allee kom, hit me, hit me, hit me - 10/06/22",
//   "Op een gegeven moment dacht ik: allee kom, pakt me maar - 10/06/22",
// ];

// quotes.forEach((quote, index) => {
//   db.set(index, quote).then(() => {});
// })

  let maxId : number = 0;
    db.list().then((indexes : number[]) => {
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
      
      db.set(maxId, quote).then(() => {});
      maxId++
     
      return "added new quote " + quote + ' at index `' + (maxId - 1) + '`.';
    }

    if(args.includes("deletequote") && args.length >= 2){
      
      const index: number = Number(args[1]);
      let removedQuote : string = '';
      let found : boolean = false;
      
      
      db.get(args[1]).then((value: string) => {
        removedQuote = value ? value : 'quote not found';
        found = value ? true : false;
      });


      
      if(found == false){
        return removedQuote;
      }
      else if(found == true){
        return db.delete(args[1]).then(() => `\`${removedQuote}\`` + ' has been deleted from the database.');
      }

      
    }
    
    if(args.includes("getquote") && args.length >= 2){
      return db.get(args[1]).then((value: string) => {
        return value ? value : 'quote not found';
      });
    }

    if(args.includes("randomquote") && args.length == 1){
       return db.list().then((indexes : number[]) => {
          let count : number = indexes.length;
          let random : number = Math.floor(Math.random() * count);
          return db.get(random).then((value : string) => value)
      }
    )}
    
    if(args.includes('getallquotes') && args.length == 1){
      db.list().then((indexes : number[]) => {
        indexes = indexes.sort(function(a:number,b:number) {
         return a-b;
        });

        indexes.forEach((index:number) => {
          db.get(index).then((quote: string) => {
            console.log(`${index} ${quote}`);
          });
      })
      }
    )}

    if(args.includes('')){
      db.list().then((indexes: number[]) => {
        maxId == indexes.length;
        return maxId;
      })
    }
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