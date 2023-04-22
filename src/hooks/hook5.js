import React, {useState} from "react";


const Myhook5 = () =>{
    let user= [
        {city:"Bangalore", user:["Alex", "Raj", "Ganesh"],photo:"apple-1--500x500.jpg"},
        {city:"Pune", user:["Sumit", "jay",],photo:"purepng..png"},
        {city:"surat", user:["Mohit", "Ronak", "Dhruvin"],photo:"transparent-.png"},
        {city:"Rajkot", user:["Meet", "Maulik", ],photo:"transparent-banana-fruit.png"}
    ];

    let[userinfo, updateInfo] = useState( user[0] );
    const getdetails = (index) =>{
        updateInfo(user[index]);
    }

    return(
        <div id="container">
            <h1> Total User : {user.length} </h1>
            <div id="leftblock">
                {
                user.map((Myuser, index)=>{
                    return(
                        <p key={index} onClick={getdetails.bind(this, index)}> {Myuser.city}</p>
                    )
                })
            }
            </div>
            <div id="rightblock">
                <h2> Customer From : {userinfo.city}</h2>
                <p> LIst Of User </p>
                {
                    userinfo.user.map((name,index2)=>{
                        return(
                            <p key={index2}> {name} </p>
                        )
                    })
                }
                
            </div>
            <div id="imgeblock">
                <img src={userinfo.photo} height="200"/>
            </div>
        </div>
    )
}
export default Myhook5;