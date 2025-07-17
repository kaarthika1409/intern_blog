"use client";

import Image from "next/image";

export default function PythonPage() {
  return (
    <div className="cyber" style={{ textAlign: "center" }}>
      <h1>PYTHON blog.</h1>

      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA58mH1EAjc2uEChw2pMg-Lkm9iUhR1U6Fbw&s"
        alt="Python programming visual"
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
