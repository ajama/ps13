window.Ps13App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function(data) {
		this.talks = new Ps13App.Collections.Talks(data.talks);
		new Ps13App.Routers.Talks({ talks: talks });
		if (!Backbone.history.started) { //Backbone.history is undefined if router is not instantiated
			Backbone.history.start();
			Backbone.history.started = true;
		}
	}
};