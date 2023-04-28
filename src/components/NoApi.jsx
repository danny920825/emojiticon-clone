import React, { useState } from "react";
import './NoApi.css';
const NoApi = () => {
    const [apiKey, setApiKey] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("apikey", apiKey);
        setApiKey("");
        window.location.reload();
    };

    const handleChange = (event) => {
        setApiKey(event.target.value);
    };

    return (
        <main>
            <section>
                <h1 className="title">No se encontró su clave de OpenAI</h1>
                <p style={parragraphStyle}>
                    Para usar esta aplicación, necesita una clave de API de
                    OpenAI. Puede obtener una en{" "}
                    <a href="https://beta.openai.com/">beta.openai.com</a>.
                </p>
                <p style={parragraphStyle}>
                    Una vez que tenga una clave de API, ingrésela abajo. 
                    La llave se Guardará en su navegador para que no tenga que volver a ingresarla
                    y no se enviará a ningún servidor.
                </p>
            </section>
            <form className="form" onSubmit={handleSubmit}>
            <h3>OpenAI API Key 🔐</h3>
                <div className="input_container">
                <input
                    id="api-key"
                    type="text"
                    value={apiKey}
                    onChange={handleChange}
                    placeholder="Ingresar API Key"
                />
                </div>
                <button type="submit">Guardar API Key</button>
            </form>
        </main>
    );
};

const parragraphStyle = {
    margin: "0",
    padding: "0",
    fontSize: "0.8rem",
    color: "#666",
    textAlign: "center",
    lineHeight: "1.5",
    fontWeight: "300",
    letterSpacing: "0.5px",
    fontFamily: "sans-serif",
}

export default NoApi;
