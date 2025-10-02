'use client';

import { PropertyModalProps } from '@/types';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function PropertyModal({
	isOpen,
	onClose,
	property,
}: PropertyModalProps) {
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			{/* Backdrop */}
			<div className='absolute inset-0 bg-black/50' onClick={onClose}></div>

			{/* Modal */}
			<div className='relative bg-white rounded-lg max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden'>
				{/* Close button */}
				<button
					onClick={onClose}
					className='absolute top-0 right-0 z-100 w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full shadow-lg hover:bg-gray-100 transition-colors'>
					<X className='w-5 h-5 text-gray-700' />
				</button>

				<div className='p-8'>
					{/* Main image */}
					<div className='relative h-116 bg-gray-100'>
						<Image
							src={property.images[selectedImageIndex]}
							alt={property.title}
							fill
							className='object-cover rounded-lg'
						/>
					</div>

					{/* Thumbnail images */}
					<div className='px-6 py-4 flex justify-center'>
						<div className='flex gap-3 overflow-x-auto'>
							{property.images.map((image, index) => (
								<button
									key={index}
									onClick={() => setSelectedImageIndex(index)}
									className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
										selectedImageIndex === index
											? 'border-[#7D2C8D]'
											: 'border-gray-200 hover:border-gray-300'
									}`}>
									<Image
										src={image}
										alt={`${property.title} ${index + 1}`}
										fill
										className='object-cover'
									/>
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
