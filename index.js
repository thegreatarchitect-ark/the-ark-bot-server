import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("The Ark bot is running ✅");
});

app.post("/webhook/:token", (req, res) => {
  const message = req.body.message;

  if (message?.text === "/start") {
    const chatId = message.chat.id;

    const reply = {
      method: "sendMessage",
      chat_id: chatId,
      text: "🌊 Welcome to The Ark!\n\n🚀 Tap the button below to launch the app.",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🚀 Launch The Ark",
              web_app: {
                url: "https://the-ark-ui-react.aminatourepro.repl.co"
              }
            }
          ]
        ]
      }
    };

    return res.json(reply);
  }

  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Bot server running on port ${PORT}`);
});
