/**
 * @fileOverview category.js
 */

(function($) {
  'use strict';
  
  const $radioSearchType = $('input[name="radioSearchType"]');
  const $searchBoxes = $('.c-searchBox');
  
  const $ourStoriesArticleDataURL = '/fa/id_en/our-stories/data/article-data.json'
  const $ourStoriesCards = $('[data-js-our-stories-cards]');
  const ourStoriesCardsMaxNumber = 4;
  
  // News Center
  const newsPageHTML = '/fa/id_en/news/index.html';
  const $newsList = $('[data-js-news-list]');
  const newsListMaxNumber = $newsList.attr('data-js-news-list') || 5;

  // Update Information
  const updateListDataURL = '/fa/id_en/products/update/data/site-top.json';
  const $updateList = $('[data-js-update-list]');  
  
  // Media Library
  const mediaLibraryDataURL = '/fa/id_en/media-library/data/movie-data_master.json';
  const $mediaLibraryList = $('[data-js-media-library-recommended]');
  const mediaLibraryMaxNumber = 4;

  // AoM
  const AoMDataURL = '/fa/id_en/the-art-of-manufacturing/data/article-data.json'
  const $AoMList = $('[data-js-aom-result-latest]');
  const AoMListMaxNumber = 4;
  
  const locationsWorldwideHTML = 'https://www.mitsubishielectric.com/fa/worldwide/index.html';
  const $locationsWordwideList = $('[data-js-locations-worldwide]');
  
  // サイト・製品検索初期化
  $radioSearchType.on('change.searchType', function(e) {
    const $activeRadioBtn = $radioSearchType.filter(':checked');
    const searchType = $activeRadioBtn.val();

    $searchBoxes.hide(0, function() {
      $(`[data-js-search-box="${searchType}"]`).show(0);
    });
  });
  
  // カンマ区切りのデータからタグ生成
  const _generateTags = function(tags) {
    let tagElement = '';
    if(tags.length > 0) {
      tags.split(',').forEach(function(value, index) {
        tagElement += `<span>${value}</span>`;
      }); 
    }
    return tagElement;    
  }// _generateTagList()
  
  // 導入事例の記事一覧JSONを取得し、カードを生成
  $.getJSON({
    url: $ourStoriesArticleDataURL
  })
  .done(function(data) {
    const $parsedHTML = $(data);
    const $shownItems = $parsedHTML.slice(0, ourStoriesCardsMaxNumber);
    const _generateArticleCard = function(data) {
      const articlePublishedDate = data.publishedAt;
      const articlePublishedDateObject = articlePublishedDate !== '' ? new Date(articlePublishedDate) : '';
      const nowDateObject = new Date();
      const diffDate = Math.floor((nowDateObject.getTime() - articlePublishedDateObject.getTime()) / (1000 * 60 * 60 * 24));
      const newFlag = (diffDate < 30) ? 'new' : '';
      
      return `
        <div class="l-tile__item">
        <div class="c-card ${newFlag}">
        <a class="c-card__link" href="${data.url}" target="_blank">
        <div class="c-card__head">
        <div class="c-card__img">
        <img src="${data.image}" alt="" decoding="async">
        </div><!-- /.c-card__img -->
        </div><!-- /.c-card__head -->
        <div class="c-card__body">
        <div class="c-card__row">
          <span class="c-card__date">${articlePublishedDate}</span>
        </div>
        <p class="c-card__title">${data.title}</p>
        <p class="c-card__text">${data.name}</p>
        <p class="c-card__tag">
          ${data.tagTheme ? _generateTags(data.tagTheme) : ''}
          ${data.tagIndustry ? _generateTags(data.tagIndustry) : ''}
          ${data.tagTrend ? _generateTags(data.tagTrend) : ''}
        </p>
        </div><!-- /.c-card__body -->
        </a><!-- /.c-card__link -->
        </div><!-- /.c-card -->
        </div><!-- /.l-tile__item -->`;
    }// _generateArticleCard()
    
    $shownItems.each(function() {
      $ourStoriesCards.append(_generateArticleCard(this));
    });
  })
  .fail(function() {
    console.log('導入事例データ取得エラー');
  });
  
  
  // お知らせページからHTMLを取得し、トップに掲載するお知らせのみ表示
  $.ajax({
    url: newsPageHTML,
    dataType: 'html'
  })
  .done(function(data) {
    const $parsedHTML = $(data);
    const $shownItems = $parsedHTML.find('.c-news__item:not(.hideAtHome)').slice(0, newsListMaxNumber);
    const $fixedItems = $parsedHTML.find('.c-news__item.fixedAtHome');
    $newsList.append($shownItems);
    $newsList.append($fixedItems);
  })
  .fail(function() {
    console.log('お知らせページ取得エラー');
  });


  // 更新情報一覧JSONを取得し、リストを生成
  $.getJSON({
    url: updateListDataURL,
    dataType: 'JSON'
  })
  .done(function(data) {
    let updateListHtml = '';

    data.items.forEach(function(value, index) {
      const updateDate = value.pubDate;
      const updateCategory = value.category;
      const updateLink = value.link ? value.link.replace('https://www-i.web.melco.co.jp','') : null;

      const $targetListItem = $updateList.find('[data-js-update-list-type="' + updateCategory + '"]');
      $targetListItem.find('.c-card__link').attr('href', updateLink);
      $targetListItem.find('.c-card__text').text(updateDate);
    });
  })
  .fail(function() {
    console.log('更新情報データ取得エラー');
  });


  // Media Libraryのおすすめ動画を取得し、カードを生成
  $.getJSON({
    url: mediaLibraryDataURL
  })
  .done(function(data) {
    const $parsedHTML = $(data);
    const $shownItems = $parsedHTML.slice(0, mediaLibraryMaxNumber);
    const _generateArticleCard = function(data) { 
      const moviePublishedDate = data.publishedAt.slice(0, 10);
      return `
        <div class="l-tile__item">
        <div class="c-card c-card--movie">
        <a class="c-card__link" href="/fa/id_en/media-library/index.html?movie=${data.movieID}">
        <div class="c-card__head">
        <div class="c-card__img">
        <img src="http://img.youtube.com/vi/${data.movieID}/sddefault.jpg" alt="" decoding="async">
        </div><!-- /.c-card__img -->
        </div><!-- /.c-card__head -->
        <div class="c-card__body">
        <div class="c-card__row">
        <span class="c-card__date">${moviePublishedDate}</span>
        </div>
        <p class="c-card__title">${data.title}</p>
        <p class="c-card__tag">
        ${data.category1 ? '<span>' + data.category1 + '</span>' : ''}
        ${data.category2 ? '<span>' + data.category2 + '</span>' : ''}
        ${data.category3 ? '<span>' + data.category3 + '</span>' : ''}
        ${data.category4 ? '<span>' + data.category4 + '</span>' : ''}
        </p>
        </div><!-- /.c-card__body -->
        </a><!-- /.c-card__link -->
        </div><!-- /.c-card -->
        </div><!-- /.l-tile__item -->`;
    }// _generateArticleCard()
    
    $shownItems.each(function() {
      $mediaLibraryList.append(_generateArticleCard(this));
    });
  })
  .fail(function() {
    console.log('Media Libraryデータ取得エラー');
  });


  // AoMの最新記事を取得し、カードを生成
  $.getJSON({
    url: AoMDataURL
  })
  .done(function(data) {
    const $parsedHTML = $(data);
    const $shownItems = $parsedHTML.slice(0, AoMListMaxNumber);

    // カンマ区切りのデータからタグ生成
    const _generateTags = function(tags) {
      let tagElement = '';
      if(tags.length > 0) {
        tags.split(',').forEach(function(value, index) {
          tagElement += `<span>${value}</span>`;
        }); 
      }
      return tagElement;    
    }// _generateTagList()

    const _generateArticleCard = function(data) {
      const articlePublishedDate = data.publishedAt;
      const articlePublishedDateObject = articlePublishedDate !== '' ? new Date(articlePublishedDate) : '';
      const nowDateObject = new Date();
      const diffDate = Math.floor((nowDateObject.getTime() - articlePublishedDateObject.getTime()) / (1000 * 60 * 60 * 24));
      const newFlag = (diffDate < 30) ? 'new' : '';
      
      return `
        <div class="l-tile__item">
        <div class="c-card ${newFlag}">
        <a class="c-card__link" href="${data.url}">
        <div class="c-card__head">
        <div class="c-card__img c-card__img--16x9">
        <img src="${data.image}" alt="" decoding="async">
        </div><!-- /.c-card__img -->
        </div><!-- /.c-card__head -->
        <div class="c-card__body">
        <div class="c-card__row">
        <span class="c-card__date">${articlePublishedDate}</span>
        </div>
        <p class="c-card__title">${data.title}</p>
        <p class="c-card__tag">
        ${data.tagCategory ? _generateTags(data.tagCategory) : ''}
        ${data.tagTheme ? _generateTags(data.tagTheme) : ''}
        ${data.tagIndustry ? _generateTags(data.tagIndustry) : ''}
        ${data.tagTrend ? _generateTags(data.tagTrend) : ''}
        </p>
        </div><!-- /.c-card__body -->
        </a><!-- /.c-card__link -->
        </div><!-- /.c-card -->
        </div><!-- /.l-tile__item -->`;
    }// _generateArticleCard()
    
    $shownItems.each(function() {
      $AoMList.append(_generateArticleCard(this));
    });
  })
  .fail(function() {
    console.log('AoMデータ取得エラー');
  });
  
  // プレトップでLocations Worldwideを取得
  if($locationsWordwideList.length > 0) {
    $.ajax({
      url: locationsWorldwideHTML,
      dataType: 'html'
    })
    .done(function(data) {
      const $parsedHTML = $(data);
      const $shownItems = $parsedHTML.find('#melfa_sec_worldwide')
      $locationsWordwideList.append($shownItems);
    })
    .fail(function() {
      console.log('Locations Worldwide 取得エラー');
    });
  }

  //===================================== document ready
  $(function () {
    
  });
})(window.jQuery3_6 || jQuery);
