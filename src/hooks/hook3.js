import React, {useState} from "react";
const Myhook3 = () =>{
    let temp = {name:"Jay Trapasiya", mobile:9723000184};
    let [userlist, updateUser] = useState( [temp] );
    let[fullname, pickName] = useState("");
    let[mobileno, pickMobile] = useState("");
    let[msg, updatemsg] = useState("Enter User Details...");
    let[userindex, updateIndex] = useState (-1);

    const save = () =>{
        let newuser = {name:fullname, mobile:mobileno}
        if(userindex == -1){
        updateUser(userlist = [...userlist, newuser]);
        updatemsg(fullname + "save Successfully !");
    }else{
        let newuser = {name:fullname, mobile:mobileno};
        userlist[userindex] = newuser;
        updateIndex(-1)
        updatemsg(newuser.name + "update Successfully !");
    }
        pickName("");
        pickMobile("");
    }

    const deleteuser = (index) =>{
        userlist.splice(index, 1);// dele
        updateUser(userlist = [...userlist]); // remaining element updating under
    }

    const editUser = (index) =>{
        pickName( userlist[index].name );
        pickMobile( userlist[index].mobile );
        updateIndex(index);
    }

    return(
        <div id="container">
            <h1> userState(), [...] spread operator Example </h1>
            <p align="center">{msg}</p>
            <p>
            <input type="text" placeholder='Enter Nmae' onChange={obj=>pickName(obj.target.value)} value={fullname}/>
            <input type="text" placeholder='Enter Mobile No' onChange={obj=>pickMobile(obj.target.value)} value={mobileno}/>
            <button onClick={save}>Save</button>
            </p>
            <p> {userindex} </p>
            <table align="center" cellPadding={10}>
                
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Full Name</th>
                        <th>mobile No</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((user,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.mobile}</td>
                                    <td><button onClick={editUser.bind(this, index)}>Edit</button></td>
                                    <td><button onClick={deleteuser.bind(this, index)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Myhook3;