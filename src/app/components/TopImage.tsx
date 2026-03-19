
interface TopImageProps {
    title: React.ReactNode;
}

export const TopImage = ({ title }: TopImageProps) => {
    const isSimpleTitle = typeof title === "string" || typeof title === "number";

    return (
        <div className="relative h-[560px] md:h-[640px] overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="src/assets/background.jpg"
                    alt="Cryptography"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-deep/90" />
            </div>
            <div
                className={isSimpleTitle
                    ? "relative max-w-[1200px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center"
                    : "relative h-full"}
            >
                {isSimpleTitle ? (
                    <h1
                        className="text-[56px] font-bold italic text-white mb-4"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        {title}
                    </h1>
                ) : (
                    title
                )}
            </div>
        </div>
    )

}

export default TopImage;