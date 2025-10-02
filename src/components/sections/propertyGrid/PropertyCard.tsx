'use client';

import { PropertyCardProps } from '@/types';
import Image from 'next/image';

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
			className='bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer'>
			<div className='relative h-64'>
				<Image
					src={image}
					alt={title}
					fill
					className='object-cover w-full'
				/>
			</div>
			<div className='p-4'>
				<div className='flex items-center gap-4 text-sm text-[#7E8B9C] mb-3'>
					<div className='flex items-center gap-1'>
						<Image
							alt='bed'
							src='/images/bed.png'
							width={24}
							height={16}
						/>
						<span>Bed- {bedrooms}</span>
					</div>
					<div className='flex items-center gap-1'>
						<Image
							alt='bed'
							src='/images/bathroom.png'
							width={24}
							height={16}
						/>
						<span>Bathroom- {bathrooms}</span>
					</div>
					<div className='flex items-center gap-1'>
						<Image
							alt='bed'
							src='/images/arrow.png'
							width={20}
							height={16}
						/>
						<span>{area}</span>
					</div>
				</div>
				<h3 className='text-xl font-medium text-gray-900 mb-3'>{title}</h3>
				<div className='flex items-center gap-4'>
					<div className='flex items-baseline gap-1'>
						<span className='text-xl font-medium text-gray-900'>
							${price}
						</span>
						<span className='text-sm text-[#505F79]'>/ {period}</span>
					</div>
					<div> . </div>
					<span className='text-sm text-gray-500 mt-1'>{location}</span>
				</div>
			</div>
		</div>
	);
}
