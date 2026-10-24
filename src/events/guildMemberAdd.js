
import { getWelcomeMessageWithMeme } from "../helpers/welcomeMessage.js";

const CHANNEL_NAME = process.env.CHANNEL_NAME;

const event = {
  name: "guildMemberAdd",
  async execute(member) {
    const channel = member.guild.channels.cache.find(
      (channel) => channel.name === CHANNEL_NAME
    );

    if (!channel) return;

    const welcomeMessage = await getWelcomeMessageWithMeme(member.id);
    await channel.send(welcomeMessage);
  },
};

export default event;
