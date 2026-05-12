// Squirrelpedia — Field-Guide SVG Illustration Library
// Hand-crafted illustrations for each squirrel archetype, in a naturalist field-guide style.
// All illustrations work entirely offline.

const SquirrelArt = (function () {

  // Color palettes for each species type/color descriptor
  const PALETTES = {
    gray:        { primary: "#7a756d", shade: "#5c5750", light: "#a39c92", belly: "#d8cfc1" },
    silver:      { primary: "#8b8b85", shade: "#6a6a64", light: "#b8b5ac", belly: "#e0dccd" },
    rust:        { primary: "#a85d2c", shade: "#7a3f17", light: "#c98050", belly: "#e6c6a0" },
    red:         { primary: "#9c4a26", shade: "#6e3015", light: "#bd6a40", belly: "#e8d4b3" },
    "red-bright":{ primary: "#b2502b", shade: "#7c351a", light: "#d4744a", belly: "#eddab8" },
    black:       { primary: "#2c241c", shade: "#181410", light: "#4a3e34", belly: "#7a6d5e" },
    brown:       { primary: "#6e4a2d", shade: "#4a301a", light: "#8c6a48", belly: "#d4b88c" },
    "brown-dk":  { primary: "#4d3520", shade: "#2e1f10", light: "#704e30", belly: "#a88c64" },
    cream:       { primary: "#caa970", shade: "#9c7d4d", light: "#e2c898", belly: "#f0dcb4" },
    golden:      { primary: "#b88f3e", shade: "#85622a", light: "#d4ad5e", belly: "#ecd498" },
    tawny:       { primary: "#946432", shade: "#664019", light: "#b58456", belly: "#d8b884" },
    olive:       { primary: "#6e6738", shade: "#4a4524", light: "#8c8554", belly: "#c4b994" },
    "gray-warm": { primary: "#857c6d", shade: "#605849", light: "#a89e8a", belly: "#dcd2bc" },
    chestnut:    { primary: "#8a3c1f", shade: "#5e2810", light: "#a85f3e", belly: "#dcb084" },
    flame:       { primary: "#c25426", shade: "#8a3818", light: "#dc7848", belly: "#f0c894" },
    multicolor:  { primary: "#7a3a48", shade: "#52242e", light: "#a05868", belly: "#e0c89c" },
    fossil:      { primary: "#7a6346", shade: "#5a472e", light: "#9c8666", belly: "#c4ad8a" },
  };

  // ---- Archetype: Classic Tree Squirrel (sitting with curled tail, holding acorn) ----
  function treeSquirrel(p) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
  <defs>
    <radialGradient id="bg-${p.id}" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#f1e3c8"/>
      <stop offset="100%" stop-color="#d8c39a"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bg-${p.id})"/>
  <!-- Subtle ground line -->
  <ellipse cx="100" cy="180" rx="55" ry="4" fill="#000" opacity="0.08"/>

  <!-- Tail (large, curling up and behind) -->
  <g>
    <path d="M 70 145
             C 25 145, 15 100, 30 65
             C 38 45, 55 35, 75 38
             C 65 50, 55 65, 55 85
             C 55 105, 70 120, 85 125 Z"
          fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
    <!-- Tail inner shading -->
    <path d="M 60 130 C 40 120, 35 95, 45 75 C 50 65, 60 60, 70 60 C 65 70, 62 85, 65 100 C 68 115, 75 122, 80 125 Z"
          fill="${p.shade}" opacity="0.35"/>
    <!-- Tail tip highlight -->
    <path d="M 32 62 C 35 50, 45 42, 60 42 C 55 50, 50 60, 50 70 Z"
          fill="${p.light}" opacity="0.6"/>
  </g>

  <!-- Body (rounded teardrop) -->
  <ellipse cx="105" cy="125" rx="32" ry="42" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Belly -->
  <ellipse cx="112" cy="135" rx="20" ry="28" fill="${p.belly}"/>

  <!-- Hind leg -->
  <ellipse cx="125" cy="155" rx="14" ry="10" fill="${p.shade}"/>
  <ellipse cx="128" cy="158" rx="10" ry="6" fill="${p.primary}"/>

  <!-- Front paws holding acorn -->
  <ellipse cx="115" cy="118" rx="6" ry="9" fill="${p.shade}"/>
  <ellipse cx="125" cy="118" rx="6" ry="9" fill="${p.shade}"/>

  <!-- Acorn -->
  <g transform="translate(115 105)">
    <ellipse cx="6" cy="10" rx="7" ry="9" fill="#7a4a1e" stroke="#3e2510" stroke-width="1"/>
    <path d="M -2 5 Q 6 -2 14 5 Q 14 9 6 11 Q -2 9 -2 5 Z" fill="#4a2f17" stroke="#2a1808" stroke-width="0.8"/>
    <line x1="6" y1="-2" x2="6" y2="0" stroke="#2a1808" stroke-width="1.5"/>
  </g>

  <!-- Head -->
  <ellipse cx="118" cy="85" rx="22" ry="20" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Snout -->
  <ellipse cx="135" cy="92" rx="9" ry="6" fill="${p.light}"/>
  <!-- Nose -->
  <ellipse cx="141" cy="91" rx="2" ry="1.5" fill="#1f1208"/>
  <!-- Mouth -->
  <path d="M 137 94 Q 139 96 141 94" fill="none" stroke="#3a2818" stroke-width="0.8" stroke-linecap="round"/>

  <!-- Ear -->
  <path d="M 105 70 Q 100 58, 108 60 Q 112 65, 110 73 Z" fill="${p.shade}" stroke="${p.shade}" stroke-width="1"/>
  <path d="M 107 67 Q 107 62, 110 63" fill="none" stroke="${p.light}" stroke-width="0.8"/>

  <!-- Eye -->
  <circle cx="125" cy="82" r="3.5" fill="#1a0f06"/>
  <circle cx="126" cy="80.5" r="1" fill="#fff" opacity="0.8"/>

  <!-- Whiskers -->
  <g stroke="#3a2818" stroke-width="0.6" stroke-linecap="round" opacity="0.7">
    <line x1="133" y1="92" x2="148" y2="88"/>
    <line x1="133" y1="94" x2="148" y2="95"/>
    <line x1="133" y1="96" x2="146" y2="100"/>
  </g>
</svg>`;
  }

  // ---- Archetype: Flying Squirrel (spread-eagle glide pose, top-down view) ----
  function flyingSquirrel(p) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
  <defs>
    <radialGradient id="bgf-${p.id}" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#2a3142"/>
      <stop offset="100%" stop-color="#1a1f2a"/>
    </radialGradient>
    <radialGradient id="moonf-${p.id}" cx="80%" cy="20%" r="20%">
      <stop offset="0%" stop-color="#f8e8b8" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#f8e8b8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bgf-${p.id})"/>
  <circle cx="160" cy="40" r="12" fill="#f4e0a8" opacity="0.7"/>
  <circle cx="160" cy="40" r="25" fill="url(#moonf-${p.id})"/>
  <!-- Stars -->
  <g fill="#f0e4c0" opacity="0.6">
    <circle cx="30" cy="30" r="0.8"/>
    <circle cx="60" cy="20" r="1"/>
    <circle cx="100" cy="40" r="0.6"/>
    <circle cx="40" cy="60" r="0.6"/>
    <circle cx="180" cy="80" r="0.8"/>
    <circle cx="20" cy="100" r="0.6"/>
    <circle cx="175" cy="130" r="0.8"/>
  </g>

  <!-- Patagium (gliding membrane) - kite-like shape -->
  <path d="M 100 50
           Q 35 95, 55 145
           Q 75 165, 100 160
           Q 125 165, 145 145
           Q 165 95, 100 50 Z"
        fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5" opacity="0.92"/>
  <!-- Membrane shading -->
  <path d="M 100 60 Q 50 100, 70 140 Q 100 150, 130 140 Q 150 100, 100 60 Z"
        fill="${p.shade}" opacity="0.25"/>

  <!-- Front limbs (extended out) -->
  <ellipse cx="55" cy="105" rx="6" ry="4" transform="rotate(-30 55 105)" fill="${p.shade}"/>
  <ellipse cx="145" cy="105" rx="6" ry="4" transform="rotate(30 145 105)" fill="${p.shade}"/>

  <!-- Hind limbs -->
  <ellipse cx="68" cy="148" rx="5" ry="3" transform="rotate(45 68 148)" fill="${p.shade}"/>
  <ellipse cx="132" cy="148" rx="5" ry="3" transform="rotate(-45 132 148)" fill="${p.shade}"/>

  <!-- Tail (flat ruddering) -->
  <ellipse cx="100" cy="175" rx="9" ry="20" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <ellipse cx="100" cy="178" rx="5" ry="16" fill="${p.shade}" opacity="0.4"/>

  <!-- Body (between membrane) -->
  <ellipse cx="100" cy="110" rx="14" ry="38" fill="${p.shade}"/>
  <ellipse cx="100" cy="115" rx="9" ry="28" fill="${p.primary}"/>

  <!-- Head -->
  <ellipse cx="100" cy="68" rx="18" ry="16" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Ears (small rounded for flying squirrel) -->
  <ellipse cx="88" cy="58" rx="4" ry="5" fill="${p.shade}"/>
  <ellipse cx="112" cy="58" rx="4" ry="5" fill="${p.shade}"/>

  <!-- Huge eyes (nocturnal!) -->
  <circle cx="92" cy="68" r="5" fill="#fff"/>
  <circle cx="108" cy="68" r="5" fill="#fff"/>
  <circle cx="92" cy="68" r="3.5" fill="#1a0f06"/>
  <circle cx="108" cy="68" r="3.5" fill="#1a0f06"/>
  <circle cx="93" cy="67" r="1.2" fill="#fff"/>
  <circle cx="109" cy="67" r="1.2" fill="#fff"/>

  <!-- Nose -->
  <ellipse cx="100" cy="78" rx="2" ry="1.5" fill="#1f1208"/>
</svg>`;
  }

  // ---- Archetype: Ground Squirrel / Marmot (chunky, low posture) ----
  function groundSquirrel(p, opts = {}) {
    const stripes = opts.stripes ? `
      <line x1="85" y1="115" x2="155" y2="115" stroke="${p.shade}" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
      <line x1="83" y1="125" x2="156" y2="125" stroke="${p.belly}" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
      <line x1="85" y1="135" x2="155" y2="135" stroke="${p.shade}" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
    ` : '';
    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="bgg-${p.id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e8d4a8"/>
      <stop offset="60%" stop-color="#d4b884"/>
      <stop offset="100%" stop-color="#a88858"/>
    </linearGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bgg-${p.id})"/>
  <!-- Burrow mound -->
  <ellipse cx="100" cy="195" rx="80" ry="12" fill="#8a6d40" opacity="0.5"/>
  <!-- Grass tufts -->
  <g stroke="#6a5530" stroke-width="1.2" fill="none" opacity="0.7" stroke-linecap="round">
    <path d="M 20 180 L 22 170"/>
    <path d="M 25 182 L 23 172"/>
    <path d="M 175 178 L 173 168"/>
    <path d="M 178 180 L 180 170"/>
    <path d="M 35 175 L 38 165"/>
  </g>

  <!-- Body (low, horizontal) -->
  <ellipse cx="115" cy="135" rx="55" ry="32" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Belly -->
  <ellipse cx="115" cy="145" rx="42" ry="22" fill="${p.belly}"/>
  ${stripes}

  <!-- Tail (smaller than tree squirrels) -->
  <path d="M 65 135 Q 30 130, 25 110 Q 25 100, 40 105 Q 50 115, 60 130 Z"
        fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <path d="M 35 115 Q 32 108, 38 108 Q 42 110, 42 118 Z" fill="${p.shade}" opacity="0.4"/>

  <!-- Hind leg -->
  <ellipse cx="135" cy="155" rx="18" ry="10" fill="${p.shade}"/>
  <ellipse cx="138" cy="158" rx="13" ry="6" fill="${p.primary}"/>

  <!-- Front legs -->
  <ellipse cx="155" cy="155" rx="7" ry="13" fill="${p.shade}"/>
  <ellipse cx="155" cy="158" rx="5" ry="9" fill="${p.primary}"/>

  <!-- Head -->
  <ellipse cx="165" cy="110" rx="22" ry="20" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Snout -->
  <ellipse cx="183" cy="117" rx="9" ry="6" fill="${p.light}"/>
  <ellipse cx="189" cy="116" rx="2" ry="1.5" fill="#1f1208"/>
  <path d="M 185 119 Q 187 121 189 119" fill="none" stroke="#3a2818" stroke-width="0.8" stroke-linecap="round"/>

  <!-- Cheek pouch suggestion -->
  <ellipse cx="172" cy="120" rx="6" ry="4" fill="${p.shade}" opacity="0.3"/>

  <!-- Ear (small, rounded for ground squirrels) -->
  <ellipse cx="156" cy="93" rx="4" ry="6" fill="${p.shade}"/>
  <ellipse cx="156" cy="93" rx="2.5" ry="4" fill="${p.primary}"/>

  <!-- Eye -->
  <circle cx="172" cy="106" r="3.5" fill="#1a0f06"/>
  <circle cx="173" cy="104.5" r="1" fill="#fff" opacity="0.8"/>

  <!-- Whiskers -->
  <g stroke="#3a2818" stroke-width="0.6" stroke-linecap="round" opacity="0.6">
    <line x1="181" y1="117" x2="196" y2="113"/>
    <line x1="181" y1="120" x2="196" y2="121"/>
  </g>
