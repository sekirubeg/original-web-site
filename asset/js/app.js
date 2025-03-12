window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    // 4秒後にロード画面を非表示
    document.getElementById("loading").classList.add("hidden");
    // スクロールを有効化
    document.body.classList.remove("no-scroll");
  }, 4000); // 4秒後に実行
});

$(document).ready(function () {
  $(".slider_thumb").slick({
    fade: true,
    speed: 900,
    arrows: false,
    autoplaySpeed: 3000,
    asNavFor: ".thumb",
  });
  $(".thumb").slick({
    asNavFor: ".slider_thumb",
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});

$(window).on("load", function () {});

// スクロールしたら実行
$(window).scroll(function () {
  ScrollAnime();
  Anime();
  aaaaa();
  bbb();
});

$(window).on("click", function () {
  ScrollAnime();
  Anime();
  aaaaa();
});

//変数定義
let beforePos = 0; //スクロール前位置
let window_h = $(window).height() / 2; //画面中央位置
const hamburger = document.querySelector(".openbtn");
const nav = document.querySelector(".side-header");
const button = document.querySelector(".closebutton");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("shift");
  nav.classList.toggle("shift");
});
button.addEventListener("click", () => {
  hamburger.classList.toggle("shift");
  nav.classList.toggle("shift");
});

function ScrollAnime() {
  let scroll_top = $(window).scrollTop();
  //上にスクロール もしくは 画面中央より上なら
  if (window_h / 2 > scroll_top || nav.classList.contains("shift")) {
    // ハンバーガーメニューをフェードイン
    $("#side").fadeIn(500);
    // 下にスクロールしたら
  } else {
    // ハンバーガーメニューをフェードアウト
    $("#side").fadeOut(350);
  }
  if (window_h / 2 > scroll_top || hamburger.classList.contains("shift")) {
    // ハンバーガーメニューをフェードイン
    $("#HbButton").fadeOut(500);
    // 下にスクロールしたら
  } else {
    // ハンバーガーメニューをフェードアウト
    $("#HbButton").fadeIn(350);
    $("#HbButton").removeClass("hidden");
  }

  //スクロール前の場所を保持
  beforePos = scroll_top;
}

document.addEventListener("DOMContentLoaded", function () {
  // Load Event
  $(window).on("load", function () {
    loopSetUp();
    loop();
  });

  var resizetimer = false;
  $(window).resize(function () {
    if (resizetimer !== false) {
      clearTimeout(resizetimer);
    }
    resizetimer = setTimeout(function () {
      loopSetUp();
    }, 200);
  });
  var windowWidth = 0;
  var imageWidth = 520;
  for (let i = 0; i < 4; i++) {
    $(".slider_loop_inner").append($(".slider_loop_inner li").clone(true));
  }
  function loopSetUp() {
    windowWidth = $(window).width();
    switch (true) {
      case windowWidth > 768:
        imageWidth = 480;
        break;
      case windowWidth > 400:
        imageWidth = 200;
        break;
      default:
        imageWidth = 200;
    }
    $(".slider_loop_inner li").css("width", imageWidth + "px");
    $(".slider_loop_inner").css("width", function () {
      return imageWidth * $(".slider_loop_inner li").length + "px";
    });
  }
  function loop() {
    setTimeout(function () {
      $(".slider_loop_inner").css(
        "left",
        $(".slider_loop_inner").position().left - 1
      );
      if (
        $(".slider_loop_inner").position().left <
        (-imageWidth * $(".slider_loop_inner li").length) / 2
      ) {
        $(".slider_loop_inner").css("right", function () {
          return 0;
        });
      }
      loop();
    }, 1000 / 70);
  }
});

function aaaaa() {
  var topBtn = $("#page_top");
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      //ボタンの表示方法
      topBtn.fadeIn();
      $("#page_top").rem;
      oveClass("hidden");
    } else {
      //ボタンの非表示方法
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $("body,  html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
}

// 各ボタンを取得
const buttonA = document.getElementById("a_btn");
const buttonB = document.getElementById("b_btn");
const buttonC = document.getElementById("c_btn");
const buttonD = document.getElementById("d_btn");

// すべての対象画像を取得
const screensA = document.querySelectorAll(".imga");
const screensB = document.querySelectorAll(".imgb");
const screensC = document.querySelectorAll(".imgc");
const screensD = document.querySelectorAll(".imgd");

// クラスを一括削除する関数
function removeKeitaFromAll() {
  screensA.forEach((el) => el.classList.remove("keita"));
  screensB.forEach((el) => el.classList.remove("keita"));
  screensC.forEach((el) => el.classList.remove("keita"));
  screensD.forEach((el) => el.classList.remove("keita"));
}

// Aボタンをクリックしたとき（全ての "keita" を削除）
buttonA.addEventListener("click", function () {
  removeKeitaFromAll();
});

// Bボタンをクリックしたとき（A, B に "keita" を追加）
buttonB.addEventListener("click", function () {
  removeKeitaFromAll();
  screensA.forEach((el) => el.classList.add("keita"));
  screensB.forEach((el) => el.classList.add("keita"));
});

// Cボタンをクリックしたとき（A, C に "keita" を追加）
buttonC.addEventListener("click", function () {
  removeKeitaFromAll();
  screensA.forEach((el) => el.classList.add("keita"));
  screensC.forEach((el) => el.classList.add("keita"));
});

// Dボタンをクリックしたとき（A, D に "keita" を追加）
buttonD.addEventListener("click", function () {
  removeKeitaFromAll();
  screensA.forEach((el) => el.classList.add("keita"));
  screensD.forEach((el) => el.classList.add("keita"));
});
