import React, { Component } from 'react';
import Li from './li';
class ListItem extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            
        }
    }
    render(){
        let {data,isShow,changeShow,index} = this.props;
        return (
            <div>
                <h2 
                    className="title"
                    onClick = {()=>{
                        changeShow(index,!isShow);
                    }}
                >{data.name}</h2>
                {
                    isShow?(<ul>
                        {data.list.map((item,index)=>{
                            return <Li key={index} data={item} />;
                        })}    
                    </ul>):""
                }
            </div>
        );
    }
}
export default ListItem