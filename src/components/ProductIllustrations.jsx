import React from 'react';

// Sony DualShock Style Wireless Game Controller
export const GameControllerArt = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Blue Backlight Glow */}
    <div className="absolute w-72 h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
    
    <svg viewBox="0 0 500 360" className="w-full h-auto drop-shadow-2xl select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bodyGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#252d3d" />
          <stop offset="60%" stopColor="#131926" />
          <stop offset="100%" stopColor="#0a0d14" />
        </radialGradient>
        <linearGradient id="gripGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a3346" />
          <stop offset="100%" stopColor="#0d111a" />
        </linearGradient>
        <linearGradient id="gripGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a3346" />
          <stop offset="100%" stopColor="#0d111a" />
        </linearGradient>
        <radialGradient id="stickGrad" cx="40%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#3b4458" />
          <stop offset="70%" stopColor="#1a202c" />
          <stop offset="100%" stopColor="#0e121a" />
        </radialGradient>
        <linearGradient id="neonLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Controller Main Body Chassis */}
      <path
        d="M130 90 C 180 85, 320 85, 370 90 C 420 95, 470 180, 445 290 C 435 330, 395 335, 370 295 C 345 255, 335 240, 305 240 C 275 240, 265 248, 250 248 C 235 248, 225 240, 195 240 C 165 240, 155 255, 130 295 C 105 335, 65 330, 55 290 C 30 180, 80 95, 130 90 Z"
        fill="url(#bodyGrad)"
        stroke="#334155"
        strokeWidth="2"
      />

      {/* Headset Arc Band floating over top */}
      <path
        d="M150 140 C 160 30, 340 30, 350 140"
        stroke="#1e293b"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M150 140 C 160 30, 340 30, 350 140"
        stroke="#0284c7"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
        filter="url(#glow)"
      />

      {/* Central Touchpad */}
      <rect x="195" y="100" width="110" height="70" rx="8" fill="#181f2c" stroke="#334155" strokeWidth="1.5" />
      {/* Light Bar on Touchpad */}
      <path d="M 215 103 L 285 103" stroke="url(#neonLight)" strokeWidth="3.5" strokeLinecap="round" filter="url(#glow)" />

      {/* Left D-Pad */}
      <g transform="translate(125, 160)">
        <rect x="15" y="0" width="16" height="46" rx="3" fill="#111622" stroke="#475569" strokeWidth="1" />
        <rect x="0" y="15" width="46" height="16" rx="3" fill="#111622" stroke="#475569" strokeWidth="1" />
        <polygon points="23,4 19,10 27,10" fill="#94a3b8" />
        <polygon points="23,42 19,36 27,36" fill="#94a3b8" />
        <polygon points="4,23 10,19 10,27" fill="#94a3b8" />
        <polygon points="42,23 36,19 36,27" fill="#94a3b8" />
      </g>

      {/* Right Action Buttons (Triangle, Circle, Cross, Square) */}
      <g transform="translate(330, 160)">
        {/* Triangle (Top) */}
        <circle cx="23" cy="6" r="9" fill="#111622" stroke="#334155" />
        <polygon points="23,2 19,9 27,9" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
        {/* Circle (Right) */}
        <circle cx="40" cy="23" r="9" fill="#111622" stroke="#334155" />
        <circle cx="40" cy="23" r="4" stroke="#f43f5e" strokeWidth="1.5" fill="none" />
        {/* Cross (Bottom) */}
        <circle cx="23" cy="40" r="9" fill="#111622" stroke="#334155" />
        <path d="M 20 37 L 26 43 M 26 37 L 20 43" stroke="#818cf8" strokeWidth="1.5" />
        {/* Square (Left) */}
        <circle cx="6" cy="23" r="9" fill="#111622" stroke="#334155" />
        <rect x="3.5" y="20.5" width="5" height="5" stroke="#f472b6" strokeWidth="1.5" fill="none" />
      </g>

      {/* Dual Analog Sticks with Texture */}
      {/* Left Stick */}
      <g transform="translate(165, 205)">
        <circle cx="28" cy="28" r="28" fill="#0b0e14" stroke="#1e293b" strokeWidth="2" />
        <circle cx="28" cy="28" r="24" fill="url(#stickGrad)" stroke="#475569" strokeWidth="1" />
        <circle cx="28" cy="28" r="14" fill="#1e2638" stroke="#334155" />
        <circle cx="28" cy="28" r="2" fill="#64748b" />
      </g>

      {/* Right Stick */}
      <g transform="translate(280, 205)">
        <circle cx="28" cy="28" r="28" fill="#0b0e14" stroke="#1e293b" strokeWidth="2" />
        <circle cx="28" cy="28" r="24" fill="url(#stickGrad)" stroke="#475569" strokeWidth="1" />
        <circle cx="28" cy="28" r="14" fill="#1e2638" stroke="#334155" />
        <circle cx="28" cy="28" r="2" fill="#64748b" />
      </g>

      {/* PS Logo Button */}
      <circle cx="250" cy="215" r="9" fill="#111622" stroke="#475569" />
      <path d="M247 212 Q250 210 253 212 Q250 216 247 219" stroke="#94a3b8" strokeWidth="1.2" fill="none" />
      
      {/* Speaker Holes */}
      <g fill="#475569">
        <circle cx="250" cy="180" r="1" />
        <circle cx="246" cy="180" r="1" />
        <circle cx="254" cy="180" r="1" />
        <circle cx="248" cy="184" r="1" />
        <circle cx="252" cy="184" r="1" />
      </g>
    </svg>
  </div>
);

