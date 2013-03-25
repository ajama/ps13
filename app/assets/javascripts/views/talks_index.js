Ps13App.Views.TalksIndex = Backbone.View.extend({
	render: function () {
        this.renderTemplate();
        this.fillTemplate();
        //this.renderTalks();
        return this;
    },

    renderTemplate: function() {
        this.$el.html(JST['talks/index']({ talks: this.collection })); //templates/talks/index.jst.ejs
    },

    fillTemplate: function() {
        this.$('th a.ja').text("test");
    },

    renderTalks: function() {
		var self = this;
        this.collection.each(function (talk) {
            var talkView = new Ps13App.Views.TalkItem({ model: talk });
            self.$('table').append(talkView.render().el);
        });
    }
});