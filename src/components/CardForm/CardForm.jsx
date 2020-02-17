import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CardSubmitBtn, MdTextEditor } from '../components';

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
      <MdTextEditor
        name="question"
        register={register}
      />
      <MdTextEditor
        name="answer"
        register={register}
      />

      <CardSubmitBtn />
    </form>
  );
}

export default CardForm;
