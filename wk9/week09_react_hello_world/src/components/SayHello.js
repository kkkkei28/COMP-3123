function SayHello({fname, lname} /*props*/){
    //const name = "Kei"
    const myStyle={
        color:'red',
        backgroundColor: 'yellow'
    }
    return (
        <h1 style={myStyle}>Hello {fname} {lname}</h1>
        //<h1>Hello {props.fname} {props.lname} </h1>
    )
}

export default SayHello;