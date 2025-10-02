'use client';

import { Tab } from '@/types';
import CourseCard from './sections/revenueSection/CourseCard';
import TrustedBySection from './sections/revenueSection/TrustedBySection';

// Constants
const TABS: Tab[] = [
	{ icon: '📚', label: 'Courses', active: true },
	{ icon: '👥', label: 'Communities', active: false },
	{ icon: '💬', label: 'Coaching & Consulting', active: false },
	{ icon: '🛍️', label: 'Merchandise', active: false },
	{ icon: '🎙️', label: 'Podcasts', active: false },
	{ icon: '📅', label: 'Events', active: false },
	{ icon: '🤝', label: 'Brokerage', active: false },
];

function HeaderSection() {
	return (
		<div className='max-w-5xl mx-auto text-center mb-8 md:mb-12'>
			<div className='inline-block mb-4 md:mb-6'>
				<div className='bg-gradient-to-r from-purple-400 to-pink-400 px-4 md:px-6 py-2 rounded-full'>
					<span className='text-black text-[10px] md:text-xs font-semibold tracking-wide'>
						DIVERSIFY REVENUE STREAM
					</span>
				</div>
			</div>

			<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4 font-[family-name:var(--font-cash-display)]'>
				Maximise earnings with
				<br />
				limitless revenue streams.
			</h2>

			<p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4'>
				Create and sell courses, consulting services, and communities - with
				Zero marketing cost and a built-in sales network.
			</p>
		</div>
	);
}

function TabButton({ tab }: { tab: Tab }) {
	const baseClasses =
		'flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all';
	const activeClasses =
		'bg-gradient-to-r from-[#5C0639] to-[#5C0639] text-white shadow-lg';
	const inactiveClasses =
		'bg-white/60 text-gray-700 hover:bg-white hover:shadow-md';

	return (
		<button
			className={`${baseClasses} ${
				tab.active ? activeClasses : inactiveClasses
			}`}>
			<span className='text-sm md:text-base'>{tab.icon}</span>
			<span>{tab.label}</span>
		</button>
	);
}

// Main Component
export default function RevenueSection() {
	return (
		<div className='bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 py-12 md:py-20'>
			<div className='container mx-auto px-4'>
				<TrustedBySection />
				<HeaderSection />

				<div className='flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 bg-[#F2F2F2] mx-auto'>
					{TABS.map((tab, index) => (
						<TabButton key={index} tab={tab} />
					))}
				</div>

				<CourseCard />
			</div>
		</div>
	);
}
