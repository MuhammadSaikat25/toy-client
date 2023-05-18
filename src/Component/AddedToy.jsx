import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const AddedToy = () => {
    const {user}=useContext(AuthContext)

    const addToy=(e)=>{
        e.preventDefault()
       const name=e.target.name.value 
       const email=e.target.email.value 
       const Manufacture=e.target.manufacture.value 
       const toyName=e.target.toyName.value 
       const price=e.target.price.value 
       const Available=e.target.available.value 
       const Category=e.target.category.value 
       const url=e.target.url.value 
       const age=e.target.age.value 
       const details=e.target.details.value 
       const rating=e.target.rating.value 
       const create={name,toyName,price,Available,Category,email,Manufacture,url,age,rating,details}
    //    console.log(name,toyName,price,Available,Category)
       fetch('http://localhost:5000/addToy',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(create)
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.acknowledged===true){
            e.target.reset()
            alert("Toy added successful")
        }
       })
    }

    return (
        <div className="max-w-full mx-auto mt-20">
            <div className=" w-1/2 bg-slate-500 p-10 mx-auto">
                <form onSubmit={addToy}>
                    <input className="border rounded w-full" type="text" defaultValue={user?.displayName} name="name" placeholder="Name" required /><br /> <br />
                    <input className="border rounded w-full" type="text" name="toyName" placeholder="Toy Name" required /><br /><br />
                    <input className="border rounded w-full" type="email" defaultValue={user?.email} name="email" placeholder="Email"  required/><br /><br />
                    <input className="border rounded w-full" type="text" name="price" placeholder="Price" required/><br /><br />
                    <input className="border rounded w-full" type="text" name="available" placeholder="Available" required/><br /><br />
                    <input className="border rounded w-full" type="text" name="manufacture" placeholder="Manufacture" required/><br /><br />
                    <input className="border rounded w-full" type="text" name="category" placeholder="Category" required/><br /><br />
                    <input className="border rounded w-full" type="text" name="url" placeholder="url" required/><br /><br />
                    <input className="border rounded w-full" type="text" name="age" placeholder="Sub-category by age" required/><br /><br />
                    <input className="border rounded w-full" type="text" name="rating" placeholder="Rating" required/><br /><br />
                    <input className="border rounded w-full" type="text" name="details" placeholder="Description" required/><br /><br />
                    <button className="bg-orange-400 p-1 rounded-sm text-white font-bold w-full">Add your toy</button>
                </form>
            </div>
        </div>
    );
};
export default AddedToy