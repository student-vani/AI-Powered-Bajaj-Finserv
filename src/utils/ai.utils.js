const axios = require("axios");

module.exports = async (q) => {
  const r = await axios.post(
    `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [{ parts: [{ text: q }] }]
    }
  );

  return r.data.candidates[0].content.parts[0].text.split(" ")[0];
};
