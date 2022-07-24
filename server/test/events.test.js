const mongoose = require("mongoose");
const Event = require("../model/EventModel");

const url =
  "mongodb+srv://root:toor@hirehubcluster.fcggn.mongodb.net/HireHub?retryWrites=true&w=majority";

beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Testing Job schema", () => {
  //the code below is for insert testing
  it("Add Job in db testing", () => {
    const event = {
      title: "Test Event",
      note: "Test Lorem Epsum",
      date: "2022-08-27T18:15:00.000+00:00",
      startTime: "10:20",
      endTime: "10:40",
    };
    return Event.create(event).then((event_ret) => {
      expect(event_ret.title).toEqual("Test Event");
    });
  });

  //testing if the update is working
  it("Updating the added Event", async () => {
    const status = await Event.updateOne(
      { title: "Test Event" },
      {
        title: "Test Event 1",
        endTime: "11:00",
      }
    );
    expect(status.ok);
  });
  //the below code is for delete testing

  // delete testing;
  it("Deleting the Event testing", async () => {
    const status = await Event.findOneAndDelete({ title: "Test Event 1" });
    expect(status.ok);
  });

  //the below code is for update testing here
});
