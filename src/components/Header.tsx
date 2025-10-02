'use client';

import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';

const MENU_ITEMS = [
	{ id: 'buy', label: 'Buy' },
	{ id: 'rent', label: 'Rent' },
	{ id: 'sell', label: 'Sell' },
	{ id: 'agents', label: 'Agents' },
	{ id: 'blogs', label: 'Blogs' },
	{ id: 'contact', label: 'Contact Us' },
] as const;

export default function Header() {
	const [activeMenu, setActiveMenu] = useState<string>('buy');

	return (
		<header>
			<div className='container mx-auto px-4 py-4'>
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<Link href='/' className='flex items-center gap-2'>
						<Image
							src='/images/wiztechLogo.png'
							alt='WiztecBD Logo'
							width={30}
							height={30}
						/>
						<span className='text-[26.83px] font-semibold text-[#6C0443] font-[family-name:var(--font-alexandria)]'>
							WiztecBD
						</span>
					</Link>

					{/* Navigation */}
					<nav className='hidden lg:flex items-center gap-8'>
						{MENU_ITEMS.map((item) => (
							<button
								key={item.id}
								onClick={() => setActiveMenu(item.id)}
								className={`text-lg font-semibold transition-colors ${
									activeMenu === item.id
										? 'text-[#59344F]'
										: 'text-gray-700 hover:text-gray-900'
								}`}>
								{item.label}
							</button>
						))}
					</nav>

					{/* Actions */}
					<div className='flex items-center gap-4'>
						<button className='flex items-center gap-2 text-[#434953] hover:text-gray-900 transition-colors text-base'>
							<Heart className='w-4 h-4' />
							<span className='hidden sm:inline'>Favourite</span>
						</button>
						<Link href='/login'>
							<Button className='bg-[#59344F] hover:bg-[#6B1F78]/90 text-white rounded-full px-6 w-[105px] h-[46px]'>
								Login Now
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
