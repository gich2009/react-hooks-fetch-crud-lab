import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onDeleteQuestion, onSelectOption}) {

  const questionList = questions.map((question) => <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} onSelectOption={onSelectOption}/>);
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
