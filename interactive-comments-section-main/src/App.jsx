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

       <div>

            <img src="" alt="#" />
            <strong>ambyrobson</strong>
            <span>1 month ago</span>
            {/* <button>Reply</button> */}
            </div>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repudiandae assumenda ipsam pariatur ad quam similique, quaerat totam porro recusandae impedit consequatur cumque nemo architecto voluptatibus aperiam fugiat. Deserunt, aliquid!
              Obcaecati quaerat est facilis optio dicta id ratione quos repudiandae eligendi alias cupiditate reiciendis repellat soluta doloribus distinctio sapiente vitae earum deleniti, necessitatibus officiis praesentium ex reprehenderit saepe. Voluptatum, quas?
              Nemo aut maiores expedita enim laboriosam reprehenderit tempore. Voluptatem natus reiciendis quae dolorem recusandae cumque rerum nostrum, provident laborum laboriosam quibusdam ut officia soluta, ipsam nisi aut molestias minus placeat.
              At aspernatur doloremque consequatur quod excepturi aut a explicabo aliquam quam! Repellendus quibusdam quia temporibus sint aspernatur distinctio ipsum amet, quae recusandae animi quo rerum nihil eaque repellat minus nostrum!
              Doloribus itaque delectus repellendus perspiciatis officiis dolore, sint magnam fugiat iste sit necessitatibus commodi quo repellat minus temporibus, voluptate deleniti ut tempora soluta saepe assumenda. Amet earum sunt aliquid odit.
              </p>

            <div className='commentCounter'></div>

            <div>
              
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
