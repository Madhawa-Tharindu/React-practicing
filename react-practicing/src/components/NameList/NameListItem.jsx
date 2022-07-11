import React from 'react';
import moment from 'moment';

import './NameListItem.css';

function NameListItem(props) {
    return (
        <li>
            <p className="redText"><img src={props.avatar} /> {props.name}</p>
            <p style={{color:'green'}}>City: {props.city}</p>
            <p>Email: {props.email}</p>
            <p>
                Birthday: {moment(props.birthday).format('DD-MM-YYYY')}
            </p>
        </li>
    );
}

export default NameListItem;