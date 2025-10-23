$(function () {
    // id名 slide-items 直下のli要素を取得する
    let $li = $("#slide-items > li");
    let count = 0;

    // slideshow 関数
    function slideshow() {
        count++;

        // 全てのli要素からクラス名'current'を削除する
        $li.removeClass("current");

        // 次のli要素にクラス名'current'を付ける
        $li.eq(count % 4).addClass("current");
    }

    // slideshow 関数を一定間隔で繰り返し呼び出す
    setInterval(slideshow, 2000);
});
