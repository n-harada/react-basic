import React, { useState } from "react"

const InitialTodoList = [ "a", "b", "c" ]

export const Page0_3 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList )

  // 追記
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

      {/* 追記 */ }
      <button onClick={ () => addTodo() }>
        追加
      </button>
    </main>
  )
}

// スプレッド演算子
