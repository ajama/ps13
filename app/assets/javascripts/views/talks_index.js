Ps13App.Views.TalksIndex = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this, "render");
    },

	render: function () {
        this.renderTemplate();
        this.renderTalks();
        return this;
    },

    renderTemplate: function() {
        this.$el.html(JST['talks/index']({ talks: this.collection }));
    },

    renderTalks: function() {
		var self = this;
        this.collection.each(function (talk) {
            var row = new Ps13App.Views.TalkItem({ model: talk });
            self.$('tbody').append(row.el);
        });
    }
});