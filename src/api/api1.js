import React, {useState, useEffect} from 'react';
const Myapi1 = () =>{
    let[userlist, updateUser] = useState([]);
    const getUser = () =>{
        fetch("user.json")
        .then(response=>response.json())
        .then(userArray=>{
            updateUser(userArray);
        })
    }
    useEffect(()=>{
        getItem();
    },[1]);
    
    let[itemlist, updateItem] = useState([]);
    const getItem = () =>{
        fetch("item.json")
        .then(response=>response.json())
        .then(itemArray =>{
            updateItem(itemArray);
        })
    }
    useEffect(()=>{
        getItem();
    },[1]);
    return(
        <div id="container">
            <h1>React useState(), fetch() API Example </h1>
            <button onClick={getUser}> Get User</button>
            <p>The Total User Are : {userlist.length}</p>
            {
                userlist.map((fullname,index)=>{
                    return(
                        <p key={index} className="myuser">{fullname}</p>
                    )
                })
            }
            <h1>Data from api using useEffect()</h1>
            {
                itemlist.map((name, index)=>{
                    return(
                        <p key={index} className="myuser">{name}</p>
                    )
                })
            }
        </div>
    )
}


export default Myapi1;