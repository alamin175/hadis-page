import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar'
import LeftMenuBar from '../Pages/HomePage/LeftMenuBar'

const Main = () => {
	return (
		<div className="flex overflow-hidden h-screen">
			<div>
				<Navbar />
				<div className="lg:flex ">
					<div className="lg:static flex fixed bottom-0 bg-white lg:bg-transparent ">
						<LeftMenuBar />
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Main
