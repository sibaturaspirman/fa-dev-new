/**
 * @fileOverview category.js
 */

(function($) {
  'use strict';

  /* 変数 */
  var $modalMovie = $('[data-js-modal]');
  var $modalMovieClose = $modalMovie.find('.c-modal__close, [data-js-modal_bg]');
  var $modalMovieTitle = $modalMovie.find('.c-modal__title');
  var $modalMovieDescription = $modalMovie.find('.c-modal__description');
  var queryParametersObject = MEL_SETTINGS.helper.getCurrentQueries();
  var locationNoQuery = location.origin + location.pathname;


  // 各種イベント初期化
  var initEvent = function() {

    // 動画モーダル表示
    $('body').on('click.modal', '[data-js-modal-movie-open]', function(e) {
      e.preventDefault();
      var targetMovieID = $(this).attr('data-js-movie-id'),
        targetMovieTitle = $(this).attr('data-js-movie-title'),
        targetMovieDescription = $(this).attr('data-js-movie-description');
      if(targetMovieID) {
        player.cueVideoById(targetMovieID);
        $modalMovieTitle.html(targetMovieTitle);
        $modalMovieDescription.html(targetMovieDescription);
        window.history.replaceState(null, null, locationNoQuery + '?movie=' + targetMovieID);
        $modalMovie.fadeIn(function() {
          $('html').attr('data-js-modal_fixed', '');
        });
      }
    });

    // 動画モーダル非表示
    $modalMovieClose.on('click.modal', function(e) {
      e.preventDefault();
      $modalMovieDescription.scrollTop(0);
      $modalMovie.fadeOut(function() {
        $('html').removeAttr('data-js-modal_fixed');
        player.stopVideo();
        $modalMovieTitle.html('');
        $modalMovieDescription.html('');
        window.history.replaceState(null, null, locationNoQuery);
      });
    });
    // 動画モーダルの背景クリックで非表示にさせるが、クリックの伝搬停止
    $('.c-modal').on('click.modal', function(e) {
      e.stopPropagation();
    });
  }// initEvent()


  // 各種イベント初期化
  initEvent();

    // URLに動画IDが指定されている場合は、初期表示でモーダルオープン
    if(queryParametersObject['movie']) {
      var targetMovieID = $(this).attr('data-js-movie-id'),
      targetMovieTitle = $(this).attr('data-js-movie-title'),
      targetMovieDescription = $(this).attr('data-js-movie-description');
      $modalMovieTitle.html(targetMovieTitle);
      $modalMovieDescription.html(targetMovieDescription);

      // 手動でモーダルオープン
      $modalMovie.fadeIn(function() {
        $('html').attr('data-js-modal_fixed','');
      });
    }


  //===================================== document ready
  $(function () {

  });
})(window.jQuery3_6 || jQuery);
