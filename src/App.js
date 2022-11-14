import './App.css';
import foods from './foods.json';
import {useState} from 'react';

//import {Button, Divider, Result, Row} from 'antd';
//import FoodBox from './components/FoodBox';
//import AddFoodForm from './components/AddFoodForm';
//import Search from './components/Search';


//const [allFoods, setAllFoods] = useState(foods);
//const [addForm, setAddForm] = useState(false);
//const [search, setSearch] = useState('');


function App() {

  const [allFoods, setAllFoods] = useState(foods)

  return (
    <div className="App">
      <h1> Iteração 1 | Render a simple list</h1>
      <h2>Food List</h2>
      {allFoods.map((food)=>{
        return(
          <div key="allFoods.name">
            <p style={{padding: "20px 0px 0"}}>{food.name}</p>
            <img src={food.image} width={100} alt="Food sample"/>
          </div>
        )
      })}

      <h1> Iteração 2 | Create de FoodBox Component</h1>
    </div>
  );
}

export default App;
