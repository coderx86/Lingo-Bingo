import { RiSpeakFill } from "react-icons/ri";

const Card = ({ result }) => {
    function pronounceWord(word) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP'; // Japanese
        window.speechSynthesis.speak(utterance);
      }

  return (
    <div className="">
      <div className="">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn h-[70px] border-none flex w-full btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] text-white font-bold"
          onClick={() => document.getElementById(result.id).showModal()}
        >
          {result.meaning}
        </button>

        <dialog id={result.id} className="modal">
          <div className="modal-box bg-gradient-to-b from-[#3589aa81] to-[#58b58d42]">
            <h3 className="font-bold text-2xl text-center py-8 text-[#fd7379]">
              {result.word}
            </h3>
            <hr className="w-[80%] mx-auto" />
            <div className="px-10 py-4 text-[#3589aa]">
                <div className="flex items-center justify-between">
                    <h3>
                        <span className="font-bold">Pronounciation: </span>
                    {result.pronunciation}
                    </h3>
                    <button onClick={() => pronounceWord(result.word)} className="hover:text-white">
                    <RiSpeakFill className="text-xl hover:text-white" />
                    </button>
                </div>
              <h3>
                <span className="font-bold">Meaning: </span> {result.meaning}
              </h3>
              <h3>
                <span className="font-bold">Part of speech: </span>
                {result.part_of_speech}
              </h3>
              <h3>
                <span className="font-bold">Difficulty: </span>
                {result.difficulty}
              </h3>
              <h3>
                <span className="font-bold">When to say: </span>
                {result.when_to_say}
              </h3>
              <h3>
                <span className="font-bold">Example: </span>
                {result.example}
              </h3>
            </div>
            <div className="flex justify-center modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn text-white bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] border-none">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Card;
