import React, { useState, useEffect } from "react"

const InitialTodoList = [
  { title: "a", ID: "a", created_at: new Date() },
  { title: "b", ID: "b", created_at: new Date() },
  { title: "c", ID: "c", created_at: new Date() },
]

export const Page5_5 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList )

  const appendTodo = ( newTodo ) => {
    const newTodoList = [ ...todoList, newTodo ]
    setTodoList( newTodoList )
  }

  const prependTodo = ( newTodo ) => {
    const newTodoList = [ newTodo, ...todoList ]
    setTodoList( newTodoList )
  }

  // 指定したindexに新しいtodoを挿入する関数を追加
  // 途中に挿入するのは配列のメソッドspliceで実装できるが、ここではforEachを使っている
  const insertTodo = ( newTodo, insertIndex ) => {

    const newTodoList = [] // この配列にtodoを追加していく

    // todoListの各要素を一つずつ取り出す
    todoList.forEach( ( todoItem, index ) => { // 配列のメソッドの第二引数には取り出す要素のindexが入ることが多い
      index === insertIndex && newTodoList.push( newTodo ) // index が　insertIndexと同じならそこにnewTodoを追加
      newTodoList.push( todoItem ) // もとの配列の要素を追加
    } )
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
        insertTodo={ insertTodo } // insertTodoを渡す
        todoTitleList={ todoList.map( todoItem => todoItem.title ) }
      />
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
      { ` ${ created_at.toLocaleDateString() }` }
      <button
        onClick={ removeThisItem }>
        削除
      </button>
    </li>
  )
}

const PREPEND = "prepend"
const APPEND = "append"
// 追記
const INSERT = "insert"

const InputForm = ( { appendTodo, prependTodo, insertTodo, todoTitleList } ) => {

  const [ title, setTitle ] = useState( "" );

  // insertIndexを状態変数として持たせる
  const [ insertIndex, setInsertIndex ] = useState( 0 );

  useEffect( () => {
    console.log( `titleが変更されました: ${ title }` )
  }, [ title ] )

  const createNewTodo = ( addType ) => {
    const newTodo = {
      title,
      ID: new Date().toString(),
      created_at: new Date()
    }

    // else ifでも良いが、addTypeでしか分岐しないのでindentを揃えるために全てifにした
    if( addType === PREPEND ) prependTodo( newTodo )
    if( addType === APPEND ) appendTodo( newTodo )
    if( addType === INSERT ) insertTodo( newTodo, Number( insertIndex ) ) // insertIndexはinput要素を介しているため実は文字列なのでinsertTodoに渡す際にNumberコンストラクタで数値型に変換

    setTitle( "" )
  }

  const confirmCreateTodo = ( addType ) => {

    if( !title ) {
      alert( "タイトルを入力してください" )
      return
    }

    else if(
      todoTitleList.includes( title ) &&
      !window.confirm( "同名タイトルのtodoがあります\n追加しますか？" )
    ) {
      return
    }

    createNewTodo( addType )
  }

  return (
    <>
      <input
        type="text"
        placeholder="タイトルを入力してください"
        value={ title }
        onChange={ e => setTitle( e.target.value ) } />
      <button onClick={ () => confirmCreateTodo( PREPEND ) }>
        先頭に追加
      </button>
      <button onClick={ () => confirmCreateTodo( APPEND ) }>
        末尾に追加
      </button>

      {/* 追記 */ }
      <input
        type="number" // typeはnumber
        min="0" // min設定 文字列なことに注意
        max={ String( todoTitleList.length - 1 ) } // maxはtodoListの長さ-1に制限
        value={ insertIndex }
        onChange={ e => setInsertIndex( e.target.value ) } />

      {/* 追記 */ }
      <button onClick={ () => confirmCreateTodo( INSERT ) }>
        上記indexに追加
      </button>
    </>
  )
}
