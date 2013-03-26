Ps13App.Routers.Talks = Backbone.Router.extend({

    initialize: function(options) {
        this.el = $('#talks');
        console.log("options-argumentet fra ruta til viewet er " + options.collection);
        this.collection = options.collection;
    },

	routes: {
		"": "index"
	},

	index: function() {
		var view = new Ps13App.Views.TalksIndex({ collection: this.collection});
		$('tbody').html(view.render().$el);
	}
});