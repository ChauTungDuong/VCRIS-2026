import { MapPin, Plane, Train, Car, ExternalLink } from "lucide-react";
import { venue, CONF } from "../data/conferenceData";

export default function Venue() {
  const venueImages = [
    "https://vcris.org/wp-content/uploads/2024/03/2022-11-08-1024x672.jpg",
    "https://vcris.org/wp-content/uploads/2024/03/z5027586123041_31223954bd029175686cbedd54c930df-1024x768.jpg",
    "https://vcris.org/wp-content/uploads/2024/01/Toa-nha-Ban-co-yeu-chinh-phu-4.jpg",
    "https://vcris.org/wp-content/uploads/2024/03/z5027586097524_65d422081545cf19ec03fccfe8cde563-1024x768.jpg",
    "https://vcris.org/wp-content/uploads/elementor/thumbs/khu-nha-o-can-bo-nhan-vien-ban-co-yeu-chinh-phu-le-van-luong1589905471-r2p4pj7zyykiqzh6et3cm7zzba6zyl03ry1vhe2qkw.jpg",
    "https://vcris.org/wp-content/uploads/2024/03/z5027586073243_788c6f558db94688caaa268000a081d6-1024x768.jpg"
  ];

  return (
    <div className="pt-16">
      {/* Hero with Venue Photo */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1758413149178-95efe71954fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlJTIwSGFub2l8ZW58MXx8fHwxNzcyNzY2NDAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Academy of Cryptography Techniques"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />

        <div className="absolute bottom-12 left-0 right-0">
          <div className="max-w-[1200px] mx-auto px-6">
            <h1
              className="text-[56px] font-bold italic text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Venue & Travel
            </h1>
            <p
              className="text-[18px] text-white/80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Academy of Cryptography Techniques · {CONF.location}
            </p>
          </div>
        </div>
      </section>

      {/* Venue Details */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-16">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-rule h-[500px]">
              <iframe
                src={venue.mainVenue.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info */}
            <div>
              <h2
                className="text-[36px] font-bold italic text-ink mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Academy of Cryptography Techniques
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-cipher flex-shrink-0 mt-1"
                  />
                  <div>
                    <p
                      className="text-[15px] text-ink font-medium mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Address
                    </p>
                    <p
                      className="text-[15px] text-slate"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {venue.mainVenue.address}
                    </p>
                  </div>
                </div>

                <div>
                  <p
                    className="text-[15px] text-ink font-medium mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Getting There
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Plane
                        size={18}
                        className="text-cipher flex-shrink-0 mt-0.5"
                      />
                      <p
                        className="text-[14px] text-slate"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <span className="font-medium text-ink">
                          From Airport:
                        </span>{" "}
                        30 minutes by taxi from Noi Bai International Airport
                        (HAN)
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Car
                        size={18}
                        className="text-cipher flex-shrink-0 mt-0.5"
                      />
                      <p
                        className="text-[14px] text-slate"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <span className="font-medium text-ink">By Taxi:</span>{" "}
                        Grab and traditional taxis readily available throughout
                        Hanoi
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Train
                        size={18}
                        className="text-cipher flex-shrink-0 mt-0.5"
                      />
                      <p
                        className="text-[14px] text-slate"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <span className="font-medium text-ink">
                          Public Transit:
                        </span>{" "}
                        Bus routes 18, 34, and 86 stop nearby
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={venue.mainVenue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cipher text-white text-[14px] font-semibold hover:shadow-lg hover:shadow-cipher/40 transition-all"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View on Google Maps
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Photos */}
      <section className="bg-warm py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-[44px] font-bold italic text-ink text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Photos of the Academy
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {venueImages.map((src, idx) => (
              <div 
                key={idx} 
                className="h-48 md:h-64 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Venue photo ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About The Academy */}
      <section className="bg-deep py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center text-white">
          <h2
            className="text-[44px] font-bold italic mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Academy of Cryptography Techniques
          </h2>
          <div className="max-w-[900px] mx-auto text-left space-y-4">
            <p
              className="text-[16px] text-white/80 leading-relaxed italic"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Academy of Cryptography Techniques is the sole institution in Vietnam dedicated to both undergraduate and postgraduate education, as well as research in cryptographic science and technology for the Vietnam Government Information Security Commission (VGISC). Presently, the Academy offers three major programs: Information Security, Information Technology, and Telecommunication-Electronic Engineering.
            </p>
            <p
              className="text-[16px] text-white/80 leading-relaxed italic"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Its strategic vision is to evolve into a premier center for cryptographic techniques and information security training, catering to the human resource needs of VGISC and various sectors in the socio-economic landscape. Staffed with expert scientists and lecturers specializing in cryptographic techniques and information security, the Academy’s curriculum aligns with the advancements in science and technology, addressing practical demands. Additionally, it holds the distinction of being one of the eight principal institutions for information security training, as decreed by the Vietnamese Prime Minister.
            </p>
            <p
              className="text-[16px] text-white/80 font-medium mt-6 text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              For more information about the Academy of Cryptography Techniques, please visit:{" "}
              <a
                href="https://actvn.edu.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cipher hover:underline"
              >
                https://actvn.edu.vn/
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
