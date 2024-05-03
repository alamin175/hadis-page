import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div className="flex flex-col m-6  mx-auto">
			<h1 className="text-emerald-600 font-bold m-6 text-3xl">
				Please Go to Hadis
			</h1>
			<button className="btn text-white font-bold text-xl bg-emerald-600 hover:bg-emerald-700">
				<Link to="/bukhari">Hadis Page</Link>
			</button>
		</div>
	)
}

export default Home
