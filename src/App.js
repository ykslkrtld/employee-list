import data from "./helper/data";
import List from "./components/List";


function App() {
  console.log(data)
  return (
    <div className="App">
      <List data = {data}/>
    </div>
  );
}

export default App;