// BambooBuds TWS with Model Representation
export const BambooBudsArt = ({ className = "" }) => (
  <div className={`relative w-full h-full flex items-center justify-end overflow-hidden ${className}`}>
    <svg viewBox="0 0 300 240" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbcfe8" />
          <stop offset="50%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#be185d" />
        </linearGradient>
        <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
        <radialGradient id="earbudGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="80%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </radialGradient>
      </defs>

      {/* Stylized Profile silhouette with ambient violet neon lighting */}
      <path
        d="M200 40 C 230 35, 270 60, 275 100 C 280 125, 270 145, 260 160 C 265 175, 275 190, 280 230 L 170 230 C 160 190, 165 150, 180 130 C 175 110, 175 60, 200 40 Z"
        fill="#4c1d95"
        opacity="0.85"
      />
      {/* Hair & Beard Highlights */}
      <path
        d="M210 40 C 240 30, 275 55, 278 95 C 265 80, 240 75, 220 85 Z"
        fill="#2e1065"
      />
      {/* Beard & Jawline contour */}
      <path
        d="M260 140 C 255 170, 245 190, 220 195 C 205 195, 195 180, 195 160 C 215 165, 245 160, 260 140 Z"
        fill="#3b0764"
      />

      {/* BambooBud In-Ear Wireless Earphone */}
      <g transform="translate(198, 105)" className="filter drop-shadow-lg">
        {/* Earbud Stem */}
        <path d="M 12 10 L 16 38 C 16 41, 12 43, 9 43 C 6 43, 4 41, 5 38 L 7 10 Z" fill="url(#earbudGlow)" />
        {/* Earbud Pod Head */}
        <ellipse cx="10" cy="10" rx="11" ry="9" fill="#ffffff" />
        <ellipse cx="14" cy="10" rx="5" ry="4" fill="#0f172a" opacity="0.3" />
        {/* Status LED */}
        <circle cx="10" cy="22" r="1.5" fill="#4ade80" />
      </g>
    </svg>
  </div>
);

// HomePod Pro Smart Speaker with Neon Ring
export const HomepodProArt = ({ className = "" }) => (
  <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
    {/* Ground ambient purple glow */}
    <div className="absolute -bottom-4 w-44 h-12 bg-purple-600/40 rounded-full blur-xl pointer-events-none" />
    
    <svg viewBox="0 0 280 200" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="homepodBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1e2e" />
          <stop offset="40%" stopColor="#11111b" />
          <stop offset="100%" stopColor="#050508" />
        </linearGradient>
        <radialGradient id="topGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="50%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </radialGradient>
        <linearGradient id="neonRing" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      {/* Speaker Body Cylinder */}
      <path
        d="M 60 70 C 60 30, 220 30, 220 70 L 220 150 C 220 190, 60 190, 60 150 Z"
        fill="url(#homepodBody)"
        stroke="#312e81"
        strokeWidth="1.5"
      />

      {/* Top Touch Display Surface with Siri/Audio Wave Neon */}
      <ellipse cx="140" cy="65" rx="72" ry="28" fill="url(#topGlow)" />
      
      {/* Waveform Controls / Siri Sphere */}
      <ellipse cx="140" cy="65" rx="55" ry="20" fill="#0f172a" opacity="0.4" />
      <circle cx="120" cy="65" r="4" fill="#ffffff" opacity="0.9" />
      <circle cx="140" cy="65" r="6" fill="#ffffff" />
      <circle cx="160" cy="65" r="4" fill="#ffffff" opacity="0.9" />

      {/* Bottom Neon Accent Ring Reflection */}
      <ellipse cx="140" cy="172" rx="76" ry="12" stroke="url(#neonRing)" strokeWidth="3" fill="none" opacity="0.8" filter="drop-shadow(0 0 8px #c084fc)" />
    </svg>
  </div>
);

