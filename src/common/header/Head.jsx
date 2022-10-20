import React from 'react'
import './Header.css'

import { AiFillFlag, AiTwotonePhone} from "react-icons/ai";
import { BsEnvelopeFill} from "react-icons/bs";
function Head() {
  return (
    <div>
        <section className='head'>
            <div className='container d_flex'>
                <div className='left row'>
                    <AiTwotonePhone className="i"/>
                    <label>+91-8546040002</label>
                    <BsEnvelopeFill className="i"/>
                    <label>prashant2150487@gmail.com</label>
                </div>
                <div className='right row RText'>
                    <label>Theme FAQ's</label>
                    <label>NEED HElps</label>
                    <span><AiFillFlag ></AiFillFlag></span>
                    <label htmlFor=''>EN</label>
                    <span><AiFillFlag ></AiFillFlag></span>
                    <label htmlFor=''>USD</label>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Head