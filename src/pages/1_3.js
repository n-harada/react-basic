import React, { useState } from "react"

const InitialTodoList = [ "a", "b", "c" ]

export const Page1_3 = () => {

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
      <button onClick={ () => addTodo( title ) }>
        追加
      </button>
      <input
        type="text"
        value={ title }
        onChange={ e => setTitle( e.target.value ) } />

      {/* 追記 */ }
        <InputForm/>
    </main>
  )
}

const InputForm=()=>{
  return(
    <input type="text" value="new input"/>
  )
}

// コンポーネントを分ける意味
