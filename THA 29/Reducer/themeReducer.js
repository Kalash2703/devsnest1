const themeReducer = (state=false,action) => {
    if(action.type ==="TOOGLE_THEME"){
      return !state;
  
    }
    return state;
  };
  
  export default themeReducer;