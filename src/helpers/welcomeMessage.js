
import { EmbedBuilder, userMention } from "discord.js";
import { MEME_URLS } from "./memes.js";

let previousMemeIndex = -1;

const getMeme = () => {
  if (MEME_URLS.length === 0) {
    return new EmbedBuilder().setDescription("No memes configured yet!");
  }

  let randomIndex;

  // Pick a different meme from the previous one.
  if (MEME_URLS.length === 1) {
    randomIndex = 0;
  } else {
    do {
      randomIndex = Math.floor(Math.random() * MEME_URLS.length);
    } while (randomIndex === previousMemeIndex);
  }

  previousMemeIndex = randomIndex;

  return new EmbedBuilder().setImage(MEME_URLS[randomIndex]);
};

export const getWelcomeMessageWithMeme = async (userId) => {
  const meme = getMeme();

  return {
    content: `Welcome ${userMention(userId)}!\nHere's a meme for you to enjoy!`,
    embeds: [meme],
  };
};
