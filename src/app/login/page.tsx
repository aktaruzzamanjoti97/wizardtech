'use client';

import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const LoginPage = () => {
	const [showEmailForm, setShowEmailForm] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className='min-h-screen flex'>
			{/* Left Side - Login Form */}
			<div className='w-full lg:w-1/2 flex items-center justify-center p-8 bg-white'>
				<div className='w-full max-w-md space-y-8'>
					{/* Logo */}
					<div className='flex items-center justify-center gap-2 mb-2'>
						<div className='w-8 h-8  rounded-md flex items-center justify-center'>
							<Image
								src='/images/wiztechLogo.png'
								alt='wiztech logo'
								width={36}
								height={30}
								className='h-[30px]'
							/>
						</div>
						<span className='text-[26px] font-bold text-[#6C0443] font-[family-name:var(--font-alexandria)]'>
							WiztecBD
						</span>
					</div>

					{/* Header */}
					<div>
						<h1 className='text-[32px] font-black text-gray-900 mb-1 text-center'>
							{showEmailForm ? 'Wellcome Back' : 'Create New Account'}
						</h1>
						<p className='text-black text-[16px] font-medium text-center'>
							{`Let's login to grab amazing deal`}
						</p>
					</div>

					{!showEmailForm ? (
						<>
							{/* Social Login Buttons */}
							<div className='space-y-3'>
								<Button
									variant='outline'
									className='w-full flex items-center justify-center gap-3 h-12 text-base text-[#42526D]'>
									<Image
										src='/images/google.png'
										alt='google'
										width={25}
										height={25}
									/>
									Continue with Google
								</Button>

								<Button
									variant='outline'
									className='w-full flex items-center justify-center gap-3 h-12 text-base text-[#42526D]'>
									<Image
										src='/images/apple.png'
										alt='google'
										width={25}
										height={25}
									/>
									Continue with Apple
								</Button>

								<Button
									variant='outline'
									onClick={() => setShowEmailForm(true)}
									className='w-full flex items-center justify-center gap-3 h-12 text-base text-[#42526D]'>
									<Image
										src='/images/email.png'
										alt='google'
										width={25}
										height={25}
									/>
									Continue with Email/Phone
								</Button>
							</div>

							{/* Sign In Link */}
							<div className='text-center'>
								<span className='text-black'>
									Dont have an account?{' '}
								</span>
								<a
									href='#'
									className='text-[#59344F] hover:underline font-medium'>
									Sign Up
								</a>
							</div>
						</>
					) : (
						<>
							{/* Social Login Buttons */}
							<div className='space-y-3'>
								<Button
									variant='outline'
									className='w-full flex items-center justify-center gap-3 h-12 text-base text-[#42526D]'>
									<Image
										src='/images/google.png'
										alt='google'
										width={25}
										height={25}
									/>
									Continue with Google
								</Button>

								<Button
									variant='outline'
									className='w-full flex items-center justify-center gap-3 h-12 text-base text-[#42526D]'>
									<Image
										src='/images/apple.png'
										alt='google'
										width={25}
										height={25}
									/>
									Continue with Apple
								</Button>
							</div>

							{/* Divider */}
							<div className='relative'>
								<div className='absolute inset-0 flex items-center'>
									<div className='w-full border-t border-gray-200'></div>
								</div>
								<div className='relative flex justify-center text-sm'>
									<span className='px-4 bg-white text-gray-500'>
										Or
									</span>
								</div>
							</div>

							{/* Email/Password Form */}
							<div className='space-y-4'>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Email
									</label>
									<input
										type='email'
										placeholder='rownok@gmail.com'
										className='w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
									/>
								</div>

								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Password
									</label>
									<div className='relative'>
										<input
											type={showPassword ? 'text' : 'password'}
											placeholder='************'
											className='w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
										/>
										<button
											type='button'
											onClick={() => setShowPassword(!showPassword)}
											className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'>
											{showPassword ? (
												<EyeOff className='w-5 h-5' />
											) : (
												<Eye className='w-5 h-5' />
											)}
										</button>
									</div>
								</div>

								<div className='flex items-center justify-between'>
									<label className='flex items-center gap-2'>
										<input
											type='checkbox'
											className='w-4 h-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500'
										/>
										<span className='text-sm text-gray-600'>
											Remember me
										</span>
									</label>
									<a
										href='#'
										className='text-sm text-gray-900 hover:underline'>
										Forgot Password?
									</a>
								</div>

								<Button className='w-full h-12 bg-pink-700 hover:bg-pink-800 text-white rounded-lg text-base font-medium'>
									Login
								</Button>
							</div>

							{/* Sign Up Link */}
							<div className='text-center'>
								<span className='text-gray-600'>
									Don't have an account?{' '}
								</span>
								<a
									href='#'
									className='text-blue-600 hover:underline font-medium'>
									Sign Up
								</a>
							</div>
						</>
					)}
				</div>
			</div>

			{/* Right Side - Hero Image */}
			<div className='hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden p-8'>
				<div className='absolute inset-8 rounded-[80px] overflow-hidden '>
					<Image
						src='/images/wiztechlogin2.png'
						width={760}
						height={10}
						alt='hero image'
						className='w-[850px] h-[860px]'
					/>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
