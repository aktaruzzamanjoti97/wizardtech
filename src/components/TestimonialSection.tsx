'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

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
	emoji?: string;
}

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
		emoji: '😍',
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
		emoji: '🚀',
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
		emoji: '🎯',
	},
];

export default function TestimonialSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? testimonials.length - 1 : prev - 1
		);
	};

	return (
		<div
			className='relative min-h-screen py-12 md:py-16 lg:py-20 overflow-hidden'
			style={{
				background: 'url("/images/testimonialBg.png") ',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			{/* Header */}
			<div className='text-center mb-10 md:mb-16 px-4'>
				<div className='inline-block mb-4 md:mb-6'>
					<span className='bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs md:text-sm font-semibold px-4 md:px-6 py-2 rounded-full'>
						TESTIMONIALS
					</span>
				</div>
				<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4'>
					Trusted by Creators
				</h2>
				<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6'>
					& Proven by Results.
				</h2>
				<p className='text-white/70 text-base md:text-lg max-w-2xl mx-auto'>
					See how others grow with Growhubs — real stories, real success.
				</p>
			</div>

			{/* Testimonial Slider */}
			<div className='relative max-w-7xl mx-auto px-2 md:px-4'>
				<div className='flex items-center justify-center gap-4 lg:gap-8'>
					{/* Previous slide preview (left) */}
					<div className='hidden lg:block flex-shrink-0 w-full max-w-[900px] opacity-20 pointer-events-none blur-sm'>
						<TestimonialCard
							testimonial={
								testimonials[
									currentIndex === 0
										? testimonials.length - 1
										: currentIndex - 1
								]
							}
							isPreview
						/>
					</div>

					{/* Current slide (center) */}
					<div className='flex-shrink-0 w-full max-w-[900px]'>
						<TestimonialCard testimonial={testimonials[currentIndex]} />
					</div>

					{/* Next slide preview (right) */}
					<div className='hidden lg:block flex-shrink-0 w-full max-w-[900px] opacity-20 pointer-events-none blur-sm'>
						<TestimonialCard
							testimonial={
								testimonials[(currentIndex + 1) % testimonials.length]
							}
							isPreview
						/>
					</div>
				</div>

				{/* Navigation Arrows */}
				<button
					onClick={prevSlide}
					className='absolute left-1 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all z-10'>
					<ChevronLeft className='w-5 h-5 md:w-6 md:h-6 text-white' />
				</button>
				<button
					onClick={nextSlide}
					className='absolute right-1 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all z-10'>
					<ChevronRight className='w-5 h-5 md:w-6 md:h-6 text-white' />
				</button>

				{/* Dots Navigation */}
				<div className='flex justify-center gap-2 mt-6 md:mt-8'>
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`h-2 rounded-full transition-all ${
								index === currentIndex
									? 'w-8 bg-gradient-to-r from-pink-400 to-purple-400'
									: 'w-2 bg-white/30'
							}`}
						/>
					))}
				</div>
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
		<div className='bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
				{/* Left side - Video */}
				<div className='relative aspect-[4/5] md:aspect-auto bg-gray-100'>
					<div className='absolute inset-0 flex items-center justify-center'>
						{/* Video thumbnail placeholder */}
						<div className='relative w-full h-full bg-gradient-to-br from-red-200 to-red-100'>
							<Image
								src={testimonial.image}
								alt={testimonial.name}
								className='w-full h-full object-cover'
								width={500}
								height={500}
							/>
							{/* Play button overlay */}
							<div className='absolute inset-0 flex items-center justify-center'>
								<button className='bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-4 md:p-6 transition-all hover:scale-110'>
									<div className='w-0 h-0 border-l-[16px] md:border-l-[20px] border-l-gray-800 border-t-[10px] md:border-t-[12px] border-t-transparent border-b-[10px] md:border-b-[12px] border-b-transparent ml-1'></div>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Right side - Content */}
				<div className='p-6 md:p-8 lg:p-10 flex flex-col justify-between'>
					{/* Header with profile */}
					<div>
						<div className='flex items-start gap-3 md:gap-4 mb-4 md:mb-6'>
							<Image
								src={testimonial.image}
								alt={testimonial.name}
								width={14}
								height={14}
								className='w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0'
							/>
							<div className='flex-1 min-w-0'>
								<h3 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-900'>
									{testimonial.name}
								</h3>
								<p className='text-gray-600 text-xs md:text-sm'>
									{testimonial.role}{' '}
									<span className='font-semibold'>
										{testimonial.company}
									</span>
								</p>
							</div>
							{/* Star rating */}
							<div className='flex gap-0.5 md:gap-1 flex-shrink-0'>
								{[...Array(5)].map((_, i) => (
									<span
										key={i}
										className={`text-lg md:text-xl lg:text-2xl ${
											i < testimonial.rating
												? 'text-yellow-400'
												: 'text-gray-300'
										}`}>
										★
									</span>
								))}
							</div>
						</div>

						{/* Tags */}
						<div className='flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6'>
							{testimonial.tags.map((tag, index) => (
								<span
									key={index}
									className='px-3 md:px-4 py-1 md:py-1.5 border-2 border-gray-900 rounded-full text-xs md:text-sm font-medium text-gray-900'>
									{tag}
								</span>
							))}
						</div>

						{/* Testimonial text */}
						<div className='mb-4 md:mb-6 relative'>
							<p className='text-gray-800 text-sm md:text-base lg:text-lg leading-relaxed pr-8 md:pr-0'>
								{testimonial.testimonialText}
							</p>
							{testimonial.emoji && (
								<span className='absolute -top-1 md:-top-2 -right-1 md:-right-2 text-2xl md:text-3xl lg:text-4xl'>
									{testimonial.emoji}
								</span>
							)}
						</div>
					</div>

					{/* Earnings */}
					<div>
						<div className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1'>
							{testimonial.earnings}
						</div>
						<div className='text-[10px] md:text-xs font-semibold text-gray-500 tracking-wider'>
							{testimonial.earningsSubtext}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
