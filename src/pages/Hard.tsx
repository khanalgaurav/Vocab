import { useState, useEffect } from "react";
import words from "../Data/hard.ts";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const Hard = () => {
  const [random, setRandom] = useState<number>(Math.floor(Math.random() * 239));
  const [currentWord, setCurrentWord] = useState(words[random].word);

  useEffect(() => {
    setCurrentWord(words[random].word);
  }, [random]);
  const handleSpeak = () => {
    const value = new SpeechSynthesisUtterance(currentWord);
    window.speechSynthesis.speak(value);
  };
  return (
    <div className="flex justify-center pt-5  h-screen">
      <div className="border-2 border-black rounded-2xl p-5 h-[32rem] w-80 relative overflow-x-hidden">
        <div className="flex justify-center items-center font-bold text-2xl rounded-lg h-1/3 bg-blue-500 text-white relative">
          <h1 className="">{words[random].word}</h1>
          <p className="absolute text-base bottom-0 right-2 font-light">
            Frequency:{words[random].frequency}
          </p>
          <p className="absolute text-base bottom-0 left-2 font-light">Hard</p>
          <HiOutlineSpeakerWave
            onClick={handleSpeak}
            className="absolute text-4xl top-0 right-2"
          />
        </div>
        <div className="">
          <p className="text-base font-bold">
            <span className="text-green-600 text-lg">Meaning:-</span>
            <br /> "{words[random].definition}"
          </p>
          <p className="text-base ">
            <span className="text-green-600 font-bold text-lg">Example:-</span>
            <br /> {words[random].example}
          </p>
        </div>
        {/* <button className="w-fit bg-blue-500 px-7 py-2 rounded-full text-white mt-5 ml-[50%] -translate-x-[50%]">
             Next Word
           </button> */}
        <div className="absolute flex justify-center items-center bottom-0 w-full left-0 h-14 bg-blue-500 text-white font-bold">
          <button
            className="w-full h-full"
            onClick={() => setRandom(Math.floor(Math.random() * 239))}
          >
            Next Word
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hard;
