"use client";

import Image from "next/image";

export default function JavaPage() {
  return (
    <div className="cyber" style={{ textAlign: "center" }}>
      <h1>JAVA blog.</h1>

      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-L6ekXgXU4ZeQVU5oBiYmhBOZVeTGnH4Z_w&ss"
        alt="Java language visual"
        width={400}
        height={250}
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
