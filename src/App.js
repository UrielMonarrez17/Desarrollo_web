import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from"./Views/coursesView";
import Home from"./Views/Home";
import WishList from "./Views/WishList"; // Importar el componente de la wish list
import Footer from"./components/Footer";
import Navbar from "./components/navbar";
import back from"./constants";


function App() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const [isRecording, setIsRecording] = useState(false);
  const [assistantResponse, setAssistantResponse] = useState();
  const [reconoce,setReconoce]= useState(new SpeechRecognition());
  
  useEffect(() => {
    getMicrophoneAccess();
    
  },[]);

  useEffect(() => {
    asistente();

  },[reconoce]);



 
  reconoce.lang = "es-ES";  
  reconoce.interimResults = false;

  async function asistente() {   
  reconoce.onend = event => { reconoce.start(); };
	reconoce.onresult = reconoce.addEventListener("result", comandos);
    reconoce.start();
 }

async function comandos(event) {
  var respuestaChat;
  const oracion = event.results[0][0].transcript.toLowerCase().trim();
  //console.log("oracion:",oracion);
  if (oracion.includes("rick")||oracion.includes("reik")) {
    //console.log("entro:");
    respuestaChat= await assistantHelp(oracion);
    //console.log("respuesta:",respuestaChat);
    speak(respuestaChat);
}
}

function speak(text) {
  //console.log("va aqui")
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 1.3;
  //console.log("utter:",utterance)
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);

  utterance.onend = () => console.log("Discurso finalizado");
  utterance.onerror = (e) => console.error("Error en el discurso", e);
};
  const getMicrophoneAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsRecording(true);
      console.log("Access to microphone granted:", stream);
    } catch (error) {
      console.error("Microphone access denied:", error);
    }
  };

  
const assistantHelp=async(message)=>{

    try{
      const response= await fetch(`${back.connection}/api/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }), // Envía el mensaje en el cuerpo
    });
    const data = await response.json();
     setAssistantResponse(data.text);
      return data.text;
    }catch{
      console.error("Error en la función de ayuda");
    }
  }


  return (
    
    <Router>
      <Navbar tabIndex="1"/> 
      <Routes tabIndex="2">
        <Route path="/" element={<Home />} />           
        <Route path="/coursesView" element={<Courses />} /> 
        <Route path="/Wish_list" element={<WishList />} />   
      </Routes>
      <Footer/>
    </Router>
    

   
     
  );
}

export default App;
