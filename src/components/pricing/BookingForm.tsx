import { useState } from "react"

const IMG = "https://qa.groomit.me/v7/images"

const ChevronDown = () => (
  <svg className="absolute right-3 bottom-[14px] w-4 h-4 text-[#9ca3af] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
)

export default function BookingForm() {
  const [petType, setPetType] = useState("Dog")
  const [zip, setZip] = useState("")
  const [breed, setBreed] = useState("")
  const [size, setSize] = useState("")

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-10">
      <h2 className="text-[#2a2a2a] text-xl md:text-2xl font-semibold mb-1">
        Choose the Ideal Package for Your Pet
      </h2>
      <p className="text-sm text-[#6b7280] mb-6">Type your pet and zip code to view local grooming prices.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {/* Pet Type */}
        <div className="relative">
          <label className="text-xs text-[#6b7280] mb-1.5 block font-medium">Select Pet type</label>
          <select
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#2a2a2a] bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 focus:border-[#FF385C] transition-all"
          >
            <option>Dog</option>
            <option>Cat</option>
          </select>
          <ChevronDown />
        </div>

        {/* Service Zip Code */}
        <div className="relative">
          <label className="text-xs text-[#6b7280] mb-1.5 block font-medium">Service Zip Code</label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="10011"
            className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#2a2a2a] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 focus:border-[#FF385C] transition-all placeholder:text-[#9ca3af]"
          />
          <img src={`${IMG}/icons/location.svg`} alt="" className="absolute right-3 bottom-[14px] w-4 h-4 pointer-events-none" />
        </div>

        {/* Furry Breed */}
        <div className="relative">
          <label className="text-xs text-[#6b7280] mb-1.5 block font-medium">Furry Breed</label>
          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#2a2a2a] bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 focus:border-[#FF385C] transition-all"
          >
            <option value="">Poodle - Standard</option>
            <option>Poodle - Standard</option>
            <option>Golden Retriever</option>
            <option>Labrador</option>
            <option>Shih Tzu</option>
          </select>
          <ChevronDown />
        </div>

        {/* Size */}
        <div className="relative">
          <label className="text-xs text-[#6b7280] mb-1.5 block font-medium">{"Select your dog's size"}</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#2a2a2a] bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 focus:border-[#FF385C] transition-all"
          >
            <option value="">L (41~80lbs)</option>
            <option>S (1~15lbs)</option>
            <option>M (16~40lbs)</option>
            <option>L (41~80lbs)</option>
            <option>XL (81~100lbs)</option>
          </select>
          <ChevronDown />
        </div>
      </div>
    </section>
  )
}
