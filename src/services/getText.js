import MakeRequest from "./MakeRequests";

export const getDescription = async (userInput) => {
    console.log("Creando descripcion para " + userInput)
  const prompt = `Olvida lo anterior. Si "${userInput}" se refiere a una pelicula, serie, libro o cualquier contenido audiovisual genera un resumen corto. Si no es el caso, genera una descripcion corta de lo que sea que se refiera. En caso de no encontrar nada, vas a devolver un texto que diga "Sin descripcion para esta busqueda".`
  try {
    const response = await MakeRequest(prompt, 300);
    return response;
  } catch (error) {
    console.log(error);
  }
};
