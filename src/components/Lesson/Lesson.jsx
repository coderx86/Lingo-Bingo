import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";

const Lesson = () => {
    const vocabs = useLoaderData();
    const { cardNum } = useParams();
    const vocabsPerCard = 10;
    const cardNumIn = (cardNum*vocabsPerCard)-vocabsPerCard;
    const cardNumFi = cardNum*vocabsPerCard;
    const vocabChunks = vocabs.slice(cardNumIn, cardNumFi);
    return (
        <div className="pt-24 bg-gradient-to-b from-[#58b58d44] to-[#f1ab4a3b]">
            <div className="w-[80%] mx-auto pt-10 pb-20">
                <h2 className="text-5xl font-bold text-[#fd7379] text-center mb-16">Lesson-{cardNum}</h2>
                <div className="grid grid-cols-3 gap-4">
                    {
                        vocabChunks.map(result=><Card key={result.id} result={result} ></Card>)
                    }
                </div>
                <Link to="/learn">
            <div className="flex mt-20 p-2 border-2 text-gray-600 border-gray-600 w-[150px] rounded-xl">
                <span className="font-bold">{"<<"}</span><h3> Back to Lesson</h3>
            </div>
            </Link>
            </div>
        </div>
    );
};

export default Lesson;