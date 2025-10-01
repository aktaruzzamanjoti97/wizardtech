'use client';

import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Header() {
	const [activeMenu, setActiveMenu] = useState('buy');

	return (
		<header className=''>
			<div className='container mx-auto px-4 py-4'>
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<Link href='/' className='flex items-center gap-2'>
						<Image
							src='/images/wiztechLogo.png'
							alt=''
							width={30}
							height={30}
						/>
						<span className='text-[26.83px] font-semibold text-[#6C0443] font-[family-name:var(--font-alexandria)]'>
							WiztecBD
						</span>
					</Link>

					{/* Navigation */}
					<nav className='hidden md:flex items-center gap-8'>
						<button
							onClick={() => setActiveMenu('buy')}
							className={`text-lg font-semibold transition-colors ${
								activeMenu === 'buy'
									? 'text-[#59344F]'
									: 'text-gray-700 hover:text-gray-900'
							}`}>
							Buy
						</button>
						<button
							onClick={() => setActiveMenu('rent')}
							className={`text-lg font-semibold transition-colors ${
								activeMenu === 'rent'
									? 'text-[#59344F]'
									: 'text-gray-700 hover:text-gray-900'
							}`}>
							Rent
						</button>
						<button
							onClick={() => setActiveMenu('sell')}
							className={`text-lg font-semibold transition-colors ${
								activeMenu === 'sell'
									? 'text-[#59344F]'
									: 'text-gray-700 hover:text-gray-900'
							}`}>
							Sell
						</button>
						<button
							onClick={() => setActiveMenu('agents')}
							className={`text-lg font-semibold transition-colors ${
								activeMenu === 'agents'
									? 'text-[#59344F]'
									: 'text-gray-700 hover:text-gray-900'
							}`}>
							Agents
						</button>
						<button
							onClick={() => setActiveMenu('blogs')}
							className={`text-lg font-semibold transition-colors ${
								activeMenu === 'blog'
									? 'text-[#59344F]'
									: 'text-gray-700 hover:text-gray-900'
							}`}>
							Blogs
						</button>
						<button
							onClick={() => setActiveMenu('contact')}
							className={`text-lg font-semibold transition-colors ${
								activeMenu === 'contact'
									? 'text-[#59344F]'
									: 'text-gray-700 hover:text-gray-900'
							}`}>
							Contact Us
						</button>
					</nav>

					{/* Actions */}
					<div className='flex items-center gap-4'>
						<button className='flex items-center gap-2  text-[#434953] hover:text-gray-900 transition-colors text-base'>
							<Heart className='w-4 h-4' />
							<span className='hidden sm:inline'>Favourite</span>
						</button>
						<Button className='bg-[#59344F] hover:bg-[#6B1F78]/90 text-white rounded-full px-6 w-[105px] h-[46px]'>
							Login Now
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
