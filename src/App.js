import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider } from 'antd';

function App() {

  const [foodList, setFoodList] = useState(foods);
  const [searchFormState, setSearchFormState] = useState('');

  const handleOnChange = (event) => {
    setSearchFormState(event.target.value)
  }

  return (
    <div className="App">
      <AddFoodForm foodList={foodList} setFoodList={setFoodList}/>

      {/*<Button> Hide Form / Add New Food </Button>*/}

      <Search searchFormState={searchFormState} handleOnChange={handleOnChange} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        { foodList.map(food => { 
          return <FoodBox  food={food} />
        }) }
      </Row>
    </div>
  );
}
export default App;