import React, { useState, useEffect } from "react"

const InitialTodoList = [
  { title: "a", ID: "a", created_at: new Date() },
  { title: "b", ID: "b", created_at: new Date() },
  { title: "c", ID: "c", created_at: new Date() },
]

export const Page5_3 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList )

  // 末尾に追加する関数はaddTodoからappendTodoに名前を変更
  const appendTodo = ( newTodo ) => {
    const newTodoList = [ ...todoList, newTodo ]
    setTodoList( newTodoList )
  }

  // 追記
  const prependTodo = ( newTodo ) => {
    const newTodoList = [ newTodo, ...todoList ]
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

      {/* 変更 appendTodoとprependTodoをInputFormに渡す */ }
      <InputForm
        appendTodo={ appendTodo }
        prependTodo={ prependTodo } />
    </main>
  )
}

// 追記 変数として定義することでエディタの補完を効かせ、また、タイポを防ぐ
const PREPEND = "prepend"
const APPEND = "append"

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
      { ` ${ created_at.toLocaleDateString() }` }
      <button
        onClick={ removeThisItem }>
        削除
      </button>
    </li>
  )
}

// 変更 appendTodoとprependTodoをpropsとして受け取る
const InputForm = ( { appendTodo, prependTodo } ) => {

  const [ title, setTitle ] = useState( "" );

  useEffect( () => {
    console.log( `titleが変更されました: ${ title }` )
  }, [ title ] )

  // 先頭に追加か末尾に追加か、引数で実行し分けるようにする
  const createNewTodo = ( addType ) => {
    const newTodo = {
      title,
      ID: new Date().toString(),
      created_at: new Date()
    }

    // 三項演算子でprependとappendの実行仕分け
    addType === PREPEND ?
      prependTodo( newTodo ) :
      appendTodo( newTodo )

    setTitle( "" )
  }

  return (
    <>
      <input
        type="text"
        placeholder="タイトルを入力してください"
        value={ title }
        onChange={ e => setTitle( e.target.value ) } />

      {/* ボタンを追加して、引数PREPEND="prepend"を入れたcreateNewTodoをonClick時に発火させる*/ }
      <button onClick={ () =>
        title ?
          createNewTodo( PREPEND ) :
          alert( "タイトルを入力してください" ) }>
        先頭に追加
      </button>

      {/* ボタンの文言を変え、createNewTodoに引数APPEND="append"を追加する */ }
      <button onClick={ () =>
        title ?
          createNewTodo( APPEND ) :
          alert( "タイトルを入力してください" ) }>
        末尾に追加
      </button>
    </>
  )
}
