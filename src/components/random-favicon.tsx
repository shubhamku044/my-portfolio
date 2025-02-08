"use client";
import { useEffect } from "react";

function generateRandomSeed() {
  return Math.random().toString(36).substring(2, 10);
}

export default function RandomFavicon() {
  useEffect(() => {
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/svg+xml";
    favicon.href = `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${generateRandomSeed()}`;

    document.head.appendChild(favicon);

    return () => {
      document.head.removeChild(favicon);
    };
  }, []);

  return null;
}
