
function Doctor({doc}) {
    return(
        <div>
            <h1>{`Dr. ${doc[0].name}, PharmD`}</h1>
            <h3>{doc[0].bio}</h3>
            <h5> Contact me at: {doc[0].email}</h5>
        </div> 
    )
}

export default Doctor