import React, {useEffect, useState} from 'react';
import './App.css';


function App() {

  let[usersList, setUsersList] = useState<any>([]);

  useEffect(() => {
      fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => {
          setUsersList(data.users);
          console.log(usersList);
        });
    }, []);


  return (
    <>

    </>
  );
}

export default App;
