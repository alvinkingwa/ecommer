export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item
  });
  
  export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id
  });
  
  export const loginUser = (user) => ({
    type: 'LOGIN',
    payload: user
  });
  
  export const logoutUser = () => ({
    type: 'LOGOUT'
  });
  