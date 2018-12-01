import React,{Component} from 'react';
import ListItem from './listItem';
class List extends React.Component {
    constructor(arg){
        super(arg);
        this.state = {
            isShow:[
                true,
                false,
                false
            ]
        };
        this.changeShow = this.changeShow.bind(this);
    }
    changeShow(index,state){
        console.log(this);
        let {isShow} = this.state;
        isShow = isShow.map(()=>false);
        if(state){
            isShow[index] = true;
        }
        this.setState({
            isShow
        });
    }
    render(){
        let {data} = this.props;
        let {isShow} = this.state;
        return (
            <div className="panel">
                {Object.values(data).map((item,index)=>{
                    return (<ListItem 
                            data={item} 
                            key={index}
                            isShow = {isShow[index]} 
                            index = {index}
                            changeShow = {this.changeShow}
                        />)
                })}
            </div>
        );
    }
}
export default List;