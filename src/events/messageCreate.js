
import { getWelcomeMessageWithMeme } from "../helpers/welcomeMessage.js";

const event = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;
    if (message.content !== "!testWelcome") return;

    const welcomeMessage = await getWelcomeMessageWithMeme(
        message.author.id
    );

    await message.channel.send(welcomeMessage);
  },
};

export default event;
