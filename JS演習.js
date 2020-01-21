//window.onload = function() {
//  console.log('hello');
//
//}

//  ★の出力：問1～8
//  関数使用ver
/* row：行（縦）, col：列（横）, odd：奇数番目に入れる文字, even：偶数番目に入れる文字 */
function dotWrite(row, col, odd, even) {
  for (let i = 1; i < row + 1; i++) {
    for (let j = 1; j < col + 1; j++) {
      if (j % 2 !== 0) {
        //        return odd;
        document.write(odd);
      } else {
        //        return even;
        document.write(even);
      }
    }
    document.write("<br>");
  }
}

//  関数：問1：円の面積
function circle(radius) {
  const PI = 3.14;
  //  alert(radius);
  document.write("半径" + radius + "cmの円：　");
  //  べき乗演算子（**）：ex.2の2乗 = 2 ** 2 = 4、2の0乗 = 2 ** 0 = 1
  document.write(radius ** 2);
  document.write("㎠");
  document.write("<br>");
  //  return radius * 2;
  //  return radius ** 2;

}

//  関数：問2：合計金額
//  scriptタグ内での関数呼び出しver
function feeSum(adult, child) {
  //  let feeSum = 500 * adult + 200 * child;
  document.write(500 * adult + 200 * child);
  //  document.write("<br>");
}

//  グループ名を追加で書き出しver
function feeSum_g(group, adult, child) {
  //  let feeSum = 500 * adult + 200 * child;
  document.write(group + " グループの合計金額：　");
  document.write(500 * adult + 200 * child);
  document.write("円です。<br>");
}

//  spanタグ内への書き出しver
function feeSum_r(adult, child) {
  //    let feeSum = 500 * adult + 200 * child;
  //      document.write(500 * adult + 200 * child);
  //    retrunを使うと全ての関数の呼び出しがダメになる  解決
  return 500 * adult + 200 * child;
  //      return child;
  //    document.write("<br>");
}




//  jQuery

