'use client';

export default function HeroSection() {
	return (
		<div
			className='relative min-h-screen overflow-hidden'
			style={{
				backgroundImage: "url('/images/herobg.png')",
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}>
			{/* Small badge at top */}
			<div className='absolute top-6 sm:top-12 left-1/2 -translate-x-1/2 z-10'>
				<div className='bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full'>
					<span className='text-white text-[10px] sm:text-xs font-medium tracking-wide'>
						BUILD FOR YOU
					</span>
				</div>
			</div>

			{/* Main content */}
			<div className='relative container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20'>
				<div className='max-w-4xl mx-auto text-center'>
					{/* Headline */}
					<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight'>
						<span className='text-white'>Built for </span>
						<span className='text-white'>Creators</span>
						<span className='text-white'>.</span>
						<br />
						<span className='text-white'>Powered for </span>
						<span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
							Profit
						</span>
					</h1>

					{/* Subheadline */}
					<p className='text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2'>
						Create and sell courses, consulting services, and communities
						- with Zero marketing cost and a built-in sales network.
					</p>

					{/* Email input form */}
					<div className='flex flex-col sm:flex-row gap-3 justify-center items-stretch mb-4 max-w-lg mx-auto px-2'>
						<div className='relative w-full sm:flex-1'>
							<input
								type='email'
								placeholder='Enter Your Email Here'
								className='w-full px-4 sm:px-6 py-3 sm:py-4 pr-4 sm:pr-48 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base'
							/>
							<button className='hidden sm:block absolute right-1 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap'>
								<div className='text-sm'>Start for Free</div>
								<div className='text-[10px] font-normal'>
									No credit card Required
								</div>
							</button>
						</div>
						<button className='sm:hidden w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all'>
							<div className='text-sm'>Start for Free</div>
							<div className='text-xs font-normal mt-0.5'>
								No credit card Required
							</div>
						</button>
					</div>

					{/* Terms text */}
					<p className='text-white/50 text-[10px] sm:text-xs px-4'>
						By proceeding you agree to our Platform terms & Privacy Notice
					</p>
				</div>

				{/* Stats section */}
				<div className='mt-12 sm:mt-16 md:mt-20 max-w-6xl mx-auto'>
					<div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8'>
						<div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-6'>
							<h2 className='text-white text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left'>
								Sell from day one - even with zero audience
							</h2>
							<button className='px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/30 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all whitespace-nowrap'>
								Open calculator
							</button>
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
							{/* Stat 1 */}
							<div className='space-y-1.5 sm:space-y-2 text-center sm:text-left'>
								<div className='text-white/60 text-[10px] sm:text-xs font-medium tracking-wide'>
									CO-SELLERS IN NETWORK
								</div>
								<div className='text-white text-3xl sm:text-4xl font-bold'>
									21,500+
								</div>
								<div className='text-white/60 text-xs sm:text-sm'>
									People who can co-promote
								</div>
							</div>

							{/* Stat 2 */}
							<div className='space-y-1.5 sm:space-y-2 text-center sm:text-left'>
								<div className='text-white/60 text-[10px] sm:text-xs font-medium tracking-wide'>
									EXPECTED BUYERS / MONTH
								</div>
								<div className='text-white text-3xl sm:text-4xl font-bold'>
									86
								</div>
								<div className='text-white/60 text-xs sm:text-sm'>
									With zero personal audience
								</div>
							</div>

							{/* Stat 3 */}
							<div className='space-y-1.5 sm:space-y-2 text-center sm:text-left'>
								<div className='text-white/60 text-[10px] sm:text-xs font-medium tracking-wide'>
									EST. MRR AT US$?/MO
								</div>
								<div className='text-white text-3xl sm:text-4xl font-bold'>
									US$774
								</div>
								<div className='text-white/60 text-xs sm:text-sm'>
									From membership sales
								</div>
							</div>

							{/* Stat 4 */}
							<div className='space-y-1.5 sm:space-y-2 text-center sm:text-left'>
								<div className='text-white/60 text-[10px] sm:text-xs font-medium tracking-wide'>
									EARN W/O A PRODUCT
								</div>
								<div className='text-white text-3xl sm:text-4xl font-bold'>
									US$300
								</div>
								<div className='text-white/60 text-xs sm:text-sm'>
									Just by co-selling
								</div>
							</div>
						</div>

						{/* Bottom text banner - Scrolling Typography */}
						<div className='mt-6 sm:mt-8 bg-amber-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 overflow-hidden'>
							<div className='animate-scroll whitespace-nowrap'>
								<span className='text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl font-medium inline-block px-2 sm:px-4'>
									Unlike Kajabi, Teachable, or Skool, Growhubs helps
									you find and convert clients inside the platform so
									you can sell from day one.
								</span>
								<span className='text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl font-medium inline-block px-2 sm:px-4'>
									Unlike Kajabi, Teachable, or Skool, Growhubs helps
									you find and convert clients inside the platform so
									you can sell from day one.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
