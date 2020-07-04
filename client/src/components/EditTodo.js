import React, { Fragment, useState } from 'react';

export default function EditTodo({ todo }) {
  const [description, setDescription] = useState(todo.description);

  const handleChange = event => setDescription(event.target.value);

  const popModal = () => setDescription(todo.description);

  // Edit description function.
  const updateDescription = async event => {
    event.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );
      window.location = '/';
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning btn-sm"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
        onClick={popModal}
      >
        Edit
      </button>

      <div id={`id${todo.todo_id}`} className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header align-items-center">
              <h4 className="modal-title">Edit todo</h4>
              <button type="button" className="close m-0" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body ">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={handleChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={event => updateDescription(event)}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
