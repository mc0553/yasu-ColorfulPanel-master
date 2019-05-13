// 作成の流れ
// 1. 追加ボタンにclickのイベントを登録する
// 2. 追加ボタンがクリックされた時の処理を書く
  // 2.1 画面の入力欄、入力値を取得する
  // 2.2 新しくdivを作成する
  // 2.3 divの背景色に画面の「2.1」で取得した入力値を設定する
  // 2.4 新しく作成したdivにCSSのクラスを追加する
  // 2.5 div[id=box]を取得する
  // 2.6 作成したdivを追加する

  let addBtn = document.getElementById('addBtn');
      addBtn.addEventListener('click', function(){

        let inputColor = document.getElementById('inputColor');
        let inputValue = inputColor.value;

        let createDiv = document.createElement('div');
            createDiv.style.backgroundColor =inputValue;
            // 2.4 新しく作成したdivにCSSのクラスを追加する
            createDiv.classList.add("panel");
        
        let box = document.getElementById('box');
            box.insertBefore(createDiv,box.firstChild);

            inputColor.value = '';
  })


// <body>
//   <div class="container">
//       <div class="input-group">
//         <input id="inputColor" type="text" class="form-control" placeholder="色を入力してください" >
//         <div class="input-group-append">
//           <button id="addBtn" class="btn btn-primary" type="button">追加</button>
//         </div>
//       </div>
  
//      <div id="box" class="d-flex flex-wrap">
//         <div class="panel"></div>
//      </div>
//   </div>  
// </body>

