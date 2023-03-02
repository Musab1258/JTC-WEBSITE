import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Footer from './components/footer/Footer';
import NavBar from './components/nav_bar/NavBar';
import class1 from './images/class1.png';
import class2 from './images/class2.png';
import placeholder from './images/placeholder.png';

function App() {
  return (
    <div>

      <div className='bg-pale-red flex flex-col'>

        <NavBar />

        <div className='pt-[30vh] text-center'>
          <div className='text-[28.8px] md:text-[51px] w-[86vw] mx-auto'>
            <div className='mr-1 inline-block'>Do you want to</div>
            <div className='ml-1 inline-block text-soft-blue'>
              <Typewriter
                options={{
                  strings: ["excel in secondary school", "top your class academically", "have dinstictions in your O'level exams", "score high in your UTME exam", "to prepare thoroughly for A'level or international exams"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          <div>
            <p className='mx-[7vw] md:mx-[30vw] my-8 text-[15.2px] md:text-[22px]'>Then, JTC is the right place for you. At JTC, we will coach you till you excel academically. Our approach to teaching and learning is unique and tailored to help students to learn faster</p>
            
            <Link to="classes">
              <button className='bg-[#000000] py-3 px-16 md:py-4 md:px-12 text-white text-[12.8px] md:text-[16px]'>
                View Classes
              </button>
            </Link>

            <p className='mx-[2vw] md:mx-[35vw] bg-white mt-4 mb-8 rounded-full py-2 text-[#000000] font-extrabold text-[11.2px] md:text-[12.8px]'>Be the best student in your school</p>
          </div>

          
        </div>
    
      </div>

      <div>

        <div className='my-8 w-[90vw] m-auto'>

          <h3 className='my-10 text-[15.2px] md:text-[18px] text-left'>
            What is JTC?
          </h3>
          <img
            src={class1}
            alt="Students in class"
            className='w-[100%] h-[200px] lg:h-[395px] my-10 mx-auto'
          />
        
          <div className='md:flex'>

            <div className='w-[80%] md:w-[50%]'>
              <p className='text-[24px] pb-8 md:text-[36px] w-[65%]'>Making students achieve academic excellence</p>
            </div>

            <div className='md:w-[50%] md:flex md:flex-col items-start'>
              <p className='text-[16px] mb-10'>JTC, Jacobian Training College in full is a tutorial centre. At JTC, we have expert in different subjects tutor students in those subjects.</p>
              <p className='text-[16px] mb-8'>Our tutoring method makes it easy for students to achieve academic excellence.</p>
              <Link to="about">
                <button className='bg-[#000000] w-[100%] md:w-[40%] py-4 px-6 my-4 text-white text-[12.8px] md:text-[16px]'>
                  Find out more
                </button>
              </Link>
            </div>

          </div>

        </div>

      </div>

      <div className='bg-[#000000] text-white'>
        <div className='pt-24 pb-10 w-[80vw] m-auto md:flex'>

          <div className='md:w-[60%]'>

            <h3 className='mb-12 text-[14.4px] md:text-[18px] text-left'>
              Who is JTC for?
            </h3>

            <div>
              <img
                src={placeholder} 
                alt="Students in class"
                className='rounded-[100%] w-[80%] h-[60vh] mx-auto mb-10'
              />    
            </div>

          </div>

          <div className='md:w-[40%] mt-10'>
            <p className='text-[24px] md:text-[36px] mb-8'>Want to excell academically? You are in the right place</p>
            <p className='text-[14.4px] md:text-[18px] mb-8'>You don't need to be the best student in your school or class to attend JTC, you just need to be dilligent and disciplined.</p>
            <Link to="classes">
              <button className='bg-soft-blue w-[80%] md:w-[70%] py-4 px-12 my-4 text-white text-[12.8px] md:text-[16px]'>
                View all classes
              </button>
            </Link>
          </div>

        </div>
      </div>

      <div className='bg-pale-red py-8'>
        <img
          src={class2}
          alt="students' studying"
          className='w-[100vw] h-[510px]'
        />
        <div className='absolute z-20 -translate-y-[30rem] md:-translate-y-[30rem] translate-x-[5rem] w-[80%] md:w-[65%] h-[450px] bg-pale-red mx-auto md:ml-64 pt-12 pb-32 px-8 flex flex-col items-start'>
          <p className='mb-8 text-[19.2px] md:text-[24px]'>Prepare yourself for excellence</p>
          <p className='mb-8 text-left text-[16px] md:text-[17.6px]'>Our classes are designed to groom students academically. So, if you want to be on top of your academics</p>
          <Link to="enroll">
            <button className='bg-[#000000] py-4 px-20 my-4 text-white text-[12.8px] md:text-[16px]'>
                Enroll now
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;