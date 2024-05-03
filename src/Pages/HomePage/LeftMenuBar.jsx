import { FaBookOpen, FaBookmark, FaHome, FaLocationArrow } from 'react-icons/fa'
import { GiBookshelf } from 'react-icons/gi'
import { MdOutlineWidgets } from 'react-icons/md'

const LeftMenu = () => {
	return (
		<div className="lg:flex justify-center items-center w-screen lg:w-full p-4 ">
			<div className="flex lg:flex-col items-center justify-between lg:justify-center mx-auto w-full gap-9 text-2xl ">
				<FaHome />
				<div className="bg-emerald-600 p-1 rounded-md text-white">
					<GiBookshelf />
				</div>
				<FaBookOpen />
				<FaBookmark />
				<MdOutlineWidgets />
				<FaLocationArrow />
			</div>
		</div>
	)
}

export default LeftMenu
