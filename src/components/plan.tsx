import React from 'react'

const Plan = () => {
  return (
    <div className="gap-16 mt-24 flex flex-col items-center lg:mt-64 lg:flex-row container">
    <div className="lg:rounded-4xl shadow-blue-card dark:shadow-black-card relative h-[51rem] w-full max-w-[26rem] overflow-hidden rounded-3xl lg:max-w-none lg:flex-1">
      <img
        alt="Beautiful travel destination"
        className="-z-2 h-full w-full object-cover"
        src="https://primefaces.org/cdn/templates/genesis/pages/travel/destination-plan-bg.jpg"
      />
      <div className="-z-1 absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.16)_100%)]"></div>
      <div className="bg-white/12 border-white/12 absolute inset-x-8 bottom-8 flex min-h-10 items-center justify-between rounded-full border py-2 pl-5 pr-5 shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] backdrop-blur-[6px] lg:inset-x-10 lg:bottom-10 lg:pr-2">
        <div className="inline-flex items-center gap-2 text-white">
          <i className="pi pi-map-marker"></i>
          <span>Italy, Como</span>
        </div>
        <span className="bg-white/64 h-6 w-px"></span>
        <div className="inline-flex items-center gap-2 text-white">
          <i className="pi pi-calendar"></i>
          <span>Sat, 3 Dec 2025</span>
        </div>
        <span className="bg-white/64 hidden h-6 w-px lg:block"></span>
        <button className="hidden items-center gap-2 rounded-full border border-white/40 bg-white/20 py-2 pl-3 pr-4 text-white transition-all hover:bg-white/40 lg:inline-flex">
          <i className="pi pi-search"></i>
          <span className="font-medium">Search</span>
        </button>
      </div>
    </div>

    <div className="lg:flex-1">
      <span className="badge dark:text-white/80">World Explore</span>
      <h1 className="text-surface-950 mt-3.5 text-5xl font-semibold leading-tight dark:text-white">
        Plan Your Holiday For Wonderful Discoveries
      </h1>
      <p className="text-surface-500 mt-5 text-lg dark:text-gray-200">
        Essential tips for planning your vacation, from choosing destinations to maximizing your trip.
      </p>
      <div className="mt-14 flex flex-col gap-8">
        {[
          {
            title: 'Research Your Destination',
            description: 'Learn about the culture, climate, and attractions through guides, forums, and blogs.',
          },
          {
            title: 'Budget Wisely',
            description: 'Estimate costs for lodging, food, transport, and activities. Compare prices to save money.',
          },
          {
            title: 'Book in Advance',
            description: 'Reserve flights, lodging, and tours early for the best deals and stress-free planning.',
          },
          {
            title: 'Pack Smart',
            description: 'Make a packing list based on weather and activities. Include travel documents and essentials.',
          },
        ].map((tip, index) => (
          <div key={index}>
            <h5 className="text-gray-900 text-xl font-semibold leading-tight dark:text-white">
              {tip.title}
            </h5>
            <p className="text-gray-500 mt-4 text-base dark:text-gray-300">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Plan