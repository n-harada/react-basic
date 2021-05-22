import React, { useState, useEffect } from "react"

const InitialTodoList = [
  { title: "a", ID: "a", created_at: new Date() },
  { title: "b", ID: "b", created_at: new Date() },
  { title: "c", ID: "c", created_at: new Date() },
]

export const Page5_4 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList )

  const appendTodo = ( newTodo ) => {
    const newTodoList = [ ...todoList, newTodo ]
    setTodoList( newTodoList )
  }

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
      <InputForm
        appendTodo={ appendTodo }
        prependTodo={ prependTodo }
        todoTitleList={ todoList.map( todoItem => todoItem.title ) } // todoListのtodoからtitleだけを取り出したtitleの配列をInputFormに渡す
      />
    </main>
  )
}

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

const InputForm = ( { appendTodo, prependTodo, todoTitleList } ) => {

  const [ title, setTitle ] = useState( "" );

  useEffect( () => {
    console.log( `titleが変更されました: ${ title }` )
  }, [ title ] )

  // 新しいtodoを作成という責務は変えない
  const createNewTodo = ( addType ) => {
    const newTodo = {
      title,
      ID: new Date().toString(),
      created_at: new Date()
    }

    addType === PREPEND ?
      prependTodo( newTodo ) :
      appendTodo( newTodo )

    setTitle( "" )
  }

  // 新しいtodo作成前のvalidationを担う関数を作る
  const confirmCreateTodo = ( addType ) => {

    // 追記
    // タイトルがない場合はreturnして何をしない
    if( !title ) {
      alert( "タイトルを入力してください" )
      return
    }

    // 追記
    // 前のifでreturnしているのでifでも良いが、前の条件でのreturnし忘れ時にも同時発火しないようにelse ifにした
    else if(
      todoTitleList.includes( title ) && // 配列.includes()で、配列が引数を含んでいるかの真偽値を得る
      !window.confirm( "同名タイトルのtodoがあります\n追加しますか？" ) // ネストを防ぐため、&&で条件を一つにした
    ) {
      return
    }

    createNewTodo( addType ) // 上記の条件に引っかからなければここに到達して無事にtodoを作成
  }

  return (
    <>
      <input
        type="text"
        placeholder="タイトルを入力してください"
        value={ title }
        onChange={ e => setTitle( e.target.value ) } />

      {/* onClickをconfirmCreateTodoの実行に変更 */ }
      <button onClick={ () => confirmCreateTodo( PREPEND ) }>
        先頭に追加
      </button>
      <button onClick={ () => confirmCreateTodo( APPEND ) }>
        末尾に追加
      </button>
    </>
  )
}
