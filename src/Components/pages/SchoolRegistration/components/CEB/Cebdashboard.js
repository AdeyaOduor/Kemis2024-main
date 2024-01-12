import React, { useState } from 'react';

const Card = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (isOpen) {
      // Call function for closing the modal
      closeModal();
    } else {
      // Call function for opening the modal
      openModal();
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-4 my-4">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handleClick} // Use handleClick function instead of toggleModal
      >
        {isOpen ? 'Close Modal' : 'Open Modal'}
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">{title} Modal</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2">Name</th>
                  <th className="py-2">Age</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">{item.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={closeModal} // Use closeModal function instead of toggleModal
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Cebdashboard = () => {
  const cardData = [
    {
      title: 'Card 1',
      data: [
        { name: 'John Doe', age: 25 },
        { name: 'Jane Smith', age: 30 },
      ],
    },
    {
      title: 'Card 2',
      data: [
        { name: 'Alice Johnson', age: 35 },
        { name: 'Bob Williams', age: 40 },
      ],
    },
    {
      title: 'Card 3',
      data: [
        { name: 'Eve Anderson', age: 45 },
        { name: 'Frank Wilson', age: 50 },
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} data={card.data} />
      ))}
    </div>
  );
};

export default Cebdashboard;