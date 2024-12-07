import { Link } from "react-router-dom";

const LessonCard = ({ cardNum }) => {
    return (
        <div>
            <Link to={`/lesson/${cardNum}`}>
            <button className="btn h-[70px] border-none w-full bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] text-white font-bold text-white">Lesson-{cardNum}</button>
            </Link>
        </div>
    );
};

export default LessonCard;