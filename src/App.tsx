/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, FC, ReactElement} from 'react'
import { QuestionProps } from './App.types';
import data from './data';
import Question from './Question';

const App : FC = () : ReactElement => {
  const [questions, setQuestions] = useState<QuestionProps[]>(data); 

  return (
    <main>    
      <div className="container glassmorphism">
        <h3>interview questions and answers.</h3> 
        <section className="info">
          {
            questions.map((question) =>{
              return <Question key={question.id}  {...question} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
