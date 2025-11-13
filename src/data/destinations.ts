export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  mapsLink: string;
  category: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Rajwada Palace",
    description: "A magnificent 7-storey palace blending Maratha, Mughal and French architecture. The historical seat of Holkar rulers.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&auto=format&fit=crop",
    mapsLink: "https://maps.google.com/?q=Rajwada+Palace+Indore",
    category: "Historical"
  },
  {
    id: 2,
    name: "Lal Bagh Palace",
    description: "A grand palace with European-style architecture, lush gardens, and opulent interiors showcasing royal heritage.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop",
    mapsLink: "https://maps.google.com/?q=Lal+Bagh+Palace+Indore",
    category: "Historical"
  },
  {
    id: 3,
    name: "Sarafa Bazaar",
    description: "Famous night food market offering delicious street food. A paradise for food lovers with authentic Indori flavors.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop",
    mapsLink: "https://maps.google.com/?q=Sarafa+Bazaar+Indore",
    category: "Food & Shopping"
  },
  {
    id: 4,
    name: "Patalpani Waterfall",
    description: "A stunning waterfall surrounded by lush greenery. Perfect for nature lovers and monsoon visits.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    mapsLink: "https://maps.google.com/?q=Patalpani+Waterfall+Indore",
    category: "Nature"
  },
  {
    id: 5,
    name: "Khajrana Ganesh Temple",
    description: "A revered temple dedicated to Lord Ganesha. An important spiritual destination with beautiful architecture.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop",
    mapsLink: "https://maps.google.com/?q=Khajrana+Ganesh+Temple+Indore",
    category: "Religious"
  },
  {
    id: 6,
    name: "Ralamandal Wildlife Sanctuary",
    description: "A peaceful sanctuary with diverse flora and fauna. Ideal for trekking and wildlife photography.",
    image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&auto=format&fit=crop",
    mapsLink: "https://maps.google.com/?q=Ralamandal+Wildlife+Sanctuary+Indore",
    category: "Nature"
  }
];
