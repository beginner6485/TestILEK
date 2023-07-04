import { useEffect, useState } from "react";
import "./App.css";
import AnswerGenerate from "./Components/AnswersGenerate";


function App() {
  const [questions, setQuestions] = useState<any>();
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch("/environment_questions")
      .then((response) => response.json())
      .then((data) => {
      setQuestions(data)
      console.log(questions)
    }
      );
    }, []);

  const handleSubmit = () => {
      let i = 0;
      setIsVisible(true)
      let checked = document.querySelectorAll(".answers:checked")
      console.log(questions)
      checked.forEach ( item => {
      
      let name = item.getAttribute("name")

      const question = questions.find((element : any) => element.id == name)
      console.log (question)
    
      const answerChecked = question.answers.find((element : any)=> element.id == item.id)
      console.log (answerChecked)

      if (answerChecked.isCorrect === true ) {
       i++;
      }
    }) 
    setCorrectAnswersCount(i)
  }
 
  return (
  <div className="App">
    <h1>Teste tes connaissances</h1>
    <div className="Formulaire">
      {questions ? (
        questions.map(({ id, question, answers }: any) => {
          return (
            <div key={id}>
              <p className="questionStyle">{question}</p>
              <AnswerGenerate 
              answerprop={answers} 
              idquestion={id}
              />
    
            </div>
          );
        })
      ) : (
        ""
      )}
      
    </div>
    <button onClick={handleSubmit} className="button">Soumettre</button>
    {isVisible === true? <p>Vous avez {correctAnswersCount} bonne(s) réponse(s)</p>:""}
  </div>
)};

  export default App;


  //disabled={submitDisabled}
  // // {JSON.stringify(answers)} 
  // {answers ? (answers.map(({ id, answer, isCorrect }: any) => {
  //   console.log(id);
  //   return (
  //     <div key={id}>
  //       <input type="radio"/>
  //       <label>{answer}</label> 
  //     </div>
  //   );
  // })
  // ) : (
  //   ""
  // )}