"use client";

import Image from "next/image";

export default function FullstackPage() {
  return (
    <div className="cyber" style={{ textAlign: "center" }}>
      <h1>Fullstack blog.</h1>

      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhU8iFY27tzKLGCMWhOiSNhT71rSHz955IAA&s"
        alt="Fullstack development"
        width={400}
        height={200}
      />

      <p>
        Cybersecurity is the practice of protecting systems, networks, and
        programs from digital attacks. These cyberattacks are usually aimed at
        accessing, changing, or destroying sensitive information; extorting
        money from users through ransomware; or interrupting normal business
        processes.
      </p>

      <h3>Buy Now @ Rs.200</h3>

      <button>BUY NOW</button>
    </div>
  );
}
