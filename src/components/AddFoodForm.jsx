import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) { 
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const {foodList, setFoodList} = props;

  const handleNameInput = e => setName(e.target.value);
  const handleImageInput = e => setImage(e.target.value);
  const handleCaloriesInput = e => setCalories(e.target.value);
  const handleServingsInput = e => setServings(e.target.value);
 

 const handleSubmit = (event) => {
  event.preventDefault();
  const newFoodList = {name, image, calories, servings};
  const FoodCopy = [newFoodList, ...foodList];
  setFoodList(FoodCopy);
  setName('');
  setImage('');
  setCalories('');
  setServings('');
 }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;