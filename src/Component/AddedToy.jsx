
const AddedToy = () => {

    const addToy=(e)=>{
        e.preventDefault()
        console.log()
    }

    return (
        <div className="max-w-full mx-auto mt-20">
            <div className=" w-1/2 bg-slate-500 p-10 mx-auto">
                <form onSubmit={addToy}>
                    <input className="border rounded w-full" type="text" name="name" placeholder="Name" /><br /> <br />
                    <input className="border rounded w-full" type="text" name="toy-name" placeholder="Toy Name" /><br /><br />
                    <input className="border rounded w-full" type="text" name="price" placeholder="Price" /><br /><br />
                    <input className="border rounded w-full" type="text" name="Available" placeholder="Available" /><br /><br />
                    <input className="border rounded w-full" type="text" name="category" placeholder="Subcategory" /><br /><br />
                    <button className="bg-orange-400 p-1 rounded-sm text-white font-bold w-full">Add your toy</button>
                </form>
            </div>
        </div>
    );
};
export default AddedToy