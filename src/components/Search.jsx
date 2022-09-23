import { Divider, Input } from 'antd';


// Iteration 5
function Search(props) {
  const {searchFormState, handleOnChange} = props;

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchFormState} type="text" onChange={handleOnChange} />
    </>
  );
}

export default Search;
