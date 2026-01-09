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
  
  return (
    <>
      <main>
        <article className='comment'>

       <div className='info'>

            <img src="" alt="#" />
            <strong>{jsonData.currentUser.username}</strong>
            <span>1 month ago</span>
            {/* <button>Reply</button> */}
            </div>

              <p className='contentText'>Lorem i id ratione quos repudiandae eligendi alias cupiditate reiciendis repellat soluta doloribus distinctio sapiente vitae earum deleniti, necessitatibus officiis praesentium ex reprehenderit saepe. Voluptatum, quas?
              Nemo aut repellendus perspiciatisciinus temporibus, voluptate deleniti ut tempora soluta saepe assumenda. Amet earum sunt aliquid odit.
              </p>

            <div className='commentCounter'></div>

            <div className='buttons'>
              
            <button>Delete</button>
            <button>Reply</button>
            </div>

        </article>

        <section className='replySection'>

          <img src="" alt="#" />
          <form action="#">

            <div>

            <label htmlFor="textBox"></label>
            <input type="text" />
            </div>

            <button>SEND</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
