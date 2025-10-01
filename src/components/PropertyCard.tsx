'use client';

import { Bed, Bath, Maximize } from 'lucide-react';
import Image from 'next/image';

interface PropertyCardProps {
	image: string;
	images: string[];
	bedrooms: string;
	bathrooms: string;
	area: string;
	title: string;
	price: string;
	period: string;
	location: string;
	onClick: () => void;
}

export default function PropertyCard({
	image,
	bedrooms,
	bathrooms,
	area,
	title,
	price,
	period,
	location,
	onClick,
}: PropertyCardProps) {
	return (
		<div
			onClick={onClick}
			className='bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow cursor-pointer'>
			<div className='relative h-64'>
				<Image
					src={image}
					alt={title}
					fill
					className='object-cover w-full'
				/>
			</div>
			<div className='p-4'>
				<div className='flex items-center gap-4 text-sm text-gray-600 mb-3'>
					<div className='flex items-center gap-1'>
						<Bed className='w-4 h-4' />
						<span>Bed- {bedrooms}</span>
					</div>
					<div className='flex items-center gap-1'>
						<Bath className='w-4 h-4' />
						<span>Bathroom- {bathrooms}</span>
					</div>
					<div className='flex items-center gap-1'>
						<Maximize className='w-4 h-4' />
						<span>{area}</span>
					</div>
				</div>
				<h3 className='text-lg font-semibold text-gray-900 mb-3'>{title}</h3>
				<div className='flex items-center justify-between'>
					<div className='flex items-baseline gap-1'>
						<span className='text-2xl font-bold text-gray-900'>${price}</span>
						<span className='text-sm text-gray-500'>/{period}</span>
					</div>
					<span className='text-sm text-gray-500'>{location}</span>
				</div>
			</div>
		</div>
	);
}
