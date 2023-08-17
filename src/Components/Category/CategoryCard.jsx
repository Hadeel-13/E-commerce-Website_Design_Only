export default function CategoryCard({ background, image, title }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-all">
                <div className={`${background} rounded-full w-28 h-28 shadow-lg`}>
                    <div className="h-full flex justify-center items-center">
                        <img
                            width={75}
                            height={75}
                            src={image}
                            alt={image}
                        />
                    </div>
                </div>
                <div className="text-slate-600">{title}</div>
            </div>
        </>
    );
}
