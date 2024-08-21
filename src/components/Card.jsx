export const Card = ({ item }) => {
  // console.log(item);
  return (
    <div className="card py-2" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img src={item.image} alt="" height={120} />
      </div>
      <div className="card-body">
        <h4>{item.title}</h4>
        <p className="text-success">${item.price}</p>
        <p>{item.category}</p>
        <button className="w-100">Sepete Ekle</button>
      </div>
    </div>
  );
};
