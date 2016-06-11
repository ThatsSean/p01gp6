angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.newsfeed', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/newsfeed.html',
        controller: 'newsfeedCtrl'
      }
    }
  })

  .state('tabsController.about', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.information', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/information.html',
        controller: 'informationCtrl'
      }
    }
  })

  .state('tabsController.quiz', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz.html',
        controller: 'quizCtrl'
      }
    }
  })

  .state('tabsController.quiz2', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz2.html',
        controller: 'quiz2Ctrl'
      }
    }
  })

  .state('tabsController.quiz3', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz3.html',
        controller: 'quiz3Ctrl'
      }
    }
  })

  .state('tabsController.quiz4', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz4.html',
        controller: 'quiz4Ctrl'
      }
    }
  })

  .state('tabsController.quiz5', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz5.html',
        controller: 'quiz5Ctrl'
      }
    }
  })

  .state('tabsController.quiz6', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz6.html',
        controller: 'quiz6Ctrl'
      }
    }
  })

  .state('tabsController.quiz7', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz7.html',
        controller: 'quiz7Ctrl'
      }
    }
  })

  .state('tabsController.quiz8', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz8.html',
        controller: 'quiz8Ctrl'
      }
    }
  })

  .state('tabsController.quiz9', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz9.html',
        controller: 'quiz9Ctrl'
      }
    }
  })

  .state('tabsController.quiz10', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz10.html',
        controller: 'quiz10Ctrl'
      }
    }
  })

  .state('tabsController.quiz11', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz11.html',
        controller: 'quiz11Ctrl'
      }
    }
  })

  .state('tabsController.quiz12', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz12.html',
        controller: 'quiz12Ctrl'
      }
    }
  })

  .state('tabsController.quiz13', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz13.html',
        controller: 'quiz13Ctrl'
      }
    }
  })

  .state('tabsController.quiz14', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz14.html',
        controller: 'quiz14Ctrl'
      }
    }
  })

  .state('tabsController.quiz15', {
    url: '/page24',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz15.html',
        controller: 'quiz15Ctrl'
      }
    }
  })

  .state('tabsController.quiz16', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz16.html',
        controller: 'quiz16Ctrl'
      }
    }
  })

  .state('tabsController.quiz17', {
    url: '/page26',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz17.html',
        controller: 'quiz17Ctrl'
      }
    }
  })

  .state('tabsController.quiz18', {
    url: '/page27',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz18.html',
        controller: 'quiz18Ctrl'
      }
    }
  })

  .state('tabsController.quiz19', {
    url: '/page28',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz19.html',
        controller: 'quiz19Ctrl'
      }
    }
  })

  .state('tabsController.quiz20', {
    url: '/page29',
    views: {
      'tab1': {
        templateUrl: 'templates/quiz20.html',
        controller: 'quiz20Ctrl'
      }
    }
  })

  .state('tabsController.videos', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/videos.html',
        controller: 'videosCtrl'
      }
    }
  })

  .state('score', {
    url: '/page31',
    templateUrl: 'templates/score.html',
    controller: 'scoreCtrl'
  })
  
  .state('tabsController.shareAStory', {
    url: '/page32',
    views: {
      'tab2': {
        templateUrl: 'templates/shareAStory.html',
        controller: 'shareAStoryCtrl'
      }
    }
  })
  
  .state('tabsController.survey', {
    url: '/page33',
    views: {
      'tab4': {
        templateUrl: 'templates/survey.html',
        controller: 'surveyCtrl'
      }
    }
  })
  
  .state('tabsController.survey2', {
    url: '/page34',
    views: {
      'tab4': {
        templateUrl: 'templates/survey2.html',
        controller: 'survey2Ctrl'
      }
    }
  })
  
  .state('signup', {
    url: '/page36',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })
  
  .state('submitvideo', {
    url: '/page37',
    templateUrl: 'templates/submitVideo.html',
    controller: 'submitvideoCtrl'
  })
  
  .state('login', {
    url: '/page0',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page0')

});