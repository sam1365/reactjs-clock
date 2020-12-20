import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';

function App() {
  let d = new Date()
  const n = d.getSeconds()
  const m = d.getMinutes()

  const [time, setTime] = useState(n);
  const [minute, setMinute] = useState(m);

  const [chosenSec, setChosenSec] = useState('')
  const [hr, setHr] = useState('');  

  const classes = ['minute one', 'minute two', 'minute three', 'minute four', 
    'minute five', 'minute six', 'minute seven', 'minute eight',
   'minute nine', 'minute ten', 'minute eleven', 'minute twelve', 'minute thirteen', 
    'minute fourteen', 'minute fifteen', 'minute sixteen', 'minute seventeen', 
    'minute eighteen', 'minute nineteen', 'minute twenty', 'minute twenty1', 
    'minute twenty2', 'minute twenty3',
    'minute twenty4', 'minute twenty5', 'minute twenty6', 'minute twenty7', 
    'minute twenty8', 'minute twenty9', 'minute thirty',
    'minute thirty1', 'minute thirty2', 'minute thirty3', 'minute thirty4', 
    'minute thirty5', 'minute thirty6', 'minute thirty7',
    'minute thirty8', 'minute thirty9', 'minute forty', 'minute forty1', 'minute forty2', 
    'minute forty3', 'minute forty4', 'minute forty5',
    'minute forty6', 'minute forty7', 'minute forty8', 'minute forty9', 'minute fifty', 
    'minute fifty1', 'minute fifty2', 'minute fifty3',
    'minute fifty4', 'minute fifty5', 'minute fifty6', 'minute fifty7', 
    'minute fifty8', 'minute fifty9', 'minute sixty']



  const mincs = ['second one', 'second two', 'second three', 'second four', 
  'second five', 'second six', 'second seven', 'second eight',
 'second nine', 'second ten', 'second eleven', 'second twelve', 'second thirteen', 
  'second fourteen', 'second fifteen', 'second sixteen', 'second seventeen', 
  'second eighteen', 'second nineteen', 'second twenty', 'second twenty1', 
  'second twenty2', 'second twenty3',
  'second twenty4', 'second twenty5', 'second twenty6', 'second twenty7', 
  'second twenty8', 'second twenty9', 'second thirty',
  'second thirty1', 'second thirty2', 'second thirty3', 'second thirty4', 
  'second thirty5', 'second thirty6', 'second thirty7',
  'second thirty8', 'second thirty9', 'second forty', 'second forty1', 'second forty2', 
  'second forty3', 'second forty4', 'second forty5',
  'second forty6', 'second forty7', 'second forty8', 'second forty9', 'second fifty', 
  'second fifty1', 'second fifty2', 'second fifty3',
  'second fifty4', 'second fifty5', 'second fifty6', 'second fifty7', 
  'second fifty8', 'second fifty9', 'second sixty']



  const hrcs = ['hour h0', 'hour h1', 'hour h2', 'hour h3', 'hour h4', 'hour h5', 
  'hour h6', 'hour h7', 'hour h8', 'hour h9', 'hour h10', 'hour h11', ]

  useEffect(() => {
    const interval = setInterval(() => 
    {
      let x = new Date()
      let w = d.getHours()
      let y = d.getSeconds()
      let z = d.getMinutes()
      setTime(y)
      setChosenSec(classes[y])
      setMinute(mincs[z])
      setHr(hrcs[w])
    }
    , 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className="App">
     <div class="circle-container">
  
      

       <div className={chosenSec}> </div>

       <div className={minute}> </div>

       <div className={hr}> </div>

  
    </div>
    </div>
  );
}

export default App;
