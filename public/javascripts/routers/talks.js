Ps13App.Routers.Talks = Backbone.Router.extend({
	routes: {
		"": "index"
	},

	index: function() {
		var view = new Ps13App.Views.TalksIndex({ collection: talks});
		$('body').html(view.render().$el);
	}
});