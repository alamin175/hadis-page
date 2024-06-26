import SizeRange from '../../components/InputSize'

const SettingsSection = ({ iputSize }) => {
	const inputSize = value => {
		return value
	}
	return (
		<div>
			<div className="text-center w-full mx-auto">
				<div className="bg-white rounded-l-xl  rounded-r-md">
					<h1 className="text-sm font-semibold p-2">সেটিংস</h1>
					<label className="form-control w-full max-w-xs  px-4">
						<div className="label">
							<span className="label-text text-[10px]">
								আরবি ফন্ট সিলেক্ট করুন
							</span>
						</div>
						<select className="border p-1 rounded-lg mx-auto w-full">
							<option selected>KFGQ</option>
							<option>Me Quran</option>
							<option>Al Mushaf</option>
							<option>Amiri</option>
							<option>Arial</option>
						</select>
						<div>
							<p className="text-start text-[9px] 2xl:mt-6 mb-1">
								এরাবিক ফন্ট সাইজ
							</p>
							<SizeRange rangeValue={40} />
							<p className="text-start text-[9px]  2xl:my-2">
								অনুবাদ ফন্ট সাইজ
							</p>
							<SizeRange rangeValue={25} />
							<div className="flex items-center justify-between 2xl:my-3">
								<p className="text-start text-[9px] ">নাইট মোড</p>
								<input
									type="checkbox"
									className="toggle toggle-success transform scale-75 bg-black"
								/>
							</div>
						</div>
					</label>
				</div>

				<div className="bg-emerald-500 mx-auto rounded-md text-white text-start w-64 2xl:w-full 2xl:mt-3 ml-3 mr-3 2xl:ml-0  p-4">
					<h3 className="font-bold text-sm">
						আপনিও সদাকায়ে জারিয়াতে অংশ নিন
					</h3>
					<p className="text-[11px] leading-normal my-3">
						আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে
						সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে
						সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি
						সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।
					</p>
					<button className="flex justify-center mx-auto rounded-lg text-[10px] bg-white px-4 py-2 text-md text-emerald-700 font-bold ">
						সাপোর্ট করুন
					</button>
				</div>
			</div>
		</div>
	)
}

export default SettingsSection
