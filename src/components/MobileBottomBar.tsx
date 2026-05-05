const IMG_BASE = "https://raj.dev.groomit.me"

export default function MobileBottomBar() {
  return (
    <div className="bg-white bottom-0 md:hidden fixed w-full z-40 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col items-center gap-3 pb-4 pt-4 px-4">
        <div className="flex items-center gap-3 w-full">
          <a
            href="/guest/download-app"
            className="fs-16-h4 groomit__button h-auto py-4 w-full text-center no-underline block"
          >
            Book Now
          </a>
          <a
            href="/help"
            className="fs-16-h4 groomit__button bg-white !text-[#2A2A2A] border border-groomit-border h-auto py-4 w-full flex items-center justify-center no-underline !bg-white"
          >
            <img className="mr-2" src={`${IMG_BASE}/v7/images/webapp/icons/support-question.svg`} height={20} width={20} alt="Help" />
            Get Help
          </a>
        </div>
        <div className="ff-inter-regular-400 text-xs font-gray-4A5565">Real online booking. Confirmed in minutes.</div>
      </div>
    </div>
  )
}
