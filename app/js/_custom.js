document.addEventListener("DOMContentLoaded", function() {

	var TabBlock = {
  s: {
    animLen: 200
  },
  
  init: function() {
    TabBlock.bindUIActions();
    TabBlock.hideInactive();
  },
  
  bindUIActions: function() {
    $('.comments-tabs').on('click', '.comments-tabs-item', function(){
      TabBlock.switchTab($(this));
    });
  },
  
  hideInactive: function() {
    var $tabBlocks = $('.tabBlock');
    
    $tabBlocks.each(function(i) {
      var 
        $tabBlock = $($tabBlocks[i]),
        $panes = $tabBlock.find('.tabBlock-pane'),
        $activeTab = $tabBlock.find('.comments-tabs-item.active');
      
      $panes.hide();
      $($panes[$activeTab.index()]).show();
    });
  },
  
  switchTab: function($tab) {
    var $context = $tab.closest('.tabBlock');
    
    if (!$tab.hasClass('active')) {
      $tab.siblings().removeClass('active');
      $tab.addClass('active');
   
      TabBlock.showPane($tab.index(), $context);
    }
   },
  
  showPane: function(i, $context) {
    var $panes = $context.find('.tabBlock-pane');
   
    // Normally I'd frown at using jQuery over CSS animations, but we can't transition between unspecified variable heights, right? If you know a better way, I'd love a read it in the comments or on Twitter @johndjameson
    $panes.slideUp(TabBlock.s.animLen);
    $($panes[i]).slideDown(TabBlock.s.animLen);
  }
};

$(function() {
  TabBlock.init();

});
});
  jQuery( document ).ready(function($) {
  
  	$( '.menu-link' ).on('click',function() {
  	  if ( !$( this ).parent().is( ".active" ) ) {
  	  	$( '.menu-item' ).removeClass('active');
  	  	$( this ).parent().addClass('active');
  	  } 
    });
    $( '.menu-mobile' ).on('click',function() {
      $('.menu-wrapper').toggle();
    });
});

  var app = new Vue({
  el: '#app',
  data: {
      search: '',
      userData: {
        isOnLine: false,
        chalice: true,
        notification: true,
        moneyCoins: 142,
        currentMoney: 0
      },
      postsRelated: [
         { _id: 0,
          _src: '/img/related-img.jpg',
          _title: 'Welcome to Nethernite',
          _content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        },
        {
          _id: 1,
          _src: '/img/related-img.jpg',
          _title: 'Welcome to Nethernite' ,
          _content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        },
        {
          _id: 2,
          _src: '/img/related-img.jpg',
          _title: 'Welcome to Nethernite',
          _content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
        }
      ],
      currentPost: {
        _id: 2,
        _src: '/img/related-img.jpg',
        _date: 'July 24, 2018',
        _title: 'The International 2018 Collector’',
        _content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s.',
        _like: 345,
        _previews: 7649,
        comments: [
          {
            _id: 0,
            _authorSrc: '/img/comment-foto.jpg',
            _authorName: 'Svetlakov',
            _date: '22 May',
            _comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500.',
          },          
          {
            _id: 1,
            _authorSrc: '/img/comment-foto.jpg',
            _authorName: 'Andrey',
            _date: '22 May',
            _comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500.',
          }
      ]
    }
    },
  methods: {
    authentication: function() {
      this.userData.isOnLine=!this.userData.isOnLine
    },
    handlerLike: function() {
      this.currentPost._like++
    }
  },
  computed: {
    filterComment: function() {
      return this.currentPost.comments.filter(comment => {
        return comment._authorName.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }


})