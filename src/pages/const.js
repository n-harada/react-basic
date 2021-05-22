// export const もしくは export { 変数名 } で、import側では変数名を変えられないnamed exportになる(推奨)
// ただし、一度その変数名で受け取った後にas で書き換えるのは有効である
// 例 import { NamedComponent as Component } from "./component" では、"Component"でimportしたコンポーネントが使える
// named export によって同じコンポーネントがファイルによって別の名前で使われることを防げる(混乱の回避や検索性の向上等)
export const PREPEND = "prepend"
export const APPEND = "append"
export const INSERT = "insert"
