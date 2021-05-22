import React, { useState } from "react"

const InitialTodoList = [
  { title: "a", ID: "a" },
  { title: "b", ID: "b" },
  { title: "c", ID: "c" },
]

export const Page3_4 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList )

  const addTodo = ( newTodo ) => {
    const newTodoList = [ ...todoList, newTodo ]
    setTodoList( newTodoList )
  }

  const removeTodo = ( todoID ) => {
    const newTodoList = todoList.filter( todoItem => todoItem.ID !== todoID )
    setTodoList( newTodoList.slice() )
  }

  return (
    <main>
      <ul>
        { todoList.map( todoItem =>
          <TodoItem
            title={ todoItem.title }
            ID={ todoItem.ID }
            removeTodo={ removeTodo }
            key={ todoItem.ID } />
        ) }
      </ul>
      <InputForm addTodo={ addTodo } />
    </main>
  )
}

const TodoItem = ( { title, ID, removeTodo } ) => {

  // 追記
  const removeThisItem = () =>
    window.confirm( "このアイテムを削除しますか？" ) && removeTodo( ID )

  return (
    <li>
      { title }
      <button
        onClick={ removeThisItem }>
        削除
      </button>
    </li>
  )
}

const InputForm = ( { addTodo } ) => {

  const [ title, setTitle ] = useState( "" );

  const createNewTodo = () => {
    const newTodo = {
      title,
      ID: new Date().toString()
    }
    addTodo( newTodo )
    setTitle( "" )
  }

  return (
    <>
      <input
        type="text"
        placeholder="タイトルを入力してください"
        value={ title }
        onChange={ e => setTitle( e.target.value ) } />
      <button onClick={ () =>
        title ?
          createNewTodo() :
          alert( "タイトルを入力してください" ) }>
        追加
      </button>
    </>
  )
}

// 短絡評価
// confirm
