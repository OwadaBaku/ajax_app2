// 下記のコードを見やすく整理する
// 
const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
// 関数buildHTMLの返り値にhtmlを指定
  return html;
};

function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
			if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);

// function post (){
// 	//リクエストを送信する処理
// 	// 1. submitを押すことでイベント発火
// 	const submit = document.getElementById("submit");
// 	submit.addEventListener("click", (e) => {
// 		e.preventDefault();	// 7. 現状ブラウザのリクエスト＋JSのリクエストの二重になっているので解消させる。(e)はイベントオブジェクトといい、今回だと「投稿ボタンをクリックする」のようなものを指す。
// // 2.フォームの要素を取得し、内容を取得（new〜〜で新しいオブジェクト生成）
// 		const form = document.getElementById("form");
// 		const formData =  new FormData(form);
// // 3. JSを用いてHTTP通信を行う時のオブジェクト（new~~で新しいオブジェクト生成）
// 		const XHR = new XMLHttpRequest();
// // 4. open==リクエストの内容を指定するためのメソッド
// 		XHR.open("POST", "/posts", true)
// // 5. サーバーからクライアントサイドにレスポンスを返す際のレスポンスの形式を指定
// 		XHR.responseType = "json";
// // 6. send()メソッドでフォーム内容をサーバー側に送信する
// 		XHR.send(formData);
// // 8. レスポンスの受信に成功したときの処理
// 		XHR.onload = ( ) => {
// // 10. 生成したHTMLを描画する（新しいメモを挿入するための要素を取得して、変数listに格納）
// 			const list = document.getElementById("list");
// // 12. リセットの対象(文字の入力欄)となるフォームの要素contentを取得して、変数formTextに格納
// 			const formText = document.getElementById("content")
// // 11. レスポンスの中から投稿されたメモの情報を抽出し、変数itemに格納
// 			const item = XHR.response.post;
// // 9itemに格納されたメモ情報をもとにブラウザに表示させるHTMLを生成。変数htmlに格納
// 			const html = `
// 				<div class="post">
// 					<div class="post-date">
// 						投稿日時:${item.created_at}
// 					</div>
// 					<div class="post-content">
// 						${item.content}
// 					</div>
// 				<div>`;
// // 10. 生成したHTMLを描画する（insertAdjacentHTMLメソッドの第一引数にafterendを指定し、変数listに格納された要素の直後に生成したHTMLを挿入）
// 				list.insertAdjacentHTML("afterend", html);
// // 13. リセットの対象(文字の入力欄)であるformTextのvalue属性に空の文字列を指定して中身をリセットする
// 				formText.value = "";
// 		};
//  });
// };

// window.addEventListener('load', post);