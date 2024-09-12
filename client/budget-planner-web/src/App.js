import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";

function App() {

  const [message, setMessage] = useState('');
    const fetchSecuredMessage = async () => {
        const username = 'demo_user'; // ეს მერე ნამდვილი იუზერით შევცვალოთ
        const password = 'demo_pass'; // ას ნამდვილი პაროლით შევცვალოთ

        const token = btoa(`${username}:${password}`);  // Encode credentials in base64

        const response = await fetch('http://localhost:8080/hello/lika', {
          method: 'GET',
          headers: {
              'Authorization': `Basic ${token}`,
              'Content-Type': 'application/json'
          },
          credentials: 'include',  // Ensure credentials are sent
      });
        const data = await response.json();
        console.log(data);
        setMessage(data.message);
    };


  return ( 
     <div>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>

      <div>
         <h1>Basic Authentication with React and Spring Boot</h1>
         <button onClick={fetchSecuredMessage}>Fetch Secured Message</button>
         <p>{message}</p>
      </div> 
    </div>
  );
}

export default App;
