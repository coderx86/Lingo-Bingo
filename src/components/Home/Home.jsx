import logoFlat from "../../assets/Flat-img.png";
import jpLogo from "../../assets/jp-image.png";
import InteractivePng from "../../assets/InteractivePng.png";
import Pronounciation from "../../assets/Pronounciation.png";
import mission from "../../assets/mission.png";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <div className="bg-gradient-to-r from-[#3588aa] to-[#58b58c] text-white  pt-24">
        <div className="w-[80%] mx-auto flex items-center py-8">
          <div className="carousel w-full mr-10">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={logoFlat} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href="#slide2"
                  className="btn btn-circle bg-[#58b58c] border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle bg-[#58b58c] border-none"
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={jpLogo} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href="#slide1"
                  className="btn btn-circle bg-[#58b58c] border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-circle bg-[#58b58c] border-none"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-5xl font-bold mb-3">Lingo Bingo:</h1>
              <h2 className="text-3xl font-bold mb-7">
                Fun-Filled Language Learning
              </h2>
              <p className="mb-10">
                Lingo Bingo is an interactive app that makes language learning
                fun, helping users master vocabulary and communication skills
                through engaging games, quizzes, and challenges across multiple
                languages.
              </p>
            </div>
            <div>
              <div className="mb-2">
                <button className="btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] border-none text-white font-bold">
                  Get Started
                </button>
              </div>
              <div>
                <button className="btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] border-none text-white font-bold">
                  I Already Have an Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About LIngoBIngo */}
      <section className="bg-[#58b58d44] py-12">
        <div className="w-[80%] mx-auto text-[#fd7379]">
          <h2 className="text-5xl font-bold text-center">About Lingo Bingo</h2>
          <div className="flex justify-around items-center">
            <div className="max-w-[500px]">
              <h2 className="text-4xl font-bold mb-7">
                Interactive Vocabulary Learning
              </h2>
              <p className="text-gray-600">
                Discover a dynamic approach to mastering vocabulary through
                immersive activities that make learning engaging and memorable,
                helping you retain words effortlessly in multiple languages.
              </p>
            </div>
            <div className="max-w-[500px]">
              <img src={InteractivePng} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="max-w-[500px]">
              <img src={Pronounciation} alt="" />
            </div>
            <div className="max-w-[500px]">
              <h2 className="text-4xl font-bold mb-7">
                Vocabulary with Pronunciation
              </h2>
              <p className="text-gray-600">
                Learn the correct pronunciation alongside new words, ensuring
                you not only expand your vocabulary but also speak confidently
                and accurately in any language.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="max-w-[500px]">
              <h2 className="text-4xl font-bold mb-7">
                Personalized Learning Missions
              </h2>
              <p className="text-gray-600">
                Set your own language learning goals and embark on customized
                missions tailored to your pace and style, making the journey fun
                and uniquely yours.
              </p>
            </div>
            <div className="max-w-[500px]">
              <img src={mission} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
