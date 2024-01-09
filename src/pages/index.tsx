import { LazyImage } from "@/components/RandomFox";
import type { MouseEventHandler } from "react";
import { useState } from "react";

// Generates a random number between 1 and 122
const randomNumber = () => Math.floor(Math.random() * 122) + 1;

// Generates simple unique id
const generateId = () => Math.random().toString(36).substring(2, 9);

type ImageItem = { id: string, url: string }

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  // Add new fox
  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`
    }
    setImages([
      ...images,
      newImageItem
    ])
  }
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline">FOX</h1>
        <button onClick={addNewFox}>Add new fox</button>
        {
          images.map(({ id, url }) => (
            <div key={id} className="p-4">
              <LazyImage
                src={url}
                width="320"
                height="auto"
                className="mx-auto rounded-md bg-gray-300"
              />
            </div>
          ))
        }
      </div>
    </>
  )
}
