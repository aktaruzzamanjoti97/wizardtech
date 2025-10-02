'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Types
interface Testimonial {
	id: number;
	name: string;
	role: string;
	company: string;
	image: string;
	video: string;
	rating: number;
	tags: string[];
	testimonialText: string;
	earnings: string;
	earningsSubtext: string;
}

// Constants
const MAX_RATING = 5;

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: 'Iva Ryan',
		role: 'Marketing manager at',
		company: 'Adobe',
		image: '/images/testimonialAvatar.png',
		video: '/videos/testimonial-1.mp4',
		rating: 4,
		tags: ['Content Creator', 'Youtuber', 'Growth Expert'],
		testimonialText:
			'I recently had the opportunity to use the platform, and I must say, the feature that allows you to set your own commission is a game changer!',
		earnings: '$2M',
		earningsSubtext: 'EARNED IN HELENUIL',
	},
	{
		id: 2,
		name: 'John Doe',
		role: 'CEO at',
		company: 'TechCorp',
		image: '/images/testimonialAvatar.png',
		video: '/videos/testimonial-2.mp4',
		rating: 5,
		tags: ['Entrepreneur', 'Speaker', 'Mentor'],
		testimonialText:
			'This platform has completely transformed the way I do business. The flexibility and tools provided are unmatched in the industry.',
		earnings: '$1.5M',
		earningsSubtext: 'EARNED IN 6 MONTHS',
	},
	{
		id: 3,
		name: 'Sarah Johnson',
		role: 'Course Creator at',
		company: 'EduPro',
		image: '/images/testimonialAvatar.png',
		video: '/videos/testimonial-3.mp4',
		rating: 5,
		tags: ['Educator', 'Content Creator', 'Coach'],
		testimonialText:
			'The built-in sales network is incredible. I started making sales on day one without any marketing budget. Absolutely revolutionary!',
		earnings: '$800K',
		earningsSubtext: 'EARNED THIS YEAR',
	},
];

// Helper functions
const getPreviousIndex = (current: number, length: number): number =>
	current === 0 ? length - 1 : current - 1;

const getNextIndex = (current: number, length: number): number =>
	(current + 1) % length;

// Sub-components
function HeaderSection() {
	return (
		<div className='text-center mb-10 md:mb-16 px-4'>
			<div className='inline-block mb-4 md:mb-6'>
				<span className='bg-gradient-to-r from-pink-400 to-purple-400 text-black text-xs md:text-sm font-semibold px-4 md:px-6 py-3 rounded-full'>
					TESTIMONIALS
				</span>
			</div>
			<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 font-[family-name:var(--font-clash-display)]'>
				Trusted by Creators
			</h2>
			<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-[family-name:var(--font-clash-display)]'>
				& Proven by Results.
			</h2>
			<p className='text-white/70 text-base md:text-lg max-w-2xl mx-auto'>
				See how others grow with Growhubs — real stories, real success.
			</p>
		</div>
	);
}

function NavigationArrows({
	onPrev,
	onNext,
}: {
	onPrev: () => void;
	onNext: () => void;
}) {
	const buttonClasses =
		'absolute top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all z-100';
	const iconClasses = 'w-5 h-5 md:w-6 md:h-6 text-white';

	return (
		<>
			<button
				onClick={onPrev}
				className={`${buttonClasses} left-1 md:left-4`}>
				<ChevronLeft className={iconClasses} />
			</button>
			<button
				onClick={onNext}
				className={`${buttonClasses} right-1 md:right-4`}>
				<ChevronRight className={iconClasses} />
			</button>
		</>
	);
}

function DotNavigation({
	total,
	current,
	onChange,
}: {
	total: number;
	current: number;
	onChange: (index: number) => void;
}) {
	return (
		<div className='flex justify-center gap-2 mt-6 md:mt-8'>
			{Array.from({ length: total }).map((_, index) => (
				<button
					key={index}
					onClick={() => onChange(index)}
					className={`h-2 rounded-full transition-all ${
						index === current
							? 'w-8 bg-gradient-to-r from-pink-400 to-purple-400'
							: 'w-2 bg-white/30'
					}`}
					aria-label={`Go to slide ${index + 1}`}
				/>
			))}
		</div>
	);
}

function SlidePreview({ testimonial }: { testimonial: Testimonial }) {
	return (
		<div className='hidden lg:block flex-shrink-0 w-full max-w-[900px] opacity-20 pointer-events-none blur-sm'>
			<TestimonialCard testimonial={testimonial} isPreview />
		</div>
	);
}

// Main Component
export default function TestimonialSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () =>
		setCurrentIndex((prev) => getNextIndex(prev, testimonials.length));
	const handlePrev = () =>
		setCurrentIndex((prev) => getPreviousIndex(prev, testimonials.length));

	const previousTestimonial =
		testimonials[getPreviousIndex(currentIndex, testimonials.length)];
	const currentTestimonial = testimonials[currentIndex];
	const nextTestimonial =
		testimonials[getNextIndex(currentIndex, testimonials.length)];

	return (
		<div
			className='relative min-h-screen py-12 md:py-16 lg:py-20 overflow-hidden'
			style={{
				background: 'url("/images/testimonialBg.png")',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			<HeaderSection />

			<div className='relative max-w-7xl mx-auto px-2 md:px-4'>
				<div className='flex items-center justify-center gap-4 lg:gap-8'>
					<SlidePreview testimonial={previousTestimonial} />

					<div className='flex-shrink-0 w-full max-w-[1180px]'>
						<TestimonialCard testimonial={currentTestimonial} />
					</div>

					<SlidePreview testimonial={nextTestimonial} />
				</div>

				<NavigationArrows onPrev={handlePrev} onNext={handleNext} />
				<DotNavigation
					total={testimonials.length}
					current={currentIndex}
					onChange={setCurrentIndex}
				/>
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
					{testimonial.role} <span className='font-semibold'>{testimonial.company}</span>
				</p>
			</div>
			<StarRating rating={testimonial.rating} />
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

function TestimonialCard({
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
