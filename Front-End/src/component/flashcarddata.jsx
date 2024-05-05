import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecordsComponent = () => {
  const [records, setRecords] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setRecords(response.data);
      })
      .catch(error => {
        console.error('Error fetching records:', error);
      });
  }, []);


  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/', formData)
      .then(response => {
        console.log('Record added successfully:', response.data);
        // Optionally, you can clear the form after successful submission
        setFormData({ text1: '', text2: '', description: '' });
      })
      .catch(error => {
        console.error('Error adding record:', error);
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

  return (
    <div>
      <h1>Records</h1>
      <ul>
        {records.map(record => (
          <li key={record.id}>
            text1: {record.text1}, text2: {record.text2}, description: {record.description}
          </li>
        ))}
      </ul>


      <h2>Add New Record</h2>
      <form onSubmit={handleSubmit}>
        <label>
          text1:
          <input type="text" name="text1" value={formData.text1} onChange={handleChange} />
        </label>
        <br />
        <label>
          text2:
          <input type="text" name="text2" value={formData.text2} onChange={handleChange} />
        </label>
        <br />
        <label>
          description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Record</button>
      </form>

      <ul>
        {records.map(record => (
          <li key={record.id}>
            {/* {record.id} */}
            text1: {record.text1}, text2: {record.text2}, description: {record.description}
            <button onClick={() => handleDelete(record.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default RecordsComponent;
