"use client";

import { useRouter } from "next/navigation";

export default function BuyerLogin() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/buyerlogin/home"); 
  };

  return (
    <div className="commmonlogin">
      <h1 className="buyerl">Buyer Login</h1>
      <div className="log">
        <label htmlFor="name">Name :</label>
        <input type="text" id="name" /><br />

        <label htmlFor="email">Email :</label>
        <input type="text" id="email" /><br />

        <label htmlFor="password">Password :</label>
        <input type="password" id="password" /><br />

        <button onClick={handleLogin}>LOGIN</button>

        <h3>Don&apos;t have an account? Signup</h3>
      </div>
    </div>
  );
}