//  セレクタ（$()の中）
/*
CSSとほぼ同じような記述でセレクタを指定することが可能
セレクタはCSSセレクタ（CSSで使用するセレクタ）と同じ
$("*") ：すべての要素に反映
$("要素名")  ：指定した要素全てに反映
$("#id名") ：idはユニークなため，反映されるのは一つの要素
$(".class名")  ：一致する全ての要素に反映
$("要素名,#id名") ：要素名もしくはid名に一致する要素を指定
$("#id名 要素名") ：id名内の配下にある全ての要素に反映
  $("親セレクタ").find("指定セレクタ").～と同様？
$("#id名 > 要素名") ：id名直下の要素のみ
  $("親セレクタ").children("指定セレクタ").～と同様？
$("要素名A + 要素名B")  ：要素名Aの次に現れる要素名Bを指定
$("要素名A ~ 要素名B")  ：要素名Aの以降に現れる要素名Bの全てを指定

フィルターを使った指定方法
$("セレクタ:first") ：対象セレクタの最初の要素を取り出す
$("セレクタ:last")  ：対象セレクタの最後の要素を取り出す
$("セレクタ:first-child") ：
$("セレクタ:last-child")  ：
$("セレクタ:even")  ：対象セレクタの偶数番目の要素を取り出す
$("セレクタ:odd")  ：対象セレクタの奇数番目の要素を取り出す
$("セレクタ:eq(n)")  ：対象セレクタのn番目の要素を取り出す（1番目の要素はeq(0)）
$("セレクタ:lt(n)")  ：対象セレクタのn番目以前の要素すべて(n番目の要素は含まず)を取り出す
$("セレクタ:gt(n)")  ：対象セレクタのn番目以降の要素すべて(n番目の要素は含まず)を取り出す
$("セレクタ:contains('text')")  ：？対象セレクタのtextという文字列を含む要素(大文字小文字の区別あり)を取り出す
$("セレクタ:parent")  ：対象セレクタの内、内容を持つ要素を取り出す
$("セレクタ:empty")  ：対象セレクタの内、内容を持たない要素を取り出す
$("セレクタ:has(要素名B)")  ：対象セレクタの内、要素名Bを含んでいる要素を取り出す
$("セレクタ:nth-child(an+b)")  ：？対象セレクタのa個おきに要素を指定する
  an+bの場合，「aで割った時にb余る」要素を取り出す
$("要素名A > 要素名B:only-child")  ：対象セレクタのn番目以降の要素すべて(n番目の要素は含まず)を取り出す

idは同一ページに一箇所しか存在しないので、jQueryの処理が高速化されます。jQueryオブジェクトのセレクタにはできるだけidを用いる

属性フィルターを使った指定方法
$("要素[属性]")  ：指定の属性を持つ要素を取り出す
$("セレクタ:not([属性B])")   ：属性Bを持たない要素Aを取り出す
$("要素[属性='値']")  ：指定の値に等しい属性を持つ要素を取り出す
$("要素[属性!='値']")  ：指定の値ではない属性を持つ要素を取り出す
$("要素[属性^=値]") ：属性値が前方一致する要素を取り出す
$("要素[属性$=値]")  ：属性値が後方一致する要素を取り出す
$("要素[属性*=値]")  ：属性値が部分一致する要素を取り出す
$("要素A[属性B=値C] [属性D]")  ：「属性Bが値C」かつ「属性Dをもつ」，「要素A」を取り出す
$(":header")  ：見出し要素すべてを取り出す
$(":input")  ：指定のフォーム要素を取り出す
他
:text	テキストボックス
:password	パスワード入力ボックス
:radio	ラジオボタン
:checkbox	チェックボックス
:file	ファイル選択ボックス
:submit	送信ボタン
:image	画像ボタン
:reset	リセットボタン
:button	全てのボタン
:hidden	隠し要素

$("セレクタ:has(:enabled)") ：セレクタ内のフォーム要素が利用可能な状態である場合取り出す
他
:dsabled	利用不可の状態
:checked	チェック状態
:selsected	選択状態
:hidden	非表示の状態
:visible	表示状態
:animated	アニメーション中の状態

その他よく使う指定方法
$(this) ：イベントの中で、そのイベントが起こった要素を取得する
$(this).parent("要素A") ：その要素の親要素Aを取り出す
$("要素A",this) ：？その要素の子要素(子孫)の要素Aを取り出す
$(this).children("要素A") ：その要素の子要素Aを取り出す

WordPressでは「$」を使用するとエラーになります。
WordPressでjQueryを動作させるためには、「$」ではなく「jQuery」を使用します。
「$」を1つ1つ「jQuery」に書き換えるのは大変なので、テキストエディタの「置換」機能を使ってまとめて書き換えましょう。

*/

//  イベント処理（処理を行うタイミングを設定・ユーザーアクションを検出する）
/*
イベント名	内容
よく使われる
click	指定したセレクタの領域がクリックされた時
dblclick	指定したセレクタの領域がダブルクリックされた時
mousemove	指定したセレクタ領域へマウスムーブした時
mouseover   指定したセレクタの領域にマウスカーソルが乗せられている間処理を実行し続ける
  マウスカーソルが乗せられている間ずっと処理を実行し続けるため、極端に重い処理をこのイベントと結びつけるのは避けるべきです。
mouseout    マウスアウト
change	フォーム部品の状態変化があった時
focus / blur	要素にフォーカスが当たった時 / 外れた時
load	ドキュメントが読み込まれた時
scroll	画面がスクロールした時
keypress / keyup	キーボードのキーが押された時 / 離した時
mousedown / mouseup	マウスのボタンが押された時 / 離した時
submit	フォームが送信された時
resize	ウィンドウサイズが変化した時

hover	指定したセレクタの領域にマウスが乗った時、外れた時に指定した処理を行う
  clickイベントと違い、引数を2つ書くことに注意。引数の間はカンマで区切ります。

  $('セレクタ').hover(
    function(){
      //  マウスをのせた時の処理;
    },
    function(){
      //  マウスをはずした時の処理;
    }
  );

常用構文
$('セレクタ').on('イベント名',function(){
  //イベント発生時に実行したい処理;
})
on()の第1引数には上記のイベント名を記述し、第2引数には実行したい処理を関数で記述。イベント名は半角スペースを空けて複数定義することが可能
.onがないと、クリックイベント後に発生した要素に対して、クリックイベントが有効でなくなってしまいます。
なので、onをつけた書き方にすれば、動的に生成した要素にもクリックイベントは有効になりますし、複数のイベント指定もできます。
onメソッドを使用した方が拡張性が高くなる場合が多い
onイベントで登録したイベントは、そのページが閉じられるまで有効です。
onイベントを解除するのはoffイベント

cf.基本構文
$('セレクタ').イベント名(function(){
  //イベント発生時に実行したい処理;
});

*/

