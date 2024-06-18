"use client";

import ProjectCard from "@/components/ProjectCard";
import TopBar from "@/components/TopBar";
import { projects } from "@/lib/Models/projects";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    const canvas = canvasRef?.current;

    if (!canvas) {
      console.log("returning from here", canvas);
      return;
    }

    let cx = canvas.getContext("2d");

    if (!cx) {
      console.log("returning from here 2");
      return;
    }

    const INCREMENT = 12345,
      MULTIPLIER = 1103515245,
      MODULUS = Math.pow(2, 31);

    const stepX = 16,
      stepY = 16,
      sizeX = 1,
      sizeY = 1,
      marginTop = 0,
      marginBottom = 0,
      marginLeft = 0,
      marginRight = 0;

    let frameID;

    function lcg(x: any, c = INCREMENT, a = MULTIPLIER, m = MODULUS) {
      return (a * x + c) % m;
    }

    function createRandom(initialSeed = 0) {
      let seed = initialSeed;
      return {
        get currentSeed() {
          return seed;
        },
        reset(newSeed: any) {
          seed = newSeed;
        },
        get() {
          seed = lcg(seed);
          return seed / MODULUS;
        },
      };
    }

    const random = createRandom();

    function frame(frameTime: any) {
      if (!cx) {
        return;
      }
      // First element
      cx.clearRect(0, 0, cx.canvas.width, cx.canvas.height);
      for (let y = marginTop; y < cx.canvas.height - marginBottom; y += stepY) {
        random.reset(y);
        for (
          let x = marginLeft;
          x < cx.canvas.width - marginRight;
          x += stepX
        ) {
          const randomValue = random.get();
          const distX = randomValue * 16;
          const distY = randomValue * 16;
          const phase = randomValue * Math.PI * 2;
          cx.fillStyle = "#ddd";
          cx.fillRect(
            x,
            y,
            sizeX + Math.sin(phase + frameTime / 1000) * distX,
            sizeY + Math.cos(phase + frameTime / 1000) * distY
          );
        }
      }
      frameID = window.requestAnimationFrame(frame);
    }

    function resize() {
      if (!canvas) {
        return;
      }
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }

    function start() {
      window.addEventListener("resize", resize);
      window.dispatchEvent(new Event("resize"));

      frameID = window.requestAnimationFrame(frame);
    }

    start();
  }, [canvasRef?.current]);

  return (
    <main>
      <div className="font-primary">
        <canvas ref={canvasRef}></canvas>
        <TopBar />
        <div className="grid grid-cols-2 gap-1">
          {projects?.map((project, index) => {
            return (
              <ProjectCard
                imgSrc={project?.imgSrc}
                title={project?.name}
                key={index}
                projectID={`${project?.id}`}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
