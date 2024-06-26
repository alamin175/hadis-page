import homeImg from '../../assets/home-logo.png'
import { FaHandHoldingHeart, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Settings from '../../components/DrawerData/Settings'

const Navbar = () => {
	return (
		<div className="p-2 px-4 h-10 w-full">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<Link to="/">
						<img className="w-9" src={homeImg} alt="" />
					</Link>
					<div className="ml-4">
						<h1 className="font-extrabold text-[10px] md:text-[14px]">
							হাদিস সমূহ
						</h1>
						<p className="text-[6px] md:text-[8px]">
							হাদিস পড়ুন শিখুন এবং জানুন
						</p>
					</div>
				</div>
				<div className="flex justify-center gap-3 lg:gap-8 items-center">
					<input
						type="text"
						name="search"
						placeholder="Search Hadith"
						className="hidden lg:block border-2 rounded-md p-1 text-sm h-8 w-44"
					/>
					<div>
						<button className=" lg:hidden text-2xl bg-gray-400 p-1 rounded-md text-white">
							<FaSearch />
						</button>
					</div>
					<div>
						<button className="hidden 2xl:block rounded-lg text-[10px] bg-emerald-500 px-3 py-2 text-md text-white font-bold ">
							<span className="flex justify-center items-center gap-1">
								সাপোর্ট করুন
								<FaHandHoldingHeart className="text-[15px]" />
							</span>
						</button>
					</div>
					<div className="2xl:hidden text-2xl bg-emerald-600 text-white p-1 z-50">
						<Settings />{' '}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
