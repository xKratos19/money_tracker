import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');
  
  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/test';
    fetch(url, {
      Method: 'POST',
      Headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      Body: JSON.stringify({name,description,datetime}),
      Cache: 'default'
    }).then(response => {
      response.json().then(json =>{
        console.log('result', json);
      });
    });
  }

  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text" value={name} onChange={ev => setName(ev.target.value)} placeholder={'+200 nwe samsung'}/>
          <input type="datetime-local" value={datetime} onChange={ev => setDatetime(ev.target.value)}/>
          </div>
        <div className="description">
        <input type="text" value={description} onChange={ev => setDescription(ev.target.value)} placeholder={'description'}/> 
        </div>
        <button type="submit">Add new transaction</button>
      </form>
    </main>
  );
}

export default App;
