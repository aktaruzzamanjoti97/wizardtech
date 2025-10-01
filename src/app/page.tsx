import EssentialToolsSection from '@/components/EssentialToolsSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PropertyFilter from '@/components/PropertyFilter';
import PropertyGrid from '@/components/PropertyGrid';
import RevenueSection from '@/components/RevenueSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
	return (
		<div>
			<Header />
			<PropertyFilter />
			<PropertyGrid />
			<HeroSection />
			<RevenueSection />
			<TestimonialSection />
			<EssentialToolsSection />
			<Footer />
		</div>
	);
}
