import {useState} from "react"
const List = ({ data }) => {

  const [selectedPage, setSelectedPage] = useState(0)
  const itemsPerPage = 5

  const startIndex = selectedPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const selectedItems = data.slice(startIndex, endIndex)


    const handleNext = () => {
      if(endIndex < data.length){
      setSelectedPage(selectedPage + 1)
    }
  }

    const handlePrevious = () => {
      if(selectedPage > 0){
        setSelectedPage(selectedPage - 1)
      }
    }

  return (
    <div className="container" >
        <h1>Employee List</h1>
        <h3>(Employees {startIndex + 1} to {endIndex})</h3>
      {selectedItems.map((item) => (
        <div className="card" key={item.id}>
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div className="card-text">
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.age} years</p>
          </div>
        </div>
      ))}
      <div>
        <button onClick={handlePrevious}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default List;



