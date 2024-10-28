const express = require('express');
var router = express.Router();
const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");
//const OpenAI = require('openai');
const API_KEY ='AIzaSyBMW6r6KzWfMIPbnKCfSjwrAyd35UFH8eo'; 

router.post('/chat', async function(req, res) {
    const prompt = req.body.message;
  //console.log("prompt:",prompt);
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
            contents: [{
              parts:[{
                text: `Eres un asistente web útil y amigable de nombre Rick y tienes una funcion text to speech para hablar.Proporcionas información y ayuda a los usuarios con la navegacion de la pagina web.La pagina es de cursos sobre varios temas (Quimica, programacion, matematicas, etc). Responde de manera concisa,clara y en menos de 5 palabras.Cuando se te pida cambiar a alguna vista tu respuesta siempre debe contener la palabra redireccionando a (nombre de la vista pedida), para identificar los cambios de vista el usuario va a decir palabras similares a (ir, ve,cambia,muestra,abre).Responde a un usuario que dice lo siguiente:${prompt}`}]}]},
        {
          headers: {// Mejor usar variables de entorno
            'Content-Type': 'application/json',
          },
        }
      );
  
      const generatedText = response.data.candidates[0].content.parts[0].text; // Extrae el texto generado
      //console.log("text:", generatedText);  
  
      res.json({ text: generatedText });
  
  
    } catch (error) {
      console.error('Error al generar texto con Gemini:', error);
      // Envía una respuesta de error al cliente
      res.status(500).json({ error: 'Error al generar texto con Gemini' });
    }
  });

module.exports=router;