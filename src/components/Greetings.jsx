import React from 'react'

function Greetings(props) {

    const greetingArr = [
    {lan: "Hallo", name:"Ludwing"},
    {lan: "Hello", name:"Mike"},
    {lan: "Hola", name:"Manuel"},
    {lan: "Bonjour", name:"Sebastian"}
    ]
    //console.log(props);
  

  return (  
    <div>
      {greetingArr.map((eachGreet)=>{
        //console.log(eachGreet)
        return(
          
           <p>{eachGreet.lan} {eachGreet.name} </p>
                    
        )

      })}

      <p>{props.lang} {props.children} </p>

    </div>
       
           
    
  )
}

export default Greetings