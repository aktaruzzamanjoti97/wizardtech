'use client';

import { StatCardProps } from "@/types";

const STATS_DATA: StatCardProps[] = [
	{
		label: 'CO-SELLERS IN NETWORK',
		value: '21,500+',
		description: 'People who can co-promote',
	},
	{
		label: 'EXPECTED BUYERS / MONTH',
		value: '86',
		description: 'With zero personal audience',
	},
	{
		label: 'EST. MRR AT US$?/MO',
		value: 'US$774',
		description: 'From membership sales',
	},
	{
		label: 'EARN W/O A PRODUCT',
		value: 'US$300',
		description: 'Just by co-selling',
	},
];

const SCROLLING_TEXT =
	'Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and convert clients inside the platform so you can sell from day one.';

const TopBadge = () => (
	<div className='absolute top-6 sm:top-12 left-1/2 -translate-x-1/2 z-10'>
		<div className='bg-[#2E1C2F] backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2.5 rounded-full'>
			<span className='text-white text-[10px] sm:text-[16px] font-medium tracking-wide'>
				BUILD FOR YOU
			</span>
		</div>
	</div>
);

const Headline = () => (
	<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-[family-name:var(--font-clash-display)]'>
		<span className='bg-gradient-to-b from-[#FFFFFF] to-[#A5C5DD] bg-clip-text text-transparent'>
			Built for Creators.
		</span>
		<br />
		<span className='bg-gradient-to-b from-[#FFFFFF] to-[#A5C5DD] bg-clip-text text-transparent'>
			Powered for Profit
		</span>
	</h1>
);

const EmailSignupForm = () => (
	<>
		<div className='flex flex-col sm:flex-row gap-3 justify-center items-stretch mb-4 max-w-lg mx-auto px-2'>
			<div className='relative w-full sm:flex-1'>
				<input
					type='email'
					placeholder='Enter Your Email Here'
					className='w-full px-4 sm:px-6 py-3 sm:py-4 pr-4 sm:pr-48 rounded-full bg-[#3B3B4B] backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base'
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
		<p className='text-white/50 text-[10px] sm:text-xs px-4'>
			By proceeding you agree to our Platform terms & Privacy Notice
		</p>
	</>
);

const StatCard = ({ label, value, description }: StatCardProps) => (
	<div className='space-y-1.5 sm:space-y-2 text-center sm:text-left border rounded-lg border-[#3C3C3C] p-4'>
		<div className='text-white/60 text-[10px] sm:text-xs font-medium tracking-wide'>
			{label}
		</div>
		<div className='text-white text-3xl sm:text-4xl font-bold'>{value}</div>
		<div className='text-white/60 text-xs sm:text-sm'>{description}</div>
	</div>
);

const StatsSection = () => (
	<div className='mt-12 sm:mt-16 md:mt-20 max-w-6xl mx-auto font-[family-name:var(--font-blauer-nue)]'>
		<div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8'>
			<div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-6'>
				<h2 className='text-white text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left'>
					Sell from day one - even with zero audience
				</h2>
				<button className='px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/30 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all whitespace-nowrap'>
					Open calculator
				</button>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
				{STATS_DATA.map((stat) => (
					<StatCard key={stat.label} {...stat} />
				))}
			</div>

			<div className='mt-6 sm:mt-8 bg-amber-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 overflow-hidden'>
				<div className='animate-scroll whitespace-nowrap'>
					<span className='text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl font-medium inline-block px-2 sm:px-4'>
						{SCROLLING_TEXT}
					</span>
					<span className='text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl font-medium inline-block px-2 sm:px-4'>
						{SCROLLING_TEXT}
					</span>
				</div>
			</div>
		</div>
	</div>
);

export default function HeroSection() {
	return (
		<div
			className='relative min-h-screen overflow-hidden'
			style={{
				backgroundImage: "url('/images/herobg.png')",
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}>
			<TopBadge />

			<div
				className='relative container mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-12 sm:pb-20'>
				<div className='max-w-4xl mx-auto text-center'>
					<Headline />
					<p className='text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2'>
						Create and sell courses, consulting services, and communities
						- with Zero marketing cost and a built-in sales network.
					</p>
					<EmailSignupForm />
				</div>

				<StatsSection />
			</div>
		</div>
	);
}
