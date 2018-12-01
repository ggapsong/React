import React,{Component} from "react";
import { CLIENT_RENEG_LIMIT } from "tls";
export default class Li extends Component {
  constructor(props){
    super(props);
    this.reNameInput = React.createRef()
  }
  state = {
    showEdit:false,
    val:this.props.data.val
  }
    
    render(){
      //解构 
        let {data,handleCheck,del,reName} = this.props;
        let {showEdit,val} = this.state;
        return (
          <li >
            <div className={data.checked?"todo done":"todo"}>
              <div style={{
                display:showEdit?"none":"block"
              }}>
                <input
                  className="check" 
                  type="checkbox" 
                  checked={data.checked}
                  onChange={(e)=>{
                    let stutas = e.target.checked
                    handleCheck(data.id,stutas)
                  }}
                  
                />
                <div 
                className="todo-content"
                onDoubleClick = {()=>{
                  this.setState({
                    showEdit:true,
                  },()=>{
                    this.reNameInput.current.focus()
                  })
                  
                }}
                >{val}</div>
                <span className="todo-destroy" onClick={(e)=>{
            del(data.id)
          }}></span>
              </div>
              <div className="editing" style={{
                display:showEdit?"block":"none"
              }}>
                <input 
                  className="todo-input" 
                  type="text"
                  ref={this.reNameInput}
                  value={val}
                  onChange={(e)=>{
                    this.setState({
                      val:e.target.value
                    })
                  }}
                  onBlur={()=>{
                    let {val} = this.state;
                    if(val.trim()===""){
                      val = this.props.data.val
                    }
                    this.setState({
                      showEdit:false,
                      val
                    })
                    reName(data.id,val)
                  }}
                />
              </div>
            </div>
          </li>
        )  
    }
}