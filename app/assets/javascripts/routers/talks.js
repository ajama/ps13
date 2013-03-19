Ps13App.Routers.Talks = Backbone.Router.extend({

    initialize: function(options) {
        this.collection = options.collection;
    },

	routes: {
		"": "index"
	},

	index: function() {
		var view = new Ps13App.Views.TalksIndex({ collection: this.collection});
		$('body').html(view.render().$el);
	}
});