import axios from "axios";
import { SYSTEM_PROMPT } from "../utils/SYSTEM_PROMPT.js";

export const haqdar = async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({
                success: false,
                message: "Chat content is required"
            })
        }
        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
            contents: [{
                role: 'user',
                parts: [{ text: `${SYSTEM_PROMPT}\n\n${text}` }]
            }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 800,
            }
        })

        return res.status(200).json({
            success: true,
            message: "Successfully fetched response from gemini",
            data: response.data.candidates[0].content.parts[0],
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        })
    }
}