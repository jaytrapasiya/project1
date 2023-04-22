import Details from "./empdetails"

const EmpList = () => {
    return(
        <div id="container">
            <h1>Empoyee List</h1>
            <Details fullname="Ronak" age="20 Year" edu="MCA" city="pune" mobile="99999999"/>
            <Details fullname="Raj" age="23 Year" edu="BCA" city="Rajkot" mobile="88888888"/>
            <Details fullname="Dharuvin" age="20 Year" edu="Bcom" city="Surat" mobile="77777777"/>
            <Details fullname="Dharuvin" age="20 Year" edu="Bcom" city="Surat" mobile="77777777"/>
        </div>
    )
}

export default EmpList