import { NavLink } from "react-router-dom";

const Tutorial = () => {
    return (
        <div className="pt-24 bg-gradient-to-b from-[#58b58d44] to-[#f1ab4a3b]">
            <div className="w-[80%] mx-auto py-16">
                <div>
                    <h1 className="text-5xl font-bold text-center text-[#fd7379] mb-4">Tutorial</h1>
                    <p className="text-gray-600 text-center mb-8 max-w-[600px] mx-auto">
                        Start your journey into Japanese with our easy-to-follow tutorials. Learn essential vocabulary, pronunciation, and cultural insights step by step!
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    {[
                        "rGrBHiuPlT0",
                        "bOUqVC4XkOY",
                        "JnoZE51WZg4",
                        "k74yjmfFb_A",
                        "KUIWRsVZZZA",
                        "ZGGufccTLso",
                        "W0n-ODPwtzA",
                        "p9PEIsOzJ5E",
                        "Pc86Xg2MX-U",
                        "Lo5_5k7EPIM"
                    ].map((id) => (
                        <div key={id} className="w-full aspect-video rounded-xl overflow-hidden">
                            <iframe
                                src={`https://www.youtube.com/embed/${id}?si=example`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <NavLink to="/learn">
                    <button className="btn bg-gradient-to-r from-[#fd7379] to-[#f1ab4a] text-white">View More</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Tutorial;
