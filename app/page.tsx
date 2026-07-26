"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Background } from './components/Background';

const CARDS = [
  { id: 'Whatcents', title: 'Whatcents', info: 'paycheck2paycheck spending money remainder', url: 'https://whatcents.vercel.app', img: '/images/whatcents_linkedin_thumbnail_sm.png' },
  { id: 'Ozzle', title: 'Ozzle', info: 'fastest debt snowball path visualizer', url: 'https://ozzle.vercel.app', img: '/images/ozzle_linkedin_thumbnail_sm.png' },
  { id: 'Smonth', title: 'Smonth', info: 'monthly payments space equalizer', url: 'https://smonth.vercel.app', img: '/images/smonth cover.png', unavailable: true },
  { id: 'Lelta', title: 'Lelta', info: 'household cashflow and ledger', url: 'https://lelta.vercel.app', img: '/images/smonth cover.png', unavailable: true },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-center p-8">
      <Background />

      <div className="fixed top-6 left-6 z-50 flex items-center gap-2">
        <img src="/images/stanchion-logo3.png" alt="Stanchion logo" className="h-[1em] w-auto text-3xl" style={{ fontSize: '1.875rem', height: '1.875rem' }} />
        <span className="text-white text-3xl">STANCHION</span>
      </div>

      {/* Navigation Anchors */}
      <nav className="flex gap-6 z-10">
        {CARDS.map((card) => (
          <button
            key={card.id}
            onClick={() => scrollToCard(card.id)}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 uppercase tracking-widest"
          >
            {card.id}
          </button>
        ))}
      </nav>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex w-full max-w-6xl gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: 'none', paddingBlock: '3rem', paddingInline: '3rem' }}
      >
        {CARDS.map((card) => (
          <motion.div
            key={card.id}
            id={card.id}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => { if (!card.unavailable) window.open(card.url, '_blank'); }}
            style={{ position: 'relative', zIndex: 0 }}
            className={`w-80 md:w-200 aspect-video shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl group ${card.unavailable ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {/* Background Image */}
            <img
              src={card.img}
              alt={card.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Unavailable Overlay */}
            {card.unavailable && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-amber-400/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-amber-200 drop-shadow">Currently Unavailable</h3>
                <p className="mt-1 text-sm text-amber-100/80">This App is currently under construction</p>
              </div>
            )}

            {/* Glassmorphism Overlay (hover, available cards only) */}
            {!card.unavailable && (
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-black/20 backdrop-blur-md">
                <motion.div
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-zinc-200 text-sm leading-relaxed">{card.info}</p>
                  <div className="mt-4 h-px w-12 bg-white/50" />
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </main>
  );
}