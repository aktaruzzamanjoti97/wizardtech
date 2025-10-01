'use client';

export default function EssentialToolsSection() {
	const tools = [
		{
			title: 'Payments',
			icon: '💳',
			description:
				'Responsibly sourced materials and eco-friendly fabrics for a better tomorrow.',
			link: 'Learn more',
			bgColor: 'bg-white',
		},
		{
			title: 'Analytics',
			icon: '📊',
			description: 'Understand your growth with smart, built-in analytics.',
			link: 'Learn more',
			bgColor: 'bg-white',
		},
		{
			title: 'Newsletters',
			icon: '📧',
			description: 'Build your audience with engaging, branded newsletter.',
			link: 'Learn more',
			bgColor: 'bg-white',
		},
		{
			title: 'Pages',
			icon: '📝',
			description:
				'Showcase your expertise with a personal profile that sells for you.',
			link: 'Learn more',
			bgColor: 'bg-white',
		},
		{
			title: 'Contact',
			icon: '📇',
			description:
				'Organize your contacts and turn them into your most valuable asset.',
			link: 'Learn more',
			bgColor: 'bg-white',
		},
		{
			title: 'Emails',
			icon: '🎨',
			description:
				'Showcase your expertise with a personal profile that sells for you.',
			link: 'Learn more',
			bgColor: 'bg-white',
		},
		{
			title: 'Co-sell network',
			icon: '🤝',
			description:
				'Collaborate with others to sell more without ad spend or extra effort.',
			link: 'Learn more',
			bgColor: 'bg-white',
		},
	];

	return (
		<div className='bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-12 md:py-16 lg:py-20'>
			<div className='container mx-auto px-4'>
				{/* Header */}
				<div className='text-center mb-10 md:mb-16 relative'>
					{/* Badge */}
					<div className='inline-block mb-4 md:mb-6'>
						<div className='bg-amber-100 border border-amber-200 px-4 md:px-6 py-2 rounded-full'>
							<span className='text-gray-800 text-[10px] md:text-xs font-semibold tracking-wide'>
								ESSENTIAL TOOLS
							</span>
						</div>
					</div>

					{/* Title */}
					<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-6 leading-tight'>
						Essential Tools
					</h2>
					<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight'>
						Zero Distractions
					</h2>

					{/* Description */}
					<p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-2'>
						Create diverse products on the platform and leverage our
						powerful tools to drive sales within and beyond GrowHubs.
					</p>

					{/* Floating icon */}
					<div className='hidden lg:block absolute right-20 top-6'>
						<div className='w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center shadow-lg'>
							<span className='text-white text-2xl font-bold'>F</span>
						</div>
					</div>
				</div>

				{/* Tools Grid */}
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6'>
						{/* Tool Cards */}
						{tools.map((tool, index) => (
							<div
								key={index}
								className={`${tool.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all relative`}>
								{/* Icon */}
								<div className='absolute top-4 right-4 md:top-6 md:right-6'>
									<div className='w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl md:rounded-2xl flex items-center justify-center'>
										<span className='text-2xl md:text-3xl'>{tool.icon}</span>
									</div>
								</div>

								{/* Content */}
								<div className='pr-14 md:pr-16'>
									<h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4'>
										{tool.title}
									</h3>
									<p className='text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed'>
										{tool.description}
									</p>
									<a
										href='#'
										className='text-orange-500 text-xs md:text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all'>
										{tool.link}
										<span>→</span>
									</a>
								</div>
							</div>
						))}

						{/* Enterprise Plan Card */}
						<div className='bg-gradient-to-br from-gray-700 via-gray-600 to-purple-900 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden col-span-1 md:col-span-2'>
							{/* Icon */}
							<div className='absolute top-4 right-4 md:top-6 md:right-6'>
								<div className='w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl md:rounded-2xl flex items-center justify-center'>
									<span className='text-2xl md:text-3xl'>📊</span>
								</div>
							</div>

							{/* Content */}
							<div className='pr-14 md:pr-16'>
								<h3 className='text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4'>
									Enterprise plan
								</h3>
								<p className='text-white/90 text-sm md:text-base mb-4 md:mb-6 leading-relaxed'>
									Full white-label platform hosted on a dedicated,
									auto-scaling server. Includes branding freedom, private
									content protection, and 24/7 service availability.
								</p>
								<a
									href='#'
									className='text-yellow-400 text-xs md:text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all'>
									Learn more
									<span>→</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
