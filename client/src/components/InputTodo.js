import React, { Fragment, useState } from 'react';

export default function InputTodo(props) {
  const [description, setDescription] = useState('');

  const handleChange = event => {
    setDescription(event.target.value);
  };

  const onSubmitForm = async event => {
    event.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      // Refresh to root.
      window.location = '/';
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
}
