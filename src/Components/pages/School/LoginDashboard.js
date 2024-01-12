import React from 'react';

function LoginDashboard() {
  // Create an array to represent the data for each card
  const cardsData = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    imageUrl: `https://via.placeholder.com/150`, // Replace with your image placeholder URL
    title: `Card ${index + 1}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    author: {
      name: 'Jonathan Reinink',
      date: 'Aug 18',
    },
  }));

  return (
    <div className="p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {cardsData.map((card) => (
        <div key={card.id} className="max-w-sm w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url('${card.imageUrl}')` }}
            title={card.title}
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">{card.title}</div>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
            <div className="flex items-center">
              {/* Replace the image with an image placeholder */}
              <button
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoginDashboard;
