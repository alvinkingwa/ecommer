const initialState = {
    cart: [],
    isAuthenticated: false,
    user: null
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
      case 'REMOVE_FROM_CART':
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
      case 'LOGIN':
        return { ...state, isAuthenticated: true, user: action.payload };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false, user: null };
      default:
        return state;
    }
  };
  