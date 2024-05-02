import Books from './Books'

const MiddleSection = () => {
	return (
		<div className="h-screen w-full">
			<div className="mx-auto rounded-xl bg-gray-100">
				<div className="grid gap-4 grid-cols-12 w-full p-3 mt-3 rounded-ss-2xl">
					<div className="hidden md:block md:col-span-3 bg-white  rounded-t-xl">
						<Books />
					</div>
					<div className="scroll-container h-screen col-span-12 md:col-span-9 lg:col-span-6 overflow-y-auto overflow-x-hidden rounded-t-xl  bg-white">
						{/* {children} */}
						middle
					</div>
					<div className="hidden lg:block lg:col-span-3 rounded-t-xl  bg-white">
						{/* <Settings /> */}
						hope
					</div>
				</div>
			</div>
		</div>
	)
}

export default MiddleSection
