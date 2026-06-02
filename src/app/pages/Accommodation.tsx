import { MapPin, Bus, Car, Footprints, ExternalLink } from "lucide-react";
import { CONF } from "../data/conferenceData";
import PageRenderer from "../components/PageRenderer";
import PageTitle from "../components/PageTitle";

export default function Accommodation() {
  const accommodations = [
    {
      name: "Grand Plaza Hanoi Hotel",
      address: "117 Tran Duy Hung Street, Hanoi 100000 Vietnam",
      image: "https://vcris.org/wp-content/uploads/2024/03/hotel.png",
      link: "http://www.grandplazahanoi.com/kor/",
      time: {
        bus: "10 min",
        car: "10 min",
        walking: "25 min"
      }
    },
    {
      name: "Intercontinental Hanoi Westlake",
      address: "5 Tu Hoa, Hà Nội 00000, Việt Nam",
      image: "https://vcris.org/wp-content/uploads/2024/03/intercontiental.jpg",
      link: "https://hanoi.intercontinental.com/",
      time: {
        bus: "10 min",
        car: "10 min",
        walking: "25 min"
      }
    }
  ];

  return (
    <PageRenderer
      slug="accommodation"
      fallback={
        <div>
          <PageTitle title="Accommodation" />

      {/* Accommodation List */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-[36px] font-bold italic text-ink text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Recommended Hotels
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {accommodations.map((hotel, index) => (
              <div
                key={index}
                className="bg-white border border-rule rounded-2xl overflow-hidden hover:border-cipher hover:shadow-lg transition-all flex flex-col"
              >
                <div className="h-64 overflow-hidden relative group">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3
                      className="text-[24px] font-bold text-white leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {hotel.name}
                    </h3>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin size={20} className="text-cipher flex-shrink-0 mt-0.5" />
                    <div>
                      <p
                        className="text-[14px] text-slate font-medium uppercase tracking-wider mb-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Address
                      </p>
                      <p
                        className="text-[16px] text-ink"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {hotel.address}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p
                      className="text-[14px] text-slate font-medium uppercase tracking-wider mb-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Estimated time from the conference venue
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Bus size={18} className="text-cipher flex-shrink-0" />
                        <p
                          className="text-[15px] text-ink"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <span className="font-semibold text-slate">By Bus:</span> {hotel.time.bus}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Car size={18} className="text-cipher flex-shrink-0" />
                        <p
                          className="text-[15px] text-ink"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <span className="font-semibold text-slate">By Car:</span> {hotel.time.car}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Footprints size={18} className="text-cipher flex-shrink-0" />
                        <p
                          className="text-[15px] text-ink"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <span className="font-semibold text-slate">Walking:</span> {hotel.time.walking}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      href={hotel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full bg-slate/5 text-ink text-[14px] font-semibold hover:bg-cipher hover:text-white transition-all"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Visit Website
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          </section>
        </div>
      } />
  );
}
