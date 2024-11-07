import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";

export default function TicketForm({ dispatch, editingTicket }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  useEffect(() => {
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ticketData = {
      id: editingTicket ? editingTicket.id : new Date().toISOString(),
      title,
      description,
      priority,
    };

    dispatch({
      type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData,
    });

    clearForm();
  };

  const handleCancel = () => {
    dispatch({ type: "CLEAR_EDITING_TICKET" });
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div className="container flex items-center justify-between w-full ">
        <div className="">
          <label className="font-bold p-2 m-1">Title</label>
          <input
            type="text"
            value={title}
            className="form-input border-2 border-black width-28 "
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="font-bold p-2 m-1">Description</label>
          <input
            type="text"
            value={description}
            className="form-input border-2 border-black"
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>

        <fieldset className="priority-fieldset">
          <legend className="font-bold ">Priority</legend>
          <select
            type="checkbox"
            value={priority}
            
            className="priority-input "
            onChange={(e) => setPriority(e.target.value)}
          >
            {Object.entries(priorityLabels).map(([value, label]) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        </fieldset>

        <button
          type="submit"
          className="button border-2 rounded-full border-blue-500 bg-blue-500 text-white p-2"
        >
          Submit
        </button>

        {editingTicket && (
          <button
            className="button button border-2 rounded-full border-blue-500 bg-blue-500 text-white p-2"
            onClick={handleCancel}
          >
            Cancel Edit
          </button>
        )}
      </div>
    </form>
  );
}
