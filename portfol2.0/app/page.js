"use client";

import { TypewriterEffect } from "@/components/ui/Features/typewriter-effect";
import { TechTicker } from "@/components/ui/Features/techticker";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  const logos = [
      "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
      "https://raw.githubusercontent.com/github/explore/main/topics/java/java.png",
      "https://raw.githubusercontent.com/github/explore/main/topics/cpp/cpp.png",
      "https://raw.githubusercontent.com/github/explore/main/topics/postgresql/postgresql.png",
      "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
      "https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png",
      "https://raw.githubusercontent.com/github/explore/main/topics/spring-boot/spring-boot.png",
      "https://raw.githubusercontent.com/github/explore/main/topics/angular/angular.png",
      "https://raw.githubusercontent.com/github/explore/main/topics/django/django.png",
      "https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000",
      "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
      "https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png",
      "https://raw.githubusercontent.com/github/explore/main/topics/azure/azure.png",
      "https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png",
  ];
  
  return (
    <div className="relative min-h-screen bg-gray-50">
    {/* Sparkles background */}
    <SparklesCore className="absolute inset-0 z-0" />

    <div className="relative z-10 flex flex-col items-center justify-center fixed top-35 left-0 w-full">
      <TypewriterEffect words={[{ text: "Jacob McDaniels"}]} />
      
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center pt-45">
      <TechTicker logos={logos} speed={50}></TechTicker>
    </div>

    
  </div>

    
  );
}

