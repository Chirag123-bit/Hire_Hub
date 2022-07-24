const mongoose = require("mongoose");
const Job = require("../model/JobModel");

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
    const job = {
      title: "Test Job",
      about: "Test Lorem Epsum",
      sector: "62b6b3d0e5202261d4a118fd",
      skill: ["Test Skill", "Random Skill"],
      sallary: 50000,
      responsibilities: ["resp 1", "resp 2", "resp 3"],
      requirements: ["req 1", "req 2", "req 3"],
      company: "62daab592f9a7b7fa33da6f7",
      closeDate: "2022-08-27T18:15:00.000+00:00",
      description: "Test Description",
    };
    return Job.create(job).then((job_ret) => {
      expect(job_ret.title).toEqual("Test Job");
    });
  });

  //testing if the update is working
  it("Updating the added Job", async () => {
    const status = await Job.updateOne(
      { title: "Test Job" },
      {
        title: "Test Job 1",
        sallary: "30000",
      }
    );
    expect(status.ok);
  });
  //the below code is for delete testing

  // delete testing;
  it("Deleting the Job testing", async () => {
    const status = await Job.findOneAndDelete({ title: "Test Job 1" });
    expect(status.ok);
  });

  //the below code is for update testing here
});
