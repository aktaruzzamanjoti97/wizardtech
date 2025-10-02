import Image from 'next/image';

function CourseCardContent() {
	return (
		<div className='px-6 py-8 md:pl-12 lg:pl-24 md:py-22 flex flex-col justify-center col-span-1 font-[family-name:var(--font-blauer-nue)]'>
			<h3 className='text-white text-2xl md:text-3xl font-semibold mb-1 md:mb-2'>
				Courses
			</h3>
			<p className='text-purple-200 text-sm md:text-base mb-2 md:mb-3 leading-relaxed'>
				Turn your knowledge into structured, sellable products.
			</p>
			<p className='text-purple-200 text-sm md:text-base mb-2 md:mb-3 leading-relaxed'>
				Build online, drip, academic, or challenge-based courses with
				built-in tools for gamification, accountability, and engagement.
			</p>
			<p className='text-purple-200 text-sm md:text-base mb-2 md:mb-3 leading-relaxed'>
				Every course is optimized to deliver value and generate recurring
				income.
			</p>
			<div>
				<button className='bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold border border-white/20 transition-all'>
					Learn More
				</button>
			</div>
		</div>
	);
}

function CourseCardImage() {
	return (
		<div className='relative h-[400px] md:h-full md:min-h-[500px] flex items-center justify-center p-4 md:p-8 flex-1 col-span-1 md:col-span-2'>
			<Image
				src='/images/coursesImg.png'
				alt='Courses'
				fill
				className='p-3 md:p-6 object-contain'
			/>
			<div className='relative w-full h-full'>
				<FloatingCards />
			</div>
		</div>
	);
}

function FloatingCards() {
	return (
		<div className='absolute bottom-20 md:bottom-38 right-0 md:right-2 rounded-2xl p-2 md:p-4 w-full md:w-88 z-10'>
			<div className='relative'>
				<div className='bg-gray-100 p-2 rounded-md w-44 md:w-54 shadow-2xl absolute right-2 md:right-0 -top-8 md:-top-10 z-10'>
					<button className='w-full bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-2xl text-xs md:text-sm font-semibold transition-all'>
						Subscribe for $5.00/mo
					</button>
				</div>
			</div>
			<div className='relative mt-6 md:mt-0'>
				<div className='flex items-start gap-2 md:gap-3 bg-white rounded-md p-2 absolute right-2 md:right-5'>
					<div className='bg-blue-100 text-blue-600 px-1.5 md:px-2 py-1 rounded text-[10px] md:text-xs font-bold'>
						PT
						<div className='text-[8px] md:text-[10px] font-normal'>
							91
						</div>
					</div>
					<div className='flex-1 min-w-0'>
						<h4 className='text-gray-900 text-xs md:text-sm font-semibold leading-tight mb-1 truncate'>
							Lady Dentaa Amoateng MBE
						</h4>
						<div className='flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-gray-500'>
							<span>53 min</span>
							<span>•</span>
							<span className='hidden sm:inline'>Oct 13, 2022</span>
							<span className='sm:hidden'>Oct 13</span>
						</div>
					</div>
					<button className='text-blue-500 text-base md:text-xl flex-shrink-0'>
						▶
					</button>
				</div>
			</div>
		</div>
	);
}

export default function CourseCard() {
	return (
		<div className='max-w-6xl mx-auto px-2 md:px-4'>
			<div
				className='rounded-2xl md:rounded-[3rem] overflow-hidden bg-center md:bg-left'
				style={{
					backgroundImage: "url('/images/heroBackground.png')",
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-0'>
					<CourseCardContent />
					<CourseCardImage />
				</div>
			</div>
		</div>
	);
}
