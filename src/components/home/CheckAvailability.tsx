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
      <section className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 py-8 md:py-14">
        <div className="w-full" id="checkAvailabilityBasedZipSection">
          <div className="w-full md:w-[95%]">
            <h2 className="font-semibold text-2xl md:text-[32px] leading-tight text-[#1A1A1A] mb-0">
              {"Check Availability for Dog & Cat"}<br className="hidden md:block" />
              {"Grooming in "}<span data-grooming-location="">[City]</span>
            </h2>

            {/* ZIP input + Pet type tabs - stack on mobile */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-5">
              <div className="flex items-center border border-[#E5E7EB] bg-white justify-between pr-4 rounded-xl flex-1 min-h-[56px]">
                <div className="relative flex-1">
                  <input
                    className="w-full px-4 pt-5 pb-2 text-base bg-transparent border-0 outline-none"
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
                  <label 
                    htmlFor="zip" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF] pointer-events-none transition-all peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                    style={{ top: zip ? '12px' : '50%', fontSize: zip ? '12px' : '14px', transform: zip ? 'translateY(0)' : 'translateY(-50%)' }}
                  >
                    Enter ZIP Code
                  </label>
                </div>
                <img src={`${IMG_BASE}/v7/images/home/location-red.svg`} alt="Location" width={22} height={22} className="shrink-0" />
              </div>

              {/* Pet type tabs */}
              <div className="flex bg-[#F7F8FA] rounded-xl p-1 w-full sm:w-auto">
                {petTypes.map((pt) => (
                  <button
                    key={pt.id}
                    className={`flex-1 sm:px-6 py-3 rounded-lg text-base font-medium transition-all ${
                      activePetType === pt.id 
                        ? "bg-white shadow-sm text-[#1A1A1A]" 
                        : "text-[#4A5565] hover:text-[#1A1A1A]"
                    }`}
                    onClick={() => setActivePetType(pt.id)}
                  >
                    {pt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-5">
              <div className="flex-1 h-px bg-[#E5E7EB]" />
              <span className="text-sm text-[#4A5565]">or</span>
              <div className="flex-1 h-px bg-[#E5E7EB]" />
            </div>

            {/* Prefer to Book by Phone */}
            <div className="bg-[#F7F8FA] rounded-2xl p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="bg-[#FF385C] rounded-full p-3 shrink-0">
                    <img src={`${IMG_BASE}/v7/images/webapp/icons/call-white.svg`} width={24} height={24} alt="Call" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[#1A1A1A] text-base md:text-lg">Prefer to Book by Phone?</div>
                    <div className="text-sm text-[#4A5565] mt-0.5">Call now for instant booking</div>
                    <a href="tel:+16467185360" className="font-semibold text-[#FF385C] no-underline hidden md:block mt-1">+1(646) 718 5360</a>
                  </div>
                </div>
                <a href="tel:+16467185360" className="flex items-center md:hidden no-underline shrink-0 bg-white rounded-full p-3 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF385C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cat Dog image - desktop only */}
        <div className="hidden md:flex w-full items-center justify-center">
          <img
            src={`${IMG_BASE}/v7/images/home/cat-dog.png`}
            alt="Cat and dog together"
            width={605}
            height={489}
            className="max-w-full h-auto"
          />
        </div>
      </section>
    </section>
  )
}
