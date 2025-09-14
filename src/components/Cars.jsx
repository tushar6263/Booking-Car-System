import React, { useState, useEffect } from 'react';
import carsData from '../data/carsData';
import CarsVideo from '../assets/videos/CarsVideo.mp4'

const Hero = () => (
  <div className="relative h-96 overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={CarsVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>


    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
      <h1 className="text-4xl md:text-5xl font-bold">Explore Our Car Collection</h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl">Discover our premium selection of luxury cars available for rent across Europe</p>
    </div>
  </div>
);

const FilterBar = ({
  locations,
  types,
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
  sortOrder,
  setSortOrder,
}) => (
  <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 max-w-7xl mx-auto -mt-12 relative z-20">
    <div className="flex-1 w-full sm:w-auto">
      <select 
        value={locationFilter} 
        onChange={(e) => setLocationFilter(e.target.value)}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All Locations</option>
        {locations.map((loc) => (<option key={loc} value={loc}>{loc}</option>))}
      </select>
    </div>
    <div className="flex-1 flex flex-col sm:flex-row w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-4">
      <select 
        value={typeFilter} 
        onChange={(e) => setTypeFilter(e.target.value)}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">Car Type</option>
        {types.map((type) => (<option key={type} value={type}>{type}</option>))}
      </select>
      <select 
        value={sortOrder} 
        onChange={(e) => setSortOrder(e.target.value)}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>
    </div>
  </div>
);

const CarCard = ({ car }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xl font-semibold">{car.name}</h3>
        <span className="text-sm text-gray-500 font-medium">"{car.type}"</span>
      </div>
      <div className="flex items-center space-x-4 text-gray-600 text-sm mb-2">
        <span className="flex items-center">
          <span className="mr-1">👤</span> {car.passengers} Guests
        </span>
        <span className="flex items-center">
          <span className="mr-1">⭐</span> {car.rating}/5.0
        </span>
      </div>
      <p className="text-sm text-gray-400 mb-4">{car.location}</p>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-gray-800">
          ${car.pricePerDay} <span className="text-sm font-normal text-gray-500">/ day</span>
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          More Info
        </button>
      </div>
    </div>
  </div>
);

const CarGrid = ({ cars }) => (
  <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <p className="text-center text-lg text-gray-600 mb-6">
      <span className="font-semibold text-gray-800">{cars.length}</span> {cars.length === 1 ? 'car' : 'cars'} available for your search criteria
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (<CarCard key={car.id} car={car} />))}
    </div>
  </div>
);



export const Cars = () => {
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [locationFilter, setLocationFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('price-asc');

  const locations = [...new Set(carsData.map(car => car.location))];
  const types = [...new Set(carsData.map(car => car.type))];

  useEffect(() => {
    let result = [...carsData];

    if (locationFilter !== 'All') {
      result = result.filter(car => car.location === locationFilter);
    }

    if (typeFilter !== 'All') {
      result = result.filter(car => car.type === typeFilter);
    }


    switch (sortOrder) {
      case 'price-asc':
        result.sort((a, b) => a.pricePerDay - b.pricePerDay);
        break;
      case 'price-desc':
        result.sort((a, b) => b.pricePerDay - a.pricePerDay);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredCars(result);
  }, [locationFilter, typeFilter, sortOrder]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Hero />
      <main>
        <FilterBar 
          locations={locations}
          types={types}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <CarGrid cars={filteredCars} />
      </main>
    </div>
  );
}