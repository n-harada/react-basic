# JavaScript Handbook

文責: 原田眞

React でアプリケーション作成する上で、最低限必要な JavaScript の文法について説明する。
JavaScript には様々なバージョンがあるが、この教材では ES2015(ES6) というもので使える文法を中心に解説していく。

実際に手を動かす場として、ここでは playcode という実験環境（サンドボックスという）を使う。
サインアップをしなくても利用可能だが、自分が書いたコードを保存しておきたい場合は、サインアップしておくとよい。

- [PlayCode - Code Sandbox. Online Code Editor](https://playcode.io/empty/)

## さっそく書いてみよう

以下はシンプルな JavaScript のコード例である。

```js
// 変数の宣言
const myName = 'Taro';

// 値の表示
console.log(myName);
```

## まず知っておくべきこと

具体的な話に入る前に、JavaScript プログラミング全般に関して知っておくべきことをいくつか紹介する。

### コメントアウト

```js
// 一行のコメント

/* 

   複数行からなるコメント

*/
```

### 命名規則

命名規則とは、変数名や関数名をつける際に従うべきルールのことである。
JavaScript では、命名規則として「キャメルケース」が一般的に利用される。

命名規則は慣習的なものであり従わずともコードは動くが、特別な理由がなければ従うべきである。

```js
const countValue = 0;

function createUser() {}
```

また、円周率のように、定数であることを明示的に示したい場合は全て大文字（スネークケース）で表すことがある。

```js
const PI = 3.14;
const CONSTANT_NAME = 'constant';
```

### 行末のセミコロン`;`

モダンな JavaScript においては、文末にセミコロン`;`を付けないことが主流になりつつある(以前は`;`をつけないと正常に動作しなかった)。（今回扱うアプリケーションも`;`がついていないが、このハンドブックには`;`がついている）

プロジェクトやツールによって流儀が異なるので、注意が必要である。

```js
const countValue = 0; // ここのセミコロンのことである
```

### `console.log()`

コンソール上に文字列を表示するための関数である。変数の値を確認するために、非常によく利用する。`console.table` など亜種があるので、調べておくとデバッグ時に便利。

Python でいう `print()` 的な役割を持つ。

- [console - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/Console)

## 変数・データ型

### 変数宣言

ブログラミングには、数値や文字列などのデータに任意の名前をつけて、扱いやすくすることができる機能がある。この機能のことを「変数」という。

JavaScript では、「これが変数である」ということを明示的に示すために **「変数宣言のキーワード」を変数名の前に付ける** というルールがある。そのキーワードには、以下の 3 種類がある。

- `var`
  - どこからでもアクセスできる変数（グローバルな変数）の宣言方法
  - どこからでもアクセスできるがゆえ、思わぬ書き換えや変数名被りのリスクが伴う
  - **現在は非推奨とされ、いま新しくコードを書き始めるなら、ほぼ使わない**
- `let`
  - ブロックの中でのみ有効な変数で、かつ再代入可能な変数宣言
- `const`
  - ブロックの中でのみ有効な変数で、かつ再代入のできない変数宣言
  - ただし、オブジェクトのプロパティの再代入は可能（後述）

```js
let letA = 1000;
const constA = 1000;

letA = 2000; // エラーにならない
constA = 2000; // エラーになる
```

```js
if (true) {
  // この `{}` 内がブロックとみなされる
  const a = 10;
}
console.log(a); // ブロックの外から参照しようとするため、アクセスできない
```

### データ型

よく使う型には、以下のようなものがある。

- 数値
- 文字列
- 真偽値
- null, undefined
- オブジェクト
- 配列

#### 数値

```js
const a = 1000;
const b = 3.1415;

console.log(a);
console.log(b);
```

#### 文字列

```js
const str = 'こんにちは';

console.log(str);
```

◯ 文字列の埋め込み(テンプレートリテラル)

テンプレートリテラルとは、`` ` ``（バッククォート）で囲んだ部分を文字列とする書き方である。テンプレートリテラル内には変数の値を埋め込むことができ、`${変数名}` と記述する。

ある文字列をテンプレートとして用意しておき、表示する内容を **動的に** 変更したいときなどに利用すると便利である。
バッククォートは `Shift + @`（Mac の場合）で入力することができる。

```js
const name = 'Taro';

const greeting = `こんにちは, ${name}!`;
console.log(greeting);
```

#### 真偽値

```js
const boolTrue = true;
const boolFalse = false;

console.log(boolTrue);
console.log(boolFalse);
```

#### null, undefined

```js
const a = undefined;
const b = null;

let c;

console.log(a);
console.log(b);
console.log(c);
```

#### オブジェクト

オブジェクトは、 **キー(key)** と **値(value)** の組み合わせを保持するデータ型である。`{}`（波括弧）を書くことで定義できる。
Python では「辞書」と呼ばれるものである。

実際に例を見てみよう。

```js
// オブジェクトの定義
const info = {
  name: 'Taro',
  age: 20,
};
console.log(info);
```

オブジェクトが持つ「キー」のことを **「プロパティ」** と呼ぶ。
上の例で言えば、「`info` というオブジェクトが `name` や `age` といったプロパティを持っている」と言うことができる。

値の取り出しや書き換えは、以下のように行うことができる。

```js
// 値の取り出し
console.log(info.name); // ドット記法
console.log(info['name']); // ブラケット記法

// 値の書き換え
info.name = 'Jiro';
console.log(info.name);
```

存在しないキーを参照すると、`undefined` になる。

```js
// 存在しないkey
console.log(info.key); // undefinedになる
```

オブジェクトを入れ子構造（ネスト構造）にすることもできる。

```js
// オブジェクトの中にオブジェクトを入れる（ネスト化）
const info = {
  name: {
    last: 'Tanaka',
    first: 'Taro',
  },
};

// 以下のように値を取得できる
console.log(info.name.last);
console.log(info['name']['last']);
```

> 発展: 誤解を恐れずに言えば、JavaScript における値（数値、文字列など）はすべてオブジェクトであると考えることができる。例えば、文字列は「String（文字列）」という名前のオブジェクトとして扱うことができる。同様に、このセクションの「オブジェクト」は「Object（オブジェクト）」という名前のオブジェクトである、というのが正しい認識であるといえる。
>
> JavaScript においてこの「オブジェクト」は重要な概念であり、学習が進んできたら以下のような Web サイトを参考により理解を深めるとよい。
>
> - [オブジェクト · JavaScript Primer #jsprimer](https://jsprimer.net/basic/object/)

#### 配列

配列（Array、アレイとも）は、データをリストのように格納して扱うデータ型である。`[]`（角括弧）を用いて記述する。

```js
// 空の配列を定義
const emptyArray = [];

// 値の入った配列を定義
const array = [1, 2, 3, 4, 5];
```

配列に格納された値の 1 つ 1 つを「要素」と呼び、それぞれの位置のことを「インデックス番号」と呼ぶ。
JavaScript における配列は **`0`から** 始まり、`0`が先頭の要素を指す。

配列から値を取り出すには、`配列[インデックス番号]` と記述する。

```js
// 値の取り出し
const num = array[0];
console.log(num);
```

配列はオブジェクトの一種であり、さまざまな「プロパティ」を持っている。

例えば、以下のように`length`プロパティにアクセスすることで、配列の長さを知ることができる。

```js
const array = [1, 2, 3, 4, 5];

// 長さを取得する
const arrayLength = array.length;
console.log(arrayLength);
```

また、オブジェクトにおいて、関数（後述）の機能を持つプロパティのことを **「メソッド」** と呼ぶ。

配列では、既に定義されているメソッドを利用して、要素の追加や取り出しをはじめとする様々な機能を実現する。「配列の応用」で多くのメソッドを紹介する。

例として、要素の追加や取り出しの基本的な方法を紹介する。

```js
const array = [1, 2, 3, 4, 5];

// 配列の末尾に追加
array.push(4);
console.log(array);

// 配列の末尾の要素を取り出す
array.pop();
console.log(array);

// 配列の先頭に追加
array.unshift(0);
console.log(array);

// 配列の先頭の要素を取り出す
array.shift();
console.log(array);
```

◯ 「破壊的な」メソッドと「非破壊的な」メソッド

配列の持つメソッドには、以下の 2 種類がある。

- 破壊的なメソッド
  - 配列オブジェクトそのものを変更する
- 非破壊的なメソッド
  - 配列オブジェクトそのものは変更せず、新しい配列、または処理結果を返す

例えば、上で見た`push`メソッドは、「破壊的な」メソッドである。

一方で、配列を結合する `concat` メソッドなどは、「非破壊的な」メソッドである。
例を見てみよう。

```js
const array = [1, 2, 3, 4, 5];

// concat メソッド
// 配列を結合する
const arrayNew = array.concat([5, 6]);

// 元の array は変更されていない
console.log(array);
// arrayNew に新しい配列が返ってきている。
console.log(arrayNew);
```

メソッドを利用する際は、「破壊的」か「非破壊的」かを予め正確に把握しておく必要がある。

これまでに紹介したメソッド以外にも、配列には多くのメソッドが存在する。以下を参照するとよい。

- [Array - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)

### クイズ：変数・データ型

問題 1：

実際にオブジェクトを作ってみよう。以下のようなキーと値を持つ、`user` という変数名のオブジェクトを作成せよ。

| キー     | 値                                       |
| :------- | :--------------------------------------- |
| name     | `"Taro"`                                 |
| age      | `21`                                     |
| isSingle | `true`                                   |
| address  | `{ city: "Tokyo", zipcode: "123-4567" }` |

<br />

<details><summary><strong>こたえ：問題 1</strong></summary><div>

```js
const user = {
  name: 'Taro',
  age: 21,
  isSingle: true,
  address: {
    city: 'Tokyo',
    zipcode: '123-4567',
  },
};
```

</div></details>

<br />

問題 2：

空の配列 `userList` を定義し、前問で作成した `user` オブジェクトを追加せよ。

<details><summary><strong>こたえ：問題 2</strong></summary><div>

```js
const userList = [];
userList.push(user);

console.log(userList);
```

</div></details>

<br />

## 演算子

演算子には、以下のようなものがある(一部抜粋)。

- 算術演算子
  - `+`, `-`, `*`, `/`, `%`
- 比較演算子
  - `===`, `!==`, `==`
  - `>`, `>=`, `<`, `<=`
- 論理演算子
  - `&&`, `||`, `!`
  - 短絡評価
- 三項演算子
- `typeof` 演算子

### 算術演算子

```js
const a = 1;

console.log(a + 2); // 足し算
console.log(1 * 333); // 掛け算
console.log(1000 / 25); // 割り算
console.log(1000 % 33); // 剰余演算（余り）

// JavaScript では暗黙の型変換が行われ、処理が計算が実行される（Python だとエラーになる）
console.log(1 + '1');
```

### 比較演算子

値の比較を行う演算子であり、結界に応じて真偽値を返す。

```js
console.log(1 === 1); // 厳密等価演算子
console.log(1 !== 0); // 厳密不等価演算子

console.log(1 == 1); // 等価演算子
```

等価演算子は、比較する値が同じデータ型になるように「暗黙の型変換」をしてから比較する。
次のような予想しづらい結果を招くことがあるので、使うべきではない。

```js
console.log(1 == '1');

console.log(1 == '01');

console.log(1 == true);

console.log(0 == null);

console.log(null == undefined);
```

<details><summary><strong>結果</strong></summary><div>

```js
// 文字列を数値に変換してから比較
console.log(1 == '1'); // => true

// "01"を数値にすると`1`となる
console.log(1 == '01'); // => true

// 真偽値を数値に変換してから比較
console.log(1 == true); // => true

// nullの比較はfalseを返す
console.log(0 == null); // => false

// nullとundefinedの比較は常にtrueを返す
console.log(null == undefined); // => true
```

</div></details>

<br/>

大小の比較を行う演算子は以下のようなものがある。

```js
console.log(1 > 1);
console.log(1 >= 1);
console.log(1 < 2);
console.log(1 <= 2);
```

### 論理演算子

「かつ」「または」「否定」といった、論理演算を行うことができる演算子である。
基本構文は以下のようになっている。

```txt
左辺 演算子 右辺
```

◯ `&&`（AND 演算子）

`&&` は、左辺の値の評価結果が真（＝`true`）であれば、右辺の値を評価するものである。

```js
// 左辺が true なので右辺が評価される
console.log(true && '右辺！');

// 左辺が false なので右辺は評価されない
console.log(false && '右辺！');
```

◯ `||`（OR 演算子）

`||` は、左辺の値の評価結果が偽（＝`false`）であれば、右辺の値を評価するものである。

```js
// 左辺が true なので右辺は評価されない
console.log(true || '右辺！');

// 左辺が false なので右辺が評価される
console.log(false || '右辺！');
```

◯ `!`（NOT 演算子）

真偽値を反転した値を返す。

```js
console.log(!true);
```

◯ 短絡評価

上記の`&&`や`||`のように、左辺の値によって結果が決まった時点でそれ以上の評価を行わないことを **「短絡評価」** と呼ぶ。

以下のように、左辺の真偽値を評価し右辺で関数などを評価する、といったことをよく行う。

```js
const isTrue = true;
isTrue && console.log('評価される');
```

左辺の評価において、JavaScript はまたしても「暗黙の型変換」を行っている。あらゆる値は暗黙の型変換によって真偽値に変換され、評価される。値が`true`になるか`false`になるかは、ルールによって決められている。

- `falsy`な値
  - `false`
  - `undefined`
  - `null`
  - `0`, `-0`
  - `NaN`
  - `""`
- `falsy`でない値

### 三項演算子

短絡評価と似た概念で、左辺の真偽値によって評価するものが変わる演算子がある。  
三項演算子はネストできるが、可読性が著しく低下するので一般にネストすべきではない(単体の三項演算子ですら好まない人もいる)

基本的な構文は以下の通り。

```txt
評価式 ? 評価式が真(=true)だった場合の処理 : 評価式が偽(=false)だった場合の処理;
```

例:

```js
true ? console.log('true!') : console.log('false!');

false ? console.log('true!') : console.log('false!');
```

一般的には、変数を利用する。

```js
const isTrue = true;
const result = isTrue ? 'true' : 'false';
```

### `typeof` 演算子

値のデータ型を調べることができる演算子である。

```js
console.log(typeof 1); // => number
console.log(typeof 'hello'); // => string
console.log(typeof true); // => boolean
console.log(typeof undefined); // => undefined
console.log(typeof null); // => object
console.log(typeof {}); // => object
console.log(typeof []); // => object
```

### クイズ：演算子

問題：下記で指示されたように振る舞うようなコードを実装してみよう。

```js
const isAccepted = true; // または false

// isAccepted = true のとき → 「許可されました」
// isAccepted = false のとき → 「拒否されました」
// と表示する処理を書く

// -------------

// ここに実装してみよう

// -------------
```

<details><summary><strong>こたえ</strong></summary><div>

```js
const isAccepted = true;
const result = isAccepted ? '許可されました' : '拒否されました';
console.log(result);
```

</div></details>

## 制御フロー

ここでは、最も基本的な以下の 2 つの制御フローに関わる構文について説明する。

- if 文
- for 文
- break, continue

これら以外にも、switch 文や while 文、try...catch 構文などがあるが、ここでは触れない。

### if 文

if 文は、指定した条件に応じて処理を切り替える構文である。

```js
const value = 100;

if (value === 100) {
  console.log('100ですね！！');
} else if (value <= 200) {
  console.log('100以外の200以下のものです。');
} else {
  console.log('100でも200以下でもない何かです。');
}
```

### for 文

for 文は、任意の回数分繰り返し処理を行うことができる構文である。

forEach （配列のメソッド）等を使うので実はあまり使わない。
また、`for...of` や `for...in` などの亜種もあるが、ここでは触れない。

```js
for (let i = 0; i < 10; i++) {
  console.log('index: ', i);
}
```

### break, continue

break は、for 文などにおいて、ある条件にループから抜け出したいときに利用する。
一方で continue は、ある条件を満たしたときは、処理をスキップしたいときに利用する。

```js
for (let i = 0; i < 10; i++) {
  console.log('index: ', i);
  if (i === 3) {
    break;
  }
}
```

```js
for (let i = 0; i < 10; i++) {
  console.log('index: ', i);
  if (i % 3 === 0) {
    console.log('3の倍数！！！');
    continue;
  }
  console.log('3の倍数じゃない');
}
```

### クイズ：制御フロー

問題：以下のコードを実行すると出力結果はどうなる？

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  } else if (i === 7) {
    break;
  }
  console.log(i);
}
```

<details><summary><strong>こたえ</strong></summary><div>

```txt
1
3
5
```

</div></details>

## 式と文

JavaScript は、式（Expression）と文（Statement）から構成されている。

- 「式」は、値を生成し、変数に代入できるもの（変数や関数、値自体）
- 「文」は、変数に代入できず、処理の 1 ステップと考えることができるもの（代入、if 文、for 文）

以下のような特徴・違いがある。

- 式は短絡評価(三項演算子を含む)で評価できるが、文は評価できない(エラーになる)
- 式は関数(後述)の戻り値にできるが、文はできない

```js
// 「式」としての評価
true && console.log("!");

// 「文」としての評価
true && const a = 100 //エラー
```

## 関数

関数は、ある一連の手続きを 1 つの処理としてまとめることができるものである。
言い換えれば、 **「（必要なら）値を渡して何らかの処理を行ってもらい、（必要なら）処理結果を返してもらう」** ということを実現できる。

基本的な構文は以下の通りである。

```js
// 関数宣言
function 関数名(引数名1, 引数名2) {
  // 何らかの処理
  return 戻り値; // 値を返さない場合は不要
}

// 関数の呼び出し
const 関数の実行結果 = 関数名(引数1, 引数2);
console.log(関数の実行結果); // => 戻り値
```

関数を実行した結果として値を返すかどうかは、開発者の判断に委ねられる。返す値がある場合、その値のことを「戻り値（返り値とも）」と呼び、`return` をつけて記述する。`return` を付けずに関数を定義した場合、その戻り値は `undefined` となる。

例を見てみよう。

```js
// return 「無し」の関数を宣言してみる
// ただコンソールに文字を表示するだけの関数
function printNumber(number) {
  console.log(`input number: ${number}`);
}

const resultA = printNumber(1); // => input number: 1
const resultB = printNumber(7); // => input number: 7
console.log(resultA); // => undefined
console.log(resultB); // => undefined

// return 「有り」の関数を宣言してみる
// 値を2倍して返す関数
function doubleNumber(number) {
  const result = number * 2;
  return result;
}

const resultC = doubleNumber(1);
const resultD = doubleNumber(7);
console.log(resultC); // => 2
console.log(resultD); // => 14
```

また、JavaScript のバージョン ES2015 から **「アロー関数」** とよばれる関数の定義が可能になった。構文は以下の通り。

```js
// アロー関数を使った関数定義
const 関数名 = (引数名1, 引数名2) => {
  // 何らかの処理
  return 戻り値; // 値を返さない場合は不要
};
```

ここまで紹介した関数の定義方法の発展型をいくつか見ていこう。

```js
// doubleNumber をアロー関数で定義してみる
const doubleNumberArrow1 = (number) => {
  const result = number * 2;
  return result;
};

// 関数の処理が１つの式である場合には、ブロックと return を省略できる
const doubleNumberArrow2 = (number) => number * 2;

// 引数が一つの場合、引数の()は省略可能
// prettier-ignore
const doubleNumberArrow3 = number => number * 2;

// ただし引数が無い場合、()は必須
const sayHello = () => console.log('Hello!');

console.log(doubleNumberArrow1(3)); // => 6
console.log(doubleNumberArrow2(3)); // => 6
console.log(doubleNumberArrow3(3)); // => 6
sayHello(); // => "Hello!"
```

### クイズ：関数

問題：

アロー関数を使って、

- 3 の倍数もしくは 3 のつく数字なら「バカ」風に
- それ以外の数字なら普通に

出力する関数 `letsNabeatsu` を作ろう。

```js
letsNabeatsu(1); // => 1
letsNabeatsu(3); // => 3!!!（バカ）
letsNabeatsu(13); // => 13!!!（バカ）
```

<details><summary><strong>ヒント</strong></summary><div>

数値は、`.toString()`メソッドで文字列に変換できる。さらに文字列は `.includes()` メソッドで、ある文字を含むかどうか判定することができる。

```js
const a = 13;
const aString = a.toString(); // toString メソッド
const hasThree = aString.includes('3'); // includes メソッド
console.log(a);
console.log(aString);
console.log(hasThree);

// メソッドはチェーンのように繋げて利用することができる
// これを「メソッドチェーン」と呼ぶ
const result = a.toString().includes('3');
console.log(result);
```

> 注意: `includes` メソッドは JavaScript のバージョン ES2016 で利用可能になったもので、環境によっては正しく動作しない可能性があるので注意しなければならない。playcode 環境では問題なく利用できる。

</div></details>

<details><summary><strong>こたえ</strong></summary><div>

```js
const letsNabeatsu = (number) => {
  if (number % 3 === 0 || number.toString().includes('3')) {
    console.log(`${number}!!!（バカ）`);
  } else {
    console.log(`${number}`);
  }
};

// 三項演算子を使って書くなら
const letsNabeatsu = (number) => {
  const isTarget = number % 3 === 0 || number.toString().includes('3');
  return isTarget
    ? console.log(`${number}!!!（バカ）`)
    : console.log(`${number}`);
};
```

</div></details>

## 配列の応用

### メソッドの利用

配列の多くのメソッドは、以下のような構造を持っている。

```txt
配列.メソッド名(引数)
```

引数には、関数を与えることも多い。以下で例を見ていこう。

◯ `map` メソッド

`map` メソッドは、配列の各要素に対して処理を実施してくれる「非破壊的な」メソッドである。

```js
const array = [1, 2, 3, 4, 5];

// `elm` は `element` の省略形
const multiplyTen = (elm) => elm * 10;
const tenTimesArray = array.map(multiplyTen);
console.log(tenTimesArray);
```

以下のように、メソッド内に直接関数を書くことも多い。

```js
const tenTimesArray = array.map((elm) => elm * 10);
```

◯ `filter` メソッド

`filter`メソッドは、名前の通り、配列に含まれる要素のフィルタリングをしてくれる。
特定の条件を満たす(引数に指定した関数が`true`を返す)要素のみを含んだ配列を返す「非破壊的な」メソッドである。

```js
const array = [1, 2, 3, 4, 5];

const onlyEvenArray = array.filter((elm) => elm % 2 === 0);
console.log(onlyEvenArray);
```

◯ `slice` メソッド

`slice`メソッドは、配列の一部を切り取るメソッドである。
引数指定なしの場合は単純なコピー（シャローコピー、後述）となる。

```js
const array = [1, 2, 3, 4, 5];

const slicedArray = array.slice();
console.log(slicedArray);
console.log(slicedArray === array); // => false

// 引数で、開始位置と終了位置を指定できる
const slicedArray2to4 = array.slice(2, 4);
console.log(slicedArray2to4); // => [3, 4]
```

◯ `forEach` メソッド

`forEach` メソッドは、for 文のように配列を反復処理して、処理を行うメソッドである。
このメソッドは、`map` メソッドなどとは異なり、配列に対して変更を加えるわけではないことに注意。

```js
// forEachメソッド 配列の要素ごとに取り出す
array.forEach((elm) => console.log(elm));

// forEach を用いた処理は、以下と同じ処理である
// 1. for 文を利用する
for (let i; i < array.length; i++) {
  console.log(array[i]);
}

// 2. for...of を利用する
for (const elm of array) {
  console.log(elm);
}
```

### クイズ：メソッドの利用

問題：以下のような商品配列 `items` が与えられている。値段が 100 以上の商品だけを持つ配列 `targetItems` を作成せよ。

```js
const items = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 50 },
  { name: 'grape', price: 150 },
  { name: 'orange', price: 250 },
];
```

<details><summary><strong>こたえ</strong></summary><div>

```js
const targetItems = items.filter((elm) => elm.price >= 100);
console.log(targetItems);
```

</div></details>

### スプレッド演算子

スプレッド演算子とは、「スプレッド」という名前の通り配列やオブジェクトを展開してあれこれする演算子である。`...`を配列やオブジェクトの前に付けて利用する。

```js
// 配列
const array = [1, 2, 3, 4, 5];

// 先頭に0を追加
const arrayNew = [0, ...array];
console.log(arrayNew);

// 末尾に6を追加
const arrayNew2 = [...array, 6];
console.log(arrayNew2);
```

```js
// オブジェクトを宣言
const obj = {
  name: 'Taro',
  age: 20,
};

// シャローコピー（後述）
const obj2 = { ...obj };

console.log(obj2);

const objNameJiro = {
  ...obj,
  name: 'Jiro', // nameを上書き
  address: 'Tokyo', // addressを追加
};

console.log(objNameJiro);
```

### クイズ：スプレッド演算子

問題：再度、以下のような商品配列 `items` を考える。以下のような新商品 `newItem` があるとき、`items` の末尾に `newItem` が追加された **新しい** 配列 `itemsNew` を作成せよ。

```js
const items = [
  { name: 'apple', price: 100 },
  { name: 'banana', price: 50 },
  { name: 'grape', price: 150 },
  { name: 'orange', price: 250 },
];

const newItem = { name: 'strawberry', price: 300 };
```

<details><summary><strong>こたえ</strong></summary><div>

```js
const newItems = [...items, newItem];
```

</div></details>

## オブジェクトの代入、シャローコピー、ディープコピー

JavaScript を書き始めると、オブジェクトを格納している変数を違う変数に格納したい、というシーンが出てくる。
この時、値の受け渡し方に注意しなければ、予期せぬ問題を招く恐れがある。

JavaScript において、オブジェクトの渡し方には大きく 3 パターンある。

- 代入
  - メモリ上のアドレス（オブジェクトの実体が格納されている場所）の値を渡す
  - 渡した先のオブジェクトの値を変更すると、元の値も変更される
- シャローコピー
  - 第 1 階層の値をコピーして、新しいオブジェクトとして渡す
  - ネストされたオブジェクトは、アドレスが渡されてしまう
- ディープコピー
  - 全ての階層の値をコピーして、新しいオブジェクトとして渡す
  - 新しく作成されたオブジェクトは、元のオブジェクトに何ら影響を与えない

```js
const obj = {
  name: 'Taro',
  age: 20,
  address: {
    zipcode: '1234567',
    city: 'Tokyo',
  },
};

const assignedObj = obj; // 代入
const shallowCopiedObj = { ...obj }; // シャローコピー
const deepCopiedObj = JSON.parse(JSON.stringify(obj)); // ディープコピー

console.log('assignment', assignedObj === obj);
console.log('shallow', shallowCopiedObj === obj);
console.log('deep', deepCopiedObj === obj);

assignedObj.name = 'Jiro';
console.log('assignment', obj); // 代入だとnameの書き換えがobjにも適用されてしまっている

shallowCopiedObj.name = 'Saburo';
console.log('shallow 1', obj); // シャローコピーだと適用されない

// ただし、ネストされた address のオブジェクトは反映されてしまう
shallowCopiedObj.address.city = 'Osaka';
console.log('shallow 2', obj); // Osaka に変更されている

deepCopiedObj.name = 'Shirou';
deepCopiedObj.address.city = 'Kyoto';
console.log('deep', obj); // ディープコピーなのでageの書き換えはobjには適用されない
```

## 分割代入

オブジェクトのプロパティを、単一の変数として取り出すことができる代入方法である。

例をみてみよう。以下のようなオブジェクト`obj`があったとする。

```js
const obj = {
  university: 'UT',
  age: 20,
  address: 'Tokyo',
  name: {
    lastName: 'Tanaka',
    firstName: 'Taro',
  },
};
```

これは、以下のようにプロパティ名を指定して変数に代入することができる。
このとき、変数名はプロパティ名と同一になる。

```js
const { university } = obj;
console.log(university);

// 複数のプロパティを取り出すこともできる
const { age, address } = obj;
console.log(age, address);
```

また、別の名前を付けて取り出すこともできる。

```js
const { age: nenrei } = obj;
console.log(nenrei);
```

ネストされたオブジェクトでも、同様のことができる。

```js
const {
  name: { lastName },
} = obj;
console.log(lastName);
```

## 組み込みオブジェクト

組み込みオブジェクトとは、特に宣言をしなくても、プログラミング上で利用できるオブジェクトのことである。多くの種類があるが、ここでは以下の 2 つを紹介する。

- `window`オブジェクト
  - `window.confirm()`
  - `window.alert()`
- `Date`オブジェクト
  - `new Date()`

### `window`オブジェクト

`window` オブジェクトは、ウェブブラウザ環境で利用できるオブジェクトである。

以下のような確認を行うポップアップや、アラートのポップアップを出す際に利用できる。

> ※ playcode で実行する際は、LIVE モードにしていると即実行され r うことに注意する

```js
// 確認するポップアップを表示する
const resultConfirm = window.confirm('大丈夫ですか？');
console.log(resultConfirm); // => true or flase

// アラートのポップアップを表示する
const resultAlert = window.alert('大丈夫ですか？');
console.log(resultAlert); // => undefined
```

### `Date`オブジェクト

`Date` オブジェクトは、時刻（タイムスタンプ）に関連する機能を提供する。

現在時刻を「Date インスタンス」として取得すると以下のようになる。
インスタンスとは、`Date` オブジェクトの機能を持つ実体のことを指す。

```js
// 現在時刻を「Date インスタンス」として取得する
const now = new Date();
console.log('now: ', now);
console.log(typeof now);
```

`Date` インスタンスを利用すれば、日時を文字列として取り出すこともできる。

```js
// 現在時刻を「文字列」として取得する
const now = new Date();
const nowString = now.toString();
console.log('now string: ', nowString);
console.log(typeof nowString);
```

プログラミングでは、「UNIX タイムスタンプ」というものをよく使う。これは、`1970/01/01 00:00:00 UTC` からのミリ秒数をカウントした数値である。

`getTime()`メソッドを利用して取得できる。

```js
const now = new Date();
console.log(now.getTime());
```

## import/export

比較的新しい JavaScript のバージョン、ES2015(ES6)から import/export システムが導入された。  
これは、別ファイルの変数や関数を取り込むんで使うことができるシステムである(それまでは exports/require システムが使われていた)。  
コードの再利用性を高めたり、ファイルの肥大化を防ぐなどのメリットがあり、コンポーネント指向とも相性が良いため、非常によく使われる。  
また、自作の別ファイルのコードを使う目的のほか、サードパーティライブラリを使う際にも使用される。

import/export には それぞれ named import と named default import, named export と default export がある。

### named import/export

"named"とは名前が指定されているという意味であり、named export された変数は named import しかできなく、かつ import された変数の変数名は export 側で決められたものとなる。  
named export によって同じ値や関数, コンポーネントがファイルによって別の名前で使われることを防げる(混乱の回避や検索性の向上等) ため、推奨している人も多い。

ファイル namedExport.js(export 側)

```js
// named exportのやり方1
export const a = 100;

const b = 200;
// named exportのやり方2
export { b };
```

ファイル namedImport.js(import 側)

```js
// export側での変数名でしか受け取れない(オブジェクトのkeyを変数名とした分割代入に似ている)
import { a, b } from 'namedExport.jsの相対パス';
```

named export された変数は、export 側での変数名でしか受け取れないと書いたが、"as"を使うことで、別名に書き換えられる。  
ただしこれは乱用すべきでなく、変数名が同じファイル内でサードパーティライブラリの変数名と被ってしまう場合など、避けられない場合のみに使うべきである。

ファイル namedImport2.js(import 側)

```js
// named importでもasを使うことで変数名を変えられる
import { a as A, b } from 'namedExport.jsの相対パス';
```

### default import/export

default import は、import 文に波括弧を必要とせず、かつ変数名を import 側で自由に設定できる。  
また、export 側で default export できる変数は各ファイルに一つまでである(どれを import しているかわからなくなるので当然のことではある)。

ファイル defaultExport.js

```js
const de = 300;
export default de;
```

ファイル defaultImport.js(import 側)

```js
// import時の変数名はなんでも良い
import anyName from 'defaultExport.jsの相対パス';
```

また、同一ファイルで named/default export を併用することもできるし、named/default import を併用することもできる

export.js(named export と default export を併用)

```js
export const namedVar = 100;
const defaultVar = 200;
export default defaultVar;
```

import.js(named import と default import を併用)

```js
import defaultVar, { namedVar } from 'export.jsの相対パス';
```

## 今回扱っていないが重要な知識

本ドキュメントでは扱っていないが、JavaScript を学習する上で重要になってくる概念・キーワードの一部を以下に挙げておく。
学習が進んできたら、これらを扱っている書籍やウェブサイトを参照するとよい。

- クラス
- 例外処理（try...catch）
- 非同期処理（コールバック/Promise/async-await）
- プロトタイプチェーン
- this

## Node.js のインストール

React アプリケーションを作成するには、Node.js という JavaScript の実行環境が必要である。
そのため、Node.js を自らのローカル環境（PC）にインストールしておかなければならない。
OS の種類（Mac, Windows, Linux, etc...）によってインストール方法が異なるので、適宜ドキュメントなどを参照する必要がある。

Windows, MacOS に関しては以下の記事が参考になる。

- MacOS
  - [Mac に Node.js をインストール - Qiita](https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09)
- Windows 10
  - [Node.js をインストールする - Qiita](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b)

## React

GoogleChrome などのウェブブラウザ上で動く言語は JavaScript しかない。  
React とは、その JavaScript のライブラリ(フレームワークという見方もできる)である。  
React の最大の特徴は、状態変数が変わるたびにレンダリング(画面描画)を再実行してくれる点にある。  
これにより、データバインディング(JavaScript での変数の値と画面表示の同期)が可能になっている。

ここからは、実際に React でシンプルなカウント機能を持つカウンターアプリケーションを作成してみる。
下記のコードでは、画面は JavaScript 内で count という状態変数をもち、その値を画面に映し出している。  
count の値が変われば、画面の再レンダリングされて、新しい count の値が表示される仕組みである。

Playcode の React 環境を利用して、実際に作成してみる。

- [PlayCode - Code Sandbox. Online Code Editor](https://playcode.io/react/)

`App.jsx`に以下のコードを打ち込むと、`RESULT VIEW`にカウンターが表示される。

```jsx
const App = (props) => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // setCount(count - 1)は式なので、波カッコでブロックにする必要はない
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <div>カウント値：{count}</div>
      <div>
        {/* 関数そのものを指定する場合 */}
        <button type="button" onClick={increment}>
          +
        </button>
        {/* アロー関数にする場合 */}
        <button type="button" onClick={() => decrement()}>
          -
        </button>
      </div>
    </div>
  );
};
```

### コンポーネント指向

昨今では、コンポーネント指向でフロントエンド開発をすることが多い。  
コンポーネントとは、画面を構成する部品(ボタンや入力フォームなど)のことである。  
画面を複数のコンポーネントに分割して開発するような指向性をコンポーネント指向と言う。

コンポーネント指向によるメリットは

- 再利用ができる(同じような部品を異なる場所で使い回せる)
- 改修しやすい(コンポーネントが使われている全ての場所に変更が適用される)
- 責務が明確になる(例:このコンポーネントは、入力値を保持するコンポーネント)
- テストしやすい
- 共同開発しやすい

などである。

#### 関数型コンポーネントとクラス型コンポーネント

React では、関数型コンポーネントとクラス型コンポーネントがある。  
関数型コンポーネントの方が新しく、クラス型コンポーネントをほぼ完全に代替しているため、学習初期は関数型コンポーネントのみ学べば良い。  
以下が関数型コンポーネントの例である。

例 1

```jsx
const Component = () => {
  return <div></div>;
};
```

見た目は HTML を返す単純な関数である。  
文を書かないのであれば、波カッコでブロックを作って return で返す必要もない(例 3)し、関数なので、アロー関数でなく function を使っても良い(例 3)。

例 2

```jsx
const Component = () => <div></div>;
```

例 3

```jsx
function Component() {
  return <div></div>;
}
```

また、関数型コンポーネントの引数には props という、外部注入され、関数型コンポーネント内部で使われるオブジェクトを指定することもできる。

#### state と props

コンポーネントの集まりとして画面を構成するときに問題になるのが、値の受け渡しである。  
Input というコンポーネントが入力値を保持し、Button というコンポーネントでそれを送信するときに、Input の状態変数(state)である入力値を Button に渡す必要がある。  
そこで登場するのが props である。
state のうち少なくとも一つ、もしくはと props のうち少なくとも一つでも値が変われば(!==)、そのコンポーネントはもう一度評価され、再レンダリングされる。

```jsx
const Input = () => {
  const [inputText, setInputText] = useState('');
  return (
    <div>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <Button text={inputText} />
    </div>
  );
};

const Button = (props) => {
  return (
    // send関数は省略
    <button onClick={() => send(props.text)}>送信</button>
  );
};
```

上の例では Input の中に Button が配置されている(Input を親コンポーネント,Button を子コンポーネントと言う)。  
Input が保持している inputText という state を props.text と言う名前で Button に渡しているのが

```jsx
<Button text={inputText} />
```

の部分である。
text は props のプロパティとして Button に渡るので、渡ってきた inputText を使いたい時は props.text として扱う。

しかし通常、props の中身を明示するためや、コード量を減らすために props の中身を分割代入して受け取ることが大きい。  
以下は上のコードと同じである。

```jsx
// {text} として分割代入して受け取る
const Button = ({ text }) => {
  return (
    // text としてinputTextを扱える
    <button onClick={() => send(text)}>送信</button>
  );
};
```
