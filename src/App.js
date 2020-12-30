import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';

function App() {
  let d = new Date()
  const h = d.getHours()

  const n = d.getSeconds()
  const m = d.getMinutes()

  const [time, setTime] = useState(n);
  const [minute, setMinute] = useState(m);

  const [chosenSec, setChosenSec] = useState(n)
  const [hr, setHr] = useState(h);  
  const [seconds, setSeconds] = useState(n)

  const [secon, setSecon] = useState(1)
  const [minu, setMinu]= useState(m)
  const [hou, setHou] = useState(h)

  const minclasses = ['radius minut one', 'radius minut two', 'radius minut three', 'radius minut four', 
    'radius minut five', 'radius minut six', 'radius minut seven', 'radius minut eight',
    'radius minut nine', 'radius minut ten', 'radius minut eleven', 'radius minut twelve', 'radius minut thirteen', 
    'radius minut fourteen', 'radius minut fifteen', 'radius minut sixteen', 'radius minut seventeen', 
    'radius minut eighteen', 'radius minut nineteen', 'radius minut twenty', 'radius minut twenty1', 
    'radius minut twenty2', 'radius minut twenty3',
    'radius minut twenty4', 'radius minut twenty5', 'radius minut twenty6', 'radius minut twenty7', 
    'radius minut twenty8', 'radius minut twenty9', 'radius minut thirty',
    'radius minut thirty1', 'radius minut thirty2', 'radius minut thirty3', 'radius minut thirty4', 
    'radius minut thirty5', 'radius minut thirty6', 'radius minut thirty7',
    'radius minut thirty8', 'radius minut thirty9', 'radius minut forty', 'radius minut forty1', 'radius minut forty2', 
    'radius minut forty3', 'radius minut forty4', 'radius minut forty5',
    'radius minut forty6', 'radius minut forty7', 'radius minut forty8', 'radius minut forty9', 'radius minut fifty', 
    'radius minut fifty1', 'radius minut fifty2', 'radius minut fifty3',
    'radius minut fifty4', 'radius minut fifty5', 'radius minut fifty6', 'radius minut fifty7', 
    'radius minut fifty8', 'radius minut fifty9', 'radius minut sixty']



    const secclasses = ['radius se one', 'radius se two', 'radius se three', 'radius se four', 
    'radius se five', 'radius se six', 'radius se seven', 'radius se eight',
   'radius se nine', 'radius se ten', 'radius se eleven', 'radius se twelve', 'radius se thirteen', 
    'radius se fourteen', 'radius se fifteen', 'radius se sixteen', 'radius se seventeen', 
    'radius se eighteen', 'radius se nineteen', 'radius se twenty', 'radius se twenty1', 
    'radius se twenty2', 'radius se twenty3',
    'radius se twenty4', 'radius se twenty5', 'radius se twenty6', 'radius se twenty7', 
    'radius se twenty8', 'radius se twenty9', 'radius se thirty',
    'radius se thirty1', 'radius se thirty2', 'radius se thirty3', 'radius se thirty4', 
    'radius se thirty5', 'radius se thirty6', 'radius se thirty7',
    'radius se thirty8', 'radius se thirty9', 'radius se forty', 'radius se forty1', 'radius se forty2', 
    'radius se forty3', 'radius se forty4', 'radius se forty5',
    'radius se forty6', 'radius se forty7', 'radius se forty8', 'radius se forty9', 'radius se fifty', 
    'radius se fifty1', 'radius se fifty2', 'radius se fifty3',
    'radius se fifty4', 'radius se fifty5', 'radius se fifty6', 'radius se fifty7', 
    'radius se fifty8', 'radius se fifty9', 'radius se sixty']
  

  const hrclasses = ['radius hor one', 'radius hor two', 'radius hor three', 'radius hor four', 
  'radius hor five', 'radius hor six', 'radius hor seven', 'radius hor eight',
 'radius hor nine', 'radius hor ten', 'radius hor eleven', 'radius hor twelve', 'radius hor thirteen', 
  'radius hor fourteen', 'radius hor fifteen', 'radius hor sixteen', 'radius hor seventeen', 
  'radius hor eighteen', 'radius hor nineteen', 'radius hor twenty', 'radius hor twenty1', 
  'radius hor twenty2', 'radius hor twenty3',
  'radius hor twenty4', 'radius hor twenty5', 'radius hor twenty6', 'radius hor twenty7', 
  'radius hor twenty8', 'radius hor twenty9', 'radius hor thirty',
  'radius hor thirty1', 'radius hor thirty2', 'radius hor thirty3', 'radius hor thirty4', 
  'radius hor thirty5', 'radius hor thirty6', 'radius hor thirty7',
  'radius hor thirty8', 'radius hor thirty9', 'radius hor forty', 'radius hor forty1', 'radius hor forty2', 
  'radius hor forty3', 'radius hor forty4', 'radius hor forty5',
  'radius hor forty6', 'radius hor forty7', 'radius hor forty8', 'radius hor forty9', 'radius hor fifty', 
  'radius hor fifty1', 'radius hor fifty2', 'radius hor fifty3',
  'radius hor fifty4', 'radius hor fifty5', 'radius hor fifty6', 'radius hor fifty7', 
  'radius hor fifty8', 'radius hor fifty9', 'radius hor sixty']



  const hrcs = ['hour h0', 'hour h1', 'hour h2', 'hour h3', 'hour h4', 'hour h5', 
  'hour h6', 'hour h7', 'hour h8', 'hour h9', 'hour h10', 'hour h11', ]

  useEffect(() => {
    let hourdeg = 0
    let mindeg = 0
    let resultdeg = 0
    let result = 0 
    const interval = setInterval(() => 
    {
      let x = new Date()
      let w = x.getHours()
      let y = x.getSeconds()
      let z = x.getMinutes()

      let f = x.getMilliseconds()
      setSeconds(f)
      setTime(y)
      setChosenSec(secclasses[y])
      setMinute(minclasses[z])

      hourdeg = 270 +  (w * 30);
      
      mindeg = Math.floor(z  / 12) * 6;
      
      resultdeg = hourdeg + mindeg;
      
      result =  Math.floor((resultdeg- 270 ) / 6)

      setHr(hrclasses[result])

      setSecon(y)
      setMinu(z)
      setHou(w)
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

       <div className="circle c1"> 1 </div>
       <div className="circle c2"> 2 </div>
       <div className="circle c3"> 3 </div>
       <div className="circle c4"> 4 </div>
       <div className="circle c5"> 5 </div>
       <div className="circle c6"> 6 </div>
       <div className="circle c7"> 7 </div>
       <div className="circle c8"> 8 </div>
       <div className="circle c9"> 9 </div>
       <div className="circle c10"> 10 </div>
       <div className="circle c11"> 11 </div>
       <div className="circle c12"> 12 </div>


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

       <h>
         {hou} : {minu} : {secon}
       </h>
    
      {/* {seconds} */}
    </div>
    </div>
  );
}

export default App;
