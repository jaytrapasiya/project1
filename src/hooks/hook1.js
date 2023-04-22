import React, {useState} from 'react' ;

const Myhook1 = () =>{
    let city = ["Bangalore", "Pune", "Chennai", "Delhi", "Patna"];
    const[Bangalore, Pune, Chennai, Delhi, Patna] = city;

    console.log( useState() );
    let[abc, xyz] = useState(100); //[undefined, f()]

    const one = () =>{
        xyz( abc+10 );
    }

    const two = () =>{
        xyz( abc - 10 );
    }

    return(
        <div id="container">
            <h1> userState() Hook Simmple Example </h1>
            <p> { city[2] } </p>
            <p>{Chennai}</p>
            <p>{Delhi}</p>
            <p>{abc}</p>
            <button onClick={one}>Click to + by 10</button>
            <button onClick={two}>Click to - by 10</button>
        </div>
    )
}

export default Myhook1