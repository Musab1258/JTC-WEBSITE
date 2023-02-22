import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/nav_bar/NavBar';
import placeholder from "./images/placeholder.png"

function App() {
  return (
    <div className="App">
      <div className='bg-pale-red'>

        <NavBar />

        <div className='py-10'>
          <div className='text-3xl md:text-6xl'>
            <span className='mr-1 inline-block'>Do you want to</span>
            <span className='ml-1 text-soft-blue inline-block'>
              <Typewriter
                options={{
                  strings: ["excel in secondary school", "top your class academically", "have dinstictions in your O'level exams", "score high in your UTME exam", "to prepare thoroughly for A'level or international exams"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <div>
            <p className='mx-[7vw] md:mx-[30vw] my-8 text-lg md:text-xl'>Then, JTC is the right place for you. At JTC, we will coach you till you excel academically. Our approach to teaching and learning is unique and tailored to help students to learn faster</p>
            
            <button className='bg-[#000000] py-4 px-12 text-white'>View Classes</button>

            <p className='mx-[2vw] md:mx-[35vw] bg-white mt-4 mb-8 rounded-full py-2 text-[#000000] font-extrabold'>Be the best student in your school</p>
          </div>

          
        </div>
    
      </div>

      <div>

        <div className='my-8 w-[80vw] m-auto'>

        <h3 className='my-8 text-base md:text-lg text-left'>
          What is JTC?
        </h3>
        <img
          src={placeholder}
          alt="Students in class"
          className='w-[90vw] md:h-[60vh] m-auto'
        />
        
        <div className='md:flex'>

          <div className='md:w-[50%]'>
            <p className='text-xl md:text-2xl w-[20vw]'>Making students achieve academic excellence</p>
          </div>

          <div className='md:w-[50%]'>
            <p className='text-lg my-4'>JTC, Jacobian Training College in full is a tutorial centre. At JTC, we have expert in different subjects tutor students in those subjects.</p>
            <p className='text-lg my-4'>Our tutoring method makes it easy for students to achieve academic excellence.</p>
            <button className='bg-[#000000] py-4 px-6 my-4 text-white'>Find out more</button>
          </div>

        </div>

        </div>

      </div>

      <div className=' bg-[#000000] text-white'>
        <div className='my-8 w-[80vw] m-auto md:flex'>

        <div className='md:w-[50%]'>

          <h3>
            Who is JTC for?
          </h3>

          <div>
            <img
              src={placeholder} 
              alt="Students in class"
              className='rounded-[100%]'
            />    
          </div>

        </div>

        <div className='md:w-[50%]'>
          <p className='text-xl md:text-2xl'>Want to excell academically? You are in the right place</p>
          <p className='text-lg'>You don't need to be the best student in your school or class to attend JTC, you just need to be dilligent and disciplined.</p>
          <button className='bg-soft-blue py-4 px-6 my-4 text-white'>View all classes</button>
        </div>

        </div>
      </div>

      <div>
        <div>
          <p>Prepare yourself for excellence</p>
          <p>Our classes are designed to groom students academically. So, if you want to be on top of your academics</p>
          <button className='bg-[#000000] py-4 px-6 my-4 text-white'>Join us now</button>
        </div>
      </div>
      <div>
        
      </div>
      


      <Footer />
    </div>
  );
}

export default App;