import React, { useState } from "react"

// アイテムを文字列からtitleとIDをkeyにもつオブジェクトに変更
const InitialTodoList = [
  { title: "a", ID: "a" },
  { title: "b", ID: "b" },
  { title: "c", ID: "c" },
]

export const Page3_1 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList )

  const addTodo = ( newTodo ) => {
    const newTodoList = [ ...todoList, newTodo ]
    setTodoList( newTodoList )
  }

  return (
    <main>
      <ul>
        { todoList.map( todoItem =>
          <li key={ todoItem }>

            {/* todoItem.title に変更 */ }
            { todoItem.title }

            {/* アイテムの中に移動 */ }
            <button onClick={ () => setTodoList( [] ) }>
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

  return (
    <>
      <input
        type="text"
        placeholder="タイトルを入力してください"
        value={ title }
        onChange={ e => setTitle( e.target.value ) } />
      <button onClick={ () =>
        title ?
          addTodo( { title } ) :
          alert( "タイトルを入力してください" ) }>
        追加
      </button>
    </>
  )
}

// オブジェクト
// オブジェクトのプロパティの取り出し方
