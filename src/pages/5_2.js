import React, { useState, useEffect } from "react"

const InitialTodoList = [
  { title: "a", ID: "a", created_at: new Date() },
  { title: "b", ID: "b", created_at: new Date() },
  { title: "c", ID: "c", created_at: new Date() },
]

export const Page5_2 = () => {

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
      { `現在のtodoは${ todoList.length }個です` }
      <ul>
        { todoList.map( todoItem =>
          <TodoItem
            title={ todoItem.title }
            ID={ todoItem.ID }
            created_at={ todoItem.created_at }
            removeTodo={ removeTodo }
            key={ todoItem.ID } />
        ) }
      </ul>
      <InputForm addTodo={ addTodo } />
    </main>
  )
}

const TodoItem = ( { title, ID, created_at, removeTodo } ) => {

  useEffect( () => {
    // alert( `${ title }が作成されました` )
    // return () => alert( `${ title }が削除されました` )
  }, [] )

  const removeThisItem = () =>
    window.confirm( "このアイテムを削除しますか？" ) && removeTodo( ID )

  return (
    <li>
      { title }

      {/* 追記 moment.js等を使うと細かな表示設定ができる moment.jsは開発中止になったが… */ }
      {/* スペースを入れるためにテンプレートリテラルにしている */ }
      { ` ${ created_at.toLocaleDateString() }` }
      <button
        onClick={ removeThisItem }>
        削除
      </button>
    </li>
  )
}

const InputForm = ( { addTodo } ) => {

  const [ title, setTitle ] = useState( "" );

  useEffect( () => {
    console.log( `titleが変更されました: ${ title }` )
  }, [ title ] )

  const createNewTodo = () => {
    const newTodo = {
      title,
      ID: new Date().toString(),
      created_at: new Date() // 追記 「at」は点を指すので通常秒まで含むdatetime型、created_dateの場合はdate型(年月日)を表すことが多い
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
