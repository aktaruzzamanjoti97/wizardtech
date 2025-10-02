import { SortOption } from '@/types';
import { ChevronDown, RotateCcw } from 'lucide-react';



const SORT_OPTIONS: SortOption[] = [
	{ label: 'Low to High', value: 'low-to-high' },
	{ label: 'High to Low', value: 'high-to-low' },
	{ label: 'Newest', value: 'newest' },
	{ label: 'Oldest', value: 'oldest' },
];

const PropertyCount = ({ count }: { count: number }) => (
	<div className='flex items-center gap-2 text-sm'>
		<span className='font-semibold text-black text-xl'>Property</span>
		<span className='text-gray-500 text-base'>
			--- Showing result- ({count})
		</span>
	</div>
);

const SortDropdown = () => (
	<div className='flex items-start gap-1 flex-col bg-[#F4F6F8] px-4'>
		<span className='text-sm text-gray-500'>Sort By</span>
		<div className='relative'>
			<select className='appearance-none text-base font-medium text-black bg-transparent border-none outline-none cursor-pointer pr-6 pl-1'>
				{SORT_OPTIONS.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<ChevronDown className='w-4 h-4 text-gray-900 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none' />
		</div>
	</div>
);

export default function PropertyFilter() {
	const resultCount = 12;

	return (
		<div className='bg-white'>
			<div className='container mx-auto px-4 py-5'>
				<div className='flex flex-col lg:flex-row items-stretch lg:items-center gap-4'>
					{/* Left side - Property Preference and Reset Filter */}
					<div className='flex flex-col sm:flex-row w-full md:w-84 items-stretch sm:items-center gap-2 sm:gap-3 border border-gray-300 rounded-md px-3 sm:px-4 py-2 justify-between'>
						<button className='text-base font-medium text-black bg-white hover:bg-gray-50 transition-colors py-2 sm:py-0'>
							Property Preference
						</button>
						<button className='flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-black bg-[#F4F6F8] hover:text-gray-900 transition-colors rounded h-[54px]'>
							<span>Reset Filter</span>
							<RotateCcw className='w-4 h-4' />
						</button>
					</div>

					{/* Right side - Property count and Sort */}
					<div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 lg:gap-8 border border-gray-300 lg:flex-1 px-4 sm:px-6 py-3 rounded-md'>
						<PropertyCount count={resultCount} />
						<SortDropdown />
					</div>
				</div>
			</div>
		</div>
	);
}
