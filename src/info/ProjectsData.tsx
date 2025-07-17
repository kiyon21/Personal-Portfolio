import React from "react";
import metasplit from "../img/Metasplit.png"
import altera from "../img/Altera.jpg"
import motive from "../img/MotiveComponents.png"
import rtos from "../img/rtos.png"
import nids from "../img/nids.png"
import fiveDof from "../img/5dof.png"
import finsightAi from "../img/Finsight_AI_img.png"

export const projects = [
  {
    id: 0,
    title: "Finsight AI",
    description: "Developing an AI-powered financial advisor web app using React and FastAPI that analyzes bank statements, receipts, and transactions to classify expenses, summarize spending, and generate personalized budgeting advice. It will integrate Hugging Face models for document QA, OCR, classification, summarization, and financial query answering.",
    imageUrl:finsightAi,
    link:"https://github.com/kiyon21/Finsight-AI"
  },
  {
    id: 1,
    title: "5dof VR Livestreaming",
    description: "5DOF-VR-LiveStreaming is an innovative immersive technology solution that transforms traditional VR streaming by enabling near-six degrees of freedom (5 DoF) in live video environments. This groundbreaking system uses precision mechanical actuation to physically reposition a 360° camera in real-time based on user movement, creating an unprecedented level of immersion for remote exploration and telepresence applications.",
    imageUrl:fiveDof,
    link:"https://github.com/kiyon21/5dof-VR-livestreaming"
  },
  {
    id: 2, 
    title:"Secure Network Monitor",
    description:"SecureNetworkMonitor is a robust, high-performance network security solution designed to protect critical infrastructure against sophisticated cyber threats. Developed in C++, this powerful intrusion detection system provides real-time network monitoring and analysis to identify, alert, and respond to potential security breaches before they compromise your systems.",
    imageUrl:nids,
    link:"https://github.com/kiyon21/SecureNetworkMonitor"
  },
  {
    id: 3, 
    title:"ARM-Based RTOS",
    description:"Developed a pre-emptive, priority-based, multi-tasking kernel using C and ARM Assembly for an ARM SoC. Includes memory management scheme, task manipulation, scheduler logistics and test framework for the kernel, verifying its operation through extensive tests.",
    imageUrl:rtos,
    link:"https://github.com/kiyon21/RTOS-ARM-Based"
  },
    {
      id: 4,
      title: "Metasplit",
      description: "MetaSplit is a cutting-edge React application that leverages the power of AI (using the OpenAI API) and integrates with MetaMask to revolutionize group transactions, particularly for carpooling scenarios. By employing advanced algorithms and AI capabilities, MetaSplit accurately calculates equal payments, taking into account car mileage, distance traveled, and gas prices.",
      imageUrl: metasplit,
      link: "https://github.com/kiyon21/MetaSplit/"
    },
    {
      id: 5,
      title: "Audio Player",
      description: "This project is a fully functional audio playback system designed to play any .WAV audio file stored on an SD card using the Altera DE2 development board. The system leverages the board's hardware capabilities, including the audio codec and SD card interface, to provide seamless audio playback. The software is written entirely in C and is optimized for real-time audio streaming, ensuring smooth and high-quality output.",
      imageUrl: altera,
      link: "https://github.com/kiyon21/Music-Player"
    },
    {
      id: 6, 
      title:"Motive - Android App",
      description:"Motive is a mobile app that connects people looking to play team sports with people hosting said sporting events. This application allows users to host their events and let people nearby be informed of what sports are being played, the specific participant details about the person, and any additional items required to participate.",
      imageUrl:motive,
      link:"https://github.com/kiyon21/Motive"
    },

  ];
