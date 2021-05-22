import React, { useState, useEffect } from "react"

const InitialTodoList = [
  { title: "a", ID: "a" },
  { title: "b", ID: "b" },
  { title: "c", ID: "c" },
]

export const Page5_1 = () => {

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
      {/* 追記 */ }
      { `現在のtodoは${ todoList.length }個です` }
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

  useEffect( () => {
    // alert( `${ title }が作成されました` ) // マウント時 うるさいのでコメントアウト
    // return () => alert( `${ title }が削除されました` ) // アンマウント時 うるさいのでコメントアウト
  }, [] )

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

  useEffect( () => {
    console.log( `titleが変更されました: ${ title }` )
  }, [ title ] )

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
