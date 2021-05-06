import Link from 'next/link'
import { useState } from 'react'
import { fetchTodos } from '../../util/contentfulPosts'
import { createTodo } from '../../util/contentfulCreateClient'
import Counter from '../../components/Counter'
import NameForm from '../../components/NameForm'

export default function Nihongo({ initialTodos }) {
  // 作成したtodoを入れておくためのstate
  const initialTodosText = initialTodos.map(todo => todo.todoTitle)
  const [todos, setTodos] = useState(initialTodosText);
  // フォームに入力された値をtodoに登録するまでに入れておくためのstate
  const [tmpTodo, setTmpTodo] = useState("");

  const addTodo = () => {
    // formの内容が空白の場合はalertを出す
    if (tmpTodo === "") {
      alert("文字を入力してください")
      return
    }
    setTodos([...todos, tmpTodo])
    setTmpTodo("")
    createTodo(tmpTodo)
  };

  // todoを削除する処理
  const deleteTodo = index => {
    const newTodos = todos.filter((todo, todoIndex) => {
      return index !== todoIndex;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo App</h1>
      <div className="form">
        <input
          type="text"
          name="todo"
          // formの入力値をtmpTodoで持っておく
          onChange={e => setTmpTodo(e.target.value)}
          value={tmpTodo}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
      <div className="playground">
        <div className="counter">
          <Counter />
        </div>
        <div className="name-form">
          <NameForm />
        </div>
      </div>

      <div className="backToHome">
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
      <style>{`
        h1 {
          text-align: center;
        }
        .form {
          display: flex;
          justify-content: center;
        }
        .playground {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        
        ul {
          width: 200px;
          margin: 10px auto;
        }
        .backToHome {
          text-align: center;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const todosRes = await fetchTodos()
  const initialTodos = await todosRes.map(todo => todo.fields)
  return {
    props: {
      initialTodos
    },
  }
}