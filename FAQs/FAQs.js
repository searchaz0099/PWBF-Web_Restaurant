import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./FAQs.css"


export default function FAQs(){
    const [faq, setfaq] = useState([])

    const getHours = async () => {
      try {
        let response = await axios.get('http://localhost:8000/api/faq/')
        setfaq(response.data);
      } catch(e) {
        console.log(e.message);
      }
      } 
  
    useEffect(() => {
      getHours();
    }, [])

    const Openclose = (index) => {
        setfaq(faq.map((faq, i) => {
          if (i === index) {
            return {
              ...faq,
              visible: !faq.visible,
            };
          }
          return faq;
        }));
      }
    
      return (
        <div className='faq'>
            <div>
                {faq.map((faq, index) => (
                <div key={faq.question}>
                    <div className='faq-box-questions' onClick={() => Openclose(index)}>{faq.question}</div>
                    {faq.visible && <div className='faq-box-answers'>{faq.answer}</div>}
                </div>
                ))}
            </div> 
            <div className='runtext'>
                <a href='https://wa.me/0851722249015'>WhatsApp</a>
            </div>
        </div>
      );
}