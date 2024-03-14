import {useState, useEffect} from 'react'
import NavBar from './navbar'

export default function Model({user}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [healthPercentage, setHealthPercentage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('http://localhost:8000/model/train', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setHealthPercentage(data.percentage);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {healthPercentage && (
        <div>
          <h2>Health Percentage:</h2>
          <ul>
            {healthPercentage.map((percentage, index) => (
              <li key={index}>
                {percentage}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};