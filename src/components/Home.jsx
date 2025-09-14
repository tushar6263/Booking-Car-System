import React, { useState } from 'react';
import { 
  FaFacebookF, FaInstagram, FaTwitter, FaCarSide, FaTools, FaWrench, 
  FaStar, FaUserFriends, FaChevronLeft, FaChevronRight, FaChevronDown 
} from 'react-icons/fa';
import { 
  MdOutlineLocalCarWash, MdSecurity, MdSupportAgent, MdEmail, MdPhone, MdLocationOn 
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import HomeVideo from '../assets/videos/HomeVideo.mp4'
import car1 from '../assets/images/Mercedes-Benz C-Class.png'; 
import carsData from '../data/carsData';

const faqData = [
  {
    question: 'Do I need a license to rent a car?',
    answer: 'Yes, a valid driver\'s license is required. International permit for non-EU citizens.'
  },
  {
    question: 'What is included in the car rental price?',
    answer: 'Rental price includes car, basic insurance, and limited kilometers. Extras available.'
  },
  {
    question: 'How do I make a booking?',
    answer: 'Book through our website by selecting location, dates, and vehicle.'
  },
  {
    question: 'What happens in case of a breakdown?',
    answer: 'We provide 24/7 roadside assistance. Call the emergency number in your rental agreement.'
  },
  {
    question: 'Can I bring food and drinks?',
    answer: 'Yes, but keep the vehicle clean to avoid fees. Smoking prohibited.'
  },
  {
    question: 'What should I bring for my trip?',
    answer: 'Bring your driver\'s license, booking confirmation, and a credit card.'
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="w-full flex justify-between items-center text-left text-gray-800 focus:outline-none"
      onClick={onClick}
    >
      <span className="text-base md:text-lg font-medium">{question}</span>
      <FaChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen mt-4' : 'max-h-0'
      }`}
    >
      <p className="text-gray-600">{answer}</p>
    </div>
  </div>
);

export const Home = () => {
  const [filterBrand, setFilterBrand] = useState('All');
  const [filterTrans, setFilterTrans] = useState('All');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const filteredCars = carsData.filter(car => {
    const brandMatch = filterBrand === 'All' || car.brand === filterBrand;
    const transMatch = filterTrans === 'All' || car.transmission === filterTrans;
    return brandMatch && transMatch;
  });

  const brands = ['All', ...new Set(carsData.map(car => car.brand))];

  return (
    <div>
      <section className="relative h-[80vh] md:h-[70vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay loop muted playsInline
        >
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center md:flex-row md:justify-end relative z-20">
          <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
              Finding the perfect car is easy
            </h2>
            <p className="text-gray-600 mt-3 text-center md:text-left">
              Choose from our premium selection of cars available in your city.
            </p>
            <form className="space-y-4 mt-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Select Location</label>
                <select className="w-full px-4 py-2 border rounded-md">
                  <option>Select Location</option>
                  <option>New York, NY</option>
                  <option>Los Angeles, CA</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">When?</label>
                <input type="date" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button type="button" className="flex-1 px-4 py-2 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-50 transition">
                  <FaCarSide className="inline-block mr-2" />
                  Automatic
                </button>
                <button type="button" className="flex-1 px-4 py-2 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-50 transition">
                  <FaTools className="inline-block mr-2" />
                  Manual
                </button>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-16">
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured Cars</h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
              <select
                className="px-4 py-2 border rounded-md"
                onChange={(e) => setFilterBrand(e.target.value)}
                value={filterBrand}
              >
                <option value="All">Filter By: Brand</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
              <select
                className="px-4 py-2 border rounded-md"
                onChange={(e) => setFilterTrans(e.target.value)}
                value={filterTrans}
              >
                <option value="All">Filter By: Transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredCars.slice(0, 3).map((car) => (
              <div key={car.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {car.name} <span className="text-sm font-normal text-gray-500">- {car.type}</span>
                  </h3>
                  <div className="flex items-center text-yellow-500 mt-1">
                    {Array.from({ length: car.rating }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    <span className="flex items-center"><FaUserFriends className="mr-2" /> {car.seats} Seats • {car.bags} Bags</span>
                    <span className="flex items-center"><MdLocationOn className="mr-2" /> {car.location}</span>
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg md:text-2xl font-bold text-blue-800">€{car.price} <span className="text-sm font-normal text-gray-600">/ day</span></span>
                    <Link to={`/cars/${car.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">More Info</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/cars" className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-400 transition">
              View All Cars
            </Link>
          </div>
        </section>


        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-8">
              Find answers to common questions about our car rental services.
            </p>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onClick={() => handleFaqToggle(index)}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Link 
                to="/contact" 
                className="bg-yellow-400 text-gray-900 px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

       
        <section className="bg-gray-100 py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Customer Reviews</h2>
            <div className="flex overflow-x-auto space-x-4 px-2 md:justify-center snap-x">
              <div className="bg-white p-6 rounded-lg shadow-md min-w-[250px] snap-center">
                <div className="flex justify-center text-yellow-500 mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-gray-600 italic">"Perfect day out with friends! The car was luxurious and comfortable."</p>
                <h5 className="font-semibold text-gray-800 mt-4">Emma M.</h5>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md min-w-[250px] snap-center">
                <div className="flex justify-center text-yellow-500 mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-gray-600 italic">"An unforgettable experience! The crew was professional and friendly."</p>
                <h5 className="font-semibold text-gray-800 mt-4">Michael S.</h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
