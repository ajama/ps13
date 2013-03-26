//= require application

describe("ExampleApp.Views.TaskItem", function() {
    var talk, view;

    beforeEach(function() {
        talk = new Ps13App.Models.Talk({ title: "something"});
        view = new Ps13App.Views.TalkItem({ model: talk });
    });

    it("renders an individual talk", function() {
        $el = $(view.render().el);
        expect($el).toHaveText(/something/);
    });

    it("links to the talk detail view", function() {
        $el = $(view.render().el);
        expect($el).toContain('a[href="#tasks/' + talk.get('id') + '"]');
    });

    it("checks the checkbox for completed tasks", function() {
        talk.set({ complete: true });
        $el = $(view.render().el);
        expect($el.find("input[type=checkbox]")).toBeChecked();
    });

    it("unchecks the checkbox for incomplete tasks", function() {
        talk.set({ complete: false });
        $el = $(view.render().el);
        expect($el.find("input[type=checkbox]")).not.toBeChecked();
    });
});