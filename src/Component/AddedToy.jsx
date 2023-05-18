
const AddedToy = () => {

    const addToy=(e)=>{
        e.preventDefault()
       const name=e.target.name.value 
       const toyName=e.target.toyName.value 
       const price=e.target.price.value 
       const Available=e.target.available.value 
       const Category=e.target.category.value 
       const create={name,toyName,price,Available,Category}
       console.log(name,toyName,price,Available,Category)
       fetch('http://localhost:5000/addToy',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(create)
       })
       .then(res=>res.json())
       .then(data=>console.log(data))
    }

    return (
        <div className="max-w-full mx-auto mt-20">
            <div className=" w-1/2 bg-slate-500 p-10 mx-auto">
                <form onSubmit={addToy}>
                    <input className="border rounded w-full" type="text" name="name" placeholder="Name" /><br /> <br />
                    <input className="border rounded w-full" type="text" name="toyName" placeholder="Toy Name" /><br /><br />
                    <input className="border rounded w-full" type="text" name="price" placeholder="Price" /><br /><br />
                    <input className="border rounded w-full" type="text" name="available" placeholder="Available" /><br /><br />
                    <input className="border rounded w-full" type="text" name="category" placeholder="Category" /><br /><br />
                    <button className="bg-orange-400 p-1 rounded-sm text-white font-bold w-full">Add your toy</button>
                </form>
            </div>
        </div>
    );
};
export default AddedToy