import React, { useState } from "react"

const InitialTodoList = [ "a", "b", "c" ]

export const Page2_2 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList )

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
      <InputForm addTodo={ addTodo } />
    </main>
  )
}

const InputForm = ( { addTodo } ) => {

  const [ title, setTitle ] = useState( "" );

  return (
    <>
    <input
      type="text"
      value={ title }
      onChange={ e => setTitle( e.target.value ) } />

      {/* 追記 */}
      <button onClick={ () => addTodo( title ) }>
        追加
      </button>
    </>
  )
}

// 関数も子に渡せる(親の代わりに実行)
// フラグメント
