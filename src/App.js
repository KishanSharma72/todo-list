import React,{useState} from "react";
import Todolist from "./Todolist";

const App = () => {
  
   const[inputList , setInputList] = useState();
   const[valueList , setValueList] = useState([]);
  
   const itemEvent=(event) => {
    //  console.log(event.target.value);
     setInputList(event.target.value)



   }
   const submit =()=>{

    console.log(inputList);
    setValueList([inputList,...valueList]);
   }
  
    
  const DeleteItem=(id)=>{
    const inputList = [...valueList]
    inputList.splice(id, 1)
    setValueList(inputList);
  } 


  

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input type="text" placeholder="Add a items" value={inputList} onChange={itemEvent} />
          <button onClick={submit}> + </button>
          <ul style={{listStyle: "none",marginTop:"20px"}}>
            {valueList.map((item,index)=>{
              return(<Todolist 
                id={index}
                item={item}
                function={DeleteItem}
                />)
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default App;
