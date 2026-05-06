import { useState } from "react"

export default function BookingForm() {
  const [petType, setPetType] = useState("Dog")
  const [zip, setZip] = useState("10011")
  const [breed, setBreed] = useState("Poodle - Standard")
  const [size, setSize] = useState("L (41~80lbs)")

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <h2 className="ff-inter-semibold text-[#2a2a2a] text-xl md:text-2xl mb-5">
        Choose the Ideal Package for Your Pet
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Pet Type */}
        <div className="relative">
          <label className="text-xs text-[#9ca3af] mb-1 block">Select Pet type</label>
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

        {/* ZIP */}
        <div className="relative">
          <label className="text-xs text-[#9ca3af] mb-1 block">Service Zip Code</label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#2a2a2a] bg-white focus:outline-none focus:border-[#FF385C]"
          />
        </div>

        {/* Breed */}
        <div className="relative">
          <label className="text-xs text-[#9ca3af] mb-1 block">{"Pup's Breed"}</label>
          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#2a2a2a] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#FF385C]"
          >
            <option>Poodle - Standard</option>
            <option>Golden Retriever</option>
            <option>Labrador</option>
            <option>Shih Tzu</option>
          </select>
          <svg className="absolute right-3 top-[38px] w-4 h-4 text-[#9ca3af] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
        </div>

        {/* Size */}
        <div className="relative">
          <label className="text-xs text-[#9ca3af] mb-1 block">{"Select your dog's size"}</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#2a2a2a] bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#FF385C]"
          >
            <option>L (41~80lbs)</option>
            <option>S (1~15lbs)</option>
            <option>M (16~40lbs)</option>
            <option>XL (81~100lbs)</option>
          </select>
          <svg className="absolute right-3 top-[38px] w-4 h-4 text-[#9ca3af] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
        </div>
      </div>
    </section>
  )
}
