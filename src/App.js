import React, {useState, useEffect} from "react";



function App() {
const [endpoint,setEndpoint] = useState('');
const [container,setContainer] = useState([]);
const [finalPoint, setFinalPoint] = useState('');

const onChange = (e) => {
  setEndpoint(e.target.value);
}
useEffect(() => {
getFetch();
}, [finalPoint]);
const getFetch = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e0783afa56msh213c3d08decbc17p170768jsn084da8a69873',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  
  fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endpoint}`, options)
    .then(response => {
      return response.json()
    }).then(data => setContainer(data.d))
    .catch(err => console.error(err));
}
const submitHandler = e => {
  e.preventDefault();
  setFinalPoint(endpoint);
};
  return (
    <div className='App'>
 <form onSubmit={submitHandler}>
  <input type='text' value ={endpoint} onChange={onChange}/>
  <button type='submit'>submit</button>

 </form>
 <div className="element">
 {
  container.map((item,index) => {
    return (
      <div key={index} className='element-div'>
     
    <img src={item.i.imageUrl} alt={item.l} />
      <p>{item.l}</p>
      <p><span>Cast:</span>{item.s}</p>
     
      </div>

    )
  })
 }
 </div>
 </div>
  );
}

export default App;
