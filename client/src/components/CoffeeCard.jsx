const CoffeeCard = ({coffee}) => {

    const {name, quantity, supplier, taste, category, details, photo} = coffee;

	return (
		<div className="card card-side bg-base-100 shadow-xl border-amber-300 border">
			<figure>
				<img src={photo} alt="Movie" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Name: {name}</h2>
				<p>Quantity: {quantity}</p>
				<p>Supplier: {supplier}</p>
				<p>{taste}</p>
				<div className="card-actions justify-end flex flex-col">
					<button className="btn">View</button>
					<button className="btn">Edit</button>
					<button className="btn">Delete</button>
				</div>
			</div>
		</div>
	);
};

export default CoffeeCard;
