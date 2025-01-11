import React from "react";
import metasplit from "../img/Metasplit.png"
import altera from "../img/Altera.jpg"

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
      link: "https://example.com/task-manager"
    }
  ];
