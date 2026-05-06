import { useState, useCallback } from "react"

const IMG_BASE = "https://raj.dev.groomit.me"

const petTypes = [
  { id: "dog", label: "Dog" },
  { id: "cat", label: "Cat" },
]

export default function CheckAvailability() {
  const [activePetType, setActivePetType] = useState("dog")
  const [zip, setZip] = useState("")

  const handleZipChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 5)
    setZip(val)
  }, [])

  return (
    <section className="container mx-auto px-4">
      <section className="flex flex-col md:flex-row justify-between gap-10-px pt-60-px pt-30-mobile">
        <div className="w-full" id="checkAvailabilityBasedZipSection">
          <div className="w-95per">
            <h2 className="ff-inter-semibold fs-32px leading-snug mb-0">
              {"Check Availability for Dog & Cat"}<br className="hidden md:block" />
              {"Grooming in "}<span data-grooming-location="">[City]</span>
            </h2>

            {/* ZIP input + Pet type tabs on same row */}
            <div className="zip-availability-content flex items-center gap-4 mt-20-px">
              <div className="flex items-center border border-groomit-border bg-white justify-between pr-4 rounded-2xl w-65 input-bg">
                <div className="relative form-group">
                  <input
                    className="input-control border-0 bg-transparent ff-inter-regular-400 fs-16"
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder=" "
                    inputMode="numeric"
                    maxLength={5}
                    pattern="\d{5}"
                    autoComplete="postal-code"
                    value={zip}
                    onChange={handleZipChange}
                    required
                  />
                  <label htmlFor="zip" className="ff-inter-regular-400 fs-14-h5 floating-label">
                    Enter ZIP Code
                  </label>
                </div>
                <img src={`${IMG_BASE}/v7/images/home/location-red.svg`} alt="Location" width={22} height={22} />
              </div>

              {/* Pet type tabs */}
              <div className="tab-group" data-no-swipe="">
                <div className="tab-container ff-inter-regular-400 fs-16-h4 w-200px">
                  {petTypes.map((pt) => (
                    <button
                      key={pt.id}
                      className={`${activePetType === pt.id ? "active" : ""} transition-all duration-200`}
                      data-pet-type={pt.id}
                      onClick={() => setActivePetType(pt.id)}
                    >
                      {pt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="divider-container">
              <span className="ff-inter-regular-400 fs-16-h4 or-text text-4A5565">or</span>
            </div>

            {/* Prefer to Book by Phone */}
            <div className="prefer-box">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="border-E4E4E8 bg-red rounded-full p-3 mr-3 shrink-0">
                    <img src={`${IMG_BASE}/v7/images/webapp/icons/call-white.svg`} width={24} height={24} alt="Call" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <span className="ff-inter-semibold text-groomit-color-black fs-20-h3">Prefer to Book by Phone?</span>
                    </div>
                    <div className="ff-inter-regular-400 fs-16-h4 text-4A5565">Call now for instant booking. No back-and-forth.</div>
                    <a href="tel:+16467185360" className="ff-inter-semibold fs-16-h4 text-FF314A no-underline hidden md:block">+1(646) 718 5360</a>
                  </div>
                </div>
                <a href="tel:+16467185360" className="flex items-center md:hidden no-underline shrink-0">
                  <img src={`${IMG_BASE}/v7/images/webapp/icons/arrow-right.svg`} width={20} height={20} alt="Call Support" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cat Dog image - desktop only */}
        <div className="hidden md:flex w-full">
          <img
            src={`${IMG_BASE}/v7/images/home/cat-dog.png`}
            alt="Cat and dog together"
            width={605}
            height={489}
            className="responsive-image"
          />
        </div>
      </section>
    </section>
  )
}
