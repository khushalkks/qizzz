// src/components/VantaBirds.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

const VantaBirds = () => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null); // store the effect instance

  useEffect(() => {
    if (!effectRef.current) {
      effectRef.current = BIRDS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        vertexColors: true , // For older versions of Three.js

        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0b1120, // optional: customize background
        color1: 0xfff33f,
        color2: 0xff3f81,
        wingSpan: 20,
        speedLimit: 4.0,
        separation: 50,
        alignment: 50,
        cohesion: 50
      });
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }} />;
};

export default VantaBirds;
