import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
const Myapi7 = () =>{
    const{itemid} = useParams();

    let[itemname, pickName] =    useState("");
    let[itemprice, pickPrice] = useState("");
    let[itemqty, pickQty] = useState("");
    let[itemphoto, pickPhoto] = useState("");
    let[msg, updateMsg] = useState("");

    const save = () =>{
        let url = "http://localhost:1234/itemlist/"+itemid;
        let itemdetails = {
            name:itemname,
            price:itemprice,
            qty:itemqty,
            photo:itemphoto
        }
        let postData ={
            headers:{'Content-Type':'application/json'},
            method:"PUT",
            body:JSON.stringify(itemdetails)
        }
        fetch(url, postData)
        .then(response=> response.json())
        .then(serverRes =>{
            updateMsg(itemname + "update Successfully");
        })
    }
    useEffect(()=>{
        let url = "http://localhost:1234/itemlist/"+itemid;
        fetch(url)
        .then(response=>response.json())
        .then(iteminfo=>{
            pickName(iteminfo.name);
            pickPhoto(iteminfo.photo);
            pickPrice(iteminfo.price);
            pickQty(iteminfo.qty);
        });

    },[1]);

    return(
        <div id="container">
            <h1 align="center"> Edit Item :{itemid} </h1>
            <p align="center">{msg}</p>
            <p align="center"> Enter Item Details</p>
            <table align="center">
                <tbody>
                    <tr>
                        <th>Item Name</th>
                       <td><input type="text" size="40" onChange={obj=>pickName(obj.target.value)} value={itemname}/></td>
                    </tr>
                    <tr>
                        <th>Item price</th>
                        <td><input type="text" size="40" onChange={obj=>pickPrice(obj.target.value)} value={itemprice}/></td>
                    </tr>
                    <tr>
                        <th>Item Quantity</th>
                        <td><input type="text" size="40" onChange={obj=>pickQty(obj.target.value)} value={itemqty}/></td>
                    </tr>
                    <tr>
                        <th>Item photo Url</th>
                        <input type="text" size="40" onChange={obj=>pickPhoto(obj.target.value)} value={itemphoto}/>
                        <br/>
                        
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <img src={itemphoto} height="80" width="60"/>
                        </th>
                    </tr>
                    <tr>
                        <th colSpan={2}>
                            <button onClick={save}> Update Item</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Myapi7