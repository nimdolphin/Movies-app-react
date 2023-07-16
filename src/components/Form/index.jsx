import React from "react";

import { useState } from "react";

import "./styles.scss";
import form from "../../img/form.jpeg"


const Form = () => {
  const render0 = (
      <div>hello! click any button</div>
  )

  const [chosenBtn, setBtn] = useState(render0);

  const render1 = (
    <>
      <div>hey!how are you</div>
      <div>do you want to log in?</div>
      <button>yes I do</button>
    </>
  )

  const render2 = (
     <button>sing up</button>
  )

  const render3 = (
      <div>are you admin?</div>
  )

  const render4 = (
      <div>do you want to sing up?</div>
  )

  const handleClickBtn = (render) => () => {
    setBtn(render);
  }

  return (
    <div className='container-form'>
      <div className='img1'>
        <img className="img-form" src={form} alt="" />
      </div>

      <div className='form1'>
        <div className='button'>
          <button className='btn' onClick={handleClickBtn(render1)} >login</button>
          <button className='btn' onClick={handleClickBtn(render2)} >sign up</button>
          <button className='btn' onClick={handleClickBtn(render3)}>login admin</button>
          <button className='btn' onClick={handleClickBtn(render4)}>sign up admin</button>

          <h1>{chosenBtn}</h1>
        </div>
      </div>
    </div>

  )
}

export default Form;
