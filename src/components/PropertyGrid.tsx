'use client';

import { useState } from 'react';
import Pagination from './sections/propertyGrid/Pagination';
import PropertyCard from './sections/propertyGrid/PropertyCard';
import PropertyModal from './sections/propertyGrid/PropertyModal';
import PropertySidebar from './sections/propertyGrid/PropertySidebar';

export default function PropertyGrid() {
	type Property = {
		id: number;
		image: string;
		images: string[];
		bedrooms: string;
		bathrooms: string;
		area: string;
		title: string;
		price: string;
		period: string;
		location: string;
	};

	const [selectedProperty, setSelectedProperty] = useState<Property | null>(
		null
	);

	const properties: Property[] = [
		{
			id: 1,
			image: '/images/cardImage.png',
			images: [
				'/images/cardImage.png',
				'/images/sunset.png',
				'/images/retreat.png',
				'/images/golden.png',
				'/images/cardImage.png',
			],
			bedrooms: '04',
			bathrooms: '04',
			area: '2600sft',
			title: 'Maple Grove Garden House',
			price: '280',
			period: 'week',
			location: 'New York, USA',
		},
		{
			id: 2,
			image: '/images/sunset.png',
			images: [
				'/images/cardImage.png',
				'/images/sunset.png',
				'/images/retreat.png',
				'/images/golden.png',
				'/images/cardImage.png',
			],
			bedrooms: '07',
			bathrooms: '04',
			area: '8500sft',
			title: 'Sunset Towers Eklosbet',
			price: '340',
			period: 'week',
			location: 'New York, USA',
		},
		{
			id: 2,
			image: '/images/retreat.png',
			images: [
				'/images/cardImage.png',
				'/images/sunset.png',
				'/images/retreat.png',
				'/images/golden.png',
				'/images/cardImage.png',
			],
			bedrooms: '07',
			bathrooms: '04',
			area: '8500sft',
			title: 'Sunset Towers Eklosbet',
			price: '340',
			period: 'week',
			location: 'New York, USA',
		},
		{
			id: 2,
			image: '/images/golden.png',
			images: [
				'/images/cardImage.png',
				'/images/sunset.png',
				'/images/retreat.png',
				'/images/golden.png',
				'/images/cardImage.png',
			],
			bedrooms: '07',
			bathrooms: '04',
			area: '8500sft',
			title: 'Sunset Towers Eklosbet',
			price: '340',
			period: 'week',
			location: 'New York, USA',
		},
	];

	return (
		<div className='bg-gray-50 min-h-screen'>
			<div className='container mx-auto px-4 py-4 sm:py-6 lg:py-8'>
				<div className='flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8'>
					<PropertySidebar />
					<div className='flex-1 min-w-0'>
						<div className='grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6'>
							{properties.map((property) => (
								<PropertyCard
									key={property.id}
									{...property}
									onClick={() => setSelectedProperty(property)}
								/>
							))}
						</div>
						<Pagination />
					</div>
				</div>
			</div>

			<PropertyModal
				isOpen={!!selectedProperty}
				onClose={() => setSelectedProperty(null)}
				property={selectedProperty || properties[0]}
			/>
		</div>
	);
}
