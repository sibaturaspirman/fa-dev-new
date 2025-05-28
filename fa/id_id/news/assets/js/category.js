/**
 * @fileOverview category.js
 */

(function($) {
  'use strict';
  
  const $newsList = $('[data-js-news-list]');
  const $filterYear = $('[data-js-filter-year]');
  const $filterCategory = $('[data-js-filter-category]');
  const $allNewsObject = $('.c-news__item');
  let $filteredNewsObject = {};
  let filterYearValue = '';
  let filterCategoryValue = '';
  
  const queryParametersObject = MEL_SETTINGS.helper.getCurrentQueries();
  const locationNoQuery = location.origin + location.pathname;
  let locationSearch = '';
  
  /* 関数 */  
  const _getFilterValue = function() {
    // フィルターの値を取得
    filterYearValue = $filterYear.val();
    filterCategoryValue = $filterCategory.val();
  }// _getFilterValue()
  
  const _updateURL = function() {
    // フィルターの値でURLを更新
    const tempFilterArray = [];
    locationSearch = '';
    
    if(filterYearValue !== null && filterYearValue !== 'all') {
      tempFilterArray.push(`year=${filterYearValue}`);
    }
    if(filterCategoryValue !== null && filterCategoryValue !== 'all') {
      tempFilterArray.push(`category=${filterCategoryValue}`);
    }
    if(tempFilterArray.length > 0) {
      locationSearch = '?' + tempFilterArray.join('&');
    }
    window.history.replaceState(null, null, locationNoQuery + locationSearch);
  }// _updateURL()
  
  const _filterObject = function() {
    _getFilterValue();
    _updateURL();
    
    //　フィルター処理
    $filteredNewsObject = $allNewsObject;
    if(filterYearValue !== 'all') {
      $filteredNewsObject = $filteredNewsObject.filter(function(index, value) {
        return $(value).find('.c-news__date').text().indexOf(filterYearValue) > -1;
      });      
    }
    if(filterCategoryValue !== 'all') {
      $filteredNewsObject = $filteredNewsObject.filter(function(index, value) {
        return $(value).find('.c-news__category > span').text() === filterCategoryValue;
      });      
    }
    
    // 全件を非表示にしたから、フィルターで絞り込まれた内容を順に表示
    $newsList.find('.c-news__item').fadeOut('fast');
    $filteredNewsObject.each(function(index, value) {
      setTimeout(function() {
        $(value).fadeIn();
      }, 80 * index + 400);
    });
  }// _filterObject()
  
  const reloadStatus = function() {
    // URLから状態を復元
    if(queryParametersObject['year']) {
      $filterYear.val(queryParametersObject['year']);
    }
    if(queryParametersObject['category']) {
      $filterCategory.val(queryParametersObject['category']);
    }
    
    // URLにパラメータが指定されていれば、フィルター実行
    if(queryParametersObject['year'] || queryParametersObject['category']) {
      $newsList.find('.c-news__item').hide(0);
      _filterObject();
    }
  }// reloadStatus()
  
  const init = function() {
    // フィルターのイベント登録
    $filterYear.on('change.filter', _filterObject);
    $filterCategory.on('change.filter', _filterObject);
  }// init()

  //===================================== document ready
  $(function () {
    reloadStatus();
    init();
  });
})(window.jQuery3_6 || jQuery);
