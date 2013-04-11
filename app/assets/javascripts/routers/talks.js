Ps13App.Routers.Talks = Backbone.Router.extend({

    initialize: function(options) {
        this.el = $('#talks');
        this.collection = options.collection;
    },

	routes: {
		"": "index",
        "registered" : "registered"
	},

	index: function() {
		var view = new Ps13App.Views.TalksIndex({ collection: this.collection});
		$('tbody').html(view.render().$el);
	},

    registered: function() {
        //TODO
    }
});