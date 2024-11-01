import './App.css';
import React,{useState} from 'react';

function App() {
  //state of app for binding

  const [weight,setweight] = useState();
  const [height,setheight] = useState();
  const [bmi,setbmi] = useState('');
  const [message,setmessage] = useState('');

let calculateBMI = (e) => {
  e.preventDefault()  
  if(weight === 0 || height === 0){
    alert('enter valid weight and height')
  } 
  else {
    let bmi = ((weight/height*height)*703)
    setbmi(bmi.toFixed(1))

    if(weight<25){setmessage('you are under weight')}
    else if(weight>25 && weight<60){setmessage('you are helthy')}
    else if(weight>60){setmessage('you are over weight')}
  }
}

let reload = () => {
  window.location.reload()
}

  return (
    <div className="App">
      <div className=' bg-gray-300 flex items-center justify-center min-h-screen'>
        
        <form onSubmit={calculateBMI}>
        <h2 className='justify-center text-2xl fomt-semibold text-center text-gray-800 font-bold'>BMI Calculator</h2><br/>
          <div>
            <label 
              className='font-bold block text-gray-700 text-sm font-bold' >Weight (ibs)</label>
            <input 
              className='border rounded w-full py-2 px-3 text-gra-700 leading-tight focus:outline-none my-3' 
              type='text' placeholder='Enter weight' value={weight} onChange={(e) => setweight(e.target.value)}/>
          </div>
          <div>
            <label 
              className='font-bold block text-gray-700 text-sm font-bold' >Height (in)</label>
            <input 
              className='border rounded w-full py-2 px-3 text-gra-700 leading-tight focus:outline-none my-3' 
              type='text' placeholder='Enter height' value={height} onChange={(e) => setheight(e.target.value)}/>
          </div>
          <div>
            <button
               className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-2 mx-7'
               type='submit'>Submit</button>
            <button 
              className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-2 mx-7' 
              onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='mt-4 text-center'>
            <h3 className='text-gray-600 font-bold'>Your BMI is {bmi}</h3>
            <p className='text-gray-600 font-bold'>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
