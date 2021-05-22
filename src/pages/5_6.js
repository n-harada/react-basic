import React, { useState, useEffect } from "react"
// default import(import側で変数名を変えられる。export側ではItemという名前のコンポーネントだったが、TodoItemという名前でこのファイル内では扱っている) 
import TodoItem from "./TodoItem"

// named import export側で指定した変数名でしか扱えない ただし、"as" を使って(import { NamedComponent as Component } from "./component") で変えられる 
import { PREPEND, APPEND, INSERT } from "./const"

const InitialTodoList = [
  { title: "a", ID: "a", created_at: new Date() },
  { title: "b", ID: "b", created_at: new Date() },
  { title: "c", ID: "c", created_at: new Date() },
]

export const Page5_6 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList )

  const appendTodo = ( newTodo ) => {
    const newTodoList = [ ...todoList, newTodo ]
    setTodoList( newTodoList )
  }

  const prependTodo = ( newTodo ) => {
    const newTodoList = [ newTodo, ...todoList ]
    setTodoList( newTodoList )
  }

  const insertTodo = ( newTodo, insertIndex ) => {

    const newTodoList = []

    todoList.forEach( ( todoItem, index ) => {
      index === insertIndex && newTodoList.push( newTodo ) 
      newTodoList.push( todoItem )
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
        insertTodo={ insertTodo }
        todoTitleList={ todoList.map( todoItem => todoItem.title ) }
      />
    </main>
  )
}


const InputForm = ( { appendTodo, prependTodo, insertTodo, todoTitleList } ) => {

  const [ title, setTitle ] = useState( "" );
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

    if( addType === PREPEND ) prependTodo( newTodo )
    if( addType === APPEND ) appendTodo( newTodo )
    if( addType === INSERT ) insertTodo( newTodo, Number( insertIndex ) )

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
      <input
        type="number"
        min="0"
        max={ String( todoTitleList.length - 1 ) }
        value={ insertIndex }
        onChange={ e => setInsertIndex( e.target.value ) } />
      <button onClick={ () => confirmCreateTodo( INSERT ) }>
        上記indexに追加
      </button>
    </>
  )
}
