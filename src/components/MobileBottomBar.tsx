export default function MobileBottomBar() {
  return (
    <div className="bg-white bottom-0 md:hidden fixed w-full z-40 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] safe-area-bottom">
      <div className="flex flex-col gap-2.5 px-4 pt-3 pb-4">
        <div className="flex items-center gap-2.5">
          <a
            href="/guest/booking/start"
            className="flex-1 bg-[#FF385C] hover:bg-[#E62E4F] text-white font-semibold text-base py-3.5 rounded-xl text-center no-underline transition-colors shadow-sm"
          >
            Book Now
          </a>
          <a
            href="/help"
            className="flex items-center justify-center gap-2 bg-white text-[#1A1A1A] border border-[#E5E7EB] font-medium text-base py-3.5 px-5 rounded-xl no-underline hover:bg-[#F7F8FA] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            Help
          </a>
        </div>
        <p className="text-[#4A5565] text-xs text-center">
          Real online booking. Confirmed in minutes.
        </p>
      </div>
    </div>
  )
}
