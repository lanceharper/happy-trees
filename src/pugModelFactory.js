import PugModel from "./models/pug";

export default function createFakePugModel() {
  let pugClicked = false;

  const StubPugModel = PugModel.extend({
    fetch: function () {
      if (!pugClicked) {
        this.set({
          message: "http://pugimages.com/pug1",
          status: "success",
        });
        pugClicked = true;
      } else {
        this.set({
          message: "http://pugimages.com/pug2",
          status: "success",
        });
      }
    },
  });

  return new StubPugModel();
}
