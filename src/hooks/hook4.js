import React, {useState} from "react";

const Myhook4 = () =>{
    let[citylist, updatecity] = useState( ["Surat", "Bangalore", "Mumbai", "Pune"] );
    let [newcity, pickcity] = useState ("")
    let[msg, updatemsg] = useState("Enter User Details...");
    const save = () =>{
        updatecity(citylist =>[...citylist, newcity]); // a= a+b
        updatemsg(newcity + "save Successfully !");
    }

    const deleteuser = (index) =>{
        citylist.splice(index, 1);// dele
        updatecity(citylist = [...citylist]); // remaining element updating under
    }
    return(
        <div id="container">
            <h1> React cityState() - Hook Example </h1>
            <p align="center">{msg}</p>
            <p>
                Enter Book Name : <input type="text" onChange={obj =>pickcity(obj.target.value)}/>
                <button onClick={save}>Save City</button>
            </p>
            <p> Total books : {citylist.length} </p>
            {
                citylist.map ((cityname, index)=>{
                    return(
                        <p key={index}> {cityname}<button onClick={deleteuser.bind(this, index)}>Delete</button></p>
                    )
                })
            }
        </div>
    )
}
export default Myhook4;