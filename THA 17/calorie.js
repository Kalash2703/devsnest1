const App=(props) => {
   
    return(
      <div className="outer">
        <Card  img="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" title="Pizza" calorie="56"></Card>
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkyRAHCDSXt1k32u7rDDbUDWtOGpbokZpmHA&usqp=CAU" title="Burger" calorie="69"></Card>
        <Card img="https://www.zdnet.com/a/hub/i/r/2020/06/09/2eacd230-d144-4224-9e64-aa012e900877/resize/1200x900/1e8024904299314d9378f958f86e920c/coca-cola-coke-coca-cola.jpg" title="Coke" calorie="500"></Card>
         <Card  img="https://c.ndtvimg.com/2020-12/sr5g83o8_brownie_625x300_22_December_20.jpg" title="Brownie" calorie="180"></Card>
        <Card img="https://www.ticklingpalates.com/wp-content/uploads/2020/05/fried-rice-using-veggies.jpg" title="Fried Rice" calorie="90"></Card>
          <Card img="https://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg" title="Pani Puri" calorie="10">
         </Card>
         
      </div>  
    );
  }
  
  
  const Card= (props) => {
        
    return(
     
      <div className="container">
        <div className="title">{props.title}</div>
         <img src={props.img} /> 
        <div className="Calorie_count">You have to consumed {props.calorie} cals today.</div>
      </div>
       
    );
  }
  
  ReactDOM.render(<App /> ,document.getElementById('root'));