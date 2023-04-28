import axios from "axios";
import { config } from "../config";

const { API_MODEL, API_URL, apiKey } = config

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
};

const MakeRequest = async (prompt, max_tokens=50) => {
    const data = {
      model: API_MODEL,
      prompt,
      max_tokens: max_tokens,
      n: 1,
      temperature: 0.3,
      // presence_penalty: 2,
      // frequency_penalty: 2
    };
  
    try {
      const response = await axios.post(API_URL, data, { headers });
      return response.data.choices[0]
    } catch (error) {
      console.log(error);
    }
  };

  export default MakeRequest;