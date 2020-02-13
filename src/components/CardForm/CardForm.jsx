import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CardSubmitBtn } from '../components';

const webServer = process.env.REACT_APP_BACKEND_URL;

function CardForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const postCardsData = async (data) => {
      let res = await axios.post(`${webServer}/cards`, data);
      
      return res;
    }

    // const setCardsData = async () => {
    //   try {
    //     let res = await getCardsData();
    //     dispatch({ type: 'SET_CARDS_DATA', newCardsData: res.data });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

    try {
      postCardsData(data);
    } catch (err) {
      console.log(err);
    }

    console.log('DATA: ', data);
  }

  // console.log(errors);
  
  return (
    <form className="CardForm" onSubmit={handleSubmit(onSubmit)}>
      <textarea name="question" ref={register} rows="10" cols="50" />
      <textarea name="answer" ref={register} rows="10" cols="50" />

      <CardSubmitBtn />
    </form>
  );
}

export default CardForm;
