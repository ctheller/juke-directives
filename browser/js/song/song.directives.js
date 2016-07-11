juke.directive('songList', function(PlayerFactory){
	return {
		restrict: 'E',
		templateUrl: "js/song/song.list.template.html",
		scope: {
			songs: '='  
		},
		link: function(scope){
				scope.getCurrentSong = function () {
			    return PlayerFactory.getCurrentSong();
			  };

			  scope.isPlaying = function (song) {
			    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			  };

			  scope.toggle = function (song) {
			    if (song !== PlayerFactory.getCurrentSong()) {
			      PlayerFactory.start(song, scope.songs);
			    } else if ( PlayerFactory.isPlaying() ) {
			      PlayerFactory.pause();
			    } else {
			      PlayerFactory.resume();
			    }
			  };
		}
	}
})

juke.directive('doubleClick', function(){
	return {
		restrict: 'A',
		scope: {
			'toggle': '&doubleClick'
		},
		link: function(scope, element, attrs){
			element.on('dblclick', function(){
				scope.toggle();
			})
		}
	}
})