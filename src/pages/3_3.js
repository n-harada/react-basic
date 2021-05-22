import React, { useState } from "react"

const InitialTodoList = [
  { title: "a", ID: "a" },
  { title: "b", ID: "b" },
  { title: "c", ID: "c" },
]

export const Page3_3 = () => {

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
          <li key={ todoItem }>
            { todoItem.title }
            <button onClick={ () => removeTodo( todoItem.ID ) }>
              削除
            </button>
          </li>
        ) }
      </ul>
      <InputForm addTodo={ addTodo } />
    </main>
  )
}

const InputForm = ( { addTodo } ) => {

  const [ title, setTitle ] = useState( "" );

  // 追記
  const createNewTodo = () => {
    const newTodo = {
      title,
      ID: new Date().toString() // 実行時の時間を文字列にしてvalueにする
    }
    addTodo( newTodo )
    setTitle( "" ) // 新しいTodoを作成したらtitleを空にする
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


// コンストラクタ
