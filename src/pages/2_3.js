import React, { useState } from "react"

const InitialTodoList = [ "a", "b", "c" ]

export const Page2_3 = () => {

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
        placeholder="タイトルを入力してください"
        value={ title }
        onChange={ e => setTitle( e.target.value ) } />

        {/* onClickの内容変更 */}
      <button onClick={ () =>
        title ?
          addTodo( title ) :
          alert( "タイトルを入力してください" ) }>
        追加
      </button>
    </>
  )
}

// 三項演算子
// alert
