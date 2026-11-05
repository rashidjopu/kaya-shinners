export interface Destination {
  id: string;
  name: string;
  location: string;
  tagline: string;
  description: string;
  highlights: string[];
  heroImage: string;
  images: string[];
  category: "safari" | "adventure" | "cultural" | "beach" | "nature";
}

export const destinations: Destination[] = [
  {
    id: "tsavo-east-west",
    name: "Tsavo East & West",
    location: "Tsavo National Park",
    tagline: "The Iconic Safari Experience",
    description:
      "Explore Kenya's largest national park, a land of breathtaking contrasts where epic safari encounters meet ancient geological marvels. Spot the famous red elephants, lions, leopards, giraffes, cheetahs, buffalo, and wildebeest roaming free across the vast wilderness.",
    highlights: [
      "Big Five game drives",
      "Famous red elephants of Tsavo",
      "Mzima Springs crystal-clear pools",
      "Shetani Lava Flow exploration",
      "Scenic Yatta Plateau views",
    ],
    heroImage: "/images/tsavo/tsavo-1.jfif",
    images: [
      "/images/tsavo/tsavo-1.jfif",
      "/images/tsavo/tsavo-2.jfif",
      "/images/tsavo/tsavo-3.jfif",
      "/images/tsavo/tsavo-4.jfif",
    ],
    category: "safari",
  },
  {
    id: "shimba-hills",
    name: "Shimba Hills",
    location: "Kwale County",
    tagline: "Hiking & Waterfalls",
    description:
      "Trek through one of the largest coastal forests in East Africa. Shimba Hills National Reserve offers lush green hiking trails, the spectacular Sheldrick Falls, and rare sable antelope sightings amidst a canopy of tropical wilderness.",
    highlights: [
      "Sheldrick Falls waterfall hike",
      "Rare sable antelope sighting",
      "Lush coastal forest trails",
      "Panoramic Indian Ocean views",
      "Bird watching paradise",
    ],
    heroImage: "/images/shimba-hills/shimba-1.jfif",
    images: [
      "/images/shimba-hills/shimba-1.jfif",
      "/images/shimba-hills/shimba-2.jfif",
      "/images/shimba-hills/shimba-3.jfif",
      "/images/shimba-hills/shimba-4.jfif",
    ],
    category: "nature",
  },
  {
    id: "kaya-kinondo",
    name: "Kaya Kinondo",
    location: "Diani, South Coast",
    tagline: "Sacred Forest Experience",
    description:
      "Step into the mystical Kaya Kinondo, a UNESCO World Heritage sacred forest of the Digo people. Walk beneath ancient trees draped in centuries of spiritual significance, guided by local elders who share the stories and traditions of this living cultural treasure.",
    highlights: [
      "UNESCO World Heritage site",
      "Guided cultural forest walk",
      "Ancient sacred rituals & stories",
      "Rare medicinal plant species",
      "Community-led conservation",
    ],
    heroImage: "/images/kaya-kinondo/kaya-1.jfif",
    images: [
      "/images/kaya-kinondo/kaya-1.jfif",
      "/images/kaya-kinondo/kaya-2.jfif",
      "/images/kaya-kinondo/kaya-3.jfif",
    ],
    category: "cultural",
  },
  {
    id: "colobus-monkey",
    name: "Colobus Monkey Reservation",
    location: "Diani Beach",
    tagline: "Primate Conservation & Wildlife",
    description:
      "Visit the Colobus Conservation centre dedicated to protecting the endangered Angolan colobus monkeys. Experience guided forest walks, learn about primate conservation efforts, and observe these stunning black-and-white primates swinging through the coastal forest canopy.",
    highlights: [
      "Guided primate forest walk",
      "Colobus monkey observation",
      "Conservation education",
      "Coastal forest ecosystem",
      "Wildlife photography",
    ],
    heroImage: "/images/colobus-monkey/colobus-1.jfif",
    images: [
      "/images/colobus-monkey/colobus-1.jfif",
      "/images/colobus-monkey/colobus-2.jfif",
    ],
    category: "nature",
  },
  {
    id: "jetski-riding",
    name: "Jetski Riding",
    location: "Diani Beach",
    tagline: "High-Speed Ocean Thrills",
    description:
      "Feel the rush of adrenaline as you carve through the turquoise waters of the Indian Ocean on a powerful jetski. Our experienced guides lead you on thrilling rides along the Diani coastline with stunning views of the palm-fringed shore.",
    highlights: [
      "Professional guided rides",
      "Turquoise ocean waters",
      "Scenic coastline views",
      "Suitable for beginners & experts",
      "Safety equipment provided",
    ],
    heroImage: "/images/jetski/jetski-1.jfif",
    images: ["/images/jetski/jetski-1.jfif"],
    category: "adventure",
  },
  {
    id: "quad-bike-diani",
    name: "Quad Bike Diani",
    location: "Diani Beach",
    tagline: "Off-Road Beach Adventure",
    description:
      "Rev up and ride through the sandy trails, lush forests, and hidden paths of Diani on a powerful quad bike. This off-road adventure takes you through local villages, coconut plantations, and along breathtaking stretches of untouched coastline.",
    highlights: [
      "Off-road bush & beach trails",
      "Village and plantation tours",
      "Professional guide & safety gear",
      "Sunset ride options",
      "All skill levels welcome",
    ],
    heroImage: "/images/quad-bike/quad-1.jfif",
    images: ["/images/quad-bike/quad-1.jfif", "/images/quad-bike/quad-2.jfif"],
    category: "adventure",
  },
  {
    id: "snake-park",
    name: "Snake Park Mwamanga",
    location: "Mwamanga, South Coast",
    tagline: "Reptile Encounters & Education",
    description:
      "Get up close with some of Africa's most fascinating reptiles at the Mwamanga Snake Park. Home to cobras, mambas, pythons, crocodiles, and tortoises, this educational experience offers a rare chance to learn about Kenya's diverse reptile species.",
    highlights: [
      "Live snake handling demonstrations",
      "Crocodile & tortoise encounters",
      "Expert-guided educational tours",
      "Rare reptile species",
      "Safe & controlled environment",
    ],
    heroImage: "/images/snake-park/snake-1.jpg",
    images: ["/images/snake-park/snake-1.jpg", "/images/snake-park/snake-2.jpg"],
    category: "nature",
  },
  {
    id: "bike-tour",
    name: "Bike Tour",
    location: "Kenyan Coast",
    tagline: "Coastal Cycling Adventure",
    description:
      "Pedal your way through the scenic landscapes of Kenya's coast on a guided cycling tour. Ride through spice farms, fishing villages, and along white sandy shores while discovering the authentic rhythms of coastal Kenyan life.",
    highlights: [
      "Guided scenic cycling routes",
      "Village & cultural stops",
      "Spice farm visits",
      "Coastal landscape views",
      "All fitness levels",
    ],
    heroImage: "/images/bike-tour/bike-1.jfif",
    images: ["/images/bike-tour/bike-1.jfif"],
    category: "adventure",
  },
  {
    id: "camel-riding",
    name: "Camel Riding",
    location: "Diani Beach",
    tagline: "Sunset Beach Ride",
    description:
      "Experience the magic of riding a camel along the golden sands of Diani Beach as the sun dips below the Indian Ocean horizon. This gentle, unforgettable ride blends the exotic charm of Africa with the serene beauty of the coast.",
    highlights: [
      "Sunset beach camel rides",
      "Professional camel handlers",
      "Stunning photo opportunities",
      "Family-friendly activity",
      "Golden hour oceanfront views",
    ],
    heroImage: "/images/camel-riding/camel-1.jfif",
    images: ["/images/camel-riding/camel-1.jfif"],
    category: "adventure",
  },
  {
    id: "mombasa-city-tour",
    name: "Mombasa City Tour",
    location: "Mombasa",
    tagline: "History, Culture & Spice",
    description:
      "Discover the rich tapestry of Mombasa's history on a guided city tour through the old town. Visit Fort Jesus, a UNESCO World Heritage site, explore the bustling Marikiti Market, walk through the iconic tusks, and savour the flavours of Swahili street food.",
    highlights: [
      "Fort Jesus UNESCO Heritage site",
      "Old Town walking tour",
      "Marikiti Market experience",
      "Iconic Mombasa tusks landmark",
      "Swahili cuisine tasting",
    ],
    heroImage: "/images/mombasa-city-tour/mombasa-tusks.jpg",
    images: ["/images/mombasa-city-tour/mombasa-tusks.jpg"],
    category: "cultural",
  },
  {
    id: "funzi-island",
    name: "Funzi Island",
    location: "South Coast, Kenya",
    tagline: "Untouched Island Paradise",
    description:
      "Escape to the remote and pristine Funzi Island, a hidden gem accessible only by boat through winding mangrove channels. Experience traditional Swahili village life, pristine sandbanks, and some of the most unspoilt coastline in all of Kenya.",
    highlights: [
      "Boat ride through mangroves",
      "Pristine sandbank picnics",
      "Traditional village visits",
      "Dolphin spotting",
      "Untouched natural beauty",
    ],
    heroImage: "/images/funzi-island/funzi-1.jfif",
    images: [
      "/images/funzi-island/funzi-1.jfif",
      "/images/funzi-island/funzi-2.jfif",
    ],
    category: "beach",
  },
  {
    id: "malindi-marafa",
    name: "Malindi & Marafa",
    location: "Malindi, North Coast",
    tagline: "Hell's Kitchen & Coastal Heritage",
    description:
      "Journey to Malindi and the dramatic Marafa Depression, known as Hell's Kitchen — a breathtaking landscape of sandstone gorges carved by millennia of erosion. Combine this geological wonder with Malindi's historic Swahili architecture and marine parks.",
    highlights: [
      "Marafa Hell's Kitchen gorges",
      "Malindi Marine National Park",
      "Vasco da Gama Pillar",
      "Swahili historical sites",
      "Stunning sunset viewpoints",
    ],
    heroImage: "/images/malindi-marafa/marafa-1.jfif",
    images: [
      "/images/malindi-marafa/marafa-1.jfif",
      "/images/malindi-marafa/marafa-2.jfif",
    ],
    category: "cultural",
  },
  {
    id: "gede-ruins",
    name: "Gede Ruins",
    location: "Gede, Kilifi County",
    tagline: "Ancient Swahili Mysteries",
    description:
      "Wander through the haunting ruins of Gede, a 12th-century Swahili trading town mysteriously abandoned and swallowed by the coastal forest. This archaeological marvel offers a fascinating glimpse into the sophisticated urban life of medieval East Africa.",
    highlights: [
      "12th-century Swahili ruins",
      "Guided archaeological walk",
      "Butterfly sanctuary",
      "Ancient mosque & palace remains",
      "Coastal forest nature trail",
    ],
    heroImage: "/images/gede-ruins/gede-1.jfif",
    images: [
      "/images/gede-ruins/gede-1.jfif",
      "/images/gede-ruins/gede-2.jfif",
      "/images/gede-ruins/gede-3.jfif",
    ],
    category: "cultural",
  },
  {
    id: "watamu",
    name: "Watamu",
    location: "Watamu, Kilifi County",
    tagline: "Marine Paradise & Pristine Beaches",
    description:
      "Discover Watamu, a stunning stretch of the Kenyan coast renowned for its turquoise waters, coral gardens, and world-class marine life. Snorkel in the Watamu Marine National Park, spot whale sharks, and relax on some of the most beautiful beaches in East Africa.",
    highlights: [
      "Watamu Marine National Park",
      "Whale shark encounters",
      "Coral garden snorkelling",
      "Bio-Ken snake research centre",
      "Mida Creek bird sanctuary",
    ],
    heroImage: "/images/watamu/watamu-1.jfif",
    images: [
      "/images/watamu/watamu-1.jfif",
      "/images/watamu/watamu-2.jfif",
      "/images/watamu/watamu-3.jfif",
    ],
    category: "beach",
  },
  {
    id: "wasini-island",
    name: "Wasini Island",
    location: "South Coast, Kenya",
    tagline: "Island Paradise & Marine Life",
    description:
      "Escape to the enchanting Wasini Island, a coral island paradise off Kenya's south coast. Enjoy world-class snorkelling over vibrant coral gardens, spot playful dolphins in the Kisite-Mpunguti Marine Park, and feast on a traditional Swahili seafood lunch under swaying palm trees.",
    highlights: [
      "Kisite-Mpunguti Marine Park",
      "Dolphin spotting excursions",
      "Coral reef snorkelling",
      "Traditional Swahili seafood feast",
      "Mangrove boardwalk trail",
    ],
    heroImage: "/images/wasini-island/wasini-1.jpeg",
    images: [
      "/images/wasini-island/wasini-1.jpeg",
      "/images/wasini-island/wasini-2.jpeg",
      "/images/wasini-island/wasini-3.jpeg",
      "/images/wasini-island/wasini-4.jpeg",
      "/images/wasini-island/wasini-5.jpeg",
      "/images/wasini-island/wasini-6.jpeg",
      "/images/wasini-island/wasini-7.jpeg",
    ],
    category: "beach",
  },
  {
    id: "sand-dune-mambrui",
    name: "Sand Dune Mambrui",
    location: "Mambrui, Malindi",
    tagline: "Desert Meets Ocean",
    description:
      "Experience the surreal beauty of the Mambrui sand dunes, where towering golden dunes rise dramatically against the backdrop of the Indian Ocean. This extraordinary landscape — where the desert meets the sea — offers unforgettable sandboarding and photography opportunities.",
    highlights: [
      "Towering coastal sand dunes",
      "Sandboarding adventures",
      "Spectacular sunrise & sunset",
      "Desert-meets-ocean landscape",
      "Stunning photography location",
    ],
    heroImage: "/images/sand-dune-mambrui/dune-group.jpg",
    images: [
      "/images/sand-dune-mambrui/dune-group.jpg",
      "/images/sand-dune-mambrui/dune-1.jfif",
      "/images/sand-dune-mambrui/dune-2.jfif",
      "/images/sand-dune-mambrui/dune-3.jfif",
    ],
    category: "adventure",
  },
];
