import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import { supabase } from "./Supabase";
import Home from "./page/Home";
import Work from "./page/Work";
import Contact from "./page/Contact";
import  About from "./page/About";
const AppRoutes = () => {
  const [portfolio, setPortfolio] = useState(null);


  useEffect(() => {
    // Fetch Projects
    const fetchPortfolio = async () => {
      const { data, error } = await supabase.from('uxprojects').select('*');
      if (error) console.error('Error fetching projects:', error);
      else setPortfolio(data);
    };
   fetchPortfolio();
  }, []);
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work portfolio={portfolio}/>} />
         <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
