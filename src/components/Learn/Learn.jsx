import { useLoaderData } from "react-router-dom";
import LessonCard from "../LessonCard/LessonCard";
import { Helmet } from "react-helmet-async";

const Learn = () => {
  const vocabulary = useLoaderData();
  const vocabsPerCard = 10;
  const itemsPerCard = Math.ceil(vocabulary.length / vocabsPerCard);
  const cardNumArray = [];
  for (let i = 0; i < itemsPerCard; i++) {
    cardNumArray.push(i + 1);
  }

  return (
    <div>
      <Helmet>
        <title>Lingo Bingo | Start-learning</title>
      </Helmet>
      <div className="pt-24 bg-gradient-to-b from-[#58b58d44] to-[#f1ab4a3b]">
        <div className="w-[80%] mx-auto py-14">
          <div>
            <h1 className="text-5xl font-bold text-[#fd7379] text-center mb-6">
              Let’s Dive into Learning <br />
              Japanese
            </h1>
            <p className="text-gray-600 text-center">
              Embark on an exciting language adventure with Lingo Bingo, where
              every step is designed to make learning fun and effective!
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-16 mb-10">
            {cardNumArray.map((card, index) => (
              <LessonCard key={index} cardNum={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
