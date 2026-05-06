import { useState } from "react"

const IMG_BASE = "https://raj.dev.groomit.me"

const brandLogos = [
    { href: "https://www.forbes.com/sites/yolarobert1/2021/04/23/how-anna-zege-made-grooming-more-convenient-for-pet-owners-with-groomit/?sh=72d978581117", src: `${IMG_BASE}/v7/images/home/forbes.png`, alt: "Forbes", width: 100, hideOnMobile: true },
    { href: "https://www.google.com/maps/place/GROOMIT+-+In-Home%2FMobile+Pet+Grooming+On+Demand/@40.9211298,-74.5596784,9z/data=!3m1!4b1!4m6!3m5!1s0x89c259618927841f:0x61a3bbaedbea24c6!8m2!3d40.9219696!4d-73.9003419!16s%2Fg%2F11hbghj4cb?entry=tts", src: `${IMG_BASE}/v7/images/home/google-review.png`, alt: "Google Reviews", width: 80 },
    { href: "https://www.nbcnewyork.com/video/on-air/as-seen-on/on-demand-apps_new-york/1822072/", src: `${IMG_BASE}/v7/images/home/nbc.png`, alt: "NBC", width: 43 },
    { href: "https://www.nytimes.com/2020/07/23/style/coronavirus-manicures-haircuts-tattoos-dog-groomer-at-home.html", src: `${IMG_BASE}/v7/images/home/the-newyork.png`, alt: "New York Times", width: 228 },
    { href: "https://issuu.com/newyorklifestylesmagazine/docs/plm_mar19", src: `${IMG_BASE}/v7/images/home/lifestyle.png`, alt: "New York Lifestyles", width: 170, hideOnMobile: true },
]

const socialLinks = [
    { href: "https://www.facebook.com/groomitapp/", src: `${IMG_BASE}/v7/images/home/facebook-round.svg`, alt: "Facebook" },
    { href: "https://www.instagram.com/groomitapp/", src: `${IMG_BASE}/v7/images/home/instagram-round.svg`, alt: "Instagram" },
    { href: "https://www.youtube.com/@groomitapp", src: `${IMG_BASE}/v7/images/home/youtube-round.svg`, alt: "Youtube" },
    { href: "https://www.linkedin.com/company/groomit-llc/", src: `${IMG_BASE}/v7/images/home/in-round.svg`, alt: "LinkedIn" },
    { href: "https://x.com/groomitapp", src: `${IMG_BASE}/v7/images/home/x-round.svg`, alt: "X" },
]

