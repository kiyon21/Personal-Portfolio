import React from "react";
import metasplit from "../img/Metasplit.png"
import altera from "../img/Altera.jpg"
import motive from "../img/MotiveComponents.png"

export const projects = [

    {
      id: 1,
      title: "Metasplit",
      description: "MetaSplit is a cutting-edge React application that leverages the power of AI (using the OpenAI API) and integrates with MetaMask to revolutionize group transactions, particularly for carpooling scenarios. By employing advanced algorithms and AI capabilities, MetaSplit accurately calculates equal payments, taking into account car mileage, distance traveled, and gas prices.",
      imageUrl: metasplit,
      link: "https://github.com/kiyon21/MetaSplit/"
    },
    {
      id: 2,
      title: "Audio Player",
      description: "This project is a fully functional audio playback system designed to play any .WAV audio file stored on an SD card using the Altera DE2 development board. The system leverages the board's hardware capabilities, including the audio codec and SD card interface, to provide seamless audio playback. The software is written entirely in C and is optimized for real-time audio streaming, ensuring smooth and high-quality output.",
      imageUrl: altera,
      link: "https://github.com/kiyon21/Music-Player"
    },
    {
        id: 3, 
        title:"Motive - Android App",
        description:"Motive is a mobile app that connects people looking to play team sports with people hosting said sporting events. This application allows users to host their events and let people nearby be informed of what sports are being played, the specific participant details about the person, and any additional items required to participate.",
        imageUrl:motive,
        link:"https://github.com/chrissantoss/Motive"
    }
  ];
