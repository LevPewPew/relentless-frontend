import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CardSubmitBtn } from '../components';

const webServer = process.env.REACT_APP_BACKEND_URL;

function CardForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const postCardsData = async (data) => {
      let res = await axios.post(`${webServer}/cards`, data);
      
      return res;
    }

    const setCardsData = (newCard) => {
      dispatch({ type: 'APPEND_CARDS_DATA', newCards: [newCard] });
    }

    try {
      postCardsData(data);
      setCardsData(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="CardForm" onSubmit={handleSubmit(onSubmit)}>
      <textarea name="question" ref={register} rows="10" cols="50" />
      <textarea name="answer" ref={register} rows="10" cols="50" />

      <CardSubmitBtn />
    </form>
  );
}

export default CardForm;
