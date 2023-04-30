import React from "react";
import { endPoint } from "./App";

function QuestionItem({ question , onDeleteQuestion, onSelectOption}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    fetch(`${endPoint}/${id}`, {method: "DELETE"});
    onDeleteQuestion(id);
  }

  function handleChange(event){
    // const updatedEntry = {correctIndex : event.target.value};
    fetch(`${endPoint}/${id}`, {method: "PATCH",
                                headers: {
                                  "Content-Type" : "application/json",
                                  "Accept" : "application/json"
                                },
                                body: JSON.stringify({correctIndex: event.target.value})});
    onSelectOption(id, event.target.value);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
