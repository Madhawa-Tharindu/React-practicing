import React, { useState, useEffect} from 'react';

import NameListItem from './NameListItem';

function Namelist(){
  const [loadData, setloadData] = useState(new Date);
  const [nameList, setNameList] = useState([{
    "id": 2,
    "name": {
    "title": "Miss",
    "first": "Jennie",
    "last": "Nichols"
  },
  "location": {
    "city": "Billings",
  },
  "email": "jennie.nichols@example.com",
  "dob": {
    "date": "1992-03-08T15:13:16.688Z",
    "age": 30
  },
  "picture": {
    //"large": "https://randomuser.me/api/portraits/men/75.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
    //"thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  },
},
{
"id": new Date(),    
"name": {
    "title": "Miss",
    "first": "Jennie",
    "last": "Nichols"
  },
  "location": {
    "city": "Billings",
  },
  "email": "jennie.nichols@example.com", 
  "dob": {
    "date": "1992-03-08T15:13:16.688Z",
    "age": 30
  },
  "picture": {
    //"large": "https://randomuser.me/api/portraits/men/75.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
    //"thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  }, 
}
]);useEffect(() => {
  fetch("https://randomuser.me/api").then(response => {
    return response.json();
  })
  .then(responseData => {
    setNameList((nameList) => [...nameList, responseData.results[0]]);
  });
},[loadData]);



const nameListComponent = () => {
    return nameList.map(aName => {
            return(  <NameListItem 
                key={aName.id}
                name = {`${aName.name.first} ${aName.name.last}`}
                city = {aName.location.city}
                email = {aName.email}
                birthday = {aName.dob.date}
                avatar= {aName.picture.medium}
              />
              );
        });
};

const addUserHandler = () => {
      setloadData(new Date);
};
  //setNameList((nameList) => nameList.concat(newUser));
  //spread operater

    return (
        <React.Fragment>
        
        <div className="container-fluid mt-4">
        <ul className="list-group">
          <button className='btn btn-primary mb-2' onClick={addUserHandler}>GENERATE A NEW USER</button>
    {nameListComponent()}
      
  </ul>
          </div>    
 
        </React.Fragment>
    );
  
}

export default Namelist;