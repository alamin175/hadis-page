import { useContext } from 'react'
import { GiBookshelf } from 'react-icons/gi'
import { DataContext } from '../../Context/GetDataContext'
import { IoBookOutline } from 'react-icons/io5'
import { CiSettings, CiShare1, CiShare2 } from 'react-icons/ci'
import { FaRegBookmark, FaRegCopy } from 'react-icons/fa'
import { MdOutlineReport } from 'react-icons/md'
import BooksDrawer from '../../components/DrawerData/BooksDrawer'

const Hadis = () => {
	const { hadis, book, chapter, section } = useContext(DataContext)
	return (
		<div>
			{/* <MainDrawer /> */}
			<div className="flex items-center p-2 px-4 gap-1 bg-gray-100 text-gray-500 text-sm rounded-t-xl">
				<GiBookshelf /> {'>'} <span>Bukhari</span> {'>'} <span>1</span>
			</div>

			{/* Book Data */}

			<div className="bg-white flex items-center justify-between p-4 rounded-b-xl">
				<div className="flex items-center gap-4">
					{/* <div className="  md:hidden">{<MainDrawer />}</div> */}
					<div className="xl:hidden">
						<BooksDrawer />
					</div>

					<GiBookshelf className="hidden xl:block -rotate-90 text-3xl text-emerald-500" />
					<div>
						<p>{book.title}</p>
						<p className="hidden md:block text-[9px] mt-1">
							সর্বমোট হাদিস - {book.number_of_hadis}
						</p>
					</div>
				</div>
				<div>
					<p className="font-semibold">{book.title_ar}</p>
				</div>
			</div>

			{/* Chapter Data */}

			<div className="bg-white flex items-center gap-3 p-3 my-4 rounded-xl">
				<p className="bg-emerald-600 text-white p-2 px-4 text-sm rounded-xl ">
					{chapter.id}
				</p>
				<p>{chapter.title}</p>
			</div>

			{/* Hadis data */}

			{hadis.map((hadith, index) => (
				<div key={hadith.hadith_id}>
					{section[index] && (
						<div className="bg-white rounded-xl p-4 my-3">
							<div className="flex items-center gap-2">
								<p className="text-emerald-600 text-xl font-bold">
									<IoBookOutline />
								</p>
								<p className="text-[10px] font-semibold">
									{section[index].number}
								</p>
							</div>
							<div>
								<p className="my-4 font-medium leading-relaxed">
									{section[index].title}
								</p>
								{section[index].preface && <hr />}
								<p className="mt-5 text-sm leading-loose">
									{section[index].preface}
								</p>
							</div>
						</div>
					)}
					<div className="bg-white rounded-xl p-4 my-3">
						<div>
							<p className="flex my-2 items-center gap-2 text-xl text-emerald-600">
								<CiSettings />
								<span className="text-sm">{hadith.hadith_id}</span>
							</p>
							<p className="text-3xl leading-loose">{hadith.ar}</p>
							<p className="my-4 font-bold mt-8 text-[12px] text-emerald-600">
								{hadith.narrator} থেকে বর্ণিত :
							</p>
							<p className="text-[14px] leading-loose mb-8 font-medium">
								{hadith.bn}
							</p>
						</div>
						<div className="flex justify-between">
							<div>
								<p className="text-[10px] font-bold">
									হাদিসের মান :{' '}
									<span className="cursor-pointer bg-[#46B891] p-[6px] rounded-md text-white font-bold text-[8px]">
										{hadith.grade}
									</span>
								</p>
							</div>
							<div className="flex gap-7 text-gray-500">
								<button className="tooltip" data-tip="কপি">
									<FaRegCopy />
								</button>
								<button className="tooltip" data-tip="বুকমার্ক ">
									<FaRegBookmark />
								</button>
								<button className="tooltip" data-tip="শেয়ার">
									<CiShare2 />
								</button>
								<button className="tooltip" data-tip="রিপোর্ট">
									<MdOutlineReport />
								</button>
								<button className="tooltip" data-tip="ডিরেক্ট">
									<CiShare1 />
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Hadis
