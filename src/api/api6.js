import React, {useState} from "react";
import { json } from "react-router-dom";

const Myapi6 = () =>{
    let[username, pickName] = useState("");
    let[usermobile, pickMobile] = useState("");
    let[useremail, pickEmail] = useState("");
    let[usercity, pickCity] = useState("");
    let[msg, updateMsg] = useState("");

    const save = () =>{
        let url = "http://localhost:1234/userlist";
        let userdetails = {
            name:username,
            mobile:usermobile,
            email:useremail,
            city:usercity
        }
        let postData ={
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(userdetails)
        }
        fetch(url, postData)
        .then(response=> response.json())
        .then(serverRes =>{
            updateMsg(username + "Save and User id is : "+ serverRes.id);
        })
    }

    return(
        <div>
            <h1 align="center">Add User</h1>
            <p align="center">{msg}</p>
            <p align="center">Enter User Details</p>
            <table align="center">
                <tbody>
                    <tr>
                        <th>User Name:</th>
                        <input type="text" size="40" onChange={obj=>pickName(obj.target.value)}/>
                    </tr>
                    <tr>
                        <th>mobile No :</th>
                        <input type="text" size="40" onChange={obj=>pickMobile(obj.target.value)}/>
                    </tr>
                    <tr>
                        <th>Email address :</th>
                        <input type="text" size="40" onChange={obj=>pickEmail(obj.target.value)}/>
                    </tr>
                    <tr>
                        <th>City :</th>
                        <input type="text" size="40" onChange={obj=>pickCity(obj.target.value)}/>
                    </tr>
                    <tr>
                        <th colSpan={2}>
                            <button onClick={save}> Save User</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Myapi6