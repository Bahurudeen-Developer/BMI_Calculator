import { useState } from 'react'
import './App.css'


function App() {

  let  [height , sethight] = useState("");
   let  [weight , setwight] = useState("");
    let  [bmi , setbmi] = useState(null);
     let  [bmistatus , setbmistatus] = useState("");
     let [err, seterr ] = useState( "" );


     const calculatebmi = ()=>{

      const isValideHeight = /^\d+$/.test(height);
      const isValideweight = /^\d+$/.test(weight);

      if(isValideHeight && isValideweight){


        const HeightInMeters = height / 100;

        const BmiValue = weight / ( HeightInMeters * HeightInMeters );

        setbmi(BmiValue.toFixed(2));

        if(BmiValue < 18.5 ){
          setbmistatus( "UnderWeight" )
        }

        else if ( BmiValue>=18.5 && BmiValue<24.9 ){

          setbmistatus( "Normal Wight" )
        }

        else if ( BmiValue >=25 && BmiValue < 29.9 ){

          setbmistatus( "OverWeight" )
        }

        else{
          setbmistatus( "Obese" )
        }

        seterr("")

      }else{

        setbmi(null)
        setbmistatus("");
        seterr( "Please Enter valid numeric values for height and weight." );
      }

     }

     let clear = () =>{

      setbmi(null)
      setbmistatus("");
      sethight ( "" );
      setwight("");
      

     }

  return (

      <div>

        <div className="container">
           
           <div className="box"></div>
           <div className="data">
               <h1>BMI CALCULATOR</h1>
              { err && <p className='error'> {err} </p>}
            <div className="inp-container">
              <label htmlFor="height">Height in (CM):</label>
              <input type="text" id='height' placeholder='Enter Height' value={height} onChange={ (e)=> sethight(e.target.value) }  />
            </div>
             <div className="inp-container">
              <label htmlFor="weight">Weight in (KG):</label>
              <input type="text" id='weight' placeholder='Enter Weight'  value={weight} onChange={ (e)=> setwight(e.target.value) }   />
            </div>
             
             <button onClick={calculatebmi}>Calculate BMI</button>
             <button className='clearbtn' onClick={clear}>Clear</button>
             
             { bmi !== null && (

               <div className="result">
                 
                 <p>Your BMI is : {bmi} </p>
                 <p>BMI Status :  {bmistatus} </p>
              </div>
             ) }
               
           </div>



        </div>
       
      </div>
     
  
  )
}

export default App
