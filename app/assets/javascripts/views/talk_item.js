Ps13App.Views.TalkItem = Backbone.View.extend({
    tagName: "tr",

    events: {
        "select talk": "update"
    },

    initialize: function() {
        _.bindAll(this, "render");
    },

	render: function() {
        this.$el.attr("id", "talk_" + this.model.id);
		this.$el.html(JST['talks/item']({ model: this.model }));
        this.renderTalksTable();
		return this;
	},

    renderTalksTable: function() {
        $('#talk-list tr:last').after('<tr><td>' + this.model.talks[1].title + '</td></tr>');
    },

    update: function() {
        //TODO
    }

});