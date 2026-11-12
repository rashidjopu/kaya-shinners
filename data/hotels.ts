export interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  priceRange: string;
  rating: number;
  amenities: string[];
  image: string;
  bookingUrl?: string;
}

export const hotels: Hotel[] = [
  // Hotels will be added here once images and details are uploaded.
  // Example format:
  // {
  //   id: "hotel-name",
  //   name: "Hotel Name",
  //   location: "Diani Beach",
  //   description: "A short description of the hotel.",
  //   priceRange: "$$",
  //   rating: 4.5,
  //   amenities: ["Pool", "WiFi", "Restaurant", "Spa"],
  //   image: "/images/hotels/hotel-name.jpg",
  //   bookingUrl: "https://...",
  // },
];