</svg>`;
  }

  // ---- Archetype: Prairie Dog (upright sentinel, alert) ----
  function prairieDog(p) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="bgp-${p.id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#dcc28a"/>
      <stop offset="50%" stop-color="#c4a868"/>
      <stop offset="100%" stop-color="#8a6e3c"/>
    </linearGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bgp-${p.id})"/>
  <!-- Mound -->
  <ellipse cx="100" cy="190" rx="65" ry="14" fill="#6a4f28" opacity="0.6"/>
  <ellipse cx="100" cy="185" rx="45" ry="8" fill="#5a3f1e" opacity="0.4"/>

  <!-- Tail (short, dark-tipped) -->
  <ellipse cx="70" cy="155" rx="4" ry="18" transform="rotate(-15 70 155)" fill="${p.primary}" stroke="${p.shade}" stroke-width="1"/>
  <ellipse cx="67" cy="168" rx="3" ry="6" fill="${p.shade}"/>

  <!-- Body (upright, vertical) -->
  <ellipse cx="100" cy="135" rx="32" ry="40" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Belly -->
  <ellipse cx="100" cy="145" rx="22" ry="28" fill="${p.belly}"/>

  <!-- Front paws held to chest -->
  <ellipse cx="92" cy="118" rx="5" ry="7" fill="${p.shade}"/>
  <ellipse cx="108" cy="118" rx="5" ry="7" fill="${p.shade}"/>

  <!-- Head (tilted up alert) -->
  <ellipse cx="100" cy="78" rx="24" ry="22" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Snout pointed forward -->
  <ellipse cx="100" cy="92" rx="11" ry="8" fill="${p.light}"/>
  <ellipse cx="100" cy="95" rx="2" ry="1.5" fill="#1f1208"/>
  <path d="M 96 97 Q 100 99 104 97" fill="none" stroke="#3a2818" stroke-width="0.8" stroke-linecap="round"/>

  <!-- Ears (very small) -->
  <ellipse cx="84" cy="62" rx="3" ry="4" fill="${p.shade}"/>
  <ellipse cx="116" cy="62" rx="3" ry="4" fill="${p.shade}"/>

  <!-- Eyes (alert, two visible) -->
  <circle cx="90" cy="76" r="3" fill="#1a0f06"/>
  <circle cx="110" cy="76" r="3" fill="#1a0f06"/>
  <circle cx="91" cy="74.5" r="0.8" fill="#fff" opacity="0.8"/>
  <circle cx="111" cy="74.5" r="0.8" fill="#fff" opacity="0.8"/>

  <!-- Cheek shading -->
  <ellipse cx="82" cy="84" rx="6" ry="4" fill="${p.shade}" opacity="0.3"/>
  <ellipse cx="118" cy="84" rx="6" ry="4" fill="${p.shade}" opacity="0.3"/>

  <!-- Whiskers (both sides) -->
  <g stroke="#3a2818" stroke-width="0.6" stroke-linecap="round" opacity="0.6">
    <line x1="92" y1="92" x2="80" y2="89"/>
    <line x1="92" y1="95" x2="80" y2="96"/>
    <line x1="108" y1="92" x2="120" y2="89"/>
    <line x1="108" y1="95" x2="120" y2="96"/>
  </g>
</svg>`;
  }

  // ---- Archetype: Chipmunk (small, face stripes) ----
  function chipmunk(p) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
  <defs>
    <radialGradient id="bgc-${p.id}" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#e8d8b8"/>
      <stop offset="100%" stop-color="#c4a868"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bgc-${p.id})"/>
  <ellipse cx="100" cy="185" rx="55" ry="6" fill="#000" opacity="0.1"/>
  <!-- Acorn on ground -->
  <g transform="translate(45 165)">
    <ellipse cx="0" cy="5" rx="4" ry="5" fill="#7a4a1e"/>
    <ellipse cx="0" cy="0" rx="5" ry="2" fill="#4a2f17"/>
  </g>

  <!-- Tail (medium, less bushy than tree squirrel) -->
  <path d="M 75 145
           Q 40 135, 35 105
           Q 38 88, 55 90
           Q 55 105, 60 120
           Q 65 135, 80 140 Z"
        fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <path d="M 45 100 Q 47 92, 53 92 Q 51 100, 51 110 Z" fill="${p.shade}" opacity="0.4"/>

  <!-- Body -->
  <ellipse cx="108" cy="135" rx="30" ry="35" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Belly -->
  <ellipse cx="115" cy="143" rx="18" ry="24" fill="${p.belly}"/>

  <!-- Back stripes (signature chipmunk!) -->
  <path d="M 90 110 Q 108 105, 125 110 L 125 145 Q 108 150, 90 145 Z" fill="${p.shade}" opacity="0.25"/>
  <path d="M 95 108 L 95 148" stroke="${p.belly}" stroke-width="2" opacity="0.9"/>
  <path d="M 108 105 L 108 152" stroke="${p.shade}" stroke-width="2.5" opacity="0.9"/>
  <path d="M 121 108 L 121 148" stroke="${p.belly}" stroke-width="2" opacity="0.9"/>

  <!-- Hind leg -->
  <ellipse cx="128" cy="160" rx="12" ry="8" fill="${p.shade}"/>

  <!-- Front paws (holding seed?) -->
  <ellipse cx="118" cy="125" rx="5" ry="7" fill="${p.shade}"/>
  <ellipse cx="128" cy="125" rx="5" ry="7" fill="${p.shade}"/>
  <ellipse cx="123" cy="120" rx="4" ry="3" fill="#7a4a1e"/>

  <!-- Head -->
  <ellipse cx="125" cy="95" rx="22" ry="20" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>

  <!-- Face stripes (chipmunk signature) -->
  <path d="M 105 90 Q 115 85, 130 88" stroke="${p.shade}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M 105 95 Q 115 92, 130 95" stroke="${p.belly}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M 108 100 Q 117 98, 132 101" stroke="${p.shade}" stroke-width="2" fill="none" stroke-linecap="round"/>

  <!-- Snout -->
  <ellipse cx="142" cy="100" rx="8" ry="5" fill="${p.light}"/>
  <ellipse cx="147" cy="99" rx="1.8" ry="1.3" fill="#1f1208"/>

  <!-- Cheek pouch (filled with seeds!) -->
  <ellipse cx="130" cy="108" rx="10" ry="6" fill="${p.shade}" opacity="0.4"/>
  <ellipse cx="128" cy="108" rx="8" ry="5" fill="${p.light}" opacity="0.5"/>

  <!-- Ear -->
  <ellipse cx="115" cy="80" rx="4" ry="6" fill="${p.shade}"/>
  <ellipse cx="115" cy="80" rx="2.5" ry="4" fill="${p.primary}"/>

  <!-- Eye -->
  <circle cx="130" cy="90" r="3" fill="#1a0f06"/>
  <circle cx="131" cy="88.5" r="0.9" fill="#fff" opacity="0.8"/>

  <!-- Whiskers -->
  <g stroke="#3a2818" stroke-width="0.6" stroke-linecap="round" opacity="0.6">
    <line x1="140" y1="101" x2="155" y2="98"/>
    <line x1="140" y1="103" x2="155" y2="106"/>
  </g>
