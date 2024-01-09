import { RandomFox } from "@/components/RandomFox"
import { useState } from "react";

// Generates a random number between 1 and 122
const randomNumber = () => Math.floor(Math.random() * 122) + 1;

// Generates simple unique id
const generateId = () => Math.random().toString(36).substring(2, 9);

type ImageItem = { id: string, url: string }

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([
    { id: generateId(), url: `https://randomfox.ca/images/${randomNumber()}.jpg`},
    { id: generateId(), url: `https://randomfox.ca/images/${randomNumber()}.jpg`},
    { id: generateId(), url: `https://randomfox.ca/images/${randomNumber()}.jpg`},
    { id: generateId(), url: `https://randomfox.ca/images/${randomNumber()}.jpg`},
  ]);
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        {
          images.map(({ id , url}) => (
            <div key={id} className="p-4">
              <RandomFox image={url}/>
            </div>
          ))
        }
      </h1>
    </>
  )
}
