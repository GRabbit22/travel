export interface Transport {
  id: number;
  type: string;
  description: string;
  fareRange: string;
  tips: string[];
  icon: string;
}

export const transportOptions: Transport[] = [
  {
    id: 1,
    type: "Metro",
    description: "Indore Metro is a clean, efficient, and affordable way to travel across the city.",
    fareRange: "₹10 - ₹40",
    tips: [
      "Get a metro card for convenience",
      "Avoid peak hours for less crowding",
      "Check route map before traveling"
    ],
    icon: "Train"
  },
  {
    id: 2,
    type: "Cab Services",
    description: "Uber, Ola, and local taxi services are widely available throughout Indore.",
    fareRange: "₹50 - ₹500",
    tips: [
      "Book through apps for better rates",
      "Check driver ratings",
      "Share rides to save money"
    ],
    icon: "Car"
  },
  {
    id: 3,
    type: "Auto Rickshaw",
    description: "Traditional and most popular mode of transport for short distances in Indore.",
    fareRange: "₹20 - ₹150",
    tips: [
      "Negotiate fare before starting",
      "Use meter when available",
      "Share autos for cheaper rides"
    ],
    icon: "TramFront"
  },
  {
    id: 4,
    type: "City Bus",
    description: "AICTSL buses connect all major areas of Indore at very affordable rates.",
    fareRange: "₹5 - ₹30",
    tips: [
      "Most economical option",
      "Crowded during peak hours",
      "Ask locals for route information"
    ],
    icon: "Bus"
  }
];