// MacBook Pro 2-in-1 Touchscreen Display
export const MacbookProPromoArt = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 340 240" className="w-full h-auto drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="screenWallpaper" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="tabletBezel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Tablet Screen angled */}
      <polygon points="30,40 230,10 245,160 45,190" fill="url(#tabletBezel)" rx="4" />
      {/* Screen Display Wallpaper */}
      <polygon points="36,46 224,18 238,154 50,182" fill="url(#screenWallpaper)" />

      {/* Wallpaper Waves */}
      <path d="M 50 140 Q 120 70 230 80 L 238 154 L 50 182 Z" fill="#7dd3fc" opacity="0.5" />
      <path d="M 60 170 Q 140 100 238 130 L 238 154 L 50 182 Z" fill="#bae6fd" opacity="0.4" />

      {/* Magnetic Keyboard Base Laying Flat */}
      <polygon points="45,190 245,160 310,205 90,235" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      {/* Keypad Grid lines */}
      <polygon points="65,194 240,168 285,198 105,224" fill="#0f172a" />
      <polygon points="120,222 200,210 215,220 135,232" fill="#334155" />
    </svg>
  </div>
);

// Dual Smart Speaker Duo Art
export const DualSpeakerArt = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Ground ambient soft pink shadow */}
    <div className="absolute bottom-4 w-48 h-10 bg-pink-400/30 rounded-full blur-xl pointer-events-none" />
    
    <svg viewBox="0 0 320 240" className="w-full h-auto drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="whiteSpeaker" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </radialGradient>
        <radialGradient id="blackSpeaker" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="70%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
        <linearGradient id="topGlowSpeaker" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>

      {/* White Speaker (Behind Left) */}
      <g transform="translate(60, 40)">
        <rect x="0" y="30" width="100" height="120" rx="45" fill="url(#whiteSpeaker)" stroke="#cbd5e1" strokeWidth="1" />
        <ellipse cx="50" cy="30" rx="42" ry="14" fill="#ffffff" />
        <ellipse cx="50" cy="30" rx="30" ry="9" fill="url(#topGlowSpeaker)" opacity="0.6" />
      </g>

      {/* Black Speaker (In Front Right) */}
      <g transform="translate(135, 60)">
        <rect x="0" y="30" width="115" height="135" rx="50" fill="url(#blackSpeaker)" stroke="#1e293b" strokeWidth="1" />
        <ellipse cx="57" cy="30" rx="48" ry="16" fill="#1e293b" />
        <ellipse cx="57" cy="30" rx="36" ry="11" fill="url(#topGlowSpeaker)" />
        <circle cx="57" cy="30" r="8" fill="#ffffff" opacity="0.8" />
      </g>
    </svg>
  </div>
);

// Bamboo Transparent Sound Speaker Art
export const BambooSpeakerArt = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 340 220" className="w-full h-auto drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="transparentGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="woofer" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="70%" stopColor="#334155" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
      </defs>

      {/* Transparent Speaker Capsule Enclosure */}
      <rect x="30" y="60" width="280" height="110" rx="55" fill="url(#transparentGlass)" stroke="#94a3b8" strokeWidth="2.5" />
      {/* Inner Metallic Frame */}
      <rect x="45" y="70" width="250" height="90" rx="45" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />

      {/* Left Bass Woofer Driver */}
      <circle cx="105" cy="115" r="34" fill="url(#woofer)" stroke="#475569" strokeWidth="2" />
      <circle cx="105" cy="115" r="22" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
      <circle cx="105" cy="115" r="10" fill="#1e293b" />

      {/* Center Midrange Driver */}
      <circle cx="170" cy="115" r="28" fill="url(#woofer)" stroke="#475569" strokeWidth="2" />
      <circle cx="170" cy="115" r="16" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
      <circle cx="170" cy="115" r="7" fill="#1e293b" />

      {/* Right Tweeter Driver */}
      <circle cx="230" cy="115" r="22" fill="url(#woofer)" stroke="#475569" strokeWidth="1.5" />
      <circle cx="230" cy="115" r="12" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
      <circle cx="230" cy="115" r="5" fill="#38bdf8" />
    </svg>
  </div>
);

