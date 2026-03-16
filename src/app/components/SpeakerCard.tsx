import { ArrowRight } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  role: string;
  institution: string;
  talk: string;
  image: string;
}

export default function SpeakerCard({ name, role, institution, talk, image }: SpeakerCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-200 hover:border-cipher hover:bg-cipher/8 group">
      <div className="flex flex-col items-center">
        <div className="w-[88px] h-[88px] rounded-full overflow-hidden ring-2 ring-cipher ring-offset-4 ring-offset-deep mb-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        
        <h3 className="text-[18px] font-semibold text-white text-center mb-1" style={{ fontFamily: 'var(--font-body)' }}>
          {name}
        </h3>
        
        <p className="text-[13px] text-white/60 text-center mb-1" style={{ fontFamily: 'var(--font-body)' }}>
          {role}
        </p>
        
        <p className="text-[13px] font-medium text-cipher text-center mb-4" style={{ fontFamily: 'var(--font-body)' }}>
          {institution}
        </p>
        
        <div className="px-3 py-1.5 rounded-full bg-cipher/15 border border-cipher/30 mb-4">
          <p className="text-[12px] font-medium text-cipher text-center" style={{ fontFamily: 'var(--font-body)' }}>
            {talk}
          </p>
        </div>
        
        <button className="flex items-center gap-2 text-[13px] font-medium text-cipher group-hover:gap-3 transition-all" style={{ fontFamily: 'var(--font-body)' }}>
          View Bio <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
