import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import dataList from './data';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
    <List data = {dataList}/>,
    document.getElementById('root'));
serviceWorker.unregister();