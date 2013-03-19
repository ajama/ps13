TalkView = Backbone.View.extend({
	render: function () {
		this.$el.html(JST['talks/view']({ model: this.model }));
		return this;
	}
});