
import React from 'react';

const stats = [
  {
    value: "500+",
    label: "Schemes Indexed"
  },
  {
    value: "29",
    label: "States Covered"
  },
  {
    value: "12+",
    label: "Ministries"
  },
  {
    value: "1M+",
    label: "Citizens Helped"
  }
];

export default function StatsBanner() {
  return (
    <section className="py-10 bg-gov-blue">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-gov-gold font-bold text-3xl md:text-4xl lg:text-5xl">{stat.value}</div>
              <div className="text-white mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
