import { useState } from 'react'
import { Link } from 'react-router-dom'

const Books = () => {
	const [activeTab, setActiveTab] = useState(0)
	const tabsData = [{ label: 'বই' }, { label: 'অধ্যায়' }]
	return (
		<div>
			{/* Tabs */}

			<div role="tablist" className="tabs mx-auto w-full rounded-xl">
				{tabsData.map((tab, index) => (
					<a
						key={index}
						role="tab"
						className={`tab ${
							index === 0
								? 'rounded-ss-xl'
								: index === 1
								? 'rounded-se-xl'
								: ''
						} ${
							activeTab === index
								? 'tab-active text-white bg-emerald-600'
								: ''
						}`}
						onClick={() => setActiveTab(index)}
					>
						{tab.label}
					</a>
				))}
			</div>

			<div className=" flex m-4 justify-center mx-auto">
				<input
					type="text"
					name="search"
					placeholder="Search for filter"
					className="border-2 rounded-md p-1 text-sm bg-gray-100 mx-2 h-8 w-full"
				/>
			</div>

			{/* Chapter */}

			<div className="bg-emerald-50 m-2 p-4 rounded-xl">
				<Link to="/bukhari">
					<div className="flex items-center -ml-2">
						<p
							className="bg-emerald-400  p-2 px-3 rounded-3xl"
							style={{
								clipPath:
									'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
							}}
						>
							1
						</p>
						<div className="ml-3">
							<p className="text-[10px] font-semibold">Ohi</p>
							<p className="text-[8px] text-gray-500 mt-1">
								হাদিসের রেঞ্জ :{''} 1
							</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Books
