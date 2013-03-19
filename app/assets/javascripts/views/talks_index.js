Ps13App.Views.TalksIndex = Backbone.View.extend({
	render: function () {
        this.renderTemplate();
        this.renderTalks();
        return this;

    },

    renderTemplate: function() {
        this.$el.html(JST['talks/index']({ talks: this.collection }));
        //no collection needed to build container markup, since we split into two separate views
    },

    renderTalks: function() {
		var self = this;
        this.collection.each(function (talk) {
            var talkView = new Ps13App.Views.TalkView({ model:talk });
            self.$('table').append(talkView.render().el);
        });
    }
});