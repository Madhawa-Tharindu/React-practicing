import React, {useState} from 'react';

import NameListItem from './NameListItem';

function Namelist(){
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
"id": 1,    
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
]);



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
  const newUser = {
    
      "id": 1,    
      "name": {
        "title":"Miss",
        "first":"Pallavi",
        "last":"Namnaik"
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
          "medium":"https://randomuser.me/api/portraits/med/women/37.jpg"
          //"thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },

  };
  //setNameList((nameList) => nameList.concat(newUser));
  //spread operater

  setNameList((nameList) => [...nameList, newUser]);
};
    return (
        <React.Fragment>
        
        <div className="container-fluid mt-4">
        <ul className="list-group">
          <button className='btn btn-primary mb-2' onClick={addUserHandler}>Add Name</button>
    {nameListComponent()}
      
  </ul>
          </div>    
 
        </React.Fragment>
    );
  
}

export default Namelist;