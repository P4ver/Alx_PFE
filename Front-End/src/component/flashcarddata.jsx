import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';
import NavBar from './navBar';

const RecordsComponent = () => {
  const [records, setRecords] = useState([]);

  const [formData, setFormData] = useState({
    text1: '',
    text2: '',
    description: ''
  });

  function fetchData(setRecords) {
    axios.get('http://localhost:5000/')
      .then(response => {
        setRecords(response.data);
      })
      .catch(error => {
        console.error('Error fetching records:', error);
      });
  }
  
  useEffect(() => {
    fetchData(setRecords);
  }, [setRecords]);
  const handleChangeAdd = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'text1') setUpdatedText1(value);
    if (name === 'text2') setUpdatedText2(value);
    if (name === 'description') setUpdatedDescription(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/', formData)
      .then(response => {
        setRecords([...records, response.data]);
        console.log('Record added successfully:', response.data);
        setFormData({ text1: '', text2: '', description: '' });
        fetchData(setRecords); // Refresh records after adding a new record
      })
      .catch(error => {
        console.error('Error adding record:', error);
        setError('Error adding record. Please try again later.');
      });
  };
  

  const handleDelete = id => {
    axios.delete(`http://localhost:5000/${id}`)
      .then(response => {
        console.log('Record deleted successfully:', response.data);
        setRecords(records.filter(record => record.id !== id));
      })
      .catch(error => {
        console.error('Error deleting record:', error);
      });
  };


  const [selectedCardId, setSelectedCardId] = useState(null);
  const [updatedText1, setUpdatedText1] = useState('');
  const [updatedText2, setUpdatedText2] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  const updateSelectedCard = () => {
    if (!selectedCardId) {
      console.error('No card selected');
      return;
    }

    const newData = {
      text1: updatedText1,
      text2: updatedText2,
      description: updatedDescription
    };

    axios.put(`http://localhost:5000/${selectedCardId}`, newData)
      .then(response => {
        console.log(response.data); // Log success message
        // Update the local state or trigger a re-fetch of cards
      })
      .catch(error => {
        console.error('Error updating card:', error);
      });
  };


  return (
    <div>
      <NavBar />
      {/*title */}
      <div className="mx-auto max-w-md text-center my-[70px]">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">AlxCards</h2>
      </div>


      <h2 className="text-lg font-semibold mb-4 text-center text-white">Records</h2>
      <ul className='flex justify-center flex-wrap max-w-[1100px] mx-auto'>
        {records.map(record => (
          <li key={record.id} className='m-2 max-w-[250px]' onClick={() => setSelectedCardId(record.id)}>
            <Card text1={record.text1} text2={record.text2} description={record.description}  handleDelete={() => handleDelete(record.id) } />

              {record.id}
              {selectedCardId}

              {record.id == selectedCardId && 
                <div>            
                  <div key={record.id} className={`card ${selectedCardId === record.id ? 'selected' : ''}`} >
                    <h2>{record.title}</h2>
                    <input
                      type="text"
                      // value={ updatedText1 ||  record.text1}
                      value={updatedText1}
                      onChange={handleChange}
                      name="text1"
                      placeholder="Enter Text1"
                    />
                    <input
                      type="text"
                      value={updatedText2}
                      onChange={handleChange}
                      name="text2"
                      placeholder="Enter Text2"
                    />
                    <input
                      type="text"
                      value={updatedDescription}
                      onChange={handleChange}
                      name="description"
                      placeholder="Enter Description"
                    />
                  </div>
                  <button onClick={updateSelectedCard}>
                    Update Card
                  </button>
                </div>
              }

              {record.id == selectedCardId && <>
                <input
                      type="text"
                      value={record.text1}
                      onChange={handleChange}
                      name="text1"
                      placeholder="Enter Text1"
                    />
              </>} 

          </li>
        ))}
      </ul>

      {/* {selectedCardId && (
        <button onClick={updateSelectedCard}>
          Update Card
        </button>
      )} */}

      {/*title of  add new card */}
      <div className="mx-auto max-w-md text-center my-[70px]">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">Add New Card</h2>
      </div>

        {/* add new card */}
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
          </div>

          <div>
    </div>


    </div>
  );
};

export default RecordsComponent;
