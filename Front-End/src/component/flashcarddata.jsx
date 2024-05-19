import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card'; // Ensure the file name matches exactly, case-sensitive
import NavBar from './navBar'; // Ensure the file name matches exactly, case-sensitive
import Hero from './hero';
import Features from './features';
import About from './about';
import Footer from './footer';
import { useLocation } from 'react-router-dom';

const RecordsComponent = () => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({ text1: '', text2: '', description: '' });
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [editedCard, setEditedCard] = useState({ text1: '', text2: '', description: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:5000/', { withCredentials: true })
      .then(response => {
        setRecords(response.data);
      })
      .catch(error => {
        console.error('Error fetching records:', error);
      });
  };
  const location = useLocation(); 
  useEffect(() => {
    // Scroll to the section if the URL contains a hash
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleChangeAdd = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeEdit = e => {
    const { name, value } = e.target;
    setEditedCard({ ...editedCard, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/', formData, { withCredentials: true })
      .then(response => {
        setRecords([...records, response.data]);
        setFormData({ text1: '', text2: '', description: '' });
      })
      .catch(error => {
        console.error('Error adding record:', error);
      });
  };

  const handleDelete = id => {
    axios.delete(`http://localhost:5000/${id}`, { withCredentials: true })
      .then(() => {
        setRecords(records.filter(record => record.id !== id));
      })
      .catch(error => {
        console.error('Error deleting record:', error);
      });
  };

  const handleEditClick = card => {
    setSelectedCardId(card.id);
    setEditedCard({ text1: card.text1, text2: card.text2, description: card.description });
  };

  const handleUpdateSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/${selectedCardId}`, editedCard, { withCredentials: true })
      .then(() => {
        fetchData();
        setSelectedCardId(null); // Clear selected card
      })
      .catch(error => {
        console.error('Error updating record:', error);
      });
  };

  return (
    <div>
      <NavBar />
      <Hero/>
      {/* <div className="mx-auto max-w-md text-center my-[70px]">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">AlxCards</h2>
      </div> */}
      <h2 className="text-lg font-semibold mb-4 text-center text-white">Records</h2>
      <ul className='flex justify-center flex-wrap max-w-[1100px] mx-auto'>
        {records.map(record => (
          <li key={record.id} className='m-2 max-w-[250px]'>
            <Card 
              text1={record.text1} 
              text2={record.text2} 
              description={record.description}  
              handleDelete={() => handleDelete(record.id)} 
              handleEdit={() => handleEditClick(record)}
            />
            {selectedCardId === record.id && (
              <div>
                <form onSubmit={handleUpdateSubmit}>
                  <input
                    type="text"
                    name="text1"
                    value={editedCard.text1}
                    onChange={handleChangeEdit}
                    placeholder="Enter Text1"
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="text2"
                    value={editedCard.text2}
                    onChange={handleChangeEdit}
                    placeholder="Enter Text2"
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="description"
                    value={editedCard.description}
                    onChange={handleChangeEdit}
                    placeholder="Enter Description"
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  >
                    Update Card
                  </button>
                </form>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div id='features'>
        <Features/>
      </div>

      <div id="about">
        <About/>
      </div>
      <Footer/>
      {/* <div className="mx-auto max-w-md text-center my-[70px]">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">Add New Card</h2>
      </div>
      <div className="m-auto max-w-[260px] bg-white shadow-md p-6 overflow-hidden rounded-lg border bg-gradient-to-br from-blue-500 to-green-500">
        <h2 className="text-lg font-semibold mb-4 text-center text-white">Add New Record</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="text1" className="block text-sm font-medium text-gray-700">
              Text 1:
            </label>
            <input
              type="text"
              name="text1"
              id="text1"
              value={formData.text1}
              onChange={handleChangeAdd}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text2" className="block text-sm font-medium text-gray-700">
              Text 2:
            </label>
            <input
              type="text"
              name="text2"
              id="text2"
              value={formData.text2}
              onChange={handleChangeAdd}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChangeAdd}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Add Record
          </button>
        </form>
      </div> */}

    </div>
  );
};

export default RecordsComponent;
