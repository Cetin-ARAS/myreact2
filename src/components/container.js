import React from 'react'

export default function Container(props){

    return(
      <div style={{width:"400px", height:"400px", border:"2px solid black", margin:"0px auto"}}>
        <p>{props.title}</p>
        <p>{props.number}</p>
      </div>
    )
 }

