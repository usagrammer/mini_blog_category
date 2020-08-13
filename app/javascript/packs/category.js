window.addEventListener('load', function () {

  const categoryForms = document.querySelectorAll('.category-select-form'); // カテゴリのフォーム

  if (categoryForms.length == 0) return null // カテゴリのフォームが無いなら以後実行しない

  console.log("category.js");

  categoryChanged = (e) => { // カテゴリが変更された時、ajax通信を行い次のフォームを組み立てて追加する
    const selectedCategoryId = e.target.value; // 選択されたカテゴリのid
    const changedForm = e.target; // 選択されたフォームの要素

    if (!selectedCategoryId) { // 「ーーーーー」が選択された時、ajax通信する前に終了
      if (changedForm.nextElementSibling) changedForm.nextElementSibling.remove(); // 変化したフォームより後ろのフォームを削除する
      return null
    }

    // ajax準備
    const XHR = new XMLHttpRequest();
    // 「?category_id=${selectedCategoryId}」をパスに含めることでparams[:category_id]に選択したカテゴリのIDが送られる
    XHR.open("GET", `/categories/?category_id=${selectedCategoryId}`, true);
    XHR.responseType = "json";
    // ajax開始
    XHR.send();

    XHR.onload = () => {

      if (XHR.status != 200) { // ajaxに失敗した時の処理
        alert("failed");
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }

      if (changedForm.nextElementSibling) changedForm.nextElementSibling.remove(); // 変化したフォームより後ろのフォームを削除する

      if (!XHR.response.html) return null // コントローラから返ってきたhtmlの中身が無い場合、ここで終了

      const newCategoryForm = document.createElement('div'); // 新しいカテゴリのフォームを作る下準備
      newCategoryForm.innerHTML = XHR.response.html; // コントローラから返ってきたフォームを挿入する
      newCategoryForm.firstChild.addEventListener('change', categoryChanged); // コントローラから返ってきたフォームにイベントをセットする
      changedForm.insertAdjacentElement("afterend", newCategoryForm); // 新しいカテゴリのフォームをビューに表示する
    }
  }

  categoryForms.forEach(categoryForm => { // カテゴリのフォームにイベントを設定する
    categoryForm.addEventListener('change', categoryChanged);
  });

});
