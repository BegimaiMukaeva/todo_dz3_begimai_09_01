import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

// const login = (username , password) => {
//     fetch(
//         'http://abdyko.tmweb.ru/api/token/',
//         {
//             method: 'POST',
//             headers: {'Content-Type':'application/json'},
//             body: JSON.stringify({
//                 username: username,
//                 password: password,
//             })
//         }
//     ).then(response => {
//         return response.json()
//     }).then(jsonData => {
//         console.log(jsonData)
//     })
// }
//
// login('begimai', 'penguin78')



const getTodos = () => {
    fetch(
        'http://abdyko.tmweb.ru/api/v1/todo/',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3MDI4Mzc4LCJpYXQiOjE2NDY5ODUxNzgsImp0aSI6IjM4YjgzNWEzYTFkYTQwZjA4M2Y5MjE2ZjUzNDA3NGQyIiwidXNlcl9pZCI6MjR9.F7o__KdhsQewh-ktsPRZjleHKIMQZZBOfnMsV2hrY_s\n'
            }
        }
    )
        .then(response => response.json())
        .then(todos => console.log(todos))
}

getTodos()


ReactDOM.render(<App />,
  document.getElementById('root'));

