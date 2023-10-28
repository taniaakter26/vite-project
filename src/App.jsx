import About from "./component/About";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Project from "./component/Project";
import Service from "./component/Service";


const App = () => {

  const AboutMe={
    name:'Tania Akter',
    city:"Dhaka",
    occupation:"Web Developer"
  }

  const BtnClick=()=>{
    alert('Welcome to our service');
  }

  const PostSubmitMethod=(event)=>{
    event.preventDefault();
    alert('Form Submitted');
  }

  
  return (
    <div>
      <Header/>
      <Hero title="Tania Akter" des="Computer Science Engineer"/>
      <About more={AboutMe}/>
      <Service btn={BtnClick}/>
      <Project submitBtn={PostSubmitMethod}/>
      <Footer/>
    </div>
  );
};

export default App;