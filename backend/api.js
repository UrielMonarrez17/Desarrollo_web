require('dotenv').config();
const express = require('express');
var router = express.Router();
const axios = require("axios");
const API_KEY = process.env.API_KEY;

const { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
//const OpenAI = require('openai');

router.post('/chat', async function(req, res) {
    const prompt = req.body.message;
  //console.log("prompt:",prompt);
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
            contents: [{
              parts:[{
                text: `Eres un asistente web útil y amigable de nombre Coco y tienes una funcion text to speech para hablar.Proporcionas información y ayuda a los usuarios con la navegacion de la pagina web.La pagina es de cursos sobre varios temas (Quimica, programacion, matematicas, etc). Responde de manera concisa,clara y en menos de 5 palabras.Cuando se te pida cambiar a alguna vista tu respuesta siempre debe contener la palabra redireccionando a (nombre de la vista pedida),las vistas que tiene la pagina son (pagina principal,perfil,categorias,wish list (si te dicen carrito de compras,lista de deseos o algo parecido redireccionalos a wish list),iniciarSesion, registro)), para identificar los cambios de vista el usuario va a decir palabras similares a (ir, ve,cambia,muestra,abre).Responde a un usuario que dice lo siguiente:${prompt}`}]}]},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      const generatedText = response.data.candidates[0].content.parts[0].text; // Extrae el texto generado
      //console.log("text:", generatedText);  
  
      res.json({ text: generatedText });
  
  
    } catch (error) {
      console.error('Error al generar texto con Gemini:', error);
      res.status(500).json({ error: 'Error al generar texto con Gemini' });
    }
  });


module.exports=router;