import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const [jsonData, setJsonData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data.json')
        const result = await response.json()
        setJsonData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  // Counter
  const [counterValue,setCounterValue] = useState(0)

  const handlCounterValue = (operation) => {
  if(operation === 'decrease') setCounterValue(counterValue => counterValue - 1)
  if(operation === 'increase') setCounterValue(counterValue => counterValue + 1)
  }
  
  return (
    <>
      <main>
        <article className='comment'>

       <div className='info'>

            {/* <img src="" alt="#" /> */}
            <strong>{jsonData?.currentUser?.username}</strong>
            <span>1 month ago</span>
            </div>


              <p className='contentText'>Lorem i id ratione quos repudiandae eligendi alias cupiditate reiciendis repellat soluta doloribus distinctio sapiente vitae earum deleniti, necessitatibus officiis praesentium ex reprehenderit saepe. Voluptatum, quas?
              Nemo aut repellendus perspiciatisciinus temporibus, voluptate deleniti ut tempora soluta saepe assumenda. Amet earum sunt aliquid odit.
              </p>

            <div className="buttonContainer">
              <button onClick={() =>handlCounterValue('decrease') }></button>
              <span>{counterValue}</span>
              <button onClick={() =>handlCounterValue('increase')}></button>
              </div>          
         
            <button className='reply'>Reply</button>
        </article>

        <section className='replySection'>

          {/* <img src="" alt="#" /> */}
          <form action="#">

                <img className='form__InputImage' src="./images/avatars/image-juliusomo.webp" alt="#" />
            <div className='form__InputTextWrapper'>

            <label htmlFor="textBox">
               <input id='textBox' type="text" />
            </label>
           
            </div>

            <button className='form__InputButton'>SEND</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
