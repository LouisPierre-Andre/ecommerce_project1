import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/Home';
import ProducttPage from './Components/ProductPage/Products';
import ContactPage from "./Components/ContactPage/ContactPage"

function App() {
  return (
    <Router>
      <div className="App">

        
        <ul>
          <li><a href='/'>Home Page</a></li>
          <li><a href='/product_page'>Product Page</a></li>
          <li><a href='/contact_page'>Contact Page</a></li>
        </ul>


        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product_page" element={<ProducttPage />} />
          <Route path="/contact_page" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






// import React, { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import matter from 'gray-matter';
// import './App.css';
// import { Buffer } from 'buffer';


// // Polyfill Buffer globalement
// window.Buffer = window.Buffer || Buffer;

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       // Utilisation de require.context pour importer les fichiers dynamiquement
//       const context = require.context('../posts', false, /\.md$/);
//       const postFiles = context.keys().map(context);

//       const postsData = await Promise.all(
//         postFiles.map(async (file) => {
//           const response = await fetch(file);
//           const text = await response.text();
//           const { data, content } = matter(text);
//           return { ...data, content };
//         })
//       );

//       // Tri des articles par date de la plus récente à la moins récente
//       postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

//       setPosts(postsData);
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Blog Posts project</h1>
//       </header>
//       <main>
//         {posts.map((post, index) => (
//           <article key={index}>
//             <h2>{post.title}</h2>
//             <p>{typeof post.date === 'string' ? post.date : post.date.toString()}</p>
//             {/* <img src={post.thumbnail} alt={post.title} /> */}
//             <ReactMarkdown>{post.content}</ReactMarkdown>
//           </article>
//         ))}
//       </main>
//     </div>
//   );
// }

// export default App;




// // git remote remove origin




// // git init
// // git add .
// // git commit -m "Initial commit"
// // git remote add origin https://github.com/LouisPierre-Andre/website3000.git
// // git branch -M main
// // git push -u origin main




// rm - rf node_modules
// rm package - lock.json
// npm install react - router@latest react - router - dom@latest
// npm install
