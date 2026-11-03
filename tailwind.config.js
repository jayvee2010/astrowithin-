/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        'sans-ui': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Palette 3: Deep Forest Emerald & Sunburst Brass
        forest: {
          canvas: '#0D1713',    // Deep velvet botanical slate
          surface: '#121F1A',   // Rich dark moss
          card: '#162720',      // Elevated forest slate
          border: 'rgba(229, 184, 105, 0.22)',
          highlight: '#1F342B',
        },
        brass: {
          DEFAULT: '#E5B869',   // Sunburst Antique Brass Gold
          light: '#F3D8A2',
          dark: '#C89D56',
        },
        vermilion: {
          DEFAULT: '#C84B31',   // Spiced Kumkum Vermilion
          hover: '#D95A3F',
          dark: '#A63821',
        },
        sage: {
          mist: '#F1F5F2',      // Pale Sage Mist text
          muted: '#9CB3A5',     // Soft Lichen secondary text
          dim: '#657B6F',
        },
        // Legacy fallbacks
        // Palette 1: Cosmic Ember
        cosmic: {
          void: '#120E18',      // Velvet Void
          plum: '#3B2A3F',      // Nebula Plum
          amethyst: '#7A6D7F',  // Smoky Amethyst
          solar: '#E07A2E',     // Solar Flare
          ember: '#F4A883',     // Ember Glow
          mist: '#F6ECDD',      // Stardust Mist
        },
        // Palette 2: Celestial Starlight
        celestial: {
          charcoal: '#1E293B',  // Charcoal night sky
          ochre: '#CFAF83',     // Golden Ochre
          sage: '#9D886B',      // Sage star dusk
          plum: '#475368',      // Plum slate
        },
        // Mapped Vedic Brand Accents
        vedic: {
          void: '#120E18',
          plum: '#3B2A3F',
          solar: '#E07A2E',
          ember: '#F4A883',
          mist: '#F6ECDD',
          ochre: '#CFAF83',
          sage: '#9D886B',
          charcoal: '#1E293B',
          slatePlum: '#475368',
          gold: '#CFAF83',
          goldLight: '#F6ECDD',
          saffron: '#E07A2E',
          marigold: '#F4A883',
          darkVoid: '#120E18',
          deepSky: '#1E293B',
          parchment: '#F6ECDD',
          dawnSky: '#F4A883',
        },
        chakra: {
          root: '#E07A2E',      // Solar Flare / Deep Ember
          sacral: '#F4A883',    // Ember Glow
          solar: '#CFAF83',     // Golden Ochre
          heart: '#9D886B',     // Star Sage
          throat: '#475368',    // Plum slate
          thirdEye: '#7A6D7F',  // Smoky Amethyst
          crown: '#3B2A3F',     // Nebula Plum
        }
      },
      fontFamily: {
        display: ['Cinzel Decorative', 'serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
