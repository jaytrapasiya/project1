import React, { useState } from "react";
const Contactus = () =>{
    let[fullname,pickName] = useState("");
    let[nameerror, updateNameError] = useState("");

    let[mobile,pickMobile] = useState("");
    let[mobileeerror, updateMobileError] = useState("");

    let[email,pickEmail] = useState("");
    let[emaileeerror, updateEmailError] = useState("");

    let[city,pickCity] = useState("");
    let[cityeeerror, updateCityError] = useState("");

    let[pincode,pickPincode] = useState("");
    let[pincodeeerror, updatePincodeError] = useState("");
    
    let[address,pickAddress] = useState("");
    let[addresseerror, updateAddressError] = useState("");
    const save = () =>{
        let formstatus = true
        if(fullname==""){
            updateNameError("Invalid Name !");
            formstatus = false;
        }else{
            updateNameError("");
            
        }
        //mobile no validation
        var moattern = /^[0]?[6789]\d{9}$/;
        if( ! moattern.test(mobile) ){
            updateMobileError("Invalid Mobile  !");
            formstatus = false; 
        }else{
            updateMobileError("");
        }
        //email validation
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if( !filter.test(email)){
            updateEmailError("Invalid Email  !");
            formstatus = false;
        }else{
            updateEmailError("");
        }
        //city validation
        if(city==""){
            updateCityError("Invalid City  !");
            formstatus = false;
        }else{
            updateCityError("");
        }
         //pin validation
         if(pincode==""){
            updatePincodeError("Invalid Pincode  !");
            formstatus = false;
        }else{
            updatePincodeError("");
        }
        //address validation
         if(address==""){
            updateAddressError("Invalid Address  !");
            formstatus = false;
        }else{  
            updateAddressError("");
        }
        if ( formstatus == true)
        {
            alert("Plese waite submitting to server....");
        }
    }
    return(
        <div id="container">
            <h1 align="center"> Validation React</h1>
            <table align="center" cellPadding={10} id="contact">
                <tr>
                    <th>Fullname</th>
                    <td><input type="text" onChange={obj=>pickName(obj.target.value)}
                    className="inputbox"/></td>
                    <td><small>{nameerror}</small></td>
                </tr>
                <tr>
                    <th>Mobile No</th>
                    <td><input type="number" onChange={obj=>pickMobile(obj.target.value)}
                    className="inputbox"/></td>
                    <td><small>{mobileeerror}</small></td>
                </tr>
                <tr>
                    <th>Enter Email</th>
                    <td><input type="email" onChange={obj=>pickEmail(obj.target.value)}
                    className="inputbox"/></td>
                    <td><small>{emaileeerror}</small></td>
                </tr>
                <tr>
                    <th>Your City</th>
                    <td>
                        <select onChange={obj=>pickCity(obj.target.value)}
                        className="inputbox">
                            <option value="">Chose Yor City</option>
                            <option>Mumbai</option>
                            <option>Surat</option>
                            <option>Pune</option>
                        </select>

                    </td>
                    <td><small>{cityeeerror}</small></td>
                </tr>
                <tr>
                    <th>Pin Code</th>
                    <td><input type="number" onChange={obj=>pickPincode(obj.target.value)}
                    className="inputbox"/></td>
                    <td><small>{pincodeeerror}</small></td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td><textarea type="text" onChange={obj=>pickAddress(obj.target.value)}
                    className="inputbox"></textarea></td>
                    <td><small>{addresseerror}</small></td>
                </tr>
                <tr>
                    <th colSpan={3}>
                        <button onClick={save}>Send Message</button>
                    </th>
                </tr>
            </table>
        </div>
    )
}
export default Contactus