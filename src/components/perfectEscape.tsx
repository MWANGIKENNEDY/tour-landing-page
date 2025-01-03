import React from 'react';

const PerfectEscape = () => {
  return (
    <div className=" mt-24 lg:mt-64 container">
      <div className="lg:rounded-4xl shadow-blue-card relative min-h-[54rem] overflow-hidden rounded-3xl lg:min-h-[44rem] lg:py-0">
        {/* Background Image */}
        <img
          alt="Travel Escape Gallery Background"
          src="https://primefaces.org/cdn/templates/genesis/pages/travel/escape-gallery-bg.jpg"
          className="-z-2 h-full min-h-[54rem] w-full object-cover lg:min-h-[44rem]"
          srcSet="https://primefaces.org/cdn/templates/genesis/pages/travel/escape-gallery-bg.jpg 1x, https://primefaces.org/cdn/templates/genesis/pages/travel/escape-gallery-bg.jpg 2x"
        />
        <div className="-z-1 absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]"></div>

        {/* Content Section */}
        <div className="absolute inset-x-16 inset-y-16 flex flex-col justify-between px-12 lg:px-0">
          <div>
            <h1 className="text-surface-0 max-w-3xl text-4xl font-semibold leading-tight lg:text-[5.625rem]">
              Find Your{' '}
              <span className="text-white/12 [-webkit-text-stroke-color:white] [-webkit-text-stroke-width:1px]">
                Perfect Escape
              </span>
            </h1>
            <p className="mt-7 max-w-xs text-white/80">
              Whether you seek sun-soaked beaches, serene natural landscapes, or thrilling adventures, discover
              destinations tailored to your dream getaway.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="mb-0 mt-auto hidden items-center gap-6 lg:flex">
            <button className="border-white/12 bg-white/12 h-12 w-[5.5rem] rounded-full border shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] backdrop-blur-[48px]">
              <i className="pi pi-arrow-left text-surface-0 !text-xl"></i>
            </button>
            <button className="border-white/12 bg-white/12 h-12 w-[5.5rem] rounded-full border shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] backdrop-blur-[48px]">
              <i className="pi pi-arrow-right text-surface-0 !text-xl"></i>
            </button>
          </div>
        </div>

        {/* Escape Gallery Section */}
        <div className="absolute bottom-32 lg:bottom-16 lg:left-[26.5rem] lg:mt-0">
          <section className="relative mx-auto max-w-[60rem]" style={{  }}>
            <div className="block overflow-visible lg:overflow-hidden">
              <div className="embla__container flex touch-pan-y py-4" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                {['escape-beach.jpg', 'escape-nature.jpg', 'escape-hotel.jpg'].map((img, index) => (
                  <div key={index} className="min-w-[18rem] flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)]">
                    <div className="flex h-[var(--slide-height)] select-none items-center justify-center">
                      <div className="animate-duration-500 animate-slidefadein shadow-blue-card relative h-full w-full overflow-hidden rounded-3xl">
                        <img
                          alt="Escape Gallery Item"
                          src={`https://primefaces.org/cdn/templates/genesis/pages/travel/${img}`}
                          srcSet={`https://primefaces.org/cdn/templates/genesis/pages/travel/${img} 1x, https://primefaces.org/cdn/templates/genesis/pages/travel/${img} 2x`}
                          className="h-full w-full object-cover"
                        />
                        <div className="-z-1 absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.16)_100%)]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Mobile Navigation */}
        <div className="absolute bottom-16 flex w-full items-center justify-center gap-6 lg:hidden">
          <button className="border-white/12 bg-white/12 h-12 w-[5.5rem] rounded-full border shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] backdrop-blur-[48px]">
            <i className="pi pi-arrow-left text-surface-0 !text-xl"></i>
          </button>
          <button className="border-white/12 bg-white/12 h-12 w-[5.5rem] rounded-full border shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)] backdrop-blur-[48px]">
            <i className="pi pi-arrow-right text-surface-0 !text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfectEscape;
