var Ps13App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function(data) {
		var talks = new Application.Collections.Talks(data.talks);
		new Application.Routers.Talks({ talks: talks });
		if (!Backbone.history.started) { //Backbone.history is undefined if router is not instantiated
			Backbone.history.start();
			Backbone.history.started = true;
		}
	}
};