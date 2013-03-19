Ps13App.Views.TalksIndex = Backbone.View.extend({
	render: function () {
		var self = this;
		this.$el.html(JST['talks/index']()); //no collection needed to build container markup, since we split into two separate views

		this.collection.each(function(talk) {
			var talkView = new Ps13App.Views.TalkView({ model: talk });
			self.$('table').append(talkView.render().el);
		});

		return this;
	}
});