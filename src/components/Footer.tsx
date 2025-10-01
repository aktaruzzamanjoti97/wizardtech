import {
	Chrome,
	Facebook,
	Instagram,
	MessageCircle,
	Twitter,
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='relative bg-[#2B1F30] text-white overflow-hidden min-h-[650px]'>
			{/* Main Footer Content */}
			<div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-16'>
					{/* About Us Section */}
					<div>
						<h3 className='text-lg font-semibold mb-6'>About Us</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='#'
									className='text-gray-300 hover:text-white transition-colors text-sm'>
									Resources
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-300 hover:text-white transition-colors text-sm'>
									Company
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-300 hover:text-white transition-colors text-sm'>
									Property
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-300 hover:text-white transition-colors text-sm'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Us Section */}
					<div>
						<h3 className='text-lg font-semibold mb-6'>Contact Us</h3>
						<ul className='space-y-3'>
							<li>
								<a
									href='mailto:hello.abc@gmail.com'
									className='text-gray-300 hover:text-white transition-colors text-sm'>
									hello.abc@gmail.com
								</a>
							</li>
							<li>
								<a
									href='tel:+012233445667'
									className='text-gray-300 hover:text-white transition-colors text-sm'>
									+012233445667
								</a>
							</li>
						</ul>
					</div>

					{/* Follow Us Section */}
					<div>
						<h3 className='text-lg font-semibold mb-6'>Follow Us</h3>
						<div className='flex gap-3'>
							<Link
								href='#'
								className='w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors'
								aria-label='Facebook'>
								<Facebook className='w-4 h-4' />
							</Link>
							<Link
								href='#'
								className='w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors'
								aria-label='Twitter'>
								<Twitter className='w-4 h-4' />
							</Link>
							<Link
								href='#'
								className='w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors'
								aria-label='Instagram'>
								<Instagram className='w-4 h-4' />
							</Link>
							<Link
								href='#'
								className='w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors'
								aria-label='WhatsApp'>
								<MessageCircle className='w-4 h-4' />
							</Link>
							<Link
								href='#'
								className='w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors'
								aria-label='Threads'>
								<Chrome className='w-4 h-4' />
							</Link>
							<Link
								href='#'
								className='w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors'
								aria-label='TikTok'>
								<svg
									className='w-4 h-4'
									viewBox='0 0 24 24'
									fill='currentColor'
									xmlns='http://www.w3.org/2000/svg'>
									<path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' />
								</svg>
							</Link>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='flex justify-end'>
					<p className='text-gray-400 text-sm text-center'>
						© 2025 Havenix. All rights reserved.
					</p>
				</div>
			</div>

			{/* Large Background Text */}
			<div className='absolute bottom-0 left-0 right-0 pointer-events-none select-none'>
				<div className='text-[#3D2F44] font-bold leading-none tracking-tight whitespace-nowrap'>
					<span className='text-[180px] lg:text-[280px] xl:text-[320px] block text-center pb-4'>
						WiztecBD
					</span>
				</div>
			</div>
		</footer>
	);
}
