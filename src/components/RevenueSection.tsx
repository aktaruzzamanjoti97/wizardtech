'use client';

import Image from 'next/image';

export default function RevenueSection() {
	const tabs = [
		{ icon: '📚', label: 'Courses', active: true },
		{ icon: '👥', label: 'Communities', active: false },
		{ icon: '💬', label: 'Coaching & Consulting', active: false },
		{ icon: '🛍️', label: 'Merchandise', active: false },
		{ icon: '🎙️', label: 'Podcasts', active: false },
		{ icon: '📅', label: 'Events', active: false },
		{ icon: '🤝', label: 'Brokerage', active: false },
	];

	return (
		<div className='bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 py-12 md:py-20'>
			<div className='container mx-auto px-4'>
				{/* Top section with logos - Scrolling Typography */}
				<div className='text-center mb-12 md:mb-16'>
					<p className='text-gray-600 text-xs md:text-sm font-medium mb-6 md:mb-8 tracking-wide'>
						TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
					</p>
					<div className='overflow-hidden opacity-40'>
						<div className='animate-scroll-logos whitespace-nowrap inline-flex bg-[#F6F5F5] shadow-2xl'>
							{/* First set of logos */}
							<div className='inline-flex items-center gap-6 md:gap-8 lg:gap-12 px-4 md:px-6'>
								<div className='text-gray-400 text-xl md:text-2xl lg:text-3xl font-light tracking-wider'>
									LEVELS
								</div>
								<div className='text-gray-500 text-xl md:text-2xl lg:text-3xl font-bold'>
									KODNET
								</div>
								<div className='text-gray-500 text-lg md:text-xl lg:text-2xl font-semibold inline-flex items-center gap-2'>
									<span className='text-lg md:text-xl lg:text-2xl'>
										🏛️
									</span>
									<span>UiA</span>
								</div>
								<div className='text-gray-500 text-xl md:text-2xl lg:text-3xl font-semibold'>
									PlannIT
								</div>
								<div className='text-gray-400 text-sm md:text-base lg:text-xl tracking-wide'>
									NORWEGIAN HANDBALL
								</div>
								<div className='text-gray-400 text-sm md:text-base lg:text-xl'>
									NORWEGIAN BRIDGE
								</div>
								<div className='inline-flex items-center gap-2'>
									<div className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center'>
										<span className='text-white text-base md:text-xl'>
											🏔️
										</span>
									</div>
									<span className='text-gray-400 text-lg md:text-xl lg:text-2xl font-light'>
										ERMO 3D
									</span>
								</div>
							</div>
							{/* Duplicate set for seamless loop */}
							<div className='inline-flex items-center gap-6 md:gap-8 lg:gap-12 px-4 md:px-6'>
								<div className='text-gray-400 text-xl md:text-2xl lg:text-3xl font-light tracking-wider'>
									LEVELS
								</div>
								<div className='text-gray-500 text-xl md:text-2xl lg:text-3xl font-bold'>
									KODNET
								</div>
								<div className='text-gray-500 text-lg md:text-xl lg:text-2xl font-semibold inline-flex items-center gap-2'>
									<span className='text-lg md:text-xl lg:text-2xl'>
										🏛️
									</span>
									<span>UiA</span>
								</div>
								<div className='text-gray-500 text-xl md:text-2xl lg:text-3xl font-semibold'>
									PlannIT
								</div>
								<div className='text-gray-400 text-sm md:text-base lg:text-xl tracking-wide'>
									NORWEGIAN HANDBALL
								</div>
								<div className='text-gray-400 text-sm md:text-base lg:text-xl'>
									NORWEGIAN BRIDGE
								</div>
								<div className='inline-flex items-center gap-2'>
									<div className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center'>
										<span className='text-white text-base md:text-xl'>
											🏔️
										</span>
									</div>
									<span className='text-gray-400 text-lg md:text-xl lg:text-2xl font-light'>
										ERMO 3D
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Main content */}
				<div className='max-w-5xl mx-auto text-center mb-8 md:mb-12'>
					{/* Badge */}
					<div className='inline-block mb-4 md:mb-6'>
						<div className='bg-gradient-to-r from-purple-400 to-pink-400 px-4 md:px-6 py-2 rounded-full'>
							<span className='text-white text-[10px] md:text-xs font-semibold tracking-wide'>
								DIVERSIFY REVENUE STREAM
							</span>
						</div>
					</div>

					{/* Headline */}
					<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4'>
						Maximise earnings with
						<br />
						limitless revenue streams.
					</h2>

					{/* Subheadline */}
					<p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4'>
						Create and sell courses, consulting services, and communities
						- with Zero marketing cost and a built-in sales network.
					</p>
				</div>

				{/* Tabs */}
				<div className='flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2'>
					{tabs.map((tab, index) => (
						<button
							key={index}
							className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
								tab.active
									? 'bg-purple-900 text-white shadow-lg'
									: 'bg-white/60 text-gray-700 hover:bg-white hover:shadow-md'
							}`}>
							<span className='text-sm md:text-base'>{tab.icon}</span>
							<span>{tab.label}</span>
						</button>
					))}
				</div>

				{/* Course card */}
				<div className='max-w-6xl mx-auto px-2 md:px-4'>
					<div
						className='rounded-2xl md:rounded-[3rem] overflow-hidden bg-center md:bg-left'
						style={{
							backgroundImage: "url('/images/heroBackground.png')",
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-0'>
							{/* Left side - Text content */}
							<div className='px-6 py-8 md:pl-12 lg:pl-24 md:py-12 flex flex-col justify-center col-span-1'>
								<h3 className='text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4'>
									Courses
								</h3>
								<p className='text-purple-200 text-sm md:text-base mb-4 md:mb-6 leading-relaxed'>
									Turn your knowledge into structured, sellable
									products.
								</p>
								<p className='text-purple-200 text-sm md:text-base mb-4 md:mb-6 leading-relaxed'>
									Build online, drip, academic, or challenge-based
									courses with built-in tools for gamification,
									accountability, and engagement.
								</p>
								<p className='text-purple-200 text-sm md:text-base mb-6 md:mb-8 leading-relaxed'>
									Every course is optimized to deliver value and
									generate recurring income.
								</p>
								<div>
									<button className='bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold border border-white/20 transition-all'>
										Learn More
									</button>
								</div>
							</div>

							{/* Right side - Image */}
							<div className='relative h-[400px] md:h-full md:min-h-[500px] flex items-center justify-center p-4 md:p-8 flex-1 col-span-1 md:col-span-2'>
								<Image
									src='/images/coursesImg.png'
									alt='Courses'
									fill
									className='p-3 md:p-6 object-contain'
								/>
								<div className='relative w-full h-full'>
									{/* Floating subscription card */}
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
														<span className='hidden sm:inline'>
															Oct 13, 2022
														</span>
														<span className='sm:hidden'>
															Oct 13
														</span>
													</div>
												</div>
												<button className='text-blue-500 text-base md:text-xl flex-shrink-0'>
													▶
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
