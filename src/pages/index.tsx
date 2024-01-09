import { RandomFox } from "@/components/RandomFox"
import { useState } from "react";

// Generates a random number between 1 and 122
const randomNumber = () => Math.floor(Math.random() * 122) + 1;

export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`
  ]);
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        {
          images.map((image, index) => (
            <div key={index} className="p-4">
              <RandomFox image={image}/>
            </div>
          ))
        }
      </h1>
    </>
  )
}
