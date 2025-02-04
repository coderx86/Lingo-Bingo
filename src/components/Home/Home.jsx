import logoFlat from "../../assets/Flat-img.png";
import jpLogo from "../../assets/jp-image.png";
import InteractivePng from "../../assets/InteractivePng.png";
import Pronounciation from "../../assets/Pronounciation.png";
import mission from "../../assets/mission.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import sharma from "../../assets/sharma~2.jpeg";
import alvarez from "../../assets/alvarez~2.jpeg";
import lee from "../../assets/Lee.jpeg";
import khan from "../../assets/aisha~2.jpeg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../layout/MainLayout";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { user } = useContext(authContext);

  return (
    <div>
      {/* Helmet */}
      <Helmet>
        <title>Lingo Bingo | Home</title>
      </Helmet>

      {/* banner */}
      <div className="bg-gradient-to-r w-full overflow-hidden from-[#3588aa] to-[#58b58c] text-white  pt-24">
        <div className="w-[80%] mx-auto sm:flex block items-center py-8">
          <div className="carousel mr-10 w-full">
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
            <div className="sm:text-left text-center">
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
            <div className="flex justify-center sm:justify-start">
              <div>
              <div className="mb-2 flex justify-center sm:justify-start">
                <NavLink to="/learn">
                  <button className="btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] border-none text-white font-bold">
                    Get Started
                  </button>
                </NavLink>
              </div>
              <div>
                {!user && (
                  <NavLink to="/login">
                    <button className="btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] border-none text-white font-bold">
                      I Already Have an Account
                    </button>
                  </NavLink>
                )}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="bg-gradient-to-b from-[#58b58d44] to-[#f1ab4a3b]">
        {/* About LIngoBIngo */}
        <section className=" py-12">
          <div className="w-[80%] mx-auto text-[#fd7379]">
            <h2 className="text-5xl font-bold text-center mb-4">
              About Lingo Bingo
            </h2>

            <div className="flex justify-around items-center">
              <div className="max-w-[500px]">
                <h2 className="text-4xl font-bold mb-7" data-aos="fade-right">
                  Interactive Vocabulary Learning
                </h2>
                <p
                  className="text-gray-600"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  Discover a dynamic approach to mastering vocabulary through
                  immersive activities that make learning engaging and
                  memorable, helping you retain words effortlessly in multiple
                  languages.
                </p>
              </div>
              <div className="max-w-[500px]" data-aos="flip-left">
                <img src={InteractivePng} alt="" />
              </div>
            </div>

            <div className="flex justify-around items-center">
              <div className="max-w-[500px]" data-aos="flip-right">
                <img src={Pronounciation} alt="" />
              </div>
              <div className="max-w-[500px]">
                <h2 className="text-4xl font-bold mb-7" data-aos="fade-left">
                  Vocabulary with Pronunciation
                </h2>
                <p
                  className="text-gray-600"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  Learn the correct pronunciation alongside new words, ensuring
                  you not only expand your vocabulary but also speak confidently
                  and accurately in any language.
                </p>
              </div>
            </div>

            <div className="flex justify-around items-center">
              <div className="max-w-[500px]">
                <h2 className="text-4xl font-bold mb-7" data-aos="fade-right">
                  Personalized Learning Missions
                </h2>
                <p
                  className="text-gray-600"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  Set your own language learning goals and embark on customized
                  missions tailored to your pace and style, making the journey
                  fun and uniquely yours.
                </p>
              </div>
              <div className="max-w-[500px]" data-aos="flip-left">
                <img src={mission} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Our Success */}
        <section>
          <div className="w-[80%] mx-auto pb-12">
            <div className="text-center mb-14">
              <h1 className="text-5xl font-bold mb-8 text-[#fd7379]">
                Our Success
              </h1>
              <p className="max-w-[600px] mx-auto text-gray-600">
                Empowering thousands to master languages with ease, Lingo Bingo
                transforms vocabulary learning into an engaging, impactful
                experience.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 text-white  text-center">
              <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#fd7379] to-[#f1ab4a]">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div className="text-2xl" style={{ height: 30 }}>
                      {isVisible ? (
                        <CountUp
                          className="font-semibold"
                          start={0}
                          end={5000}
                          duration={1.5}
                          suffix="+"
                        />
                      ) : null}
                    </div>
                  )}
                </VisibilitySensor>
                <h3 className="font-semibold">Learners</h3>
              </div>
              <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#fd7379] to-[#f1ab4a]">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div className="text-2xl" style={{ height: 30 }}>
                      {isVisible ? (
                        <CountUp
                          className="font-semibold"
                          start={0}
                          end={10}
                          duration={1.5}
                        />
                      ) : null}
                    </div>
                  )}
                </VisibilitySensor>
                <h3 className="font-semibold">Lessons</h3>
              </div>
              <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#fd7379] to-[#f1ab4a]">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div className="text-2xl" style={{ height: 30 }}>
                      {isVisible ? (
                        <CountUp
                          className="font-semibold"
                          start={0}
                          end={80}
                          duration={1.5}
                        />
                      ) : null}
                    </div>
                  )}
                </VisibilitySensor>
                <h3 className="font-semibold">Vocabulary</h3>
              </div>
              <div className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#fd7379] to-[#f1ab4a]">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div className="text-2xl" style={{ height: 30 }}>
                      {isVisible ? (
                        <CountUp
                          className="font-semibold"
                          start={0}
                          end={10}
                          duration={1.5}
                        />
                      ) : null}
                    </div>
                  )}
                </VisibilitySensor>
                <h3 className="font-semibold">Tutorials</h3>
              </div>
            </div>
          </div>
        </section>
        {/* Client opinion */}
        <section className="py-12">
      <div className="w-[80%] mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center">
            <h2 className="text-5xl text-[#3588aa] font-bold mb-6">
              What Our Learners Think
            </h2>
            <FaQuoteRight className="text-3xl text-[#fd7379]" />
          </div>
          <p className="max-w-[600px] mx-auto text-gray-600">
            Hear inspiring experiences and feedback from our users as they
            share how Lingo Bingo transformed their language learning journey.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {[
            { name: "Ravi Sharma", img: sharma, text: "The app's interactive approach helped me retain vocabulary effortlessly. Learning Japanese has never been this fun!" },
            { name: "Sofia Alvarez", img: alvarez, text: "I loved how pronunciation is taught alongside vocabulary. It gave me the confidence to speak Japanese without hesitation." },
            { name: "Michael Lee", img: lee, text: "Personalized missions kept me motivated and on track. I’ve made amazing progress in learning Japanese with Lingo Bingo!" },
            { name: "Aisha Khan", img: khan, text: "Lingo Bingo turned language learning into a daily habit. The engaging methods helped me master Japanese faster than I expected!" }
          ].map((review, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              <div className="bg-[#f1ab4a87] sm:flex block items-center justify-between max-w-[950px]">
                {/* odd */}
                {index % 2 === 0 && (
                  <img className="size-[200px] rounded-full p-6" src={review.img} alt={review.name} />
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-[#3588aa]">
                    {review.name}
                  </h3>
                  <FaQuoteLeft className="text-[#fd7379]" />
                  <p className="text-gray-600">{review.text}</p>
                </div>
                {/* even */}
                {index % 2 !== 0 && (
                  <div className="w-full flex justify-end">
                    <img className="size-[200px] rounded-full p-6" src={review.img} alt={review.name} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </main>
    </div>
  );
};

export default Home;
