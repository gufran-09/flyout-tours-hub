

const items = [
    { title: "Dubai", image: "/dubai.jpeg", span: "col-span-1 md:col-span-2 md:row-span-1" },
    { title: "Ras Al Khaimah", image: "/rak.webp", span: "col-span-1 md:col-span-2 md:row-span-1" },
    { title: "Sharjah", image: "/sharjah.jpeg", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "Abu Dhabi", image: "/abudhabi.webp", span: "col-span-1 md:col-span-2 md:row-span-1" },
    { title: "Ajman", image: "/ajman.webp", span: "col-span-1 md:col-span-1 md:row-span-1" },
];

export default function UaeShowcaseSection() {
    return (
        <section className="w-full px-4 md:px-[50px] py-14 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto min-h-[600px] md:h-[70vh]">

                {items.map((item, i) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden rounded-2xl group min-h-[200px] md:min-h-0 ${item.span}`}
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition duration-500" />

                        {/* Title */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-white text-3xl md:text-4xl xl:text-5xl font-serif tracking-wide drop-shadow-lg">
                                {item.title.toUpperCase()}
                            </h2>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
