describe("Ps13App", function() {

    it("has a namespace for models", function() {
        expect(Ps13App.Models).toBeTruthy();
    });

    it("has a namespace for Collections", function() {
        expect(Ps13App.Collections).toBeTruthy();
    });

    it("has a namespace for Views", function() {
        expect(Ps13App.Views).toBeTruthy();
    });

    it("has a namespace for Routers", function() {
        expect(Ps13App.Routers).toBeTruthy();
    });

    describe("initialize()", function() {
        it("accepts data JSON and instantiates a collection from it", function() {
            var data = {
                "talks": [{"abstract":"Some text goes here","speaker":"Ola Normann","title":"First talk"},{"abstract":"Another Abstract","speaker":"Another Speaker","title":"Another Title"},{"abstract":"Abstract without track number","speaker":"Mr. No Track Nr","title":"With No Track Nr"}]
            };
            Ps13App.initialize(data);
            expect(Ps13App.talks).not.toEqual(undefined);
            expect(Ps13App.talks.length).toEqual(3);
            expect(Ps13App.talks.models[0].get('title')).toEqual("First talk");
            expect(Ps13App.talks.models[1].get('title')).toEqual("Another Title");
        });

//        it("instantiates a Talks router", function() {
//            sinon.spy(Ps13App.Routers, 'Talks');
//            Ps13App.initialize({});
//            expect(Ps13App.Routers.Talks).toHaveBeenCalled();
//            Ps13App.Routers.Talks.restore();
//        });
//
//        it("starts Backbone.history", function() {
//            Backbone.history.started = null;
//            Backbone.history.stop();
//            sinon.spy(Backbone.history, 'start');
//            Ps13App.initialize({});
//
//            expect(Backbone.history.start).toHaveBeenCalled();
//
//            Backbone.history.start.restore();
//        });
    });
});