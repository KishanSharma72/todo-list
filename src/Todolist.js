import React from 'react'

function Todolist(props) {
  console.log(props.id)
  return (
    <div>
     <div>
     <li>{props.item}<button className='Tom' onClick={()=>props.function(props.id)}>x</button></li>
     </div>
     
    </div>
  )
}

export default Todolist;