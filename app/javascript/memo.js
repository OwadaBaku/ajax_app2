function post (){
	//リクエストを送信する処理
	// 1. submitを押すことでイベント発火
	const submit = document.getElementById("submit");
	submit.addEventListener("click", (e) => {
		e.preventDefault();	// 7. 現状ブラウザのリクエスト＋JSのリクエストの二重になっているので解消させる。(e)はイベントオブジェクトといい、今回だと「投稿ボタンをクリックする」のようなものを指す。
		// 2.フォームの要素を取得し、内容を取得（new〜〜で新しいオブジェクト生成）
		const form = document.getElementById("form");
		const formData =  new FormData(form);
		// 3. JSを用いてHTTP通信を行う時のオブジェクト（new~~で新しいオブジェクト生成）
		const XHR = new XMLHttpRequest();
		// 4. open==リクエストの内容を指定するためのメソッド
		XHR.open("POST", "/posts", true)
		// 5. サーバーからクライアントサイドにレスポンスを返す際のレスポンスの形式を指定
		XHR.responseType = "json";
		// 6. send()メソッドでフォーム内容をサーバー側に送信する
		XHR.send(formData);
 });
};

window.addEventListener('load', post);