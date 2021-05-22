import React, { useState } from "react"

// 初期値
const InitialTodoList = [ "a", "b", "c" ]

export const Page0_1 = () => {

  const [ todoList, setTodoList ] = useState( InitialTodoList ) // 状態変数を追加

  return (
    <main>
      <ul>
        {/* todoListの要素をひとつずつmap関数で<li>{ todoItem}</li>に変換して新たな配列を生成 */ }
        { todoList.map( todoItem =>
          <li key={ todoItem }>{ todoItem }</li> // {}の中はJavaScriptのコードが書ける
        ) }
      </ul>

      {/* 配列は展開されてレンダリングされる */ }
      {/* <div>
        { [ 1, 2, 3, 4 ] } 
      </div> */}
    </main>
  )
}

// 状態変数の話 セッター
// 配列のメソッド
// 配列は展開されてレンダリング
