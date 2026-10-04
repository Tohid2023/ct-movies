import { ChevronRight } from "lucide-react";

const news = [
    {
        title: "Game of Thrones returns to the spotlight",
        text: "Discover the latest news about your favorite series.",
    },
    {
        title: "New movies coming this week",
        text: "Check out the latest movies and series to watch.",
    },
    {
        title: "Popular shows everyone is watching",
        text: "Explore trending entertainment right now.",
    },
];

function HotNews() {
    return (
        <section className="mb-10">
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white md:text-2xl">
                    Hot News
                </h2>

                <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#f5c400]">
                    See all
                    <ChevronRight size={16} />
                </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {news.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-[#292929] bg-[#242424] p-5 transition hover:border-[#f5c400]"
                    >
                        <p className="mb-2 text-xs text-[#f5c400]">
                            HOT NEWS
                        </p>

                        <h3 className="text-base font-semibold text-white">
                            {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-5 text-gray-500">
                            {item.text}
                        </p>

                        <button className="mt-4 text-sm text-gray-300 hover:text-[#f5c400]">
                            Read more →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HotNews;