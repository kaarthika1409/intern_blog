"use client";

import Image from "next/image";

export default function DatasciencePage() {
  return (
    <div className="cyber" style={{ textAlign: "center" }}>
      <h1>DATASCIENCE blog.</h1>

      <Image
        src="https://www.data-science-blog.com/wp-content/uploads/2016/09/data-science-blog-logo.png"
        alt="Data Science blog logo"
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
