import React from 'react';
import { venue } from "../data/conferenceData";
import { MapPin, Building, Info } from "lucide-react";

export default function Venue() {
  return (
    <div className="w-full">
        <h1
              className="text-[44px] font-bold italic text-ink leading-[1.15] mb-12 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Địa điểm
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8" style={{ fontFamily: "var(--font-body)" }}>
                <section className="bg-paper p-8 rounded-2xl border border-rule">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="text-cipher w-8 h-8" />
                    <h2 className="text-[24px] font-bold text-ink">Địa điểm tổ chức</h2>
                  </div>
                  <p className="text-[18px] font-semibold text-ink mb-2">{venue.mainVenue.name}</p>
                  <p className="text-[18px] text-slate">{venue.mainVenue.address}</p>
                </section>

                <section className="bg-paper p-8 rounded-2xl border border-rule">
                  <div className="flex items-center gap-3 mb-6">
                    <Building className="text-cipher w-8 h-8" />
                    <h2 className="text-[24px] font-bold text-ink">Khu vực tổ chức</h2>
                  </div>
                  <ul className="space-y-4">
                    {venue.areas.map((area, idx) => (
                      <li key={idx} className="flex flex-col gap-1">
                        <span className="text-[18px] font-semibold text-ink">{area.name}</span>
                        <span className="text-[17px] text-slate flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate mt-2 shrink-0"></span>
                          {area.location}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-[#e6f4f8] p-8 rounded-2xl border border-[#b0d9e6]">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="text-cipher w-6 h-6" />
                    <h2 className="text-[20px] font-bold text-[#0b2740]">Thông tin dành cho đại biểu</h2>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-[17px] text-[#0b2740]">
                    {venue.instructions.map((inst, idx) => (
                      <li key={idx}>{inst}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-rule shadow-sm">
                <iframe
                  src={venue.mainVenue.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Academy of Cryptography Techniques"
                ></iframe>
              </div>
          </div>
        </div>
  );
}
