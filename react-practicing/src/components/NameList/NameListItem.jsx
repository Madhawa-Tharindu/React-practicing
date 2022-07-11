import React from 'react';
import moment from 'moment';

import './NameListItem.css';

function NameListItem(props) {
    return (
        <li className='list-group-item'>
            <div className="row">
                <div className='col-sm'>
                    <img src={props.avatar} alt={props.name} />
                </div>
            <div className='col-sm'>
            <h3> {props.name}</h3>
            <p style={{color:'green'}}>City: {props.city}</p>
            <p>Email: {props.email}</p>
            <p>
                Birthday: {moment(props.birthday).format('DD-MM-YYYY')}
            </p>

            </div>
        </div>    
        </li>
    );
}

export default NameListItem;