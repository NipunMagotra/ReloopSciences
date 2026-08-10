import { Mail } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="mt-20 pt-12 border-t border-emerald-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-xs font-semibold tracking-widest uppercase text-[#f88a0d] mb-6">
          Direct Channels
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href="mailto:hello@reloopsciences.com"
            className="group p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 hover:border-[#2da021] hover:bg-emerald-900/40 transition-all duration-300 flex items-center gap-4 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-900/80 border border-emerald-700/50 flex items-center justify-center text-[#2da021] group-hover:bg-[#2da021] group-hover:text-white transition-all duration-300">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-semibold text-white group-hover:text-[#2da021] transition-colors">Email Us</p>
              <p className="text-emerald-200/70 text-xs mt-0.5">
                hello@reloopsciences.com
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="group p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 hover:border-[#0a66c2] hover:bg-emerald-900/40 transition-all duration-300 flex items-center gap-4 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-900/80 border border-emerald-700/50 flex items-center justify-center text-[#0a66c2] group-hover:bg-[#0a66c2] group-hover:text-white transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white group-hover:text-[#0a66c2] transition-colors">LinkedIn</p>
              <p className="text-emerald-200/70 text-xs mt-0.5">
                Reloop Sciences Official
              </p>
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 hover:border-[#ff0000] hover:bg-emerald-900/40 transition-all duration-300 flex items-center gap-4 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-900/80 border border-emerald-700/50 flex items-center justify-center text-[#ff0000] group-hover:bg-[#ff0000] group-hover:text-white transition-all duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white group-hover:text-[#ff0000] transition-colors">YouTube</p>
              <p className="text-emerald-200/70 text-xs mt-0.5">
                Reloop Sciences Channel
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
