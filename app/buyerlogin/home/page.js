"use client";
import { useRouter } from 'next/navigation';


export default function  Home ()  {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  const topics = [
    {
      title: "Data Science Blog",
      img: "https://www.data-science-blog.com/wp-content/uploads/2016/09/data-science-blog-logo.png",
      path: "/datascience",
    },
    {
      title: "Cyber Security",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4XzhFUyLtSxmT7Gy1AJRQwBbuVcoRLW7wQ&s",
      path: "/cybersecurity",
    },
    {
      title: "Full Stack",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhU8iFY27tzKLGCMWhOiSNhT71rSHz955IAA&s",
      path: "/fullstack",
    },
    {
      title: "Python",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA58mH1EAjc2uEChw2pMg-Lkm9iUhR1U6Fbw&s",
      path: "/python",
    },
    {
      title: "Java",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-L6ekXgXU4ZeQVU5oBiYmhBOZVeTGnH4Z_w&ss",
      path: "/java",
    },
    
  ];

  return (
    <div className="main">
      <h1>HELLO! Welcome to BLOGbuy.com</h1>
      <div className="cards-container">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="one"
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick(topic.path)}
          >
            <img src={topic.img} alt={topic.title} />
            <h2>{topic.title}</h2>
            <p>Click Here To Know More!</p>
          </div>
        ))}
      </div>
    </div>
  );
};


