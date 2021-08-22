const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(
            `https://api.weatherapi.com/v1/current.json?key=3a81ceec694b4589a6791432212707&q=${place}`
       )
         .then((res) => res.json())
          .then((data) => {
         
           dispatch({
             type:"UPDATE_PLACE_DATA",
             payload:data,
           });   
      });
  };
};

const toogleTheme = () => {
  return {
    type:"TOOGLE_THEME",

  };
};

export {updatePlace,updatePlaceData,toogleTheme};

