import React,{Component} from "react";
export default class Li extends Component {
    render(){   
        let {data,handleCheck,del} = this.props;
        return (
          <li >
            <div className={data.checked?"todo done":"todo"}>
              <div className="display">
                <input
                  className="check" 
                  type="checkbox" 
                  checked={data.checked}
                  onChange={(e)=>{
                    let stutas = e.target.checked
                    handleCheck(data.id,stutas)
                  }}
                  
                />
                <div className="todo-content">{data.val}</div>
                <span className="todo-destroy" onClick={(e)=>{
            del(data.id)
          }}></span>
              </div>
              <div className="edit">
                <input className="todo-input" type="text" />
              </div>
            </div>
          </li>
        )  
    }
}