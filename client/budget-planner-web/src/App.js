import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout/Layout";

function App() {

  const [message, setMessage] = useState("");
  const fetchSecuredMessage = async () => {
    const username = "demo_user"; // ეს მერე ნამდვილი იუზერით შევცვალოთ
    const password = "demo_pass"; // ას ნამდვილი პაროლით შევცვალოთ
    const token = btoa(`${username}:${password}`); // Encode credentials in base64
    const response = await fetch("http://localhost:8080/hello/lika", {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
    const data = await response.text();
    setMessage(data);
  };


  return ( 
     <div>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={<ProfilePage />} />
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
