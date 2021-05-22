import React, { useState } from 'react'
import './TodoList.css';
function TodoList() {
    const MaitainCurrentState = (event)=>{
        event.preventDefault()
    }
    const [errorState,seterrorState] = useState("");
    const [inpState,setinpState] = useState("");
    const [errorBtn,seterrorBtn] = useState("");
    const [Lst,setLst] = useState([]);
    const [CLst,setCLst] = useState([]);
    const AddInput=(event)=>{
        setinpState(event.target.value);
    }
    const AddTodos=()=>{
        if(inpState)
        {
            RemoveError()
            setinpState("")
            setLst([...Lst,inpState]);
        }
        else
        {
            seterrorState("Input Field can not be empty!")
            seterrorBtn("X")
        }
    }
    const RemoveError=()=>{
        seterrorState("")
        seterrorBtn("")
    }
    var ID = 0;
    var ID2 = 0;
    return (
        <div className={"container"}>
        <div className={"logo"}>Todo List WebApplication</div>
        <form onSubmit={MaitainCurrentState}>
            <input value={inpState} onChange={AddInput} maxLength={40} placeholder="Enter Todo Item"></input>
            <button type="submit" onClick={AddTodos}>Add</button>
        </form>
        
        {/* Error message display */}
        <div className={"errorcontainer"}><p className={"errorMsg"}>{errorState}  <span onClick={RemoveError}>{errorBtn}</span></p></div>
        
        <div className={"List"}>
        <h2>TODO List Items</h2>
        {Lst.map((item)=>{
            ID++
            return (<div className={"ListItem"}>
            <p key={ID}><span className={"ncontainer"}>{ID}</span> | {item}</p>
            <span className={"tickBtn"} onClick={()=>{
                var K = Lst.slice();
                const index = K.indexOf(item);
                var n = K[index];
                if (index > -1) {
                    K.splice(index, 1);
                }
                setLst(K)
                var T = CLst.slice();
                T.push(n);
                setCLst(T);
            }}>✔</span>
            <span className={"errorBtn"} onClick={()=>{
                var K = Lst.slice();
                const index = K.indexOf(item);
                if (index > -1) {
                    K.splice(index, 1);
                }
                setLst(K)
            }}>🗑️</span>
            </div>);
        })}
        </div>

        <div className={"List"}>
        <h2>Task Completed</h2>
        
        {CLst.map((item)=>{
            ID2++
            return (<div className={"ListItem"}><p key={ID2}><span className={"ncontainer"}>{ID2}</span> | {item} 
            </p>
            <span className={"errorBtn"} onClick={()=>{
                var K = CLst.slice();
                const index = K.indexOf(item);
                if (index > -1) {
                    K.splice(index, 1);
                }
                setCLst(K)
            }}>🗑️</span>
            </div>);
        })}
        </div>
        </div>
    )
}

export default TodoList