</svg>`;
  }

  // ---- Archetype: Marmot (heavy, low, alpine background) ----
  function marmot(p) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="bgm-${p.id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c8d4e2"/>
      <stop offset="40%" stop-color="#9eb0c4"/>
      <stop offset="100%" stop-color="#6a7588"/>
    </linearGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bgm-${p.id})"/>
  <!-- Distant mountains -->
  <path d="M 0 120 L 30 90 L 50 100 L 80 75 L 110 95 L 140 80 L 170 95 L 200 85 L 200 200 L 0 200 Z" fill="#5a6878" opacity="0.5"/>
  <path d="M 0 140 L 25 115 L 55 125 L 90 105 L 130 120 L 170 110 L 200 120 L 200 200 L 0 200 Z" fill="#4a5868" opacity="0.6"/>
  <!-- Rock slab -->
  <path d="M 10 175 L 60 165 L 140 168 L 195 175 L 200 200 L 0 200 Z" fill="#8a8074" opacity="0.85"/>
  <ellipse cx="100" cy="178" rx="80" ry="4" fill="#000" opacity="0.15"/>

  <!-- Big body (chunky!) -->
  <ellipse cx="105" cy="142" rx="62" ry="36" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.8"/>
  <!-- Lighter belly -->
  <ellipse cx="105" cy="155" rx="48" ry="22" fill="${p.belly}"/>
  <!-- Shoulder shading -->
  <ellipse cx="70" cy="130" rx="22" ry="18" fill="${p.shade}" opacity="0.4"/>

  <!-- Tail (short, fluffy) -->
  <ellipse cx="50" cy="148" rx="14" ry="8" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <ellipse cx="45" cy="148" rx="9" ry="5" fill="${p.shade}" opacity="0.4"/>

  <!-- Hind legs (chunky) -->
  <ellipse cx="135" cy="165" rx="20" ry="12" fill="${p.shade}"/>

  <!-- Front leg -->
  <ellipse cx="160" cy="165" rx="9" ry="14" fill="${p.shade}"/>
  <ellipse cx="160" cy="167" rx="6" ry="10" fill="${p.primary}"/>

  <!-- Head (big, blunt) -->
  <ellipse cx="160" cy="110" rx="26" ry="22" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.8"/>
  <!-- Snout (blunt) -->
  <ellipse cx="180" cy="118" rx="10" ry="7" fill="${p.light}"/>
  <ellipse cx="186" cy="117" rx="2.5" ry="2" fill="#1f1208"/>
  <path d="M 181 121 Q 184 124 188 121" fill="none" stroke="#3a2818" stroke-width="1" stroke-linecap="round"/>

  <!-- Light face mask -->
  <ellipse cx="165" cy="118" rx="14" ry="6" fill="${p.belly}" opacity="0.6"/>

  <!-- Tiny ear -->
  <ellipse cx="148" cy="92" rx="4" ry="5" fill="${p.shade}"/>

  <!-- Eye -->
  <circle cx="167" cy="107" r="3.5" fill="#1a0f06"/>
  <circle cx="168" cy="105.5" r="1" fill="#fff" opacity="0.8"/>

  <!-- Whiskers -->
  <g stroke="#2a1808" stroke-width="0.7" stroke-linecap="round" opacity="0.7">
    <line x1="178" y1="118" x2="195" y2="115"/>
    <line x1="178" y1="121" x2="195" y2="122"/>
  </g>
</svg>`;
  }

  // ---- Archetype: Giant Tree Squirrel (multi-color, large tail) ----
  function giantSquirrel(p) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="bggt-${p.id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3a5a3a"/>
      <stop offset="60%" stop-color="#5a7a4a"/>
      <stop offset="100%" stop-color="#4a6a3a"/>
    </linearGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bggt-${p.id})"/>
  <!-- Tree branch -->
  <path d="M 0 170 L 200 165 L 200 200 L 0 200 Z" fill="#5a3a1e" opacity="0.4"/>
  <ellipse cx="100" cy="170" rx="100" ry="6" fill="#3a2412" opacity="0.4"/>
  <!-- Leaves silhouettes -->
  <g fill="#3a5a2a" opacity="0.5">
    <ellipse cx="20" cy="40" rx="15" ry="8" transform="rotate(-30 20 40)"/>
    <ellipse cx="180" cy="50" rx="18" ry="10" transform="rotate(30 180 50)"/>
    <ellipse cx="40" cy="20" rx="12" ry="6" transform="rotate(45 40 20)"/>
  </g>

  <!-- HUGE tail (defining feature of Ratufa) -->
  <path d="M 70 145
           C 15 145, 5 80, 25 45
           C 35 25, 60 18, 85 25
           C 70 40, 55 60, 50 85
           C 48 110, 60 125, 80 130 Z"
        fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Tail color stripe (giant squirrels often have two-tone tails) -->
  <path d="M 30 60 C 30 45, 45 30, 60 32 C 50 45, 42 60, 40 80 Z" fill="${p.light}" opacity="0.7"/>
  <path d="M 50 90 C 45 110, 55 125, 70 130 C 60 122, 52 110, 52 95 Z" fill="${p.shade}" opacity="0.4"/>

  <!-- Body (large) -->
  <ellipse cx="105" cy="125" rx="35" ry="45" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Belly stripe -->
  <ellipse cx="112" cy="138" rx="22" ry="30" fill="${p.belly}"/>
  <!-- Dorsal shading (multi-color hint) -->
  <ellipse cx="98" cy="115" rx="18" ry="25" fill="${p.shade}" opacity="0.4"/>

  <!-- Hind leg -->
  <ellipse cx="128" cy="160" rx="16" ry="11" fill="${p.shade}"/>

  <!-- Front paws -->
  <ellipse cx="118" cy="118" rx="6" ry="9" fill="${p.shade}"/>
  <ellipse cx="128" cy="118" rx="6" ry="9" fill="${p.shade}"/>

  <!-- Head -->
  <ellipse cx="120" cy="82" rx="24" ry="22" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Pale cheek mask -->
  <ellipse cx="128" cy="90" rx="16" ry="10" fill="${p.belly}" opacity="0.7"/>
  <!-- Snout -->
  <ellipse cx="140" cy="92" rx="9" ry="6" fill="${p.light}"/>
  <ellipse cx="146" cy="91" rx="2" ry="1.5" fill="#1f1208"/>

  <!-- Big ear with tuft -->
  <path d="M 105 65 Q 100 50, 110 55 Q 116 62, 112 72 Z" fill="${p.shade}"/>
  <path d="M 108 50 L 104 56 M 112 50 L 108 56" stroke="${p.shade}" stroke-width="1.5" stroke-linecap="round"/>

  <!-- Eye -->
  <circle cx="125" cy="80" r="4" fill="#1a0f06"/>
  <circle cx="126" cy="78" r="1.2" fill="#fff" opacity="0.8"/>

  <!-- Whiskers (long) -->
  <g stroke="#2a1808" stroke-width="0.8" stroke-linecap="round" opacity="0.7">
    <line x1="137" y1="92" x2="158" y2="88"/>
    <line x1="137" y1="95" x2="158" y2="97"/>
    <line x1="137" y1="98" x2="155" y2="103"/>
  </g>
