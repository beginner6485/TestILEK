import "../index_answerstyle.css"


function AnswerGenerate ({ answerprop, idquestion}){ 
    
        return (
            <div className='answserStyle'>
            {answerprop.map(({ answer, id}) => {
              return (
                <div key={id}>
                  <input 
                    className='answers'
                    type="radio"
                    name={idquestion}
                    id={id}
    
                  />
                  <label htmlFor="answer">{answer}</label>
                </div>
              );
            })}
          </div>
        );
      }
      
      export default AnswerGenerate;