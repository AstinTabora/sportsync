
export type SportType = 'Badminton' | 'Pickleball' | 'Basketball';

export interface Court {
  id: string;
  name: string;
  type: SportType;
  image: string;
  price: number;
  rating: number;
  location: string;
  coordinates: { lat: number; lng: number };
  amenities: string[];
  description: string;
}

export interface BookingDetails {
  courtId: string;
  date: string;
  timeSlot: string;
  totalAmount: number;
  userName: string;
  userEmail: string;
}

export interface Tournament {
  id: string;
  title: string;
  sport: SportType;
  date: string;
  status: 'Open' | 'Closed' | 'Ongoing';
  teams: number;
}
