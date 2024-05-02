import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar'
import LeftMenuBar from '../Pages/HomePage/LeftMenuBar'

const Main = () => {
	return (
		<div>
			<div className={'overflow-hidden'}>
				<div className="max-w-screen-xl mx-auto">
					<Navbar />
					<div className="flex">
						<div className="">
							<LeftMenuBar />
						</div>

						<Outlet />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
