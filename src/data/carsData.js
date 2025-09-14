import car1 from '../assets/images/Mercedes-Benz C-Class.png'; 
import car2 from '../assets/images/BMW X5.png'; 
import car3 from '../assets/images/Audi Q7.png'; 
import car4 from '../assets/images/Ford Mustang.png'; 
import car5 from '../assets/images/Volkswagen Golf.png'; 
import car6 from '../assets/images/Jeep Wrangler.png'; 


const carsData = [
  {
    id: 1,
    name: 'Mercedes-Benz C-Class',
    brand: 'Mercedes-Benz',
    transmission: 'Automatic',
    type: 'Sedan',
    image: car1,
    rating: 5,
    seats: 5,
    bags: 4,
    location: 'New York, NY',
    price: 500
  },
  {
    id: 2,
    name: 'BMW X5',
    brand: 'BMW',
    transmission: 'Automatic',
    type: 'SUV',
    image: car2,
    rating: 5,
    seats: 7,
    bags: 6,
    location: 'Los Angeles, CA',
    price: 700
  },
    {
    id: 6,
    name: 'Jeep Wrangler',
    brand: 'Jeep',
    transmission: 'Automatic',
    type: 'SUV',
    image: car6,
    rating: 4,
    seats: 5,
    bags: 5,
    location: 'Denver, CO',
    price: 550
  },
  {
    id: 3,
    name: 'Audi Q7',
    brand: 'Audi',
    transmission: 'Automatic',
    type: 'SUV',
    image: car3,
    rating: 5,
    seats: 5,
    bags: 5,
    location: 'Miami, FL',
    price: 650
  },
  {
    id: 4,
    name: 'Ford Mustang',
    brand: 'Ford',
    transmission: 'Manual',
    type: 'Coupe',
    image: car4,
    rating: 4,
    seats: 4,
    bags: 2,
    location: 'New York, NY',
    price: 450
  },
  {
    id: 5,
    name: 'Volkswagen Golf',
    brand: 'Volkswagen',
    transmission: 'Manual',
    type: 'Hatchback',
    image: car5,
    rating: 4,
    seats: 5,
    bags: 3,
    location: 'Los Angeles, CA',
    price: 300
  },
];

export default carsData;