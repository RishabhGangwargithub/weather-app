import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Bangalore",
    },
    {
      id: 3,
      title: "Pune",
    },
    {
      id: 4,
      title: "Mumbai",
    },
    {
      id: 5,
      title: "Gurgaon",
    },
  ];

  return (
    <div className="flex items-center justify-around  my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium mx-1"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;