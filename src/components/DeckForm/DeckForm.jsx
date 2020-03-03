import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { SubmitBtn } from 'components';

const webServer = process.env.REACT_APP_BACKEND_URL;

function DeckForm(props) {
  const { defaultValues, post, put } = props;
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    if (post) {
      handlePostRequest(data);
    } else if (put) {
      handlePostRequest(data);
      console.log('putted');
    }
  }

  const handlePostRequest = async (data) => {
    const postDecksData = async (data) => {
      let res = await axios.post(`${webServer}/decks`, data);
      
      return res;
    }

    const setDecksData = (newDecks) => {
      dispatch({ type: 'APPEND_DECKS_DATA', newDecks: [newDecks] });
    }

    try {
      await postDecksData(data);
      setDecksData(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    // TODO change these fields to be normal input and a textarea
    <form className="DeckForm" onSubmit={handleSubmit(onSubmit)}>
      <textarea name="title" ref={register} rows="10" cols="50" />
      <input type="text" placeholder="description" name="description" ref={register} />

      <SubmitBtn
        text="Create Deck"
      />
    </form>
  );
}

export default DeckForm;
