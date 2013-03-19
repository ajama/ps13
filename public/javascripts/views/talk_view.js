Ps13App.Views.TalkView = Backbone.View.extend({

	tagName: "tr".
	initialize: function() {

	},
	render: function() {
		this.$el.html(JST['talks/view']({ model: this.model }));
		return this;
	}

});