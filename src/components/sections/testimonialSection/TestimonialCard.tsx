import { Testimonial } from '@/types';
import Image from 'next/image';

// Constants
const MAX_RATING = 5;

function ProfileHeader({ testimonial }: { testimonial: Testimonial }) {
	return (
		<div className='flex items-start gap-3 md:gap-4'>
			<Image
				src={testimonial.image}
				alt={testimonial.name}
				width={56}
				height={56}
				className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0'
			/>
			<div className='flex-1 min-w-0'>
				<h3 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1'>
					{testimonial.name}
				</h3>
				<p className='text-gray-600 text-xs md:text-sm lg:text-base'>
					{testimonial.role}{' '}
					<span className='font-semibold'>{testimonial.company}</span>
				</p>
			</div>
			<StarRating rating={testimonial.rating} />
		</div>
	);
}

function StarRating({ rating }: { rating: number }) {
	return (
		<div className='flex gap-0.5 md:gap-1 flex-shrink-0'>
			{Array.from({ length: MAX_RATING }).map((_, i) => (
				<span
					key={i}
					className={`text-lg md:text-xl lg:text-2xl ${
						i < rating ? 'text-yellow-400' : 'text-gray-300'
					}`}>
					★
				</span>
			))}
		</div>
	);
}

function TagList({ tags }: { tags: string[] }) {
	return (
		<div className='flex flex-wrap gap-2'>
			{tags.map((tag, index) => (
				<span
					key={index}
					className='px-3 md:px-4 py-1.5 md:py-2 border-2 border-gray-900 rounded-full text-xs md:text-sm font-medium text-gray-900'>
					{tag}
				</span>
			))}
		</div>
	);
}

function TestimonialText({ text }: { text: string }) {
	return (
		<div className='relative'>
			<p className='text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed'>
				{text}
			</p>
		</div>
	);
}

function EarningsDisplay({
	earnings,
	subtext,
}: {
	earnings: string;
	subtext: string;
}) {
	return (
		<div className='pt-4 md:pt-6 border-t border-gray-200'>
			<div className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2'>
				{earnings}
			</div>
			<div className='text-[10px] md:text-xs lg:text-sm font-semibold text-gray-500 tracking-wider'>
				{subtext}
			</div>
		</div>
	);
}

function VideoThumbnail({ testimonial }: { testimonial: Testimonial }) {
	return (
		<div className='relative w-full h-64 md:h-full bg-gray-100'>
			<Image
				src={testimonial.image}
				alt={testimonial.name}
				fill
				className='object-cover'
			/>
			<div className='absolute inset-0 bg-gradient-to-br from-red-200/20 to-red-100/20' />
			<PlayButton />
		</div>
	);
}

function PlayButton() {
	return (
		<div className='absolute inset-0 flex items-center justify-center z-10'>
			<button className='bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-5 md:p-7 lg:p-8 transition-all hover:scale-110 shadow-lg'>
				<div className='w-0 h-0 border-l-[18px] md:border-l-[24px] border-l-gray-800 border-t-[12px] md:border-t-[16px] border-t-transparent border-b-[12px] md:border-b-[16px] border-b-transparent ml-1.5' />
			</button>
		</div>
	);
}

export default function TestimonialCard({
	testimonial,
}: {
	testimonial: Testimonial;
	isPreview?: boolean;
}) {
	return (
		<div className='bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mx-6 lg:mx-0'>
			<div className='grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:h-[550px]'>
				<VideoThumbnail testimonial={testimonial} />

				<div className='p-6 md:p-8 lg:p-12 flex flex-col justify-center'>
					<div className='space-y-4 md:space-y-6'>
						<ProfileHeader testimonial={testimonial} />
						<TagList tags={testimonial.tags} />
						<TestimonialText text={testimonial.testimonialText} />
					</div>

					<EarningsDisplay
						earnings={testimonial.earnings}
						subtext={testimonial.earningsSubtext}
					/>
				</div>
			</div>
		</div>
	);
}
