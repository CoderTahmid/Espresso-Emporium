import Swal from "sweetalert2";
 
const AddCoffee = () => {
	const handleAddCoffee = (event) => {
		event.preventDefault();

		const form = event.target;
		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;

		const newCoffee = {name, quantity, supplier, taste, category, details, photo};
		console.log(newCoffee);

		// send data to the server
		fetch("http://localhost:5000/coffee", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data.insertedId) {
                    Swal.fire({
						title: "Success!",
						text: "User added successfully",
						icon: "success",
						confirmButtonText: "Cool",
					});
				}
			});
	};

	return (
		<div className="bg-[#F4F3F0] p-24">
			<h2 className="text-3xl font-extrabold">Add coffe</h2>
			<form className="space-y-9" onSubmit={handleAddCoffee}>
				{/* Form name and quantity row */}
				<div className="md:flex gap-10">
					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text">Coffee name</span>
						</label>
						<label className="input-group">
							<input type="text" name="name" id="" placeholder="Coffee name" className="input input-bordered w-full" />
						</label>
					</div>

					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text">Available quantity</span>
						</label>
						<label className="input-group">
							<input type="text" name="quantity" id="" placeholder="Available quantity" className="input input-bordered w-full" />
						</label>
					</div>
				</div>

				{/* Form supplier and taste row */}
				<div className="md:flex gap-10">
					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text">Supplier</span>
						</label>
						<label className="input-group">
							<input type="text" name="supplier" id="" placeholder="Supplier name" className="input input-bordered w-full" />
						</label>
					</div>

					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text">Taste</span>
						</label>
						<label className="input-group">
							<input type="text" name="taste" id="" placeholder="Taste" className="input input-bordered w-full" />
						</label>
					</div>
				</div>

				{/* Form category and details row */}
				<div className="md:flex gap-10">
					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text">Category</span>
						</label>
						<label className="input-group">
							<input type="text" name="category" id="" placeholder="Category" className="input input-bordered w-full" />
						</label>
					</div>

					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text">Details</span>
						</label>
						<label className="input-group">
							<input type="text" name="details" id="" placeholder="Details" className="input input-bordered w-full" />
						</label>
					</div>
				</div>

				{/* Form photo URL row */}
				<div className=" gap-10">
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text">Photo URL</span>
						</label>
						<label className="input-group">
							<input type="text" name="photo" id="" placeholder="Photo URL" className="input input-bordered w-full" />
						</label>
					</div>
				</div>
				<input type="submit" value="Add Coffee" className="btn btn-block" />
			</form>
		</div>
	);
};

export default AddCoffee;
