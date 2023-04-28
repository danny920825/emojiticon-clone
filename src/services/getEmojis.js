import MakeRequest from "./MakeRequests";

export const generateEmojis = async (userInput) => {
  const prompt = `Olvida lo anterior. Genera 10 amojis referentes a este prompt: "${userInput}". Ademas, no me los generes en formato texto, sino en formato de array, pero sin los corchetes. Solo separados por coma y sin saltos de linea. Si no es el caso, genera una descripcion corta de lo que sea que se refiera. En caso de no encontrar nada, vas a devolver un texto que diga "😶‍🌫️ No se encontraron emojis para esta busqueda 4️⃣0️⃣4️⃣".`;
  try {
    const response = await MakeRequest(prompt);
    return response;
  } catch (error) {
    console.log(error);
  }
};
