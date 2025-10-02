import { ContactLink, NavigationLink, SocialLink } from '@/types';
import {
	Chrome,
	Facebook,
	Instagram,
	MessageCircle,
	Twitter,
} from 'lucide-react';
import Link from 'next/link';

// Constants
const ABOUT_LINKS: NavigationLink[] = [
	{ label: 'Resources', href: '#' },
	{ label: 'Company', href: '#' },
	{ label: 'Property', href: '#' },
	{ label: 'Contact Us', href: '#' },
];

const CONTACT_LINKS: ContactLink[] = [
	{
		label: 'hello.abc@gmail.com',
		href: 'mailto:hello.abc@gmail.com',
		type: 'email',
	},
	{ label: '+012233445667', href: 'tel:+012233445667', type: 'phone' },
];

const SOCIAL_LINKS: SocialLink[] = [
	{ name: 'Facebook', href: '#', icon: 'facebook' },
	{ name: 'Twitter', href: '#', icon: 'twitter' },
	{ name: 'Instagram', href: '#', icon: 'instagram' },
	{ name: 'WhatsApp', href: '#', icon: 'whatsapp' },
	{ name: 'Threads', href: '#', icon: 'threads' },
	{ name: 'TikTok', href: '#', icon: 'tiktok' },
];

// Sub-components
function FooterSection({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div>
			<h3 className='text-lg font-semibold mb-6'>{title}</h3>
			{children}
		</div>
	);
}

function NavigationList({ links }: { links: NavigationLink[] }) {
	return (
		<ul className='space-y-3'>
			{links.map((link) => (
				<li key={link.label}>
					<Link
						href={link.href}
						className='text-gray-300 hover:text-white transition-colors text-sm'>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	);
}

function ContactList({ contacts }: { contacts: ContactLink[] }) {
	return (
		<ul className='space-y-3'>
			{contacts.map((contact) => (
				<li key={contact.label}>
					<a
						href={contact.href}
						className='text-gray-300 hover:text-white transition-colors text-sm'>
						{contact.label}
					</a>
				</li>
			))}
		</ul>
	);
}

function SocialIcon({ icon }: { icon: SocialLink['icon'] }) {
	switch (icon) {
		case 'facebook':
			return <Facebook className='w-4 h-4' />;
		case 'twitter':
			return <Twitter className='w-4 h-4' />;
		case 'instagram':
			return <Instagram className='w-4 h-4' />;
		case 'whatsapp':
			return <MessageCircle className='w-4 h-4' />;
		case 'threads':
			return <Chrome className='w-4 h-4' />;
		case 'tiktok':
			return (
				<svg
					className='w-4 h-4'
					viewBox='0 0 24 24'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' />
				</svg>
			);
	}
}

function SocialLinks({ links }: { links: SocialLink[] }) {
	return (
		<div className='flex gap-3'>
			{links.map((social) => (
				<Link
					key={social.name}
					href={social.href}
					className='w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors'
					aria-label={social.name}>
					<SocialIcon icon={social.icon} />
				</Link>
			))}
		</div>
	);
}

function BackgroundText() {
	return (
		<div className='absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden'>
			<div className='text-[#3D2F44] font-bold leading-none tracking-tight'>
				<span className='block text-center pb-2 sm:pb-3 md:pb-4 text-[80px] xs:text-[100px] sm:text-[120px] md:text-[180px] lg:text-[240px] xl:text-[280px] 2xl:text-[320px]'>
					WiztecBD
				</span>
			</div>
		</div>
	);
}

function Copyright() {
	return (
		<div className='flex justify-end absolute right-6 bottom-18 lg:bottom-24'>
			<p className='text-gray-400 text-sm text-center'>
				© 2025 Havenix. All rights reserved.
			</p>
		</div>
	);
}

// Main Component
export default function Footer() {
	return (
		<footer className='relative bg-[#2B1F30] text-white overflow-hidden min-h-[650px]'>
			<div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-16'>
					<FooterSection title='About Us'>
						<NavigationList links={ABOUT_LINKS} />
					</FooterSection>

					<FooterSection title='Contact Us'>
						<ContactList contacts={CONTACT_LINKS} />
					</FooterSection>

					<FooterSection title='Follow Us'>
						<SocialLinks links={SOCIAL_LINKS} />
					</FooterSection>
				</div>
				<Copyright />
			</div>

			<BackgroundText />
		</footer>
	);
}
