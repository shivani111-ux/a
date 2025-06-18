//Home.js
import Header from "../components/Header";
import Footer from "../components/Footer";

 const About = () => (
   <>
     <Header />
     <section>
       <h2>About Us</h2>
       <p>We are passionate developers building modern websites.</p>
     </section>
     <Footer />
   </>
 );

 export default About;
//contact.js
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => (
  <>
    <Header />
    <ContactForm />
    <Footer />
  </>
);

export default Contact;
//contactform.js
const ContactForm = () => (
  <form>
    <h2>Contact Us</h2>
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" required />
    <button type="submit">Send</button>
  </form>
);

export default ContactForm;


//Header.js
const Footer = () => (
  <footer>
    <p>&copy; 2025 My Site. All rights reserved.</p>
  </footer>
);

export default Footer;

//herosection.js
const HeroSection = () => (
  <section>
    <h2>Welcome to My Site</h2>
    <p>This is the best place to learn React.</p>
  </section>
);

export default HeroSection;
//Home.js
import Header from "../components/Header";
 import HeroSection from "../components/HeroSection";
 import Footer from "../components/Footer";

 const Home = () => (
   <>
     <Header />
     <HeroSection />
     <Footer />
   </>
 );

 export default Home;
 components/Home.jsx


//App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";       
import About from "./components/About";     
import Contact from "./components/Contact"; 

const App = () => (
   <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
   </Router>
 );

 export default App;
