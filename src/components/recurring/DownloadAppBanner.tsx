const IMG = "https://qa.groomit.me/v7/images"

export default function DownloadAppBanner() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FF385C] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
              The Fastest, Easiest Way<br />to Book Grooming
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a href="/download-groomit-app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <img src={`${IMG}/home/app-store.svg`} className="h-11 w-auto" alt="Download on App Store" />
            </a>
            <a href="/download-groomit-app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <img src={`${IMG}/home/play-store.svg`} className="h-11 w-auto" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
