import Details from "./empdetails";
import CityList from "./city";
function Myuser(){
    var alluser = ["Alex", "Arjit", "Omkar", "Ganesh", "udit"];
    return(
        <div id="container">
            <h1>User List : {alluser.length}</h1>
            <p> { alluser[0]} </p>
            {
                alluser.map((username, index)=>{
                    return(
                        <p key={index}>{index} # {username}</p>
                    )
                })
            }
            <CityList/>
            <Details 
            fullname="Jay"
            edu="BSC"
            city="surat"
            age="21"
            mobile="9999999"
            photo="apple-1--500x500.jpg"/>
            
            
        </div>
    )
}
export default Myuser;