// Smartphone Trend Illustrated Cards
export const SmartphoneCardArt = ({ styleType = "orange", className = "" }) => {
  if (styleType === "orange") {
    // Orange Realme style
    return (
      <div className={`relative flex items-center justify-center h-48 ${className}`}>
        <svg viewBox="0 0 160 200" className="h-full w-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Front Display Screen */}
          <rect x="15" y="20" width="60" height="120" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          <rect x="18" y="24" width="54" height="112" rx="7" fill="#38bdf8" />
          <circle cx="45" cy="28" r="2" fill="#0f172a" />
          {/* Back Chassis (Orange Vegan Leather) */}
          <rect x="80" y="20" width="65" height="125" rx="12" fill="#f97316" stroke="#ea580c" strokeWidth="1.5" />
          <circle cx="112" cy="55" r="20" fill="#1e293b" stroke="#fed7aa" strokeWidth="2" />
          <circle cx="112" cy="55" r="8" fill="#0f172a" />
          {/* Center stitch line */}
          <line x1="112" y1="20" x2="112" y2="145" stroke="#fed7aa" strokeWidth="1.5" strokeDasharray="3 2" />
        </svg>
      </div>
    );
  }

  if (styleType === "mint") {
    // Mint Xiaomi 13 Pro
    return (
      <div className={`relative flex items-center justify-center h-48 ${className}`}>
        <svg viewBox="0 0 160 200" className="h-full w-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Back Ceramic Chassis */}
          <rect x="20" y="20" width="65" height="125" rx="12" fill="#d1fae5" stroke="#a7f3d0" strokeWidth="1.5" />
          <rect x="25" y="25" width="32" height="32" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <circle cx="35" cy="35" r="5" fill="#1e293b" stroke="#64748b" />
          <circle cx="47" cy="47" r="4" fill="#1e293b" stroke="#64748b" />
          {/* Front Screen */}
          <rect x="75" y="20" width="65" height="125" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          <rect x="78" y="23" width="59" height="119" rx="9" fill="#065f46" />
          <path d="M 78 70 Q 105 40 137 90 L 137 142 L 78 142 Z" fill="#10b981" opacity="0.6" />
        </svg>
      </div>
    );
  }

  if (styleType === "emerald") {
    // Emerald Green OnePlus
    return (
      <div className={`relative flex items-center justify-center h-48 ${className}`}>
        <svg viewBox="0 0 160 200" className="h-full w-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Back Emerald */}
          <rect x="20" y="20" width="65" height="125" rx="12" fill="#047857" stroke="#065f46" strokeWidth="1.5" />
          <rect x="26" y="28" width="16" height="38" rx="8" fill="#0f172a" />
          <circle cx="34" cy="38" r="5" fill="#334155" />
          <circle cx="34" cy="54" r="5" fill="#334155" />
          {/* Front Screen */}
          <rect x="75" y="20" width="65" height="125" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          <rect x="78" y="23" width="59" height="119" rx="9" fill="#fcd34d" />
          <path d="M 78 80 Q 110 50 137 100 L 137 142 L 78 142 Z" fill="#6ee7b7" opacity="0.8" />
        </svg>
      </div>
    );
  }

  if (styleType === "darkblue") {
    // Flagship Vivo Midnight
    return (
      <div className={`relative flex items-center justify-center h-48 ${className}`}>
        <svg viewBox="0 0 160 200" className="h-full w-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Front OLED display with curved wallpaper */}
          <rect x="45" y="20" width="70" height="130" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          <rect x="48" y="23" width="64" height="124" rx="9" fill="#1e1b4b" />
          <path d="M 48 50 Q 80 120 112 70 L 112 147 L 48 147 Z" fill="#818cf8" opacity="0.5" />
          <circle cx="80" cy="28" r="2" fill="#0f172a" />
        </svg>
      </div>
    );
  }

  // Foldable Phone
  return (
    <div className={`relative flex items-center justify-center h-48 ${className}`}>
      <svg viewBox="0 0 160 200" className="h-full w-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Folded phone in background */}
        <rect x="75" y="20" width="55" height="60" rx="8" fill="#e9d5ff" stroke="#c084fc" strokeWidth="1.5" />
        <rect x="80" y="25" width="45" height="35" rx="6" fill="#0f172a" />
        {/* Unfolded Flex phone in front */}
        <polygon points="20,50 65,30 65,110 20,130" fill="#0f172a" stroke="#6b21a8" strokeWidth="1" />
        <polygon points="20,130 65,110 95,145 50,165" fill="#1e1b4b" stroke="#6b21a8" strokeWidth="1" />
        <polygon points="23,54 62,36 62,108 23,126" fill="#c084fc" opacity="0.7" />
        <polygon points="23,126 62,108 90,141 48,159" fill="#a855f7" opacity="0.7" />
      </svg>
    </div>
  );
};
