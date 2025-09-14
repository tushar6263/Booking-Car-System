import React from 'react';

export const Service = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle className="text-gray-700 opacity-50" cx="5" cy="5" r="1"></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 animate-fade-in-up">
            Our Premium Vehicle Services
          </h1>
          <p className="text-lg sm:text-xl font-light leading-relaxed mb-8 animate-fade-in-up">
            From luxury rentals to personalized tours, we offer a suite of services designed for your ultimate driving experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-xl hover:bg-gray-200 transition-colors transform hover:scale-105">
              Book a Service
            </a>
            <a href="#" className="bg-transparent text-white px-6 py-3 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-colors transform hover:scale-105">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
            Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Luxury Vehicle Rentals</h3>
              <p className="text-gray-600">
                Experience the thrill of driving the world's most exclusive cars. Our fleet includes sports cars, sedans, and SUVs from top brands.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Chauffeur Service</h3>
              <p className="text-gray-600">
                Travel in style and comfort with our professional chauffeur service. Perfect for business trips, events, and special occasions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Curated Driving Tours</h3>
              <p className="text-gray-600">
                Discover breathtaking landscapes and hidden gems with our expertly planned driving tours. Routes are customizable to your preference.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674m-4.674 0l-1.042 2.894A2 2 0 007.464 22h9.072a2 2 0 001.815-2.106l-1.042-2.894m-4.674 0H9.663zM12 21a1 1 0 100-2 1 1 0 000 2zM12 21a9 9 0 100-18 9 9 0 000 18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Vehicle Maintenance</h3>
              <p className="text-gray-600">
                Ensure your vehicle is always in pristine condition with our premium maintenance and detailing services, performed by certified technicians.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-pink-500 text-white rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H6.737a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 10H10v2a2 2 0 104 0v-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Corporate Fleet Solutions</h3>
              <p className="text-gray-600">
                Streamline your business operations with our tailored corporate fleet solutions, including long-term rentals and management.
              </p>
            </div>
            

            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h8m4 0v4m0 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0" />
                  <path d="M12 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Event Transportation</h3>
              <p className="text-gray-600">
                Ensure a seamless and elegant experience for your special events with our luxury vehicles and dedicated event staff.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-16">
            Our Simple 3-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-extrabold shadow-xl">1</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Service</h3>
              <p className="text-gray-600">
                Select from our wide range of services, from luxury rentals to chauffeur-driven experiences.
              </p>
            </div>
           
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl font-extrabold shadow-xl">2</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customize and Book</h3>
              <p className="text-gray-600">
                Tailor your service with specific dates, times, and preferences through our easy booking system.
              </p>
            </div>
  
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <div className="absolute inset-0 bg-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-extrabold shadow-xl">3</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enjoy the Ride</h3>
              <p className="text-gray-600">
                Relax and enjoy our world-class service. Our team handles the rest, ensuring a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
            Why Choose Our Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-3xl mb-4">
                💎
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unmatched Luxury</h3>
              <p className="text-gray-600 text-center">
                Access to the finest fleet of luxury and exotic vehicles.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-3xl mb-4">
                ✅
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Seamless Experience</h3>
              <p className="text-gray-600 text-center">
                Effortless booking, flexible scheduling, and reliable service.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-3xl mb-4">
                🔒
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust and Safety</h3>
              <p className="text-gray-600 text-center">
                Fully insured, well-maintained vehicles, and professional drivers.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-3xl mb-4">
                🌟
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5-Star Customer Support</h3>
              <p className="text-gray-600 text-center">
                Our dedicated team is available 24/7 to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

   
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500">
              <p className="text-gray-700 italic mb-4">
                "The most seamless and luxurious car rental experience I've ever had. The service was impeccable from start to finish. I will definitely be a repeat customer."
              </p>
              <div className="font-semibold text-gray-900">
                Jane Doe, New York
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500">
              <p className="text-gray-700 italic mb-4">
                "Their chauffeur service for my business trip was top-notch. Punctual, professional, and the car was immaculate. Highly recommend for any corporate needs."
              </p>
              <div className="font-semibold text-gray-900">
                John Smith, Los Angeles
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-purple-500">
              <p className="text-gray-700 italic mb-4">
                "We booked a driving tour and it was an unforgettable experience. They planned the perfect route, and the vehicle was a dream to drive. A truly amazing service."
              </p>
              <div className="font-semibold text-gray-900">
                Sarah Lee, Miami
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Contact us today to learn more about our services or to book your next vehicle.
          </p>
          <a href="#" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-blue-700 transition-colors transform hover:scale-105">
            Get Started Now
          </a>
        </div>
      </section>

    </div>
  );
};

