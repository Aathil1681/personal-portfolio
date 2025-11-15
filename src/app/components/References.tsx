"use client";
import React from "react";
import ReferenceCard from "./ReferenceCard";

const references = [
  {
    name: "Miss Khethika Subramaniam",
    title: "Senior Lecturer, Trincomalee Campus",
    contact: "khedikas@esn.ac.lk | +94 77 917 6362",
  },
  {
    name: "Ms Keerthana Dharshan",
    title: "Chief Executive Officer - Kifgo",
    contact: "interns@kifgo.lk | +94 76 631 2366",
  },
  {
    name: "Mr. Rizath",
    title: "Founder - Rizzi International",
    contact: "itzrizath@gmail.com | +94 77 152 7111",
  },
];

const References = () => {
  return (
    <section className="py-12 max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-semibold mb-6">References</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {references.map((r) => (
          <ReferenceCard key={r.name} {...r} />
        ))}
      </div>
    </section>
  );
};

export default References;
