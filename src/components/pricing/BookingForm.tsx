import { useState } from "react"

const IMG = "https://qa.groomit.me/v7/images"

export default function BookingForm() {
  const [petType, setPetType] = useState("Dog")
  const [zip, setZip] = useState("")
  const [breed, setBreed] = useState("")
  const [size, setSize] = useState("")

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <h2 className="ff-inter-semibold text-[#2a2a2a] text-xl md:text-2xl mb-1">
        Check Prices in Your Area
      </h2>
      <p className="text-sm text-[#4a5565] mb-5">Type your pet and zip code to view local grooming prices.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Pet Type */}
        <div className="relative">
          <label className="text-xs text-[#9ca3af] mb-1 block">Select Pet Type</label>
          <select
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#2a2a2a] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#FF385C]"
          >
            <option>Dog</option>
            <option>Cat</option>
          </select>
          <svg className="absolute right-3 top-[38px] w-4 h-4 text-[#9ca3af] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
        </div>

        {/* Service Location */}
        <div className="relative">
          <label className="text-xs text-[#9ca3af] mb-1 block">Service Location</label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="Service Location"
            className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#2a2a2a] bg-white focus:outline-none focus:border-[#FF385C] pr-10"
          />
          <img src={`${IMG}/icons/location.svg`} alt="" className="absolute right-3 top-[38px] w-4 h-4 pointer-events-none" />
        </div>

        {/* Breed */}
        <div className="relative">
          <label className="text-xs text-[#9ca3af] mb-1 block">{"Select Dog's Breed"}</label>
          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#2a2a2a] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#FF385C]"
          >
            <option value="">{"Select Dog's Breed"}</option>
            <option>Poodle - Standard</option>
            <option>Golden Retriever</option>
            <option>Labrador</option>
            <option>Shih Tzu</option>
          </select>
          <svg className="absolute right-3 top-[38px] w-4 h-4 text-[#9ca3af] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
        </div>

        {/* Size */}
        <div className="relative">
          <label className="text-xs text-[#9ca3af] mb-1 block">{"Select Dog's Size"}</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#2a2a2a] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#FF385C]"
          >
            <option value="">{"Select Dog's Size"}</option>
            <option>S (1~15lbs)</option>
            <option>M (16~40lbs)</option>
            <option>L (41~80lbs)</option>
            <option>XL (81~100lbs)</option>
          </select>
          <svg className="absolute right-3 top-[38px] w-4 h-4 text-[#9ca3af] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
        </div>
      </div>
    </section>
  )
}
