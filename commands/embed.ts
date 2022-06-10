import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Testing",
  description: "verstuur embed",

  Permissions: ["ADMINISTRATOR"],

  callback: ({}) => {
    const embed = new MessageEmbed()
      .setDescription("hello world")
      .setTitle("Bicky Socials")
      .setColor("RED")
      .addFields([{ name: "field1", value: "value1" }]);

    return embed;
  },
} as ICommand;
