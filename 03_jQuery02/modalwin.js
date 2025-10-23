$(function () {
    // サムネイルの一覧画像をクリックしたときを
    $("a.modal").click(function () {
        // 背景のグレーの部分を表示する
        $("#glayLayer").show();
        // 中央の画像表示部分を表示する
        $("#overLayer").show();
        // 画像ファイル名を取得
        const imgfile = $(this).attr("href");
        // 中央のoverLayerに画像を表示
        $("#overLayer").html(`<img src="${imgfile}">`);
        // aタグの本来の動作(リンク先への画面遷移)を無効化する
        return false;
    });

    // 背景のグレーの部分をクリックしたとき
    $("#glayLayer").click(function () {
        // モーダルウィンドウを非表示にする
        $("#glayLayer").hide();
        $("#overLayer").hide();
    });
});
