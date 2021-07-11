import React, { useState } from 'react';

const Container=() => {
   const [items,setItems] = useState([
     {
       title:"Pizza",
       source:"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb- 	      1.2.1&auto=format&fit=crop&w=1000&q=80",
       calorie:"56",
     },
     
     {
       title:"Burger",
       source:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
       calorie:"69",
       
     },
     
     {
        title:"Coke",
        source:"https://www.zdnet.com/a/hub/i/r/2020/06/09/2eacd230-d144-4224-9e64-aa012e900877/resize/1200x900/1e8024904299314d9378f958f86e920c/coca-cola-coke-coca-cola.jpg",
       calorie:"500",
     },
     
     {
      title:"Brownie",
      source:"https://i.pinimg.com/236x/ce/c0/54/cec05466275ce686f0fbd7010b407d0b--fudgy-brownie-recipe-fudgy-brownies.jpg",
      calorie:"180", 
     },
     
     {
       title:"PaniPuri",
       source:"https://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg",
       calorie:"10",
     },
   ]);
  let items_arr=[];
  for (let i=0;i<items.length;i++){
    items_arr.push(
      <Card
        key={i}
        id={i}
        title={items[i].title}
        source={items[i].source}
        calorie={items[i].calorie}
        setItems={setItems}
        items={items}
        />
    );
  };
  return(
    <div className="outer">
     {items_arr.length>0?(
      items_arr
      ):(
        <div className="nodata">No Data Found</div>
      )}
       
    </div>  
  );
};


const Card= (props) => {
    const { title,calorie,source,items,id,setItems} = props; 
  return(
   
    <div className="container">
      <div className="title">{title}</div>
      <div>
        <button onClick={() => {
            const newItems = items.filter((item,index) => index!==id);
            setItems(newItems);
          }}>
          Delete
        </button>
      </div>
       <img src={source} /> 
      <div className="Calorie_count">You have to consumed {calorie} cals today.</div>
    </div>
     
  );
};

export default Container;