
import { Court } from './types';

export const COURTS: Court[] = [
  {
    id: 'c1',
    name: 'Skyline Badminton Arena',
    type: 'Badminton',
    image: 'https://images.unsplash.com/photo-1626225967045-9410dd99ec70?q=80&w=800&auto=format&fit=crop',
    price: 15,
    rating: 4.8,
    location: '123 Sport Ave, Downtown',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    amenities: ['Locker Rooms', 'Pro Shop', 'Cafe'],
    description: 'Premier indoor badminton facility with professional-grade flooring and lighting.'
  },
  {
    id: 'c2',
    name: 'The Pickle Loft',
    type: 'Pickleball',
    image: 'https://images.unsplash.com/photo-1613918431208-673b04c4839f?q=80&w=800&auto=format&fit=crop',
    price: 12,
    rating: 4.6,
    location: '456 Pickle Way, Uptown',
    coordinates: { lat: 40.7589, lng: -73.9851 },
    amenities: ['Equipment Rental', 'Water Station'],
    description: 'Modern pickleball courts with a vibrant community atmosphere.'
  },
  {
    id: 'c3',
    name: 'Hoop Dreams Center',
    type: 'Basketball',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop',
    price: 25,
    rating: 4.9,
    location: '789 Rim St, Midtown',
    coordinates: { lat: 40.7484, lng: -73.9857 },
    amenities: ['Showers', 'Bleachers', 'Scoreboard'],
    description: 'Full-sized hardwood basketball court perfect for team practice and pickup games.'
  },
  {
    id: 'c4',
    name: 'Ace Badminton Club',
    type: 'Badminton',
    image: 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=800&auto=format&fit=crop',
    price: 18,
    rating: 4.7,
    location: '321 Shuttle Lane, Eastside',
    coordinates: { lat: 40.7829, lng: -73.9654 },
    amenities: ['Coach available', 'Parking'],
    description: 'Elite training center specializing in badminton player development.'
  },
  {
    id: 'c5',
    name: 'Dink & Drive Courts',
    type: 'Pickleball',
    image: 'https://images.unsplash.com/photo-1629235392686-e04e90218843?q=80&w=800&auto=format&fit=crop',
    price: 10,
    rating: 4.5,
    location: '555 Paddle Blvd, Westside',
    coordinates: { lat: 40.7061, lng: -74.0092 },
    amenities: ['Benches', 'Night Lighting'],
    description: 'Affordable outdoor courts with excellent night lighting and a friendly neighborhood vibe.'
  }
];
