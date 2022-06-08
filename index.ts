import DiscordJS, { Intents, Message } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("bot is up and running");

  const guildId = "952899403436404736";
  const guild = client.guilds.cache.get(guildId);

  let commands;

  if (guild) {
    commands = guild.commands;
  } else {
    commands = client.application?.commands;
  }

  commands?.create({
    name: "bb",
    description:
      "Gebruik deze command in combinatie met een subcommand om Bicky Bot te gebruiken",
    options: [
      {
        name: "subcommand",
        description: "help for all possible subcommands",
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
      },
    ],
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  const { commandName, options } = interaction;

  if (commandName === "bb") {
    const param = options.getString("subcommand");

    if (param === "help") {
      interaction.reply({
        content:
          "Bicky Bot ondersteunt momenteel de volgende commands:\n`!bb help`: Haal alle huidige commands op. (dit bericht)\n`!bb socials`: Krijg de huidige social media links van Bickychips.",
        ephemeral: true,
      });
    }

    if (param === "socials") {
      interaction.reply({
        content:
          "Op deze platformen kan je BickyChips vinden:\nInstagram: https://www.instagram.com/bickychips/\nTwitch: https://www.twitch.tv/bickychips_\nTwitter: https://twitter.com/KellGraphy\nDiscord: https://discord.gg/uBDTGuMhqQ\nTiktok: https://www.tiktok.com/@bickychips",
        ephemeral: true,
      });
    }
  }
});

client.on("messageCreate", (message) => {
  if (message.content.toLowerCase().includes("welk")) {
    message.reply({
      content: "das hier wel in het antwaarps he",
    });
  }
});

client.login(process.env.TOKEN);
