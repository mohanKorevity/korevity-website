"use client";

import { useEffect, useRef } from "react";


export default function MouseGlow() {

  const glowRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    let mouseX = -500;
    let mouseY = -500;

    let currentX = -500;
    let currentY = -500;


    function handleMove(e: MouseEvent) {

      mouseX = e.clientX;
      mouseY = e.clientY;

    }



    let animationFrame: number;


    function animate() {

      const glow = glowRef.current;

      if (!glow) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }


      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;



      glow.style.background = `
        radial-gradient(
          420px circle at ${currentX}px ${currentY}px,
          rgba(34,211,238,0.14),
          rgba(59,130,246,0.08),
          transparent 70%
        )
      `;


      animationFrame = requestAnimationFrame(animate);

    }



    window.addEventListener(
      "mousemove",
      handleMove
    );


    animationFrame = requestAnimationFrame(
      animate
    );



    return () => {

      window.removeEventListener(
        "mousemove",
        handleMove
      );


      cancelAnimationFrame(
        animationFrame
      );

    };


  }, []);



  return (

    <div

      ref={glowRef}

      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        hidden
        md:block
      "

    />

  );

}