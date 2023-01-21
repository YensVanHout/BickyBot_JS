import { ICommand } from "wokcommands";
import DiscordJS from "discord.js";

const Database = require("@replit/database")
const db = new Database()

let quotes : string[] = [
  "Ik ben nog jong we kunnen nog veel samen spelen - 14/04/22",
"Die Vlady komt dan elke keer in mijn nek zuigen - 23/04/22",
"Ik wil die worst zo wat dieper steken he - 01/05/22",
"Alleeeeez waarom glij ik nu niet? - 04/05/22",
"Kzen aant komen kzen aant komen kzen aant komen! - 11/05/22",
"Ik wil ze zacht & hard jong - 11/05/22",
"Mijn poesjes zijn mijn baby\'s - 14/05/22",
"Ik heb twee poesjes ze zijn allebei zwart - 14/05/22",
"Ik ben sowieso 2 kamelen en 1 geit - 14/05/22",
"Ik vind het moeilijk om die gaatjes te vullen - 16/05/22",
"Tijdens dbd zat ik in de kast - 17/05/22",
"Ja ik heb er zin in gekregen - 19/05/22",
"Ik heb met zoveel mensen gespeeld dat ik het zelfs niet meer weet - 19/05/22",
"Hij is bij de generator die klaar gekomen is - 22/05/22",
"Da\'s weer zoiets dat ik er niet goed kan induwen he - 30/05/22",
"Dat was mijn eerste keer - 01/06/22",
"Allez ik zit er terug in - 01/06/22",
"Ik kom ik kom ik kom - 02/06/22",
"Ik suck kei hard - 02/06/22",
"Ineens 2 man op mij - 02/06/22",
"Van behind you\'re so lucky - 02/06/22",
"Daddy heal me 🥺 - 02/06/22",
"Mijn vriend is komen klagen dat ik te luid zen - 02/06/22",
"In mijn gat jong langs achter langs achter - 02/06/22",
"In mijn hoofd was het wel een headshot - 02/06/22",
"wilt ge mij zien spelen of wa? - 07/06/22",
"Ik ga u pakken he - 08/06/22",
"Ik speel met de Jens - 08/06/22",
"Hangt um er nog aan? Ik mag hopen van wel - 08/06/22",
"Ik heb al tegen hem gezegd dat ik niet ging komen - 08/06/22",
"Ik wist omdat hij het was, dat ik onze Willy moest nemen - 09/06/22",
"Ik wil gewoon dat jullie plezier hebben met mij -09/06/22",
"Ik besta vandaag exact 10 000 dagen! - 09/06/22",
"Ik zit boven, bij het rood licht - 09/06/22",
"Ge hebt geen hartslag - 09/06/22",
"Mijn eerste keer was, ahum, schaamtelijk - 09/06/22",
"Ik slaag ook met m\'n zweep, kinkyyyyy - 09/06/22",
"Ik ga mezelf injecteren - 09/06/22",
"Hij\'s aant komen, hij\'s aant komen, hij\'s aant komen - 09/06/22",
"Allee kom, hit me, hit me, hit me - 10/06/22",
"Op een gegeven moment dacht ik: allee kom, pakt me maar - 10/06/22",
"Loopt zo es ni in mijne nek te hijgen gij - 10/06/22",
"Dat kan u bespringen - 12/06/22",
"Hij wou mij pakken, maar hij heeft gemist - 12/06/22",
"Ik ga de gaatjes hier wat bijvullen - 15/06/22",
"Iedereen moet finishen op den deze - 18/06/22",
"Play play play... play with balls - 18/06/22",
"Gij vindt naar mijn ballen kijken geen fun? - 18/06/22",
"There were a lot of people that wanted to play with me - 18/06/22",
"Goeiemiddag, ik ben aant sucken - 18/06/22",
"Dat is een trucje, als je het licht uit laat dan komt die sneller - 18/06/2022",
"Kzen hele tijd met mijn muis aant... - 18/06/22",
"Komt in mijn mond, kom! - 18/06/22",
"Uw ijsje is niet koud he, uw ijsje is pokke warm - 18/06/22",
"En dan weet ik: nee nee, gij hebt \'plannen\' met mij - 18/06/22",
"Ik ben aant wiggelen ze - 18/06/22",
"Ik heb dat al een paar keer geprobeerd en werd altijd gepakt - 18/06/22",
"Amai zeg, zit mijne mond just vol - 18/06/22",
"Ik voel niks zitten, maar zal toch maar proberen zeker? - 18/06/22",
"H� ge hebt mijn manneke gepakt! - 18/06/22",
"PILLEN SLIKKEEEEN - 18/06/22",
"Komaan mama - 22/06/22",
"Das wel slecht voor die spiertjes in uw mond - 22/06/22",
"Ik wil niet naar de keldeeer - 18/06/22",
"De deur is net voor mijn deur dicht gegaan - 18/06/22",
"Zienk ik u wel bezig met dat dingeske! - 18/06/22",
"Twee vrouwen, die borsten zitten in de weg. Hoe doen die dat? - 18/06/22",
"Soms begrijp ik mezelf niet zo goed - 18/06/22",
"Ik word gepest door Bicky haar vriendje - 18/06/22",
"Ik moet meer luisteren - 18/06/22",
"PEKES VOOR IEDEREEN! - 18/06/22",
"Ik had nog niet eens doorgeslikt en ge doet het al terug opnieuw! - 02/07/22",
"Ik heb al een paar dagen keelpijn, ik wil gewoon zo iets lekker warm dat goed glijdt. - 02/07/22",
"Ik zit altijd met mijn hoofd tussen iedereen z\'n benen - 04/07/2022",
"Zo kei smooth glijdend over mijn lichaam - 04/07/22",
"Hij was u goed aant begluren - 04/07/22",
"Ik kan die wel klaar maken hoor - 04/07/22",
"Als ik thuis ben, kan ik wel plaats maken voor u ze - 04/07/22",
"Ja, da\'s langs achter he - 04/07/22",
"... omdat ik hem zag komen - 04/07/22",
"Is dat een paal? - 06/07/22",
"Zijt gij een beetje vuil? - 06/07/22",
"En heb ik goed gezogen? - 07/07/22",
"Ge moet die kwak overal aan hangen - 07/07/22",
"Ge moet overal gutsen - 07/07/22",
"Goed gutsen jong, kom! - 07/07/22",
"Maar ge moet MIJ niet ondergutsen - 07/07/22",
"Mijn muis is echt heel vervelend aant doen - 07/07/22",
"Ik zit op u eh pak ne rooie pak ne rooie - 12/07/22",
"Ik ga het laatste eruit zuigen voor u he - 13/07/22",
"Amai, Miss_Matic kan kreunen se! - 15/07/22",
"Komde gij kijken hoe dat vrouwtje speelt me mij? - 15/07/2022",
"Het spijtige is dat ge nu kreunt - 15/07/22",
"Ik dacht dat gij voor mij ging komen - 15/07/22",
"Ik word echt een heet ding - 19/07/22",
"Vandaag ben ik een heet ding - 19/07/22",
"Dat vind ik het ambetantste gevoel, zo niet kunnen slikken - 19/07/22",
"Die dingen zuigen mij hier gewoon leeg he - 19/07/22",
"Haar poes trilt helemaal - 19/07/22",
"Ik krijg nooit die bal te pakken - 19/07/22",
"Ik heb dus een schattig poezeke hier he - 19/07/22",
"Hoe kan een mens zich nu op haar poes concentreren? - 19/07/22",
"Braaf poesje - 19/07/22",
"Die ruikt dat he, dat ik met andere poezekes bezig zen - 19/07/22",
"Komaan man, ik wil u in dat gaatje doen - 19/07/22",
"Proef mij, kom proef mij - 19/07/22",
"Ook al is dat maar een halve cm dikker he, ge VOELT dat verschil - 19/07/22",
"Das sowieso anders dan zo van die spuiters - 19/07/22",
"Ik ga eerst de mensen doen die ik nog niet heb gehad - 19/07/22"]  

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

  if(args.includes('resync') && args.length == 1) {
    quotes.forEach((quote : string) => {
      
      db.set(maxId, quote).then(() => {});
      maxId++
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