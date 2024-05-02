import Books from './Books'
import Hadis from './Hadis'
import SettingsSection from './SettingsSection'

const MiddleSection = () => {
	return (
		<div className="">
			<div className="h-screen w-full mx-auto rounded-xl bg-gray-200">
				<div className="grid gap-4 grid-cols-12 w-full p-3 mt-3 rounded-ss-2xl">
					<div className="hidden xl:block xl:col-span-3 bg-white rounded-t-xl">
						<Books />
					</div>
					<div className="scroll-container h-screen col-span-12 xl:col-span-9 2xl:col-span-6 overflow-y-auto overflow-x-hidden rounded-t-xl ">
						<Hadis />
					</div>
					<div className="hidden 2xl:block 2xl:col-span-3 rounded-t-x">
						{/* <Settings /> */}
						<SettingsSection />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MiddleSection
