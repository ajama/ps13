//= require application

describe("Ps13App.Views.TasksIndex", function() {
    it("renders a collection of talks", function() {
        var talksCollection = new Ps13App.Collections.Talks();
        talksCollection.reset([
            { title: "some title" },
            { title: "some other title" }
        ]);

        var view = new Ps13App.Views.TalksIndex({collection: talksCollection});
        var $el = $(view.render().el);

        expect($el).toHaveText(/some title/);
        expect($el).toHaveText(/some other title/);
    });
});