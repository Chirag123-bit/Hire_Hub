const mongoose = require("mongoose");
const Company = require("../model/CompanyModel");

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

describe("Testing Company schema", () => {
  //the code below is for insert testing
  it("Add Company in db testing", () => {
    const company = {
      name: "Test Company",
      sector: "Information Technology",
      country: "Nepal",
      region: "Kathmandu",
      about: "LOrem Ipsum",
      desc: "LOrem Ipsum",
      phone: "1234567890",
    };
    return Company.create(company).then((company_ret) => {
      expect(company_ret.name).toEqual("Test Company");
    });
  });

  //testing if the update is working
  it("Updating the added company", async () => {
    const status = await Company.updateOne(
      { name: "Test Company" },
      {
        title: "Test Company 1",
        country: "India",
      }
    );
    expect(status.ok);
  });
  //the below code is for delete testing

  // delete testing;
  it("Deleting the company testing", async () => {
    const status = await Company.findOneAndDelete({ title: "Test Company 1" });
    expect(status.ok);
  });

  //the below code is for update testing here
});
