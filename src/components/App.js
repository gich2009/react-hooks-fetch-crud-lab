import React, { useState, useEffect } from "react";
import AdminNavBar  from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

export const endPoint = "http://localhost:4000/questions";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(endPoint, {method: "GET"})
    .then((response) => response.json())
    .then((data) => setQuestions(data))
  },[questions, setQuestions])


  function addQuestion(newQuestion){
    setQuestions([...questions, newQuestion]);
  }

  function deleteQuestion(deleteId){
    setQuestions(questions.filter((question) => question.id !== deleteId));
  }

  function selectOption(updateId, updatedOption){
    setQuestions(questions.map((question) => {
      if(question.id !== updateId){
        return question;
      }
      return {...question, correctIndex: updatedOption};
    }));
  }
  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={addQuestion} /> : <QuestionList questions={questions} onDeleteQuestion={deleteQuestion} onSelectOption={selectOption}/>}
    </main>
  );
}

export default App;
