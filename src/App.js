  import { useState } from 'react'
  import './App.css';

  function App() {

    const [selected, setSelected] = useState (null)

    const toggle = (i) => {
      if (selected === i){
        return setSelected(null)
      }
      setSelected(i)
    }

    return (
      <div className="wrapper"> 
      <div className="accordion">
        {data.map((item, i)=> (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+' }</span>

            </div>
            <div className= {
              selected === i ? 'content show' : 'content' 
            }
            >
            {item.answer}
            </div>
            </div>
        ))}
          </div>
    </div>
    )
  }

  const data = [
    {

        question: 'public',
        answer: 'ueuehgnf'
  },
  {

          question: 'src',
          answer: 'ueuehgnf'
  }
  ]


  export default App;
