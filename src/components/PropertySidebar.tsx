import { Minus } from 'lucide-react';

export default function PropertySidebar() {
	return (
		<div className='w-full md:w-85 space-y-6'>
			{/* Rent Budget */}
			<div className='bg-white rounded-lg border p-5'>
				<div className='flex items-center justify-between mb-4'>
					<h3 className='text-xl font-semibold text-black'>Rent Budget</h3>
					<button className='text-black hover:text-gray-700'>
						<Minus className='w-4 h-4' />
					</button>
				</div>
				<div className='space-y-4'>
					<div className='relative pt-2'>
						<div className='h-2 bg-gray-300 rounded-full relative'>
							<div
								className='h-2 bg-[#6C0443] rounded-full absolute left-0'
								style={{ width: '75%' }}></div>
							<div className='absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#6C0443] border-4 border-[#7D2C8D] rounded-full'></div>
							<div
								className='absolute top-[180%] -translate-y-1/2 w-5 h-5 bg-[#6C0443] border-4 border-[#7D2C8D] rounded-full'
								style={{
									left: '75%',
									transform: 'translate(-50%, -50%)',
								}}></div>
						</div>
					</div>
					<div className='flex justify-between items-center pt-2'>
						<div className='bg-[#F4F6F8] p-3 rounded-lg flex-1'>
							<p className='text-xs text-gray-500 mb-1'>Minimum</p>
							<p className='text-medium font-semibold text-gray-900'>
								$300
							</p>
						</div>
						<div className='text-right bg-[#F4F6F8] flex-1 p-3 rounded-lg ml-4'>
							<p className='text-xs text-gray-500 mb-1 text-start'>
								Maximum
							</p>
							<p className='text-medium font-semibold text-gray-900 text-start'>
								$670000
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Suburb */}
			<div className='bg-white rounded-lg border p-5'>
				<div className='flex items-center justify-between mb-4'>
					<h3 className='text-base font-semibold text-gray-900'>
						Property Type
					</h3>
					<button className='text-gray-500 hover:text-gray-700'>
						<Minus className='w-4 h-4' />
					</button>
				</div>
				<div className='space-y-3'>
					<label className='flex items-center gap-3 cursor-pointer'>
						<input
							type='checkbox'
							className='w-4 h-4 rounded border-gray-300 text-[#7D2C8D] focus:ring-[#7D2C8D]'
						/>
						<span className='text-sm text-gray-700'>
							Eshelby Drive, Cranbrook
						</span>
					</label>
					<label className='flex items-center gap-3 cursor-pointer'>
						<input
							type='checkbox'
							className='w-4 h-4 rounded border-gray-300 text-[#7D2C8D] focus:ring-[#7D2C8D]'
						/>
						<span className='text-sm text-gray-700'>
							2-6 Eshelby Dr, Cannonvale
						</span>
					</label>
					<label className='flex items-center gap-3 cursor-pointer'>
						<input
							type='checkbox'
							defaultChecked
							className='w-4 h-4 rounded border-gray-300 text-[#7D2C8D] focus:ring-[#7D2C8D]'
						/>
						<span className='text-sm text-gray-700'>
							59/3 Eshelby Drive Cannonvale
						</span>
					</label>
				</div>
			</div>

			{/* Amenities */}
			<div className='bg-white rounded-lg border p-5'>
				<div className='flex items-center justify-between mb-4'>
					<h3 className='text-base font-semibold text-gray-900'>
						Amenities
					</h3>
					<button className='text-gray-500 hover:text-gray-700'>
						<Minus className='w-4 h-4' />
					</button>
				</div>
				<div className='space-y-3'>
					<label className='flex items-center gap-3 cursor-pointer'>
						<input
							type='checkbox'
							className='w-4 h-4 rounded border-gray-300 text-[#7D2C8D] focus:ring-[#7D2C8D]'
						/>
						<span className='text-sm text-gray-700'>
							Eshelby Drive, Cranbrook
						</span>
					</label>
					<label className='flex items-center gap-3 cursor-pointer'>
						<input
							type='checkbox'
							className='w-4 h-4 rounded border-gray-300 text-[#7D2C8D] focus:ring-[#7D2C8D]'
						/>
						<span className='text-sm text-gray-700'>
							2-6 Eshelby Dr, Cannonvale
						</span>
					</label>
					<label className='flex items-center gap-3 cursor-pointer'>
						<input
							type='checkbox'
							defaultChecked
							className='w-4 h-4 rounded border-gray-300 text-[#7D2C8D] focus:ring-[#7D2C8D]'
						/>
						<span className='text-sm text-gray-700'>
							59/3 Eshelby Drive Cannonvale
						</span>
					</label>
				</div>
			</div>

			{/* Property Type */}
			<div className='bg-white rounded-lg border p-5'>
				<div className='flex items-center justify-between mb-4'>
					<h3 className='text-base font-semibold text-gray-900'>Suburb</h3>
					<button className='text-gray-500 hover:text-gray-700'>
						<Minus className='w-4 h-4' />
					</button>
				</div>
				<div className='space-y-3'>
					<label className='flex items-center gap-3 cursor-pointer'>
						<input
							type='checkbox'
							className='w-4 h-4 rounded border-gray-300 text-[#7D2C8D] focus:ring-[#7D2C8D]'
						/>
						<span className='text-sm text-gray-700'>
							Eshelby Drive, Cranbrook
						</span>
					</label>
					<label className='flex items-center gap-3 cursor-pointer'>
						<input
							type='checkbox'
							className='w-4 h-4 rounded border-gray-300 text-[#7D2C8D] focus:ring-[#7D2C8D]'
						/>
						<span className='text-sm text-gray-700'>
							2-6 Eshelby Dr, Cannonvale
						</span>
					</label>
					<label className='flex items-center gap-3 cursor-pointer'>
						<input
							type='checkbox'
							defaultChecked
							className='w-4 h-4 rounded border-gray-300 text-[#7D2C8D] focus:ring-[#7D2C8D]'
						/>
						<span className='text-sm text-gray-700'>
							59/3 Eshelby Drive Cannonvale
						</span>
					</label>
				</div>
			</div>
		</div>
	);
}
