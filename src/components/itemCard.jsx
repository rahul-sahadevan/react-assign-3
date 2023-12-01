
// user card component -----------
function ItemCard({item,index}){
console.log(item)
    return (
        <div className="item-card">
            <h2>User {index+1}</h2>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Mobile: {item.phone}</p>
            <p>City: {item.address.city}</p>
            <p>Cmpany: {item.company.name}</p>
            <p>Site: {item.website}</p>

        </div>
    )
}

export default ItemCard