</svg>`;
  }

  // ---- Archetype: Palm Squirrel (small, body stripes) ----
  function palmSquirrel(p) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
  <defs>
    <radialGradient id="bgps-${p.id}" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#e8d4a8"/>
      <stop offset="100%" stop-color="#b89058"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bgps-${p.id})"/>
  <!-- Palm leaf hint -->
  <g fill="#3a5a2a" opacity="0.3" stroke="#2a4a1a" stroke-width="0.5">
    <path d="M 10 0 Q 15 30, 30 50 Q 35 30, 45 25 Q 30 20, 15 10 Z"/>
  </g>

  <!-- Tail (medium, often curled) -->
  <path d="M 75 145
           Q 35 130, 38 95
           Q 45 75, 65 78
           Q 60 90, 60 110
           Q 65 130, 80 138 Z"
        fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <path d="M 50 95 Q 52 85, 60 85 Q 56 95, 56 108 Z" fill="${p.shade}" opacity="0.35"/>

  <!-- Body -->
  <ellipse cx="108" cy="135" rx="28" ry="33" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <ellipse cx="115" cy="142" rx="18" ry="22" fill="${p.belly}"/>

  <!-- Iconic three back stripes (palm squirrel signature) -->
  <path d="M 95 108 L 96 152" stroke="${p.belly}" stroke-width="2.2" opacity="0.95" stroke-linecap="round"/>
  <path d="M 108 105 L 108 155" stroke="${p.belly}" stroke-width="2.2" opacity="0.95" stroke-linecap="round"/>
  <path d="M 121 108 L 120 152" stroke="${p.belly}" stroke-width="2.2" opacity="0.95" stroke-linecap="round"/>

  <!-- Hind leg -->
  <ellipse cx="125" cy="158" rx="12" ry="8" fill="${p.shade}"/>

  <!-- Front paws -->
  <ellipse cx="115" cy="125" rx="5" ry="7" fill="${p.shade}"/>
  <ellipse cx="125" cy="125" rx="5" ry="7" fill="${p.shade}"/>

  <!-- Head -->
  <ellipse cx="120" cy="93" rx="20" ry="18" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <!-- Snout -->
  <ellipse cx="135" cy="100" rx="8" ry="5" fill="${p.light}"/>
  <ellipse cx="140" cy="99" rx="1.8" ry="1.3" fill="#1f1208"/>

  <!-- Ear -->
  <ellipse cx="110" cy="78" rx="3.5" ry="5" fill="${p.shade}"/>

  <!-- Eye -->
  <circle cx="125" cy="90" r="3" fill="#1a0f06"/>
  <circle cx="126" cy="88.5" r="0.9" fill="#fff" opacity="0.8"/>

  <!-- Whiskers -->
  <g stroke="#3a2818" stroke-width="0.6" stroke-linecap="round" opacity="0.6">
    <line x1="133" y1="100" x2="148" y2="97"/>
    <line x1="133" y1="103" x2="148" y2="106"/>
  </g>
</svg>`;
  }

  // ---- Archetype: Pygmy Squirrel (tiny, on tree bark) ----
  function pygmySquirrel(p) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
  <defs>
    <pattern id="bark-${p.id}" patternUnits="userSpaceOnUse" width="20" height="40">
      <rect width="20" height="40" fill="#6a4a2c"/>
      <path d="M 0 0 Q 5 10 0 20 Q 5 30 0 40" stroke="#4a3018" stroke-width="1.5" fill="none"/>
      <path d="M 10 5 Q 15 15 10 25 Q 15 35 10 45" stroke="#3a2412" stroke-width="1" fill="none"/>
    </pattern>
  </defs>
  <rect width="200" height="200" fill="url(#bark-${p.id})"/>
  <rect width="200" height="200" fill="#000" opacity="0.15"/>

  <!-- Small squirrel centered, gripping bark -->
  <!-- Tail -->
  <path d="M 80 130 Q 55 120, 55 95 Q 60 80, 75 82 Q 70 95, 72 115 Z"
        fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>

  <!-- Body (small) -->
  <ellipse cx="105" cy="125" rx="22" ry="28" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <ellipse cx="110" cy="132" rx="14" ry="18" fill="${p.belly}"/>

  <!-- Limbs gripping (spread out) -->
  <ellipse cx="88" cy="115" rx="4" ry="9" transform="rotate(-30 88 115)" fill="${p.shade}"/>
  <ellipse cx="124" cy="115" rx="4" ry="9" transform="rotate(30 124 115)" fill="${p.shade}"/>
  <ellipse cx="90" cy="145" rx="4" ry="8" transform="rotate(20 90 145)" fill="${p.shade}"/>
  <ellipse cx="122" cy="145" rx="4" ry="8" transform="rotate(-20 122 145)" fill="${p.shade}"/>

  <!-- Head -->
  <ellipse cx="115" cy="98" rx="17" ry="15" fill="${p.primary}" stroke="${p.shade}" stroke-width="1.5"/>
  <ellipse cx="127" cy="103" rx="6" ry="4" fill="${p.light}"/>
  <ellipse cx="132" cy="102" rx="1.5" ry="1" fill="#1f1208"/>

  <!-- Big eyes (relative to head) -->
  <circle cx="120" cy="96" r="3" fill="#fff"/>
  <circle cx="120" cy="96" r="2" fill="#1a0f06"/>

  <!-- Tiny ear -->
  <ellipse cx="108" cy="86" rx="3" ry="4" fill="${p.shade}"/>

  <!-- Whiskers -->
  <g stroke="#1a0f06" stroke-width="0.5" stroke-linecap="round" opacity="0.7">
    <line x1="126" y1="103" x2="138" y2="100"/>
    <line x1="126" y1="105" x2="138" y2="107"/>
  </g>
