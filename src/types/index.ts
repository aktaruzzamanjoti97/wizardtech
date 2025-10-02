export interface Tool {
	title: string;
	icon: string;
	description: string;
	link: string;
	bgColor: string;
}

export interface NavigationLink {
	label: string;
	href: string;
}

export interface ContactLink {
	label: string;
	href: string;
	type: 'email' | 'phone';
}

export interface SocialLink {
	name: string;
	href: string;
	icon:
		| 'facebook'
		| 'twitter'
		| 'instagram'
		| 'whatsapp'
		| 'threads'
		| 'tiktok';
}

export interface StatCardProps {
	label: string;
	value: string;
	description: string;
}

export interface SortOption {
	label: string;
	value: string;
}

export interface PropertyModalProps {
	isOpen: boolean;
	onClose: () => void;
	property: {
		images: string[];
		bedrooms: string;
		bathrooms: string;
		area: string;
		title: string;
		price: string;
		period: string;
		location: string;
	};
}

export interface Tab {
	icon: string;
	label: string;
	active: boolean;
}

export interface LogoItem {
	text: string;
	className: string;
	icon?: string;
	circleColor?: string;
}

export interface Testimonial {
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

export interface PropertyCardProps {
	image: string;
	images: string[];
	bedrooms: string;
	bathrooms: string;
	area: string;
	title: string;
	price: string;
	period: string;
	location: string;
	onClick: () => void;
}

export interface CheckboxItemProps {
	label: string;
	defaultChecked?: boolean;
}

export interface FilterSectionProps {
	title: string;
	children: React.ReactNode;
}
