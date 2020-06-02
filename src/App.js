import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers=[{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday':'970418',
  'gender':'남성',
  'jab':'대학생'
},{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name': '토마토',
  'birthday':'951009',
  'gender':'남성',
  'jab':'직장인'
},{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name': '우아에',
  'birthday':'910617',
  'gender':'여성',
  'jab':'디자이너'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c =>{
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              jab={c.jab}
            />
          );
        })
      }
    </div>
  );
}

export default App;