</svg>`;
  }

  // ---- Archetype: Prehistoric / Fossil (sepia, paleontological) ----
  function prehistoric(p) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
  <defs>
    <radialGradient id="bgpre-${p.id}" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#d4bf94"/>
      <stop offset="60%" stop-color="#a88a60"/>
      <stop offset="100%" stop-color="#6e5436"/>
    </radialGradient>
    <pattern id="cracks-${p.id}" patternUnits="userSpaceOnUse" width="40" height="40">
      <path d="M 0 5 L 40 8 M 0 25 L 40 22 M 5 0 L 8 40 M 25 0 L 22 40" stroke="#4a3820" stroke-width="0.3" opacity="0.3"/>
    </pattern>
  </defs>
  <rect width="200" height="200" fill="url(#bgpre-${p.id})"/>
  <rect width="200" height="200" fill="url(#cracks-${p.id})"/>

  <!-- Stone slab edge -->
  <rect width="200" height="200" fill="none" stroke="#5a4424" stroke-width="3"/>
  <rect width="200" height="200" fill="none" stroke="#3a2814" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/>

  <!-- Fossil silhouette (squirrel-like skeleton) -->
  <g opacity="0.85">
    <!-- Curled tail (vertebrae) -->
    <path d="M 70 140 C 30 140, 25 95, 50 70" stroke="${p.shade}" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
    <g fill="${p.shade}" opacity="0.7">
      <ellipse cx="70" cy="140" rx="3" ry="2"/>
      <ellipse cx="62" cy="138" rx="2.5" ry="2"/>
      <ellipse cx="55" cy="132" rx="2.5" ry="2"/>
      <ellipse cx="48" cy="122" rx="2.5" ry="2"/>
      <ellipse cx="42" cy="108" rx="2.5" ry="2"/>
      <ellipse cx="40" cy="92" rx="2.5" ry="2"/>
      <ellipse cx="42" cy="80" rx="2.5" ry="2"/>
      <ellipse cx="48" cy="72" rx="2.5" ry="2"/>
    </g>

    <!-- Body imprint (faded silhouette) -->
    <ellipse cx="105" cy="125" rx="30" ry="38" fill="${p.shade}" opacity="0.25"/>

    <!-- Spine -->
    <path d="M 85 130 Q 110 110, 130 90" stroke="${p.shade}" stroke-width="2.5" fill="none" opacity="0.8"/>
    <!-- Vertebrae -->
    <g fill="${p.shade}" opacity="0.8">
      <ellipse cx="88" cy="128" rx="3" ry="2.5"/>
      <ellipse cx="96" cy="123" rx="3" ry="2.5"/>
      <ellipse cx="104" cy="118" rx="3" ry="2.5"/>
      <ellipse cx="112" cy="112" rx="3" ry="2.5"/>
      <ellipse cx="120" cy="105" rx="3" ry="2.5"/>
      <ellipse cx="128" cy="97" rx="3" ry="2.5"/>
    </g>

    <!-- Ribs -->
    <g stroke="${p.shade}" stroke-width="1.2" fill="none" opacity="0.7" stroke-linecap="round">
      <path d="M 92 130 Q 90 145, 100 152"/>
      <path d="M 100 125 Q 98 145, 110 155"/>
      <path d="M 108 120 Q 106 145, 118 155"/>
      <path d="M 116 113 Q 114 140, 125 152"/>
    </g>

    <!-- Hind leg bone -->
    <path d="M 125 152 L 140 168 L 150 175" stroke="${p.shade}" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.8"/>
    <circle cx="140" cy="168" r="2.5" fill="${p.shade}" opacity="0.9"/>
    <circle cx="150" cy="175" r="2" fill="${p.shade}" opacity="0.9"/>

    <!-- Skull (in profile, pointed snout) -->
    <ellipse cx="135" cy="85" rx="14" ry="11" fill="${p.shade}" opacity="0.85"/>
    <ellipse cx="135" cy="85" rx="12" ry="9" fill="${p.primary}" opacity="0.7"/>
    <!-- Snout extension -->
    <path d="M 145 88 L 155 92 L 155 96 L 145 94 Z" fill="${p.shade}" opacity="0.85"/>
    <!-- Eye socket -->
    <ellipse cx="138" cy="83" rx="3.5" ry="3" fill="${p.shade}"/>
    <ellipse cx="138" cy="83" rx="2.5" ry="2" fill="#1a0f06"/>
    <!-- Tooth -->
    <path d="M 152 94 L 154 98 L 150 96 Z" fill="${p.belly}"/>
  </g>

  <!-- Paleontological label -->
  <g font-family="serif" font-size="6" fill="#3a2814" opacity="0.6">
    <text x="10" y="195">EOCENE — RECENT</text>
    <text x="135" y="195">FOSSIL · †</text>
  </g>
</svg>`;
  }

  // ===== ARCHETYPE REGISTRY =====
  const RENDERERS = {
    tree: treeSquirrel,
    flying: flyingSquirrel,
    ground: groundSquirrel,
    "ground-striped": (p) => groundSquirrel(p, { stripes: true }),
    "prairie-dog": prairieDog,
    chipmunk: chipmunk,
    marmot: marmot,
    giant: giantSquirrel,
    palm: palmSquirrel,
    pygmy: pygmySquirrel,
    prehistoric: prehistoric,
  };

  let nextId = 0;
  function render(type, colorKey) {
    const renderer = RENDERERS[type] || treeSquirrel;
    const palette = PALETTES[colorKey] || PALETTES.gray;
    const p = { ...palette, id: ++nextId };
    return renderer(p);
  }

  return { render, PALETTES, RENDERERS };
})();