//  メソッド
/*
よく使用する
$("inputのセレクタ").val();   input内からvalueを取得。
$("inputのセレクタ").val("value");   input内にvalueを挿入。
$("セレクタ").css("プロパティ");  （cssメソッド）指定した要素のCSSのプロパティの値を取得
$("セレクタ").css("プロパティ", "値");  （cssメソッド）指定した要素のCSSを変更
$("セレクタ").text();  （textメソッド）指定した要素の文字列を取得
$("セレクタ").text('書き換える文字列');  （textメソッド）指定した要素内の文字列を変更
$("セレクタ").hide();  指定した要素を非表示にする。「display」属性が「none」となり、後続要素に幅寄せされる
$("セレクタ").show();  非表示状態にある指定した要素を表示する
$('フォームのセレクタ').submit();   
$("セレクタ").toggle();  指定した要素が非表示の場合は表示し、表示されている場合は非表示にする
$("セレクタ").slideUp();   下から上へのスライドアニメーション付きで非表示にする。引数を設定した場合、指定された数値(ミリ秒)かけてスライドが行われる
$("セレクタ").slideDown();   上から下へのスライドアニメーション付きで表示する。引数を設定した場合、指定された数値(ミリ秒)かけてスライドが行われる
$("セレクタ").slideToggle();  指定した要素が開いている時には閉めて、閉まっている時には開く
$("セレクタ").fadeOut();  フェードアウト（対象要素を少しずつ透明にしながら非表示に）
  引数に時間(ミリ秒)を指定することが可能。3秒であれば3000。文字列での指定も可
$("セレクタ").fadeIn();   フェードイン（非表示になっている対象要素を少しずつ表示）
$("セレクタ").fadeToggle();   フェードイン・アウト（実行されるたびに表示・非表示を繰り返してくれる）
$("セレクタ").addClass("class名"); （addClassメソッド）指定した要素に指定したclassを有効にする
$("セレクタ").removeClass("class名"); （removeClassメソッド）指定した要素に指定したclassを解除
$("セレクタ").toggleClass("class名");   クラスの切り替え。指定したクラスがある場合は、そのクラスを解除し、無い場合はそのクラスを有効にする
$(window).scrollTop();  windowやdocumentなどの要素に対して使えるメソッド。ページをどれくらいスクロールしたかのスクロール量を測ることができます。
$("親セレクタ").find("指定セレクタ").addClass("class名"); （findメソッド）指定した親要素のすべての子孫要素(自分よりも下の階層の要素すべて）の中から、指定したセレクタを持つ子孫要素を全て選択
  以下のセレクタと同様？
  配下（子孫）セレクタの指定：　親selector （半角スペース）配下selector
  親selector配下の全ての指定selectorが適用されます。
  【注意】階層が深くなってもすべてに適用
$("親セレクタ").children("指定セレクタ").addClass("class名"); （childrenメソッド）指定した親要素が持つ子要素（一階層だけ下）の中から、指定したセレクタを持つ子要素を全て選択
  以下のセレクタと同様？
  子セレクタの指定：　親selector > 子selector
  親selector > （直下の）子selectorのペア全てが対象となり、
  親selector（直下の）子selectorにのみ装飾が適用されます。
  
ややマニアック
$("セレクタ").eq(n).addClass("class名");  （eqメソッド）jQueryオブジェクトの中から、eqの引数の数字と同じインデックス番号の要素を取得できます。
$("セレクタ").attr("属性");   「attr」とは「attribute(属性)」の略。指定した要素の属性値を取得。ID名など
$("セレクタ").attr("属性","変更後の属性値");  指定した要素の属性値を変更
$("セレクタ").html();   指定したセレクタ内のHTMLの内容を取得。
$("セレクタ").html("変更後のHTMLの内容");  指定したセレクタ内のHTMLの内容を変更。変更前のHTMLの内容が書き換えられてしまうので注意
$("セレクタ").length;  セレクタの数を取得
$("セレクタ").height();  要素の高さを取得する
$("セレクタ").height("500px");   要素の高さを変更する。引数として、変更後の高さを指定
$("セレクタ").width();   要素の横幅を取得する
$("セレクタ").width("500px");   要素の横幅を変更する。引数として 変更後の横幅を指定



*/

