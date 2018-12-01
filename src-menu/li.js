import React, { Component } from 'react';
class Li extends React.Component {
    render(){
        let {data} = this.props;
        console.log(data);
        return (
            <li>
                <p className={data.vip?"vip":""}>{data.username}</p>
                <p className="message">{data.message}</p>
            </li>
        );
    }
}
export default Li;