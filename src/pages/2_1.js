import React, { useState } from "react"

const InitialTodoList = [ "a", "b", "c" ]

export const Page2_1 = () => {

  // title状態変数を削除(InputFormに移動)
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
      <button onClick={ () => addTodo( "" ) }>
        追加
      </button>
      <InputForm />
    </main>
  )
}

const InputForm = () => {

  // 追記(親から移動)
  const [ title, setTitle ] = useState( "" );

  return (
    <input
      type="text"
      value={ title }
      onChange={ e => setTitle( e.target.value ) } />
  )
}

// どこに状態変数に持たせるか
// propsバケツリレー
