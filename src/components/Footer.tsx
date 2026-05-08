import { useState } from "react"
import { Link } from "react-router-dom"

const IMG = "https://qa.groomit.me/v7/images"

const brandLogos = [
    { href: "https://www.forbes.com/sites/yolarobert1/2021/04/23/how-anna-zege-made-grooming-more-convenient-for-pet-owners-with-groomit/?sh=72d978581117", src: `${IMG}/home/forbes.png`, alt: "Forbes", width: 100, hideOnMobile: true },
    { href: "https://www.google.com/maps/place/GROOMIT+-+In-Home%2FMobile+Pet+Grooming+On+Demand/@40.9211298,-74.5596784,9z/data=!3m1!4b1!4m6!3m5!1s0x89c259618927841f:0x61a3bbaedbea24c6!8m2!3d40.9219696!4d-73.9003419!16s%2Fg%2F11hbghj4cb?entry=tts", src: `${IMG}/home/google-review.png`, alt: "Google Reviews", width: 80 },
    { href: "https://www.nbcnewyork.com/video/on-air/as-seen-on/on-demand-apps_new-york/1822072/", src: `${IMG}/home/nbc.png`, alt: "NBC", width: 43 },
    { href: "https://www.nytimes.com/2020/07/23/style/coronavirus-manicures-haircuts-tattoos-dog-groomer-at-home.html", src: `${IMG}/home/the-newyork.png`, alt: "New York Times", width: 228 },
    { href: "https://issuu.com/newyorklifestylesmagazine/docs/plm_mar19", src: `${IMG}/home/lifestyle.png`, alt: "New York Lifestyles", width: 170, hideOnMobile: true },
]

const socialLinks = [
    { href: "https://www.facebook.com/groomitapp/", src: `${IMG}/home/facebook-round.svg`, alt: "Facebook" },
    { href: "https://www.instagram.com/groomitapp/", src: `${IMG}/home/instagram-round.svg`, alt: "Instagram" },
    { href: "https://www.youtube.com/@groomitapp", src: `${IMG}/home/youtube-round.svg`, alt: "Youtube" },
    { href: "https://www.linkedin.com/company/groomit-llc/", src: `${IMG}/home/in-round.svg`, alt: "LinkedIn" },
    { href: "https://x.com/groomitapp", src: `${IMG}/home/x-round.svg`, alt: "X" },
]

const footerLinks = {
    About: [
        { label: "About Us", href: "/about-us" },
        { label: "Service & Pricing", href: "/pet-grooming-prices" },
        { label: "Recurring Booking", href: "/recurring-booking" },
        { label: "Location", href: "/service-areas" },
    ],
    "For Pet Owners": [
        { label: "Help Center", href: "/help" },
        { label: "Cancellation & Rescheduling Policy", href: "/customer-cancellation-policy" },
        { label: "Gift Card", href: "/user/gift-cards" },
        { label: "Our Blog", href: "https://blog.groomit.me/", external: true },
    ],
    Company: [
        { label: "Contact Us", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Investor Relations", href: "/investors" },
    ],
    "Groomer Partners": [
        { label: "Become a Groomer Partner", href: "/dog-groomer-jobs" },
        { label: "Mobile Van Partnership", href: "/mobile-van-groom" },
        { label: "Salon Partnership Program", href: "/salon-groom" },
    ],
}

function FooterLink({ href, external, children, className }: { href: string; external?: boolean; children: React.ReactNode; className?: string }) {
    if (external) {
        return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>
    }
    return <Link to={href} className={className}>{children}</Link>
}

function MobileAccordion({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
    const [open, setOpen] = useState(title === "About")

    return (
        <div className="border-b border-[#3A3A3A]">
            <button 
                className="w-full flex items-center justify-between py-4 bg-transparent border-0 cursor-pointer"
                onClick={() => setOpen(!open)} 
                type="button"
            >
                <span className="font-semibold text-white">{title}</span>
                <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`transition-transform ${open ? 'rotate-180' : ''}`}
                >
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </button>
            <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden flex flex-col gap-3">
                    {links.map((link) => (
                        <FooterLink key={link.label} href={link.href} external={link.external} className="text-white/70 text-sm no-underline">
                            {link.label}
                        </FooterLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A]">
            {/* Brand logos bar */}
            <div className="bg-[#2A2A2A] border-b border-[#3A3A3A]">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4 gap-4 overflow-x-auto">
                        {brandLogos.map((logo) => (
                            <a key={logo.alt} href={logo.href} target="_blank" rel="noopener noreferrer" className={`shrink-0 ${logo.hideOnMobile ? "hidden md:block" : "block"}`}>
                                <img src={logo.src} alt={logo.alt} width={logo.width} height={32} className="h-6 md:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="container mx-auto px-4 py-10 md:py-12">
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Left: Help section */}
                    <div className="flex flex-col items-center md:items-start w-full md:w-[260px] shrink-0">
                        <h3 className="font-semibold text-2xl text-white">Need help?</h3>
                        <p className="text-white/80 text-sm mt-1">Get support in minutes</p>

                        <a href="mailto:help@groomit.me" className="no-underline mt-5 w-full max-w-[220px]">
                            <button className="text-[#FF385C] font-semibold text-sm bg-white flex items-center justify-center gap-2 cursor-pointer w-full rounded-xl py-3 hover:bg-gray-50 transition-colors">
                                <img src={`${IMG}/home/mail-red.svg`} width={20} height={20} alt="" />
                                help@groomit.me
                            </button>
                        </a>

                        <a href="tel:+18883967170" className="flex items-center gap-2 font-semibold text-white no-underline mt-4">
                            <img src={`${IMG}/webapp/icons/call-white.svg`} height={20} width={20} alt="" />
                            +1(888) 396 7170
                        </a>
                        <p className="text-white/60 text-sm mt-1">
                            Call Us 8am to 8pm EST
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3 mt-5">
                            {socialLinks.map((social) => (
                                <a key={social.alt} target="_blank" href={social.href} rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                    <img src={social.src} alt={social.alt} width={36} height={36} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop footer links */}
                    <div className="hidden md:grid md:grid-cols-4 gap-8 flex-1">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="flex flex-col gap-3">
                                <h4 className="font-semibold text-white text-sm">{title}</h4>
                                {links.map((link) => (
                                    <FooterLink key={link.label} href={link.href} external={"external" in link ? link.external : false} className="text-white/70 hover:text-white text-sm no-underline transition-colors">
                                        {link.label}
                                    </FooterLink>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Mobile accordion */}
                    <div className="md:hidden">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <MobileAccordion key={title} title={title} links={links} />
                        ))}
                    </div>
                </div>

                {/* Bottom border */}
                <div className="border-t border-[#3A3A3A] my-8" />

                {/* Bottom links */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm">
                        <Link className="text-white/70 hover:text-white no-underline" to="/terms">Terms</Link>
                        <span className="text-white/30">|</span>
                        <Link className="text-white/70 hover:text-white no-underline" to="/terms-privacy">Privacy</Link>
                        <span className="text-white/30">|</span>
                        <Link className="text-white/70 hover:text-white no-underline" to="/terms-privacy#cookies-policy">Cookies</Link>
                        <span className="text-white/30">|</span>
                        <Link className="text-white/70 hover:text-white no-underline" to="/accessibility">Accessibility</Link>
                    </div>
                    <p className="text-white/60 text-sm">
                        &copy;2026 Groomit, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
