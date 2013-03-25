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
		this.$el.html(JST['talks/view']({ model: this.model }));
        this.renderTalksTable();
		return this;
	},

    renderTalksTable: function() {
        $('#talk-list tr:last').after('<tr><td>my data</td><td>more data</td></tr>');
    },

    update: function() {
        //TODO
    }

});