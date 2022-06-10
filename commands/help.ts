import { ICommand } from "wokcommands";

export default {
  category: "Help",
  description: "Help me",
  callback: ({ instance }) => {
    instance.commandHandler.commands.forEach((command: any) => {
      console.log(command);
    });
  },
} as ICommand;