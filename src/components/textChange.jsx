import { useEffect, useState } from "react";
const TextChange = ({isDarkMode}) => {
  const texts = [
    "Hi , I am Arijit",
    "I'm a frontend developer",
    "I'm a data enthusiast",
  ];
  const [currText, setcurrText] = useState("");
  const [endValue, setendValue] = useState(1);
  const [isForward, setisForward] = useState(true);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setcurrText(texts[index].substring(0, endValue));
      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }
      if (isForward && endValue === currText.length + 15) {
        setisForward(false);
      }
      if (!isForward && endValue === 0) {
        setisForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 50);
    return () => clearInterval(intervalID);
  }, [endValue, isForward, index, texts]);
  return <div className={`transition ease duration-300 ${isDarkMode?'text-white':'text-black'}`}>{currText}</div>;
};
export default TextChange;
