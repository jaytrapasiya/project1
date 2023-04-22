const  Myproduct = () => {
    var product = [
        {name:"Apple", price:300,qty:10},
        {name:"Manga", price:200,qty:5},
        {name:"Orange", price:100,qty:9},
        {name:"Grapes", price:400,qty:8},
        {name:"Papaya", price:300,qty:32},
        {name:"Milk", price:30,qty:20}
    ];
    return (
        <div id="container">
        <h1> {product.length} : Product List</h1>
            <table cellPadding="10" border="1" bordercolor="red">
                <thead>
                    <tr>
                        <th>s1 No</th>
                        <th>Book Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((pdata, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{pdata.name}</td>
                                    <td>{pdata.price}</td>
                                    <td>{pdata.qty}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    ) 
}
export default Myproduct ; 