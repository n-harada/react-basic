import React, { useState } from "react"

const InitialTodoList = [
  { title: "a", ID: "a" },
  { title: "b", ID: "b" },
  { title: "c", ID: "c" },
]

export const Page3_2 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList )

  const addTodo = ( newTodo ) => {
    const newTodoList = [ ...todoList, newTodo ]
    setTodoList( newTodoList )
  }

  // 追記
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

            {/* onClickでの実行関数をremoveTodoにする */ }
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

// 配列のメソッド filter
// ディープコピー

// const a = {}
// const b = a
// const c = {...a}
// b.keyb = "valueb"
// c.keyc = "valuec"
// console.log(a)

// const e = {}
// const f = {}
// console.log(e===f)
