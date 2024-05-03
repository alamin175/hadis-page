import { IoMenu } from 'react-icons/io5'
import Books from '../../Pages/HomePage/Books'

const BooksDrawer = () => {
	return (
		<div>
			<div className="drawer">
				<input id="my-drawer1" type="checkbox" className="drawer-toggle" />
				<button className="drawer-content text-3xl cursor-pointer">
					{/* Page content */}
					<label
						htmlFor="my-drawer1"
						className=" drawer-button cursor-pointer"
					>
						<IoMenu />
					</label>
				</button>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer1"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					{/* Sidebar content */}

					<div className="min-h-full bg-white">
						<Books />
					</div>
				</div>
			</div>
		</div>
	)
}

export default BooksDrawer
