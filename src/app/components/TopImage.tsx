
interface TopImageProps {
    title: string;
}

export const TopImage = ({ title }: TopImageProps) => {
    return (
        <section className="relative h-[400px] overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1677092590812-78e7db4900d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9ncmFwaHklMjBjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjc2NjQwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Cryptography"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-deep/90" />
            </div>

            <div className="relative max-w-[1200px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
                <h1
                    className="text-[56px] font-bold italic text-white mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    {title}
                </h1>
            </div>
        </section>
    )

}

export default TopImage;