//  よく使用する構文
/*
$("セレクタ").each(function(){
  $(this).メソッド();
});

$(this)はeachの引数として渡した関数に自動的に渡され、処理を行う対象となる一つ一つの要素のこと

簡単なアニメーション：少しずつ変化させる

animate()の中で指定するプロパティはCSSとほとんど同じように設定できます。ただし、font-sizeのようにハイフンが付与されているものに関しては、fontSizeというキャメルケースで記述しましょう。
animate()は複数繋げることも可能。それぞれのanimate()メソッドが順番に実行されていく

alert("■■■");
alert($('.hogeCLASS').attr('id'));
class=”hogeCLASS”からidを取得できているかをAlertで確認 ※バグチェックに有効

特定の日付と曜日を取得する
function SpecificDay() {
var i = 3; //(例)：3日後
var date = new Date();
date.setTime(date.getTime() + (i * 24 * 3600 * 1000));
var y = date.getYear();
var m = date.getMonth() + 1;
var d = date.getDate();
if (y < 2000) {
    y += 1900;
}
wday = new Array("日", "月", "火", "水", "木", "金", "土");
document.write(y + "年" + m + "月" + d + "日");
document.write(wday[date.getDay()]);
}

var params = {
  "color": "#0C0",
  "font-size": "13px"
}
$("#sample").css( params );

一度に複数のスタイルを変更する場合、連想配列を引数とする。
ただし、jQuery側で複雑なスタイリングをしてしまうと管理がしづらくなるため、デザインは原則CSSでするようにして、jQuery側では「addClass」や「removeClass」などの処理にとどめておくのが理想的

*/

//  
/*
変数
同じjQueryオブジェクトを複数回使用する時は変数にしましょう。コードが見やすくなる上、jQueryの処理が高速化されます。 JavaScriptと同じく、jQueryで変数宣言にはvarを用います。変数には文字列や数値、jQueryオブジェクトなどを格納することができますが、jQueryオブジェクトを格納する時は、わかりやすいように変数の頭に$を付けるのが慣例となっています。
var $div = $('div');
$div.fadeOut().fadeIn();

メソッドチェーン
メソッドチェーンとは1つのjQueryオブジェクトに連続してメソッドが利用できる構文です。同じjQueryオブジェクトを複数回使用する時は、メソッドチェーンを使うことでも処理速度を高速化できます。$('セレクタ').メソッド().メソッド()...のように書くことで、それぞれのメソッドが適用されます。

*/

//  概要
/*
jQuery：JavaScriptのライブラリ（機能群）の1つ
アニメーションをつけることや、ユーザーの行動に応じたインタラクティブなデザインを実現することができます。
①jQueryオブジェクトを作成し、②そのjQueryオブジェクトに対してメソッド（機能）を呼び出す、という2つが基本
JavaScript（JS）なので、文末にセミコロンが必要です。またコメントもJS同様
(function($){
  「ページ全体が読み込まれたら」
  document.ready(function() {
  ＊jQueryのコード＊（ページ全体が読み込まれた後に実行される）
});
  
})(jQuery);

以下の書き方はどれも同じ動作になります。

$(document).ready(function () { ... });
$().ready(function () { ... });
$(function () { ... });

jQueryを使用するには、jQueryライブラリを読み込む必要があります。ライブラリはインターネット経由で読み込むのが一般的です。

jQueryオブジェクトは、実は配列の「ような」構造をしており、右の図のようにセレクタに合致した要素が配列のように入っています（実際には配列とは異なるものです）。
jQueryオブジェクトも配列同様、0から順にインデックス番号がついています。

*/


//  JavaScript

