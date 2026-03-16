import { MapPin, Plane, Train, Car, ExternalLink } from "lucide-react";
import { venue, CONF } from "../data/conferenceData";

export default function Venue() {
  const hotels = [
    {
      name: venue.conferenceHotel.name,
      distance: "~10 min",
      stars: 4,
      note: "Conference hotel — special rates available",
    },
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

      {/* Accommodation */}
      <section className="bg-warm py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-[44px] font-bold italic text-ink text-center mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Recommended Hotels
          </h2>
          <p
            className="text-[16px] text-slate text-center mb-12"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Special conference rates available at selected partner hotels
          </p>

          <div className="grid grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.name}
                className="bg-white border border-rule rounded-2xl p-6 hover:border-cipher hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3
                    className="text-[18px] font-semibold text-ink"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {hotel.name}
                  </h3>
                  <div className="flex gap-0.5">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <span key={i} className="text-cipher">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-slate" />
                  <span
                    className="text-[13px] text-slate"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {hotel.distance} from venue &mdash;{" "}
                    {venue.conferenceHotel.address}
                  </span>
                </div>
                {hotel.note && (
                  <p
                    className="text-[12px] font-medium text-cipher mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {hotel.note}
                  </p>
                )}
                <a
                  href={`mailto:${CONF.contactEmail}?subject=Conference Hotel Rate Inquiry`}
                  className="text-[13px] font-medium text-cipher hover:underline"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Request Conference Rate →
                </a>
              </div>
            ))}
          </div>

          <p
            className="text-[13px] text-slate italic text-center mt-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            For hotel inquiries, contact{" "}
            <a
              href={`mailto:${CONF.contactEmail}`}
              className="text-cipher hover:underline"
            >
              {CONF.contactEmail}
            </a>
          </p>
        </div>
      </section>

      {/* Venue Photos */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-[44px] font-bold italic text-ink text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Conference Facilities
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="h-64 rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1771911646904-61f0fc9033e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwaGFsbCUyMGludGVyaW9yfGVufDF8fHx8MTc3MjY5NDU4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Main Conference Hall"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="h-64 rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500"
                alt="Breakout Rooms"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="h-64 rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=500"
                alt="Networking Area"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Hanoi */}
      <section className="bg-deep py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-[44px] font-bold italic text-white text-center mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Discover Hanoi
          </h2>
          <p
            className="text-[16px] text-white/70 text-center max-w-[700px] mx-auto mb-12"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Vietnam's capital blends ancient Asian culture with French colonial
            influence. Experience over 1,000 years of history while enjoying
            world-class cuisine and vibrant street life.
          </p>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: "Old Quarter",
                description:
                  "Explore the historic heart of Hanoi with its narrow streets, traditional shops, and street food culture",
              },
              {
                title: "Hoan Kiem Lake",
                description:
                  "Visit the iconic Turtle Tower and Ngoc Son Temple in the city's spiritual center",
              },
              {
                title: "Vietnamese Cuisine",
                description:
                  "Savor authentic pho, bun cha, and ca phe sua da in their birthplace",
              },
            ].map((attraction) => (
              <div key={attraction.title} className="text-center">
                <h3
                  className="text-[20px] font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {attraction.title}
                </h3>
                <p
                  className="text-[14px] text-white/60 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
