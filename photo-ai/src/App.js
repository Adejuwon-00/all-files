import './App.css';
import React, {useState} from 'react'
import axios from 'axios';

function App() {
  const [image, setImage] = useState('')

  const handleChange = () => {
    axios.get('https://api.generated.photos/api/v1/faces?api_key=ip86WyRcYYGko9L5i4ny5w&order_by=random').then(res => {
      const uri = res.data.faces[0].urls[4][512]
      uri && setImage(uri)
    }).catch(err => {
      console.log(err.message)
    })
  }
  return (
    <div className="App">
      <h1>AI Photo Generator</h1>
      {image && <img src={image} alt="AI gen face"/>}
      <button type='button' onClick={handleChange}>New Image</button>
    </div>
  );
}

export default App;
