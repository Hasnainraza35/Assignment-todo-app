import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [txt, settxt] = useState("abc");

  const [txtlist, settxtlist] = useState<any>([]);



  const del = (i: any) => {
    txtlist.splice(i, 1);
    settxtlist([...txtlist])
  };

  const Edit = (i: any) => {
    let newtxt = prompt("Enter new text")
    txtlist[i] = newtxt
    settxtlist([...txtlist])
  }

  const delall = () => {
    settxtlist([])
  }


  return (
    <div className="App">

      <h1 className='container'>Todo App</h1>


      <h1 className='maintext'>{txt}</h1>

      <input className='inpt'   type="text" placeholder='Enter new text' onChange={(e) => {
        settxt(e.target.value)
      }} />


      <button className='btn-button1'  onClick={() => {
        txtlist.push(txt);

        console.log(txtlist)

        settxtlist([...txtlist]);
      }}>Add</button>


      {txtlist.map((x: any, i: any) => {
        return <p key={i}>{x} <button className='btn-button'   onClick={() => del(i)}>delete</button>

          <button  className='btn-button1'  onClick={() => Edit(i)}>Edit</button>
        </p>
      })}

      <button  className='btn-button' onClick={() => delall()}>deleteAll</button>

    </div>
  );
}

export default App;
