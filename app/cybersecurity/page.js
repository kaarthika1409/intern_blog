"use client";

import Image from "next/image";

export default function CybersecurityPage() {
  return (
    <div className="cyber" style={{ textAlign: "center" }}>
      <h1>Cybersecurity blog.</h1>

      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4XzhFUyLtSxmT7Gy1AJRQwBbuVcoRLW7wQ&s"
        alt="Cybersecurity illustration"
        width={400}
        height={300}
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
