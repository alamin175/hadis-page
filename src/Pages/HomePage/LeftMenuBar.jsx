import { FaBookOpen, FaBookmark, FaHome, FaLocationArrow } from 'react-icons/fa'
import { GiBookshelf } from 'react-icons/gi'
import { MdOutlineWidgets } from 'react-icons/md'

const LeftMenu = () => {
	return (
		<div className="flex flex-col h-screen items-center justify-center gap-9 text-2xl mx-4 ">
			<FaHome />
			<div className="bg-emerald-600  p-1  rounded-md   text-white">
				<GiBookshelf />
			</div>
			<FaBookOpen />
			<FaBookmark />
			<MdOutlineWidgets />
			<FaLocationArrow />
		</div>
	)
}

export default LeftMenu
