import React from 'react';

const Escape = () => {
  return (
    <section className=" container mt-24">
      <h1 className="px-4 text-3xl lg:text-6xl font-semibold text-center mx-auto max-w-2xl leading-tight dark:text-white">
        Escape to Top <br /> Vacation Destinations
      </h1>
      <p className="px-4 text-lg mt-6 text-surface-500 text-center mx-auto max-w-2xl dark:text-white/80">
        Discover the world’s most popular vacation spots, from tropical beaches to vibrant cityscapes, perfect for creating unforgettable memories.
      </p>

      <div className="mt-14 h-[51rem] rounded-2xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHx8MHx8fDA%3D"
          alt="Beach view with ocean waves"
        />
      </div>




  
    </section>
  );
};

export default Escape;
