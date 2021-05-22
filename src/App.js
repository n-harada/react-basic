import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import { FinishedPage } from "./pages/finished"
import { Page0_0 } from "./pages/0_0"
import { Page0_1 } from "./pages/0_1"
import { Page0_2 } from "./pages/0_2"
import { Page0_3 } from "./pages/0_3"
import { Page1_1 } from "./pages/1_1"
import { Page1_2 } from "./pages/1_2"
import { Page1_3 } from "./pages/1_3"
import { Page2_1 } from "./pages/2_1"
import { Page2_2 } from "./pages/2_2"
import { Page2_3 } from "./pages/2_3"
import { Page3_1 } from "./pages/3_1"
import { Page3_2 } from "./pages/3_2"
import { Page3_3 } from "./pages/3_3"
import { Page3_4 } from "./pages/3_4"
import { Page4_1 } from "./pages/4_1"
import { Page5_1 } from "./pages/5_1"
import { Page5_2 } from "./pages/5_2"
import { Page5_3 } from "./pages/5_3"
import { Page5_4 } from "./pages/5_4"
import { Page5_5 } from "./pages/5_5"
import { Page5_6 } from "./pages/5_6"

function App() {
  return (
    <BrowserRouter>
      <div style={ { display: "flex" } }>
        <ol >
          <li>
            <LinkWithActiveColor to='/0_0' >自分で書いたもの</LinkWithActiveColor>
            <span></span>
          </li>
          <li>
            <LinkWithActiveColor to='/0_1' >0_1. todoListをレンダリング</LinkWithActiveColor>
            <span>状態変数 セッター, 配列のメソッド, 配列は展開されてレンダリング</span>
          </li>
          <li>
            <LinkWithActiveColor to='/0_2' >0_2. 削除ボタンの追加</LinkWithActiveColor>
            <span>onClick属性</span>
          </li>
          <li>
            <LinkWithActiveColor to='/0_3' >0_3. todo追加関数の実装</LinkWithActiveColor>
            <span>スプレッド演算子</span>
          </li>
          <li>
            <LinkWithActiveColor to='/1_1' >1_1. input要素での入力値を保持</LinkWithActiveColor>
            <span>onChange, valueでのデータバインディング, イベントオブジェクト</span>
          </li>
          <li>
            <LinkWithActiveColor to='/1_2' >1_2. 入力値のtodo追加</LinkWithActiveColor>
          </li>
          <li>
            <LinkWithActiveColor to='/1_3' >1_3. input要素を分離</LinkWithActiveColor>
            <span>コンポーネントを分ける意味</span>
          </li>
          <li>
            <LinkWithActiveColor to='/2_1' >2_1. InputFormに状態変数を持たせる</LinkWithActiveColor>
            <span>どこに状態変数に持たせるか, propsバケツリレー</span>
          </li>
          <li>
            <LinkWithActiveColor to='/2_2' >2_2. InputFormにaddTodo関数を渡して実行させる</LinkWithActiveColor>
            <span>関数も子に渡せる(親の代わりに実行), Reactフラグメント</span>
          </li>
          <li>
            <LinkWithActiveColor to='/2_3' >2_3. 入力値がない状態ではアラートを出す</LinkWithActiveColor>
            <span>3項演算子, alert</span>
          </li>
          <li>
            <LinkWithActiveColor to='/3_1' >3_1. todoをオブジェクトにしてIDを持たせる</LinkWithActiveColor>
            <span>オブジェクト</span>
          </li>
          <li>
            <LinkWithActiveColor to='/3_2' >3_2. todo削除関数の実装</LinkWithActiveColor>
            <span>配列のメソッド filter, ディープコピー</span>
          </li>
          <li>
            <LinkWithActiveColor to='/3_3' >3_3. 新規のtodoにはタイムスタンプをIDに持たせる</LinkWithActiveColor>
            <span>コンストラクタ</span>
          </li>
          <li>
            <LinkWithActiveColor to='/3_4' >3_4. 削除の際に確認ダイアログを開く</LinkWithActiveColor>
            <span>
              短絡評価, confirm
          </span>
          </li>
          <li>
            <LinkWithActiveColor to='/4_1' >4_1. 削除時に確認アラートを出す</LinkWithActiveColor>
            <span>
              マウント, useEffect, テンプレートリテラル
          </span>
          </li>
          <li>
            <LinkWithActiveColor to='/finished' >(完成品)</LinkWithActiveColor>
          </li>
          <hr></hr>
          <h3>追加課題</h3>
          <li>
            <LinkWithActiveColor to='/5_1'>5_1. 現在のtodoの数をtodoList上部に表示</LinkWithActiveColor>
            <span>
              JSX内でのJSの実装, 配列のプロパティ, テンプレートリテラル
            </span>
          </li>
          <li>
            <LinkWithActiveColor to='/5_2' >5_2. 作成された日時もそれぞれのtodoに表示</LinkWithActiveColor>
            <span>
              Dateコンストラクタ、オブジェクトのプロパティ
            </span>
          </li>
          <li>
            <LinkWithActiveColor to='/5_3' >5_3. todoを先頭に追加するボタンをInputFormに追加</LinkWithActiveColor>
            <span>
              props, 3項演算子
            </span>
          </li>
          <li>
            <LinkWithActiveColor to='/5_4' >5_4. 追加するtodoと既に同名のtodoが存在するときに追加確認ダイアログを出し、OKなら追加</LinkWithActiveColor>
            <span>
              配列のmapメソッド, if文のネスト避け, window.confirm, 関数の設計
            </span>
          </li>
          <li>
            <LinkWithActiveColor to='/5_5' >5_5. 番号を指定するinput要素と、その番号の場所にtodoを追加するボタンをInputFormに追加</LinkWithActiveColor>
            <span>
              input要素、Numberコンストラクタ, 配列のforEachメソッド
            </span>
          </li>
          <li>
            <LinkWithActiveColor to='/5_6' >5_6. TodoItemとaddTypeをそれぞれ別ファイルTodoItem.jsとconst.jsに分ける</LinkWithActiveColor>
            <span>
              import, named import, export
            </span>
          </li>
        </ol>
        <div style={ { width: "100%" } }>
          <div style={ { padding: "8px 16px" } }>
            作成: 原田眞
        </div>
          <Route exact path='/0_0' component={ Page0_0 } />
          <Route exact path='/finished' component={ FinishedPage } />
          <Route exact path='/0_1' component={ Page0_1 } />
          <Route exact path='/0_2' component={ Page0_2 } />
          <Route exact path='/0_3' component={ Page0_3 } />
          <Route exact path='/1_1' component={ Page1_1 } />
          <Route exact path='/1_2' component={ Page1_2 } />
          <Route exact path='/1_3' component={ Page1_3 } />
          <Route exact path='/2_1' component={ Page2_1 } />
          <Route exact path='/2_2' component={ Page2_2 } />
          <Route exact path='/2_3' component={ Page2_3 } />
          <Route exact path='/3_1' component={ Page3_1 } />
          <Route exact path='/3_2' component={ Page3_2 } />
          <Route exact path='/3_3' component={ Page3_3 } />
          <Route exact path='/3_4' component={ Page3_4 } />
          <Route exact path='/4_1' component={ Page4_1 } />
          <Route exact path='/5_1' component={ Page5_1 } />
          <Route exact path='/5_2' component={ Page5_2 } />
          <Route exact path='/5_3' component={ Page5_3 } />
          <Route exact path='/5_4' component={ Page5_4 } />
          <Route exact path='/5_5' component={ Page5_5 } />
          <Route exact path='/5_6' component={ Page5_6 } />
        </div>
      </div>
    </BrowserRouter>
  );
}

const LinkWithActiveColor = ( { children, ...restProps } ) =>
  <NavLink exact activeStyle={ { color: "rgb(240, 0, 0)" } } { ...restProps }>
    { children }
  </NavLink>


export default App;
