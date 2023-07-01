import Image from "next/image";
import React from "react";

const CTACard = () => {
  return (
    <div className="relative overflow-hidden rounded-md bg-slate-100 px-6 py-10">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30"></div>
      {/* Image */}
      <Image
        fill
        src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="landscape image"
        className="object-cover object-center"
      />
      {/* Content Container */}
      <div className="relative z-10">
        <div className="text-lg font-medium">#exploretheworld</div>
        <h3 className="text-4xl font-semibold">Explore the world with me!</h3>
        <p className="mt-2 max-w-lg text-lg">
          Explore the world with me! I'm travelling around the 🌎. I've visited
          most of the great cities of USA and currently I'm travelling in
          Budapest. Join me!
        </p>

        {/* Form */}
        <form className="mt-6 flex items-center gap-2">
          <input
            type="text"
            placeholder="Write your email"
            className="rounded-md bg-white px-3 py-2 text-base outline-none ring-neutral-600 placeholder:text-sm focus:ring-2"
          />
          <button
            type="submit"
            className="rounded-md bg-neutral-900 px-3 py-2 text-neutral-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
