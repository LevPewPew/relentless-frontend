import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { SubmitBtn, MdTextEditorField } from 'components';

const webServer = process.env.REACT_APP_BACKEND_URL;

function CardForm() {
  const deckId = useSelector((state) => state.flashCardsReducer.currentDeck._id);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const postCardsData = async (data) => {
      let res = await axios.post(`${webServer}/cards`, data);
      
      return res;
    }

    const setCardsData = (newCard) => {
      dispatch({ type: 'APPEND_CARDS_DATA', newCard: newCard });
    }

    try {
      await postCardsData(data);
      setCardsData(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="CardForm" onSubmit={handleSubmit(onSubmit)}>
      <MdTextEditorField
        name="question"
        register={register}
      />
      <MdTextEditorField
        name="answer"
        register={register}
      />
      <input type="text" name="deckId" ref={register} value={deckId || ''} hidden readOnly/>

      <SubmitBtn
        text="Add Card"
      />
    </form>
  );
}

export default CardForm;
