"use client";

import { useRouter } from "next/navigation";

export default function BuyerLogin() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/sellerlogin/home"); 
  };

  return (
    <div className="commmonlogin">
      <center>
        <h1 className="buyerl">Seller Login</h1>
        <div className="log">
          <label htmlFor="name">Name :</label>
          <input type="text" /><br />

          <label htmlFor="Email">Email :</label>
          <input type="text" /><br />

          <label htmlFor="password">Password :</label>
          <input type="password" /><br />

          <button onClick={handleLogin}>LOGIN</button>

          <h3>Don't have an account? Signup</h3>
        </div>
      </center>
    </div>
  );
}
