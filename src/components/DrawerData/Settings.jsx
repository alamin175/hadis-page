import { CiSettings } from 'react-icons/ci'
import SettingsSection from '../../Pages/HomePage/SettingsSection'
import { useState } from 'react'

const MainDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}

	return (
		/* Drawer from daisy UI */
		<div>
			<div className="drawer drawer-end">
				<input
					id="my-drawer2"
					type="checkbox"
					className="drawer-toggle"
					checked={isDrawerOpen}
					onChange={toggleDrawer}
				/>
				<div className="drawer-content ">
					{/* Page content */}
					<label
						htmlFor="my-drawer2"
						className=" drawer-button cursor-pointer"
					>
						<CiSettings />
					</label>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer2"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					{/* Sidebar content */}

					<div className="min-h-full bg-white text-black">
						<button
							className=" font-bold text-2xl mt-2 ml-3"
							onClick={toggleDrawer}
						>
							X
						</button>
						<div>
							<SettingsSection />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainDrawer
