import { useState, useRef, useEffect } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [supportOpen, setSupportOpen] = useState(false);
    const profileRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
                setProfileOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        function handleScroll() {
            if (menuOpen) setMenuOpen(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]);

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky top-0 z-50 bg-white pb-0 border-b border-[#E4E4E8]" id="navbarGroo">
                <div className="container-fluid container-fluidNav flex items-center">
                    <div className="container container-header w-full mx-auto px-4">

                        {/* Mobile top bar */}
                        <div className="flex flex-row-reverse items-center justify-between w-full lg:hidden py-2">
                            <div className="flex items-center gap-4 justify-between">
                                <div className="flex items-center gap-2 w-full">
                                    <img src="https://raj.dev.groomit.me/v7/images/home/star-orange.svg" width={21} height={21} alt="Star" />
                                    <a href="/reviews" className="text-black no-underline">
                                        <div className="ff-inter-bold fs-16-h4">4.9 (42.8K)</div>
                                    </a>
                                </div>
                                <button
                                    className="navbar-toggler navbar-toggler-mobile p-2 bg-transparent border-0 cursor-pointer"
                                    type="button"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded={menuOpen}
                                    aria-label="Toggle navigation"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        {menuOpen ? (
                                            <path d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path d="M3 12h18M3 6h18M3 18h18" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                            <a className="lg:hidden m-0 nav-logo-mobile" href="/">
                                <img className="lazyload" src="https://raj.dev.groomit.me/v7/images/home/groomit-logo.svg" width={150} height={49} alt="Groomit.me Logo" />
                            </a>
                        </div>

                        {/* Collapsible nav */}
                        <div className={`${menuOpen ? "block" : "hidden"} lg:flex w-full justify-between items-center`} id="navbarSupportedContent">
                            <div className="flex items-center">
                                <a className="hidden lg:flex mr-12.5 shrink-0" href="/">
                                    <img loading="lazy" src="https://raj.dev.groomit.me/v7/images/home/groomit-logo.svg" width={150} height={49} alt="Groomit Logo" />
                                </a>
                                <ul className="navbar-nav me-auto mb-2 lg:mb-0 flex flex-col lg:flex-row items-start lg:items-center w-full gap-4 list-none m-0 p-0">
                                    <li className="nav-item flex lg:hidden w-full justify-between py-2">
                                        <div className="flex">
                                            <h2 className="groomit__h2 groomit__h2--inMenu text-lg font-semibold m-0">{"In-Home & Mobile"}<br />Pet Grooming</h2>
                                        </div>
                                        <div className="flex ml-auto">
                                            <a href="/guest/download-app" className="bg-black groomit__button inline-block services-available__bookButton text-white px-5 py-2.5 rounded-full text-sm font-semibold no-underline">
                                                Book Now
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link groomit__a groomit__a--navLink no-underline text-black hover:text-[#FF385C] transition-colors text-sm font-medium" href="/pet-grooming-prices">{"Service & Pricing"}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link groomit__a groomit__a--navLink no-underline text-black hover:text-[#FF385C] transition-colors text-sm font-medium" href="/recurring-booking">Recurring Booking</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link groomit__a groomit__a--navLink no-underline text-black hover:text-[#FF385C] transition-colors text-sm font-medium" href="/location">Locations</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link groomit__a groomit__a--navLink no-underline text-black hover:text-[#FF385C] transition-colors text-sm font-medium" target="_blank" rel="noreferrer" href="https://blog.groomit.me/">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link groomit__a groomit__a--navLink no-underline text-black hover:text-[#FF385C] transition-colors text-sm font-medium" href="/dog-groomer-jobs">Join Groomit</a>
                                    </li>
                                    {/* Mobile-only auth links */}
                                    <li className="nav-item block md:hidden">
                                        <a className="nav-link groomit__a groomit__a--navLink no-underline text-black text-sm font-medium" href="/user/log-in">Log In</a>
                                    </li>
                                    <li className="nav-item block md:hidden">
                                        <a className="nav-link groomit__a groomit__a--navLink no-underline text-black text-sm font-medium" href="/guest/signup/start">Sign Up</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Right side: rating + Book Now + Profile + Support */}
                            <div className="hidden lg:flex cont-menu-log-prof gap-3 items-center shrink-0">
                                <div className="flex items-center gap-2">
                                    <img src="https://raj.dev.groomit.me/v7/images/home/star-orange.svg" width={21} height={21} alt="Star" />
                                    <a href="/reviews" className="text-black no-underline">
                                        <div className="ff-inter-bold fs-16-h4 whitespace-nowrap">4.9 (42.8K)</div>
                                    </a>
                                </div>
                                <ul className="hidden lg:flex groomit__dropdownCont list-none p-0 m-0 items-center gap-1">
                                    <li className="nav-item mr-1.25">
                                        <a href="/guest/booking/start" className="bg-black groomit__button inline-block services-available__bookButton text-white px-5 py-2.5 rounded-full text-sm font-semibold no-underline whitespace-nowrap hover:bg-gray-800 transition-colors">
                                            Book Now
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown groomit__dropdown rounded-2xl border border-[#E4E4E8] relative" ref={profileRef}>
                                        <button
                                            className="nav-link dropdown-toggle flex items-center gap-1 px-3 py-2 bg-white cursor-pointer border-0 rounded-2xl"
                                            onClick={() => setProfileOpen(!profileOpen)}
                                            aria-expanded={profileOpen}
                                        >
                                            <img className="imagethum__75 mr-0.75 object-cover rounded-full" src="https://raj.dev.groomit.me/v7/images/icons/profile-circle.svg" width={30} height={30} alt="Profile" />
                                            <img className={`transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`} src="https://raj.dev.groomit.me/v7/images/icons/polygon.svg" width={11} height={7} alt="" />
                                        </button>
                                        {profileOpen && (
                                            <ul className="dropdown-menu groomit__dropdown-menu absolute right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-gray-200 min-w-55 py-1 z-50 list-none p-0">
                                                <li>
                                                    <a className="dropdown-item groomit__dropdown-menu__a flex items-center justify-between px-4 py-2.5 no-underline text-black hover:bg-gray-50 transition-colors text-sm" href="/user/log-in">
                                                        <span className="flex items-center gap-2">
                                                            <img className="me-2" src="https://raj.dev.groomit.me/v7/images/icons/user-log-in.svg" width={20} height={20} alt="Log In" /> Log in
                                                        </span>
                                                        <img src="https://raj.dev.groomit.me/v7/images/icons/arrow-r-grey.svg" width={16} height={16} alt="" />
                                                    </a>
                                                </li>
                                                <li><hr className="dropdown-divider my-0 border-gray-200" /></li>
                                                <li>
                                                    <a className="dropdown-item groomit__dropdown-menu__a flex items-center justify-between px-4 py-2.5 no-underline text-black hover:bg-gray-50 transition-colors text-sm" href="/user/signup">
                                                        <span className="flex items-center gap-2">
                                                            <img className="me-2" src="https://raj.dev.groomit.me/v7/images/icons/user-add.svg" width={20} height={20} alt="Sign Up" /> Sign Up
                                                        </span>
                                                        <img src="https://raj.dev.groomit.me/v7/images/icons/arrow-r-grey.svg" width={16} height={16} alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                                <button
                                    className="app-store-btn bg-white border border-[#E4E4E8] rounded-xl flex items-center justify-center cursor-pointer shrink-0"
                                    style={{ width: 48, height: 48, borderRadius: 12 }}
                                    onClick={() => setSupportOpen(true)}
                                >
                                    <img src="https://raj.dev.groomit.me/v7/images/webapp/icons/support-question.svg" width={24} height={24} alt="Support" className="app-icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Support Modal */}
            {supportOpen && (
                <div className="modal modal--wa7 fixed inset-0 z-100 flex items-center justify-center bg-black/50" onClick={() => setSupportOpen(false)}>
                    <div className="modal-dialog modal-dialog-centered bg-white rounded-2xl w-[90%] max-w-125 relative" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <button type="button" className="border-0 btn-close absolute top-4 right-4 bg-transparent text-xl cursor-pointer text-gray-500 hover:text-black" onClick={() => setSupportOpen(false)} aria-label="Close">
                                &#10005;
                            </button>
                            <div className="modal-body mt-4 pt-0 p-6">
                                <div className="ff-inter-semibold text-groomit-color-black fs-24-h2 mt-2 leading-snug mb-5">Need help with your<br />booking?</div>
                                <div className="flex flex-col gap-2.5">
                                    <div className="bg-white border border-gray-200 p-5 rounded-xl flex items-center self-stretch justify-between">
                                        <div className="flex">
                                            <div className="app-store-btn bg-[#F4F4F6] mr-4 flex items-center justify-center rounded-full shrink-0" style={{ width: 48, height: 48 }}>
                                                <img src="https://raj.dev.groomit.me/v7/images/webapp/icons/calendar-black.svg" width={24} height={24} alt="Calendar" className="app-icon" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex justify-between">
                                                    <span className="ff-inter-semibold text-groomit-color-black fs-16-h4">Existing Booking Support</span>
                                                </div>
                                                <div className="ff-inter-regular-400 fs-14-h5 text-[#4A5565]">Call us for rescheduling, updates, groomer questions, or help with your current appointment.</div>
                                                <a href="tel:+18883967170" className="ff-inter-semibold fs-16-h4 text-FF314A no-underline">+1(888) 396 7170</a>
                                            </div>
                                        </div>
                                        <a href="tel:+18883967170" className="flex items-center md:hidden no-underline">
                                            <img src="https://raj.dev.groomit.me/v7/images/webapp/icons/arrow-right.svg" width={20} height={20} alt="Call Support" />
                                        </a>
                                    </div>
                                    <div className="bg-white border border-gray-200 p-5 rounded-xl flex items-end self-stretch justify-between">
                                        <div className="flex">
                                            <div className="app-store-btn bg-[#F4F4F6] mr-4 flex items-center justify-center rounded-full shrink-0" style={{ width: 48, height: 48 }}>
                                                <img src="https://raj.dev.groomit.me/v7/images/webapp/icons/call-black.svg" width={24} height={24} alt="Phone" className="app-icon" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex justify-between">
                                                    <span className="ff-inter-semibold text-groomit-color-black fs-16-h4">New Booking by Phone</span>
                                                </div>
                                                <div className="ff-inter-regular-400 fs-14-h5 text-[#4A5565]">Prefer to book by phone? Call now for instant booking and fast confirmation.</div>
                                                <a href="tel:+16467185360" className="ff-inter-semibold fs-16-h4 text-FF314A no-underline">+1(646) 718 5360</a>
                                            </div>
                                        </div>
                                        <a href="tel:+16467185360" className="flex items-center md:hidden no-underline">
                                            <img src="https://raj.dev.groomit.me/v7/images/webapp/icons/arrow-right.svg" width={20} height={20} alt="Call Support" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
