export interface Hotel {
  id: number;
  name: string;
  rating: number;
  priceRange: string;
  amenities: string[];
  location: string;
  bookingLink: string;
  image: string;
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Radisson Blu Hotel Indore",
    rating: 4.5,
    priceRange: "₹4,000 - ₹8,000",
    amenities: ["Swimming Pool", "Spa", "Restaurant", "Free WiFi", "Gym"],
    location: "Vijay Nagar",
    bookingLink: "https://www.booking.com",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sayaji Hotel",
    rating: 4.3,
    priceRange: "₹3,500 - ₹7,000",
    amenities: ["Pool", "Multiple Restaurants", "Banquet Hall", "Free Parking"],
    location: "Vijay Nagar",
    bookingLink: "https://www.booking.com",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Lemon Tree Hotel",
    rating: 4.2,
    priceRange: "₹2,500 - ₹5,000",
    amenities: ["Restaurant", "Free WiFi", "Room Service", "Breakfast"],
    location: "Scheme 54",
    bookingLink: "https://www.booking.com",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Hotel Amar Vilas",
    rating: 4.0,
    priceRange: "₹1,500 - ₹3,500",
    amenities: ["AC Rooms", "Restaurant", "WiFi", "24/7 Service"],
    location: "RNT Marg",
    bookingLink: "https://www.booking.com",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "FabHotel Prime",
    rating: 3.8,
    priceRange: "₹1,000 - ₹2,500",
    amenities: ["Clean Rooms", "WiFi", "TV", "Budget Friendly"],
    location: "Multiple Locations",
    bookingLink: "https://www.fabhotels.com",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "The O Hotel",
    rating: 3.9,
    priceRange: "₹800 - ₹2,000",
    amenities: ["Basic Amenities", "Clean", "Affordable", "WiFi"],
    location: "City Center",
    bookingLink: "https://www.oyorooms.com",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&auto=format&fit=crop"
  }
];
