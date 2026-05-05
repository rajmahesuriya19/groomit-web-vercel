const IMG_BASE = "https://raj.dev.groomit.me"

export default function DownloadApp() {
  return (
    <section className="bg-red">
      <div className="container mx-auto px-4 pt-60-px pt-30-mobile">
        <div className="flex justify-center items-start gap-30-px">
          <div className="text-left md:text-left text-center">
            <div>
              <img src={`${IMG_BASE}/v7/images/home/app-logo.svg`} alt="App Logo" width={56} height={56} />
            </div>
            <h2 className="ff-inter-semibold fs-32px text-white pt-10-px mb-0">Get the Groomit App</h2>
            <div className="ff-inter-regular-400 text-white fs-16-h4 pt-10-px leading-relaxed">
              Book, manage appointments, and chat
              <br />
              with your groomer - all from your phone
            </div>
            <div className="flex pt-10-px gap-3 justify-start md:justify-start justify-center">
              <a href="/download-groomit-app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <img src={`${IMG_BASE}/v7/images/home/app-store.svg`} className="responsive-image" width={160} height={48} alt="App Store" />
              </a>
              <a href="/download-groomit-app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                <img src={`${IMG_BASE}/v7/images/home/play-store.svg`} className="responsive-image" width={160} height={48} alt="Google Play" />
              </a>
            </div>
            <div className="ff-inter-regular-400 text-white fs-16-h4 pt-10-px opacity-80">
              Free download. Available on iOS and
              <br />
              Android.
            </div>
            <a
              href="tel:+16467185360"
              className="flex items-center justify-start md:justify-start justify-center ff-inter-semibold fs-16 mt-10-px pr-2 no-underline text-white"
            >
              Call to Book
              <img src={`${IMG_BASE}/v7/images/webapp/icons/call-white.svg`} height={24} width={24} alt="Call to Book" className="mx-2" />
              <span className="underline">+1 (646) 718-5360</span>
            </a>
            <img
              src={`${IMG_BASE}/v7/images/home/footer-dog.png`}
              className="responsive-image mt-4"
              alt="Footer Dog"
              width={224}
              height={206}
            />
          </div>
          <img
            src={`${IMG_BASE}/v7/images/home/app-book.png`}
            className="responsive-image hidden md:block"
            alt="Phone Book"
            width={276}
            height={552}
          />
        </div>
      </div>
    </section>
  )
}
