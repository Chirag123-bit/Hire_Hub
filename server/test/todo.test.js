const mongoose = require("mongoose");
const Todo = require("../model/TodoModels");

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

describe("Testing Todo schema", () => {
  //the code below is for insert testing
  it("Add Todo in db testing", () => {
    const todo = {
      title: "Test todo",
      note: "Test Lorem Epsum",
    };
    return Todo.create(todo).then((event_ret) => {
      expect(event_ret.title).toEqual("Test todo");
    });
  });

  //testing if the update is working
  it("Updating the added todo", async () => {
    const status = await Todo.updateOne(
      { title: "Test todo" },
      {
        isCompleted: true,
      }
    );
    expect(status.ok);
  });
  //the below code is for delete testing

  // delete testing;
  it("Deleting the todo testing", async () => {
    const status = await Todo.findOneAndDelete({ title: "Test todo" });
    expect(status.ok);
  });

  //the below code is for update testing here
});
