const IMG_BASE = "https://raj.dev.groomit.me"

export default function HeroBanner() {
  return (
    <section className="container mx-auto px-4 pt-4 md:pt-6">
      {/* Desktop View */}
      <div className="relative hidden md:block rounded-3xl overflow-hidden">
        {/* Background Image with gradient overlay for better text contrast */}
        <div className="relative">
          <img
            src={`${IMG_BASE}/v7/images/home/home-banner-web.webp`}
            alt="Professional mobile pet grooming service - dog being groomed in a mobile spa van"
            className="w-full h-auto object-cover"
            width={1125}
            height={465}
            fetchPriority="high"
            decoding="sync"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="p-8 lg:p-12 xl:p-16 max-w-xl lg:max-w-2xl">
            {/* Trust Badge - Above headline for immediate credibility */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-sm font-medium">4.8 Rating</span>
              <span className="text-white/60">|</span>
              <span className="text-white text-sm font-medium">45K+ Reviews</span>
            </div>
            
            {/* Main Headline - SEO optimized with target keywords */}
            <h1 className="text-white font-heading font-semibold text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
              Mobile Pet Grooming
              <span className="block text-white/90">On Demand</span>
            </h1>
            
            {/* Subheadline - Value proposition */}
            <p className="text-white/90 text-lg lg:text-xl mt-5 leading-relaxed max-w-md">
              Top-rated pet groomers near you. See real-time availability and book instantly.
              <span className="font-medium"> No calls. No waiting.</span>
            </p>
            
            {/* Primary CTA - High contrast, prominent */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/guest/booking/start" className="inline-block">
                <button className="bg-groomit-red hover:bg-[#E62E4F] text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                  Book Now - It&apos;s Free
                </button>
              </a>
              <a href="/pet-grooming-prices" className="inline-flex items-center justify-center gap-2 text-white font-medium hover:text-white/80 transition-colors py-4 px-6">
                See Prices
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Social Proof - Key stats */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <img 
                  src={`${IMG_BASE}/v7/images/home/pet-paws.svg`} 
                  alt="" 
                  width={20} 
                  height={20}
                  aria-hidden="true"
                />
                <span className="text-white font-medium">179K+ Pets Groomed</span>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src={`${IMG_BASE}/v7/images/home/flash.svg`} 
                  alt="" 
                  width={20} 
                  height={20}
                  aria-hidden="true"
                />
                <span className="text-white font-medium">Same Day Booking</span>
              </div>
            </div>
            
            {/* Reassurance text */}
            <p className="text-white/70 text-sm mt-4">
              Real online booking. Confirmed in minutes. No credit card required.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View - Optimized for thumb-zone CTA */}
      <div className="relative md:hidden rounded-2xl overflow-hidden">
        <div className="relative">
          <img
            src={`${IMG_BASE}/v7/images/home/hero-mobile.webp`}
            alt="Professional mobile pet grooming service"
            className="w-full h-auto object-cover min-h-[480px]"
            fetchPriority="high"
            decoding="sync"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          {/* Top content */}
          <div className="text-center pt-4">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-xs font-medium">4.8 | 45K+ Reviews</span>
            </div>
            
            <h1 className="text-white font-heading font-semibold text-3xl leading-tight tracking-tight">
              Mobile Pet Grooming
              <span className="block text-white/90">On Demand</span>
            </h1>
            
            <p className="text-white/90 text-base mt-3 leading-relaxed px-4">
              Top-rated groomers near you. Book instantly. No calls needed.
            </p>
          </div>
          
          {/* Bottom content - CTA in thumb zone */}
          <div className="space-y-4 pb-2">
            {/* Social proof */}
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <img src={`${IMG_BASE}/v7/images/home/pet-paws.svg`} alt="" width={16} height={16} aria-hidden="true" />
                <span className="text-white font-medium">179K+ Pets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <img src={`${IMG_BASE}/v7/images/home/flash.svg`} alt="" width={16} height={16} aria-hidden="true" />
                <span className="text-white font-medium">Same Day</span>
              </div>
            </div>
            
            {/* Primary CTA */}
            <a href="/guest/booking/start" className="block">
              <button className="w-full bg-groomit-red hover:bg-[#E62E4F] text-white font-semibold text-lg py-4 rounded-xl transition-all duration-200 shadow-lg">
                Book Now - It&apos;s Free
              </button>
            </a>
            
            <p className="text-white/60 text-xs text-center">
              Confirmed in minutes. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
