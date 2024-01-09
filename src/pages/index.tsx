import { RandomFox } from "@/components/RandomFox"

// Generates a random number between 1 and 122
const randomNumber = () => Math.floor(Math.random() * 122) + 1;

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        <RandomFox image={`https://randomfox.ca/images/${randomNumber()}.jpg`}/>
      </h1>
    </>
  )
}
