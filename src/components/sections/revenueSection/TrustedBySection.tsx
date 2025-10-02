import { LogoItem } from '@/types';

const LOGOS: LogoItem[] = [
	{
		text: 'LEVELS',
		className:
			'text-gray-400 text-xl md:text-2xl lg:text-3xl font-light tracking-wider',
	},
	{
		text: 'KODNET',
		className: 'text-gray-500 text-xl md:text-2xl lg:text-3xl font-bold',
	},
	{
		text: 'UiA',
		className: 'text-gray-500 text-lg md:text-xl lg:text-2xl font-semibold',
		icon: '🏛️',
	},
	{
		text: 'PlannIT',
		className: 'text-gray-500 text-xl md:text-2xl lg:text-3xl font-semibold',
	},
	{
		text: 'NORWEGIAN HANDBALL',
		className: 'text-gray-400 text-sm md:text-base lg:text-xl tracking-wide',
	},
	{
		text: 'NORWEGIAN BRIDGE',
		className: 'text-gray-400 text-sm md:text-base lg:text-xl',
	},
	{
		text: 'ERMO 3D',
		className: 'text-gray-400 text-lg md:text-xl lg:text-2xl font-light',
		icon: '🏔️',
		circleColor: 'bg-red-600',
	},
];

function LogoSet() {
	return (
		<div className='inline-flex items-center gap-6 md:gap-8 lg:gap-12 px-4 md:px-6'>
			{LOGOS.map((logo, index) => (
				<LogoItemSingle key={index} {...logo} />
			))}
		</div>
	);
}

function LogoItemSingle({ text, className, icon, circleColor }: LogoItem) {
	if (icon && circleColor) {
		return (
			<div className='inline-flex items-center gap-2'>
				<div
					className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${circleColor} flex items-center justify-center`}>
					<span className='text-white text-base md:text-xl'>{icon}</span>
				</div>
				<span className={className}>{text}</span>
			</div>
		);
	}

	if (icon) {
		return (
			<div className={`${className} inline-flex items-center gap-2`}>
				<span className='text-lg md:text-xl lg:text-2xl'>{icon}</span>
				<span>{text}</span>
			</div>
		);
	}

	return <div className={className}>{text}</div>;
}

export default function TrustedBySection() {
	return (
		<div className='text-center mb-12 md:mb-16'>
			<p className='text-gray-600 text-xs md:text-2xl font-medium mb-6 md:mb-8 tracking-wide'>
				TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
			</p>
			<div className='overflow-hidden opacity-40'>
				<div className='animate-scroll-logos whitespace-nowrap inline-flex bg-[#F6F5F5] shadow-2xl'>
					<LogoSet />
					<LogoSet />
				</div>
			</div>
		</div>
	);
}
