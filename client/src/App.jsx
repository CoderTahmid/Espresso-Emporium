import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {

	const coffees = useLoaderData();


	return (
		<>
			<div className="mx-20">
				<h1 className="text-6xl text-purple-600">Hot Hot cold cofee {coffees.length}</h1>
				<div className="grid md:grid-cols-2 gap-7">
					{coffees.map((coffee) => (
						<CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
