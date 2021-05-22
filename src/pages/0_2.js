import React, { useState } from "react"

const InitialTodoList = [ "a", "b", "c" ]

export const Page0_2 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList )

  return (
    <main>
      <ul>
        { todoList.map( todoItem =>
          <li key={todoItem}>{ todoItem }</li>
        ) }
      </ul>
      
      {/* 削除ボタンを追加 */}
      <button onClick={ () => setTodoList( [] ) }>
        削除
      </button>
    </main>
  )
}

// onClick属性
