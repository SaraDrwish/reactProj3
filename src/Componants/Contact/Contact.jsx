import React , { useRef, useState } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

function Contact() {


// email js start
    
    const form = useRef();
    
    const [done, setDone] = useState(false);
    // const [clearInput, setClearInput] = useState(" ");
    // const { reset } = useForm;
    
    // const hundelClear = (e) => {

    //  }

    const sendEmail = (e) => {
      
    e.preventDefault();
     emailjs.sendForm('service_njoiiuf', 'template_dugg5bs', form.current, 'XekGWAkZmKhy1iUW5')
        .then((result) => {
        //   clearInput = " "
             console.log(result.text);
            setDone(true)
       }, (error) => {
          console.log(error.text);
      });
  };

    
    // --------------email js end 


  return (
      <div className='contact'>
          
          <div className="cont-left">
              <span>Get in touch </span>
               <span> contact me </span>
              <div className="blur"></div>
          </div>

          <div className="cont-right">
              
              <form ref={form} onSubmit={sendEmail}   >
                  
                  <input
                  
                //       onChange={e => {
                //      setClearInput(e.target.value)
                //   }}
                      
                      type="text" name='userName' className='user' placeholder='Name'   id='name'    />
                  

                  <input   
                    //   onChange={e => {
                    //       setClearInput(e.target.value)
                    //   }}
                      type="email" name="userEmail" className='email' placeholder='Email'  id='email'  />
                  
                  <textarea name="texteria" className='texteria' cols="20" rows="8" placeholder='Message'  ></textarea>
                  {/* <input type="submit" value="send" className='button' /> */}
                  <button
                      
                    //   onClick={() => {
                          
                    //    }}


                      type='submit' value="send" className='btn'  > Send </button>
                  <span> { done && "Thanks for Contact me,I'll replay you soon" } </span>
                  <div className="blur"></div>
              </form>
          </div>


      
      </div>

  )
}

export default Contact
