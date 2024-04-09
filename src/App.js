import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import data from './helper/data';
import {Button} from 'react-bootstrap'

function App() {
  const [index, setIndex] = useState(0);
  console.log(data[index]);
  const handleNext = () => {

    setIndex(index => {
      if (index === data.length - 1) {
        return 0
      } else {
        return index + 1
      }
    }) 
    return setIndex

  };
  const handlePrev = () => {
    setIndex(index => {
      if (index === 0) {
        return data.length - 1
      } else {
        return index - 1
      }
    }) 
    return setIndex

    
  };
  return (
    <div className="team-boxed">
      <div className="container">
        <div className="intro">
          <h2 className="text-center"> Hello Team</h2>
          <p className="text-center">Employee Details - {index + 1}</p>
        </div>
        <div className="row justify-content-md-center people mb-0">
          <Card {...data[index]} />
        </div>
        <div className="row justify-content-md-center mt-0">
          <Button onClick={handlePrev} className="m-2 bg-secondary border-black" style={{width: '50px'}}>
            <i className="fa-solid fa-arrow-left"></i>
          </Button>
          <Button onClick={handleNext} className="m-2 bg-secondary border-black  " style={{width: '50px'}} >
            <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
