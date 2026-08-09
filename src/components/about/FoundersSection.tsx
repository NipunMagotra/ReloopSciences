import { Mail, Phone } from "lucide-react";

interface FounderProps {
  name: string;
}

function FounderCard({ name }: FounderProps) {
  return (
    <div className="bg-white rounded-2xl p-8 pt-10 pb-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 text-center group flex flex-col justify-between aspect-[3/4] max-w-sm mx-auto w-full">
      <div>
        {/* Avatar Container */}
        <div className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center rounded-full overflow-hidden p-[6px] transition-transform duration-300 group-hover:scale-105">
          {/* Default Light Gray Border Layer */}
          <div className="absolute inset-0 bg-gray-200 transition-opacity duration-300 group-hover:opacity-0" />
          
          {/* Rotating Gradient Layer (Infinite loop on card hover) */}
          <div 
            className="absolute -inset-10 bg-[conic-gradient(from_0deg,#2da021,#f88a0d,#2da021)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-custom-spin" 
          />
          
          {/* Inner Mask (Avatar center) */}
          <div className="relative w-full h-full bg-gray-100 rounded-full z-10" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-[#2da021] mb-1">{name}</h3>
        <p className="font-bold text-[#134c2c] mb-4 uppercase text-xs tracking-widest">
          Founder
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-3 mb-6">
          <a
            href="mailto:contact@reloopsciences.com"
            className="w-9 h-9 rounded-full bg-cream flex items-center justify-center text-gray-400 hover:text-[#f88a0d] hover:bg-green-light transition-all duration-200"
            aria-label={`Email ${name}`}
          >
            <Mail size={16} />
          </a>
          <a
            href="tel:+1234567890"
            className="w-9 h-9 rounded-full bg-cream flex items-center justify-center text-gray-400 hover:text-[#f88a0d] hover:bg-green-light transition-all duration-200"
            aria-label={`Call ${name}`}
          >
            <Phone size={16} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed px-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

export function FoundersSection() {
  const founders = ["Founder X"];

  return (
    <section className="bg-offwhite py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#f88a0d] mb-3">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#134c2c] mb-4">
            Meet the Founder
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            The visionary driving the future of laboratory sustainability.
          </p>
        </div>

        <div className="flex justify-center">
          {founders.map((name, index) => (
            <FounderCard key={index} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
