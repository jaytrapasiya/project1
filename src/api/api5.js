import React, {useState} from "react";
import { json } from "react-router-dom";
const Myapi5 = () =>{
    let[itemname, pickName] = useState("");
    let[nameerror, updateNameError] = useState("");

    let[itemprice, pickPrice] = useState("");
    let[itemqty, pickQty] = useState("");
    let[itemphoto, pickPhoto] = useState("");
    let[msg, updateMsg] = useState("");

    const save = () =>{
        let url = "http://localhost:1234/itemlist";
        if(itemname==""){
            updateNameError("Invalid Name !");
            
        }else{
            updateNameError("");
            
        }
        let itemdetails = {
            name:itemname,
            price:itemprice,
            qty:itemqty,
            photo:itemphoto
        }
        let postData ={
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(itemdetails)
        }
        fetch(url, postData)
        .then(response=> response.json())
        .then(serverRes =>{
            updateMsg(itemname + "Save and Item id is : "+ serverRes.id);
        })
    }
    return(
        <div id="container">
            <h1 align="center"> Add Item </h1>
            <p align="center">{msg}</p>
            <p align="center"> Enter Item Details</p>
            <table align="center">
                <tbody>
                    <tr>
                        <th>Item Name</th>
                       <td><input type="text" size="40" onChange={obj=>pickName(obj.target.value)}/></td>
                       <td><td><small>{nameerror}</small></td></td>
                    </tr>
                    <tr>
                        <th>Item price</th>
                        <td><input type="text" size="40" onChange={obj=>pickPrice(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Quantity</th>
                        <td><input type="text" size="40" onChange={obj=>pickQty(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item photo Url</th>
                        <input type="text" size="40" onChange={obj=>pickPhoto(obj.target.value)}/>
                    </tr>
                    <tr>
                        <th colSpan={2}>
                            <button onClick={save}> Save Item</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Myapi5