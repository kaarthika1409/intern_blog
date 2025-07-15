"use client";
import { useRouter } from "next/navigation";  

const Firstpage = () =>{
  const router =useRouter();
  const handleClick=(path) =>{
    router.push(path);
  };
  const topics =[
    {
      title :"Login As A Buyer",
      path :"/buyerlogin"
    },
    {
      title :"Login As A Seller",
      path :"/sellerlogin"
    }
  ]
    return (
    <div >
      <center>
      <h1>BLOGbuy.Com</h1>
      <div >
        {topics.map((topic, index) => (
          <div
            key={index}
            className="one"
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick(topic.path)}
          >
            
            <h2>{topic.title}</h2>
            <p>Click Here To Login!</p>
          </div>
        ))}
      </div>
      </center>
    </div>
  );
}
export default Firstpage;