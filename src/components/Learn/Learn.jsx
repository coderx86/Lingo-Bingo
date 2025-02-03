import { NavLink, useLoaderData } from "react-router-dom";
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
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-16 mb-20">
            {cardNumArray.map((card, index) => (
              <LessonCard key={index} cardNum={card} />
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-center text-[#fd7379] text-3xl font-bold mb-6">
              learning the alphabet
            </h2>
            <p className="text-gray-600 text-center mb-8">
              In this video, you’ll learn how to be able to perfectly WRITE and
              READ all Hiragana, characters of the Japanese alphabet.
            </p>
            <div className="flex justify-center">
              <iframe
                className="rounded-xl"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6p9Il_j0zjc?si=AbsPjrs8eRBVcd8s"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center">
            <NavLink to="/tutorial">
              <button className="btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] text-white font-bold border-none">View More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
