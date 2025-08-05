"use client";

import React, { useEffect, useRef } from "react";

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dropsRef = useRef<number[]>([]);
  const columnsRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let animationFrameId: number;
    const fontSize = 16;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      columnsRef.current = Math.floor(canvas.width / fontSize);
      dropsRef.current = new Array(columnsRef.current).fill(1);
    };

    resize();
    window.addEventListener("resize", resize);

    function draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#222222";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < dropsRef.current.length; i++) {
        const text = "01{}[]<>/\\|_+-=abcdefghijklmnopqrstuvwxyz".charAt(
          Math.floor(Math.random() * 36)
        );
        const x = i * fontSize;
        const y = dropsRef.current[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }

        dropsRef.current[i]++;
      }
    }

    function loop() {
      // Burada ctx! ile kesin null olmadığını belirtiyoruz.
      draw(ctx!, canvas);
      animationFrameId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute top-0 left-0 -z-10"
      style={{ backgroundColor: "white" }}
    />
  );
}
