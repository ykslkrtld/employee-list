const List = ({ data }) => {

    const handlePrevious = () => {}

  return (
    <div className="container" >
        <h1>Employee List</h1>
        <h3></h3>
      {data.map((item, index) => (
        <div key={item.id}>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.age}</p>
          </div>
        </div>
      ))}
      <div>
        <button onClick={handlePrevious}>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default List;
