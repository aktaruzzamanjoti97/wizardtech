import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination() {
	return (
		<div className='flex items-center justify-between mt-8 px-4'>
			<button className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors'>
				<ChevronLeft className='w-4 h-4' />
				<span>Previous</span>
			</button>

			<div className='flex items-center gap-2'>
				<button className='w-9 h-9 flex items-center justify-center rounded-md bg-[#7D2C8D] text-white text-sm font-medium'>
					1
				</button>
				<button className='w-9 h-9 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 text-sm font-medium transition-colors'>
					2
				</button>
				<button className='w-9 h-9 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 text-sm font-medium transition-colors'>
					3
				</button>
				<span className='px-2 text-gray-500'>...</span>
				<button className='w-9 h-9 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 text-sm font-medium transition-colors'>
					8
				</button>
				<button className='w-9 h-9 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 text-sm font-medium transition-colors'>
					9
				</button>
				<button className='w-9 h-9 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 text-sm font-medium transition-colors'>
					10
				</button>
			</div>

			<button className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors'>
				<span>Next</span>
				<ChevronRight className='w-4 h-4' />
			</button>
		</div>
	);
}
