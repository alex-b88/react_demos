import React from 'react';
import './App.css';
import Character from "./components/character/Character";
import Users from "./components/users/users";

function App() {
  return (
    <>
        <Character
            name={'Shmlonathan Shmlower'}
            type={'Human'}
            gender={'Male'}
            status={'Alive'}
            img={'https://rickandmortyapi.com/api/character/avatar/317.jpeg'}
        >
            <p>Lorem ipsum dolor sit amet.</p>
        </Character>
        <Character
            name={'Two Guys with Handlebar Mustaches'}
            type={'Human'}
            gender={'Male'}
            status={'Alive'}
            img={'https://rickandmortyapi.com/api/character/avatar/370.jpeg'}
        />
        <hr/>
        <Users/>
    </>
  );
}

export default App;
