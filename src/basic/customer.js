const Mycustomer = () => {
    var customer = [
        {city:"Bangalore", user:["Alex", "Raj", "Ganesh"]},
        {city:"Pune", user:["Sumit", "jay",]},
        {city:"surat", user:["Mohit", "Ronak", "Dhruvin"]},
        {city:"Rajkot", user:["Meet", "Maulik", ]}
    ]
    return(
        <div id="container">
            <h1> {customer.length} : My Customer</h1>
            {
                customer.map((customerinfo, index)=>{
                    return(
                        <fieldset>
                            <legend> {customerinfo.city} </legend>
                            {
                                customerinfo.user.map((name, index2)=>{
                                    return(
                                        <p key={index2}> {name} </p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </div>
    )
}
export default Mycustomer;