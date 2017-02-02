require('SCFeedHeader');
if (!SCFeedHeader.instancesRespondToSelector('leftButton')) {
	defineClass('SCFeedHeader', {
	    leftButton: function() {
	    	var header = self.valueForKeyPath('_header');
	    	return header.leftButton();
	    },
	    rightButton: function() {
			var header = self.valueForKeyPath('_header');
			return header.rightButton();
	    },
	});
}