//export const FETCH_USERS = 'FETCH_USERS';
//import { FETCH_USERS } from './types';


export const getAllUsers = (user) => {
  console.log("You clicked on user:", user.name);
 
    return (dispatch) => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(users => {
          dispatch({
            type: FETCH_USERS,
            payload: users
        })
      })
    }
  }


// export const LCLShipment_New = () => {
//   console.log("LCL action");
 
//     return (dispatch) => {
//       fetch(`https://jsonplaceholder.typicode.com/users`)
//         .then(res => res.json())
//         .then(users => {
//           dispatch({
//             type: FETCH_USERS,
//             payload: users
//         })
//       })
//     }
//   }