//  変数・配列について
/*
JavaScriptの変数定義は長らくvarが使われていましたが、現在はconst / letのどちらかしか使いません。もっと言えば、基本的にはconstを最優先で利用するようにし、どうしても変数を途中で変更したい時だけletを使うようにします。
【let】再宣言が不可
【const】再宣言・再代入が不可
const / letはvarと違いブロックスコープの特徴を持っており、変数をあるブロック内だけで完結できます。
if(1) {
  var test1 = 100;
  let test2 = 200;
  const test3 = 300;
}
  
console.log(test1);
console.log(test2);
console.log(test3);

実行結果
100
エラー
エラー
*/

//  関数
/*
functionを利用したケース
function sample() {
  consoel.log('Hello');
}
コンストラクタの定義などにはfunctionを使います

アロー関数を利用したケース
const sample = (name) => console.log(name);

アロー関数は実行する処理が1行だけの場合は{ }も記述不要になる
コンストラクタ定義をアロー関数で行うとエラーになります。
functionとアロー関数は【this】の扱い方が異なるのが大きな理由です。基本的に、コンストラクタ以外の関数定義であればアロー関数を優先的に使っていけば良い

コンストラクタの例
const User = function(name, age) {
  this.name = name;
  this.age = age;
}
 
//メソッドをプロトタイプに定義する
User.prototype.showName = function() {
  console.log(this.name);
}

コンストラクタはプロパティだけを定義して、メソッドはプロトタイプを利用して定義するというのが基本パターンになります。理由は、無駄なメモリを消費しないというのが大きなポイント
プロトタイプはUserインスタンスすべてにおいて共有できるので、インスタンスを作ってもいちいちメソッドがコピーされることはありません。
実は、最近のJavaScriptはクラス構文に対応しているので、プロトタイプなどをあまり意識せずにコンストラクタを作ることも可能

*/

//  class
/*
class User {
    constructor(name, age) {
         this.name = name;
         this.age = age;
    }
 
    showName(){
        console.log(this.name);
    }
}
 
const taro = new User('太郎', 30);
 
taro.showName();

継承
class Man extends User {
  showAge() {
    console.log(this.age);
  }
}


*/

//  エスケープシーケンス
/*
文字	説明
\n	ニューライン。ラインフィード (LF)。（改行文字）
\f	フォームフィード（改ページ）空白
\b	バックスペース
\r	キャリッジリターン（CR・復帰文字： 同じ行の先頭に移動）
\t	水平タブ
¥v	垂直タブ (垂直方向に空白を入れる)
¥0	NULL文字
\'	シングルクォート（'）
\"	ダブルクォート（"）
\\	バックスラッシュ（\）または円記号
\nnn	3桁の8進数nnnによる文字コード指定。ASCII文字（例えば "A" は "\101"）
\xnn	2桁の16進数nnによる文字コード指定。Latin-1文字（例えば "A" は "\x41"）
\unnnn	4桁の16進数nnnnによるUnicode文字（例えば "あ" は "\u3042"）
\u{nnnnnn}	サロゲートペアを含むUnicode文字 (例: \u{20B9F})
クォートを文字列として使用したい場合は、"..." の中でシングルクォート（'）を使うか、'...' の中でダブルクォート（"）を使うか、\" や \' を使います。
. * + ^ | [ ] ( ) ? $ { }などの文字を文字列として正規表現の判定内で使いたい場合エスケープしなければならない。
正規表現で検索や置換をするたびに、特殊文字を気にしてエスケープ処理を行うことが手間である場合は、自分でその処理を行う関数を作り、必要な場面でその関数を利用するという手もあります。

テンプレート文字列
ES6(2015) では、文字列の中で変数を展開可能なテンプレート文字列がサポートされました。ダブルクォート(")、シングルクォート(')の代わりにバッククォート(`) を使用します。
{ ... } の間には JavaScript 構文を記述することが可能

*/

//  Babelを使ったトランスパイル手法
/*
すべてのブラウザが最新のJavaScriptに対応していないうえ、どの構文が使えるのかバラバラ
Babelを利用すると、最新の仕様で書かれたプログラムを古いJavaScriptに変換してくれるのです。
つまり、古いJavaScriptの仕様に変換されているので、ほとんどのブラウザに対応することができる
Babelを利用するにはNode.jsの開発環境が必要になる

*/
