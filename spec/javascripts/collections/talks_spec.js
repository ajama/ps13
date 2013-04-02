describe("Ps13App.Collections.Talks", function() {
    it("contains instances of Ps13App.Models.Talk", function() {
        var collection = new Ps13App.Collections.Talks();
        expect(collection.model).toEqual(Ps13App.Models.Talk);
    });

    it("is persisted at /talks", function() {
        var collection = new Ps13App.Collections.Talks();
        expect(collection.url).toEqual("/talks");
    });
});