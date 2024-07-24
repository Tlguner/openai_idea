//node index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
config();

import OpenAI from "openai";

//seturp server
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const openai = new OpenAI();

  const openai = require("openai"); // OpenAI npm paketi yüklü olduğunu varsayıyorum.

  async function main() {
    const completion = await openai.chat.completions.create({
      response_format: { type: "json_object" },
      messages: [
        {
          role: "user",
          content:
            "give a web application example, cut it short. one example for beginner project, one for novice, and one for expert.",
        },
        {
          role: "system",
          content:
            "You are a website for web application. When a person is running out of idea to what to build. You give them an idea. Every time try to give a different answer. Keep the answers short.",
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const messageContent = completion.choices[0].message.content;

    // Mesajı parçalarına ayırmak için her örnek arasında belirgin bir ayraç kullanacağız.
  }
  main();
});

const port = 5000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
