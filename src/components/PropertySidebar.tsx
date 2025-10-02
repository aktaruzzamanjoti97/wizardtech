import { Minus } from 'lucide-react';

interface CheckboxItemProps {
	label: string;
	defaultChecked?: boolean;
}

interface FilterSectionProps {
	title: string;
	children: React.ReactNode;
}

const CheckboxItem = ({ label, defaultChecked }: CheckboxItemProps) => (
	<label className='flex items-center gap-3 cursor-pointer'>
		<input
			type='checkbox'
			defaultChecked={defaultChecked}
			className='w-4 h-4 rounded border-gray-300 text-[#6C0443] focus:ring-[#6C0443]'
		/>
		<span className='text-sm text-gray-700'>{label}</span>
	</label>
);

const FilterSection = ({ title, children }: FilterSectionProps) => (
	<div className='bg-white rounded-lg border p-5'>
		<div className='flex items-center justify-between mb-4'>
			<h3 className='text-xl font-semibold text-black'>{title}</h3>
			<button className='text-black hover:text-gray-700'>
				<Minus className='w-4 h-4' />
			</button>
		</div>
		<div className='space-y-3'>{children}</div>
	</div>
);

const RangeSlider = () => (
	<div className='space-y-4'>
		<div className='relative pt-2'>
			<div className='h-2 bg-gray-300 rounded-full relative'>
				<div
					className='h-2 bg-[#6C0443] rounded-full absolute left-0'
					style={{ width: '75%' }}
				/>
				<div className='absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#6C0443] border-4 border-[#7D2C8D] rounded-full' />
				<div
					className='absolute top-[180%] -translate-y-1/2 w-5 h-5 bg-[#6C0443] border-4 border-[#7D2C8D] rounded-full'
					style={{ left: '75%', transform: 'translate(-50%, -50%)' }}
				/>
			</div>
		</div>
		<div className='flex justify-between items-center pt-2 gap-4'>
			<div className='bg-[#F4F6F8] p-3 rounded-lg flex-1'>
				<p className='text-xs text-gray-500 mb-1'>Minimum</p>
				<p className='text-medium font-semibold text-gray-900'>$300</p>
			</div>
			<div className='bg-[#F4F6F8] p-3 rounded-lg flex-1'>
				<p className='text-xs text-gray-500 mb-1'>Maximum</p>
				<p className='text-medium font-semibold text-gray-900'>$670000</p>
			</div>
		</div>
	</div>
);

const SUBURBS = [
	'Eshelby Drive, Cranbrook',
	'2-6 Eshelby Dr, Cannonvale',
	'59/3 Eshelby Drive Cannonvale',
];

const PROPERTY_TYPES = [
	'House',
	'Land',
	'Apartment',
	'Town House',
	'Vila',
	'Acreage',
];

const AMENITIES = ['Pet-friendly', 'Parking', 'Private Pool', 'Gym'];

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
				<RangeSlider />
			</div>

			{/* Suburb */}
			<FilterSection title='Suburb'>
				{SUBURBS.map((suburb, index) => (
					<CheckboxItem
						key={suburb}
						label={suburb}
						defaultChecked={index === 2}
					/>
				))}
			</FilterSection>

			{/* Property Type */}
			<FilterSection title='Property Type'>
				{PROPERTY_TYPES.map((type, index) => (
					<CheckboxItem
						key={type}
						label={type}
						defaultChecked={index >= 3}
					/>
				))}
			</FilterSection>

			{/* Amenities */}
			<FilterSection title='Amenities'>
				{AMENITIES.map((amenity, index) => (
					<CheckboxItem
						key={amenity}
						label={amenity}
						defaultChecked={index === 3}
					/>
				))}
			</FilterSection>
		</div>
	);
}
