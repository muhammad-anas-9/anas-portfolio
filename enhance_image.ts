import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("No API key found");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function run() {
  try {
    console.log("Fetching image...");
    const response = await fetch("https://avatars.githubusercontent.com/u/104106571?v=4&size=1024");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Data = buffer.toString("base64");

    console.log("Generating enhanced image...");
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Data,
              mimeType: "image/jpeg",
            },
          },
          {
            text: 'Enhance this image to make it high resolution, clear, and professional. Keep the same person and pose, just make it look like a high-quality studio portrait.',
          },
        ],
      },
    });

    for (const part of result.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        fs.writeFileSync("public/profile-enhanced.png", Buffer.from(base64EncodeString, "base64"));
        console.log("Image saved to public/profile-enhanced.png");
        return;
      }
    }
    console.log("No image found in response");
  } catch (e) {
    console.error(e);
  }
}

run();
