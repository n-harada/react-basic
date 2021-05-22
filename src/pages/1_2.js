import React, { useState } from "react"

const InitialTodoList = [ "a", "b", "c" ]

export const Page1_2 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList )
  const [ title, setTitle ] = useState( "" );

  const addTodo = ( newTodo ) => {
    const newTodoList = [ ...todoList, newTodo ]
    setTodoList( newTodoList )
  }

  return (
    <main>
      <ul>
        { todoList.map( todoItem =>
          <li key={ todoItem }>{ todoItem }</li>
        ) }
      </ul>
      <button onClick={ () => setTodoList( [] ) }>
        削除
      </button>

      {/* addTodoの引数にtitle 追記  */}
      <button onClick={ () => addTodo( title ) }> 
        追加
      </button>
      <input
        type="text"
        value={ title }
        onChange={ e => setTitle( e.target.value ) } />
    </main>
  )
}
