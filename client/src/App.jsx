import { useLoaderData, useNavigate } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {

	const loadedCoffees = useLoaderData();
	const [coffees, setCoffees] = useState(loadedCoffees)
	const navigate = useNavigate();

	return (
		<>
			<div className="mx-20 mb-20">
				<h1 className="text-6xl text-purple-600">Hot Hot cold cofee {coffees.length}</h1>
				<div className="grid md:grid-cols-2 gap-7">
					{coffees.map((coffee) => (
						<CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
					))}
				</div>
			</div>
			<div className="w-[80%] mx-auto mb-20">
				<button className="btn btn-dash w-full" onClick={() => navigate("/addCoffee")}>
					Add more coffees
				</button>
			</div>
		</>
	);
}

export default App;
