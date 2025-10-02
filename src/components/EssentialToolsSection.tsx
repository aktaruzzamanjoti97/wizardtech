'use client';

// Types
interface Tool {
	title: string;
	icon: string;
	description: string;
	link: string;
	bgColor: string;
}

// Constants
const TOOLS: Tool[] = [
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

// Sub-components
function HeaderSection() {
	return (
		<div className='text-center mb-10 md:mb-16 relative'>
			<div className='inline-block mb-4 md:mb-6'>
				<div
					className='px-4 md:px-6 py-2 rounded-full'
					style={{
						background: 'linear-gradient(135deg, #BCB3A0 0%, #E0D8C9 100%)',
					}}>
					<span className='text-gray-800 text-[10px] md:text-xs font-semibold tracking-wide'>
						ESSENTIAL TOOLS
					</span>
				</div>
			</div>

			<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-6 leading-tight font-[family-name:var(--font-clash-display)]'>
				Essential Tools
			</h2>
			<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight font-[family-name:var(--font-clash-display)]'>
				Zero Distractions
			</h2>

			<p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-2'>
				Create diverse products on the platform and leverage our powerful
				tools to drive sales within and beyond GrowHubs.
			</p>
		</div>
	);
}

function ToolIcon({ icon }: { icon: string }) {
	return (
		<div className='absolute top-4 right-4 md:top-6 md:right-6'>
			<div className='w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl md:rounded-2xl flex items-center justify-center'>
				<span className='text-2xl md:text-3xl'>{icon}</span>
			</div>
		</div>
	);
}

function ToolCard({ tool }: { tool: Tool }) {
	return (
		<div
			className={`${tool.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all relative`}>
			<ToolIcon icon={tool.icon} />

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
	);
}

function EnterpriseCard() {
	return (
		<div
			className='rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden col-span-1 md:col-span-2'
			style={{
				background: 'linear-gradient(135deg, #4D5D69 0%, #A16A6B 100%)',
			}}>
			<div className='absolute top-4 right-4 md:top-6 md:right-6'>
				<div className='w-12 h-12 md:w-14 md:h-14  rounded-xl md:rounded-2xl flex items-center justify-center'>
					<span className='text-2xl md:text-3xl'>📊</span>
				</div>
			</div>

			<div className='pr-14 md:pr-16'>
				<h3 className='text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4'>
					Enterprise plan
				</h3>
				<p className='text-white/90 text-sm md:text-base mb-4 md:mb-6 leading-relaxed'>
					Full white-label platform hosted on a dedicated, auto-scaling
					server. Includes branding freedom, private content protection,
					and 24/7 service availability.
				</p>
				<a
					href='#'
					className='text-yellow-400 text-xs md:text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all'>
					Learn more
					<span>→</span>
				</a>
			</div>
		</div>
	);
}

// Main Component
export default function EssentialToolsSection() {
	return (
		<div className='bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-12 md:py-16 lg:py-20 font-[family-name:var(--font-cash-display)]'>
			<div className='container mx-auto px-4'>
				<HeaderSection />

				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6'>
						{TOOLS.map((tool, index) => (
							<ToolCard key={index} tool={tool} />
						))}
						<EnterpriseCard />
					</div>
				</div>
			</div>
		</div>
	);
}