const footerLinks = {
    About: [
        { label: "About Us", href: "/about-us" },
        { label: "Service & Pricing", href: "/pet-grooming-prices" },
        { label: "Recurring Booking", href: "/recurring-booking" },
        { label: "Locations", href: "/service-areas" },
    ],
    "For Pet Owners": [
        { label: "Help Center", href: "/help" },
        { label: "Cancellation & Rescheduling Policy", href: "/customer-cancellation-policy" },
        { label: "Gift Cards", href: "/user/gift-cards" },
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

function MobileAccordion({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
    const [open, setOpen] = useState(title === "About")

    return (
        <div className="bg-transparent border-0">
            <h2>
                <button
                    className="custom-toggle"
                    onClick={() => setOpen(!open)}
                    type="button"
                >
                    <span className="ff-inter-semibold fs-16-h4 text-white">{title}</span>
                </button>
            </h2>
            {open && (
                <div className="custom-body ff-inter-regular-400 fs-16-h4">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            className="text-white no-underline leading-none"
                            href={link.href}
                            {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export default function Footer() {
    return (
        <div className="footer-new-bg p-0">
            {/* Brand logos bar */}
            <div className="footer-topnew-bg">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between py-3 md:py-4 items-center">
                        {brandLogos.map((logo) => (
                            <a
                                key={logo.alt}
                                href={logo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={logo.hideOnMobile ? "hidden md:block" : "block"}
                            >
                                <img src={logo.src} alt={logo.alt} width={logo.width} height={40} className="mt-0 md:mt-3" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="container mx-auto px-4 footer-50px">
                <div className="flex flex-col md:flex-row">
                    {/* Left: Help section */}
                    <div className="flex flex-col items-center md:items-start w-full md:w-288px mx-auto md:mx-0">
                        <div className="ff-inter-semibold text-white fs-32px">Need help?</div>
                        <div className="text-white ff-inter-regular-400 fs-16-h4">Get support in minutes</div>

                        <a href="https://groomit.me/help" className="no-underline mt-20-px w-full max-w-[240px]">
                            <button className="font-red-i ff-inter-semibold fs-16 border-0 bg-groomit-red text-white flex items-center justify-center cursor-pointer w-full rounded-xl py-3 hover:bg-[#E62E4F] transition-colors">
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                Chat with us
                            </button>
                        </a>

                        <a href="mailto:help@groomit.me" className="no-underline mt-10-px w-full max-w-[240px]">
                            <button className="font-red-i ff-inter-semibold fs-16 red-button-footer border border-[#E5E7EB] bg-white flex items-center justify-center cursor-pointer w-full rounded-xl py-3 hover:bg-gray-50 transition-colors">
                                <img src={`${IMG_BASE}/v7/images/home/mail-red.svg`} width={24} height={24} alt="Mail" className="mr-2" />
                                help@groomit.me
                            </button>
                        </a>

                        <div className="flex justify-center mt-10-px">
                            <a href="tel:+18883967170" className="flex ff-inter-semibold fs-16 mt-10-px text-white no-underline">
                                <img src={`${IMG_BASE}/v7/images/webapp/icons/call-white.svg`} height={24} width={24} alt="Call to Book" className="mr-2" />
                                +1(888) 396 7170
                            </a>
                        </div>
                        <div className="flex justify-center mt-10-px text-white fs-16-h4 ff-inter-regular-400">
                            Call Us During 9am to 8pm EST
                        </div>

                        {/* Social links */}
                        <div className="flex gap-10-px justify-center mt-20-px">
                            {socialLinks.map((social) => (
                                <a key={social.alt} target="_blank" href={social.href} rel="noopener noreferrer">
                                    <img src={social.src} alt={social.alt} width={43} height={43} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop footer links */}
                    <div className="hidden md:flex justify-between pl-30-px w-full">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="flex flex-col footer-links ff-inter-regular-400 fs-16-h4 gap-14-px">
                                <h4 className="ff-inter-semibold leading-none text-white fs-16-h4">{title}</h4>
                                {links.map((link) => (
                                    <a
                                        key={link.label}
                                        className="text-white no-underline leading-none"
                                        href={link.href}
                                        {...("external" in link && link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Mobile accordion */}
                    <div className="md:hidden mt-20-px">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <MobileAccordion key={title} title={title} links={links} />
                        ))}
                    </div>
                </div>

                {/* Bottom border */}
                <div className="footer-bottom-border w-full"></div>

                {/* Bottom links */}
                <div className="flex flex-col md:flex-row justify-between items-center px-0 md:px-0 text-center">
                    <div className="footer-links-bottom ff-inter-regular-400 fs-16-h4">
                        <a className="text-white no-underline" href="/terms">Terms of Service</a>
                        <span className="text-gray-500">|</span>
                        <a className="text-white no-underline" href="/terms-privacy">Privacy Policy</a>
                        <span className="text-gray-500">|</span>
                        <a className="text-white no-underline" href="/terms-privacy#cookies-policy">Cookies Policy</a>
                        <span className="text-gray-500">|</span>
                        <a className="text-white no-underline" href="/terms-privacy#acceptable-use-of-policy">Acceptable Use of Policy</a>
                        <span className="text-gray-500">|</span>
                        <a className="text-white no-underline" href="/accessibility">Accessibility</a>
                    </div>
                    <div className="ff-inter-regular-400 fs-16-h4 text-white mt-3 md:mt-0">
                        &copy;2026 Groomit, Inc. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}
