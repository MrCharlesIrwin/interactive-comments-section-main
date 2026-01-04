import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <article>

          <section className='commentContent'>

            <img src="" alt="#" />
            <strong>ambyrobson</strong>
            <span>1 month ago</span>
            {/* <button>Reply</button> */}
            </section>
          
          <aside className='commentInteraction'>

            <div className='commentCounter'></div>
            <button>Delete</button>
            <button>Reply</button>
          </aside>

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
