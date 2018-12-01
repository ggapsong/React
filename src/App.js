import React,{Component} from "react";
import Li from  "./li";
export default class App extends Component {
    state = {
        val:"",
        lis:[
            
        ]
    }
   
    add(){
        if(this.state.val==''){
            alert('请输入事项');
            return false;
        }
        let {lis} = this.state;
        lis.push({
            val:this.state.val,
            id:new Date().getTime(),
            checked:false
        });
        this.setState({
            lis,
            val:""
        })
    }
    del(id){
        let {lis} = this.state;
        for (let i = 0; i < lis.length; i++) {
            const e = lis[i];
            if(e.id==id){
                lis.splice(i,1)
            }
        }
        this.setState({
            lis
        })
    }
    delevery(){
        let {lis} = this.state;
        for(let i = 0;i<lis.length;i++){
            const e = lis[i];
            if(e.checked){
                lis.splice(i,1)
                i--
            }
        }
        this.setState({
            lis
        })
    }
    handleChange(event) {
        this.setState({val: event.target.value});
    }
    handleCheck(id,status) {
        let lis = this.state.lis.map((e)=>{
            if(e.id==id){
                e.checked = status;
            }
            return e
        });
        this.setState({
            lis
        })
    }
    render(){   
        let {lis,val} = this.state;
        let noCheck = lis.filter((e)=>{
            return !e.checked
        })
        return (
            <div>
                <div id="todoapp">
                    <div className="title">
                        <h1>Todos</h1>
                </div>
                <div className="content">
                    <div id="create-todo">
                    <input 
                        id="new-todo"
                        value={val}
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={(ev)=>{
                            if(ev.keyCode==13){
                                this.add();
                            }
                        }}
                        placeholder="What needs to be done?" 
                        type="text"
                    />   
                </div>
                    <div id="todos">
                        <ul id="todo-list">
                            {
                                lis.map((e,i)=>{
                                    return (<Li
                                    data = {e}
                                    key = {e.id}
                                    handleCheck = {this.handleCheck.bind(this)}
                                    del = {this.del.bind(this)}
                                    />)
                                })     
                            }
                            
                        </ul>
                    </div>
                    <div id="todo-stats">
                        <span className="todo-count" style={{display:lis.length==0?"none":""}}>
                            <span className="number">{noCheck.length} </span>
                            <span className="word">item</span> left.
                        </span>
                        <span className="todo-clear" 
                        style={{display:lis.length-noCheck.length==0?"none":""}}
                        onClick={(i)=>{
                            this.delevery()
                        }}
                        
                        >
                            <a href="#">
                                Clear <span className="number-done">{lis.length-noCheck.length} </span> 
                                completed <span className="word-done">items</span>
                            </a>
                        </span>
                    </div>
                    </div>
                </div>
            </div>   
        )
        
    }
}