

const Details = (allprops) =>{
    return(
        <fieldset>
            <legend> About {allprops.fullname} </legend>
            <p>Age : {allprops.age}</p>
            <p>Mobile : {allprops.mobile}</p>
            <p>Education : {allprops.edu}</p>
            <p>City : {allprops.city}</p>
            <img src={allprops.photo} width="150px"/>
        </fieldset>
    )
}
export default Details

// allprops = {name: 'aaaa', age: '30 years', mobile:9999999, edu:'MCA' city:'Bangalore'}