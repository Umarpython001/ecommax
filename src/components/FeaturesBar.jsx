import React from 'react';
import { Truck, ShieldCheck, Umbrella, Headphones } from 'lucide-react';
import { VALUE_PROPS } from '../data/mockData';

const iconMap = {
  truck: Truck,
  'shield-check': ShieldCheck,
  'shield-alert': Umbrella,
  headphones: Headphones
};

export const FeaturesBar = () => {
  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          {VALUE_PROPS.map((prop) => {
            const Icon = iconMap[prop.icon] || ShieldCheck;
            return (
              <div key={prop.id} className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0 group">
                {/* Thin Light Blue Outlined Icon */}
                <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center mb-3 group-hover:bg-sky-100 transition-colors">
                  <Icon className="w-6 h-6 text-sky-500 stroke-[1.75]" />
                </div>
                <h4 className="text-xs font-extrabold text-slate-800 tracking-wider uppercase font-display">
                  {prop.title}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1.5 max-w-[220px]">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
