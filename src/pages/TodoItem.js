import React, { useEffect } from "react"

const Item = ( { title, ID, created_at, removeTodo } ) => {

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

// default export import先では自由に変数名を変えられる default export できる変数は各ファイル一つまで
export default Item
