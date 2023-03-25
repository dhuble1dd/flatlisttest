
export const fetchPostsData = () => {
//  return fetch(
//    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
//  )
//    .then(e => e.json())
//    .then(data => data)
//    .catch(e => console.log(e));

return async (dispatch,getState) => {
    const {page} = getState()
console.log('pag',page)
    fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
      ).then(response => response.json())
      .then(json => dispatch({type: 'SET_POSTS', payload: {posts: json}}))
      .catch(e => console.log(e));
    }
};


//import { addPostAction } from "../Redux/reducer";

//export const fetchPostsData = ({page = 1}) => {
//  return dispatch => {
//    fetch(
//        `https://jsonplaceholder.typicode.com/posts?_limit=10&page=${page}`,
//      ).then(response => response.json())
//      .then(json => dispatch(addPostAction(json)))
//      .catch(e => console.log(e));
//  } 
    
//};