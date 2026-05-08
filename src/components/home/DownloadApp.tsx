const IMG_BASE = "https://raj.dev.groomit.me"

export default function DownloadApp() {
  return (
    <section className="bg-[#FF385C]">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="text-center md:text-left max-w-md">
            <img 
              src={`${IMG_BASE}/v7/images/home/app-logo.svg`} 
              alt="App Logo" 
              width={48} 
              height={48} 
              className="mx-auto md:mx-0"
            />
            <h2 className="font-semibold text-2xl md:text-[32px] text-white mt-4 mb-0">
              Get the Groomit App
            </h2>
            <p className="text-white/90 text-base mt-3 leading-relaxed">
              Book, manage appointments, and chat with your groomer - all from your phone
            </p>
            
            <div className="flex gap-3 mt-5 justify-center md:justify-start">
              <a href="/download-groomit-app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <img src={`${IMG_BASE}/v7/images/home/app-store.svg`} width={140} height={42} alt="App Store" className="h-[42px] w-auto" />
              </a>
              <a href="/download-groomit-app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <img src={`${IMG_BASE}/v7/images/home/play-store.svg`} width={140} height={42} alt="Google Play" className="h-[42px] w-auto" />
              </a>
            </div>
            
            <p className="text-white/70 text-sm mt-3">
              Free download. Available on iOS and Android.
            </p>
            
            <a
              href="tel:+16467185360"
              className="inline-flex items-center justify-center md:justify-start gap-2 font-semibold text-white mt-5 no-underline"
            >
              <span>Call Us to Book</span>
              <img src={`${IMG_BASE}/v7/images/webapp/icons/call-white.svg`} height={20} width={20} alt="" />
              <span className="underline">+1 (646) 718-5360</span>
            </a>
            
            <img
              src={`${IMG_BASE}/v7/images/home/footer-dog.png`}
              className="mt-6 mx-auto md:mx-0 w-[180px] md:w-[200px] h-auto"
              alt="Happy groomed dog"
            />
          </div>
          
          <img
            src={`${IMG_BASE}/v7/images/home/app-book.png`}
            className="hidden md:block w-[240px] lg:w-[276px] h-auto"
            alt="Groomit app on phone"
          />
        </div>
      </div>
    </section>
  )
}
