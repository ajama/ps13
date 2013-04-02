Ps13App.Views.TalkItem = Backbone.View.extend({
    tagName: "tr",

    events: {
        "select talk": "update"
    },

    initialize: function() {
        _.bindAll(this, "render");
    },

	render: function() {
        console.log("this.model er " + this.model);
        this.$el.attr("id", "talk_" + this.model.id);
		this.$el.html(JST['talks/item']({ talk: this.model }));
        this.renderTalksTable();
		return this;
	},

    renderTalksTable: function() {
        console.log("this.model.title should be the text something but is in fact " + this.model.title);
        this.$('#talk-list tr:last').after('<tr><td>' + this.model.title + '</td></tr>'); //this.model.talks is undefined!!!!!
    },

    update: function() {
        //TODO
    }

});