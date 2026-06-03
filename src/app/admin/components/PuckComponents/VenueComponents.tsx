import React from "react";
import { ComponentConfig } from "@measured/puck";
import { MapPin, Plane, Train, Car, ExternalLink } from "lucide-react";
import PageTitle from "../../../components/PageTitle";
import { makeMediaField } from "./MediaPickerField";
import { RichTextField } from "./RichTextField";

// ==========================
// VenuePageTitle
// ==========================
export type VenuePageTitleProps = {
  title: string;
};

export const VenuePageTitle: ComponentConfig<VenuePageTitleProps> = {
  label: "Venue Page Title",
  fields: {
    title: { type: "text", label: "Title" },
  },
  defaultProps: {
    title: "Venue & Travel",
  },
  render: ({ title }) => {
    return <PageTitle title={title} />;
  },
};

// ==========================
// VenueDetails
// ==========================
export type VenueDetailsProps = {
  title: string;
  mapEmbed: string;
  address: string;
  fromAirport: string;
  byTaxi: string;
  publicTransit: string;
  mapUrl: string;
};

export const VenueDetails: ComponentConfig<VenueDetailsProps> = {
  label: "Venue Details",
  fields: {
    title: { type: "text", label: "Title" },
    mapEmbed: { type: "textarea", label: "Map Embed URL" },
    address: { type: "text", label: "Address" },
    fromAirport: { type: "text", label: "From Airport text" },
    byTaxi: { type: "text", label: "By Taxi text" },
    publicTransit: { type: "text", label: "Public Transit text" },
    mapUrl: { type: "text", label: "Map Link URL" },
  },
  defaultProps: {
    title: "Academy of Cryptography Techniques",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2952402283086!2d105.79515667618218!3d20.980798189422325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc508f938fd%3A0x883e474806a2d1f2!2sAcademy%20of%20Cryptography%20Techniques!5e0!3m2!1sen!2s!4v1708493181813!5m2!1sen!2s",
    address: "141 Chien Thang Street, Tan Trieu, Thanh Tri, Hanoi, Vietnam",
    fromAirport: "30 minutes by taxi from Noi Bai International Airport (HAN)",
    byTaxi: "Grab and traditional taxis readily available throughout Hanoi",
    publicTransit: "Bus routes 18, 34, and 86 stop nearby",
    mapUrl: "https://maps.app.goo.gl/3QW6zR6B2hZ6V4Mv7",
  },
  render: ({ title, mapEmbed, address, fromAirport, byTaxi, publicTransit, mapUrl }) => {
    return (
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-rule h-[500px]">
              <iframe
                src={mapEmbed}
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
                {title}
              </h2>

              <div className="mb-8">
                <DropZone zone="description" className="text-[16px] text-ink/80 leading-relaxed space-y-4" />
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-cipher flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[15px] text-ink font-medium mb-1" style={{ fontFamily: "var(--font-body)" }}>
                      Address
                    </p>
                    <p className="text-[15px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
                      {address}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[15px] text-ink font-medium mb-3" style={{ fontFamily: "var(--font-body)" }}>
                    Getting There
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Plane size={18} className="text-cipher flex-shrink-0 mt-0.5" />
                      <p className="text-[14px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
                        <span className="font-medium text-ink">From Airport:</span> {fromAirport}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Car size={18} className="text-cipher flex-shrink-0 mt-0.5" />
                      <p className="text-[14px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
                        <span className="font-medium text-ink">By Taxi:</span> {byTaxi}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Train size={18} className="text-cipher flex-shrink-0 mt-0.5" />
                      <p className="text-[14px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
                        <span className="font-medium text-ink">Public Transit:</span> {publicTransit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={mapUrl}
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
    );
  },
};

// ==========================
// VenuePhotoGrid (Container)
// ==========================
import { DropZone } from "@measured/puck";

export type VenuePhotoGridProps = {
  title: string;
};

export const VenuePhotoGrid: ComponentConfig<VenuePhotoGridProps> = {
  label: "Venue Photo Grid",
  fields: {
    title: { type: "text", label: "Title" },
  },
  defaultProps: {
    title: "Photos of the Academy",
  },
  render: ({ title }) => {
    return (
      <section className="bg-warm py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-[44px] font-bold italic text-ink text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          <DropZone 
            zone="photos" 
            className="grid grid-cols-2 md:grid-cols-3 gap-6" 
          />
        </div>
      </section>
    );
  },
};

// ==========================
// VenuePhotoItem
// ==========================
export type VenuePhotoItemProps = {
  src: string;
  alt: string;
};

export const VenuePhotoItem: ComponentConfig<VenuePhotoItemProps> = {
  label: "Venue Photo Item",
  fields: {
    src: makeMediaField("Image"),
    alt: { type: "text", label: "Alt Text" },
  },
  defaultProps: {
    src: "https://vcris.org/wp-content/uploads/2024/03/2022-11-08-1024x672.jpg",
    alt: "Venue photo",
  },
  render: ({ src, alt }) => {
    return (
      <div className="h-48 md:h-64 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    );
  },
};

// ==========================
// VenueAboutContainer
// ==========================
export type VenueAboutContainerProps = {
  title: string;
};

export const VenueAboutContainer: ComponentConfig<VenueAboutContainerProps> = {
  label: "Venue About Container",
  fields: {
    title: { type: "text", label: "Title" },
  },
  defaultProps: {
    title: "Academy of Cryptography Techniques",
  },
  render: ({ title }) => {
    return (
      <section className="bg-deep py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center text-white">
          <h2
            className="text-[44px] font-bold italic mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          <DropZone 
            zone="content" 
            className="max-w-[900px] mx-auto text-left space-y-4 flex flex-col" 
          />
        </div>
      </section>
    );
  },
};

// ==========================
// VenueText
// ==========================
export type VenueTextProps = {
  content: string;
  color?: "white" | "slate" | "ink";
};

export const VenueText: ComponentConfig<VenueTextProps> = {
  label: "Venue Text Paragraph",
  fields: {
    content: {
      type: "custom",
      render: (props) => <RichTextField {...props} />,
    },
    color: {
      type: "select",
      label: "Text Color",
      options: [
        { label: "White", value: "white" },
        { label: "Slate (Gray)", value: "slate" },
        { label: "Ink (Dark)", value: "ink" },
      ],
    },
  },
  defaultProps: {
    content: "The Academy of Cryptography Techniques is the sole institution...",
    color: "white",
  },
  render: ({ content, color = "white" }) => {
    const colorClass = color === "white" ? "text-white/80" : color === "slate" ? "text-slate" : "text-ink";
    return (
      <div
        className={`text-[16px] leading-relaxed italic venue-rich-text ${colorClass}`}
        style={{ fontFamily: "var(--font-body)" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  },
};

// ==========================
// VenueLink
// ==========================
export type VenueLinkProps = {
  label: string;
  url: string;
};

export const VenueLink: ComponentConfig<VenueLinkProps> = {
  label: "Venue Link",
  fields: {
    label: { type: "text", label: "Prefix Label" },
    url: { type: "text", label: "URL" },
  },
  defaultProps: {
    label: "For more information about the Academy of Cryptography Techniques, please visit:",
    url: "https://actvn.edu.vn/",
  },
  render: ({ label, url }) => {
    return (
      <p
        className="text-[16px] text-white/80 font-medium mt-6 text-center"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cipher hover:underline"
        >
          {url}
        </a>
      </p>
    );
  },
};
