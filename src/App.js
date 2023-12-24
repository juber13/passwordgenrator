import { useState } from 'react';
import usePasswordGenrator from './PasswordGenratorHook';
import './App.css';

function App() {
  const [checkboxes , setCheckboxes] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ])
  const [val , setValue] = useState(8);
  const [isCopy , setIsCopy] = useState(false);

  const handleCheckBox = (id) => {
    const newCheckBox = [...checkboxes];
    newCheckBox[id].state = !newCheckBox[id].state;
    setCheckboxes(newCheckBox);
  }

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(password);
    setIsCopy(true);

    setTimeout(() => {
     setIsCopy(false);
    },2000)
  }


   const {password  , error , generatePassword} = usePasswordGenrator();

  return (
    <div className="App">
      <div className="header">
        <h2 style={{fontFamily : "revert-layer"}}>Password Generator</h2>
      </div>
      <div className="checkboxes">
       <div className="container">
          {checkboxes.map((checkbox , index) => {
            return (
              <div className='inputs' key={index}>
              <input type="checkbox" id={checkbox.title} onChange={() =>  handleCheckBox(index)} checked={checkbox.state}/>
              <label htmlFor={checkbox.title}>{checkbox.title}</label>
            </div>
            )
          })}
      </div>
      <div className="result">
      {error ? <div style={{color: "red"}}>Please Select one option</div> : ""} 
       {password ?
        <div className="res">
          <input type="text"  disabled value={password}/>
          <button className='btn' onClick={copyToClipBoard}>{isCopy ? "Copied" : "Copy"}</button>
        </div>
        : 
          <input type='text' disabled  placeholder='Password will show here'/>
         }

         <div className='input-field'>
           <input type="range" min={8} max={20} value={val} onChange={(e) => setValue(Number(e.target.value))}/>
           <button  className='btn'>{val}</button>
         </div>
        <button className='btn' onClick={() => generatePassword(checkboxes , val)}>Generate</button>
      </div>
    </div>

    </div>
  );
}

export default App;
