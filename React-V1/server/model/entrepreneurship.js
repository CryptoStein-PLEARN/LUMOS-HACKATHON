const mongoose = require("mongoose");

const entrepreneurshipSchema = new mongoose.Schema({
    level: { type: Number, unique: true },
    businessTitle: { type: String },
    businessDescription: { type: String },
    details: [{
        questionNumber: { type: String },
        question: { type: String },
        options: [{
            optionNumber: { type: String },
            option: { type: String },
        }],
        correctAnswer: { type: String },
    }]
});

entrepreneurshipSchema.statics.upsert = async function (record) {
  const filter = { level: record.level };
  const update = {
    businessTitle: record.businessTitle,
    businessDescription: record.businessDescription,
    details: record.details,
  };
  const options = { upsert: true, new: true };
  const doc = await this.findOneAndUpdate(filter, update, options);
  return doc;
}

const entrepreneurshipDetail = new mongoose.model(
    "Entrepreneurship_Table",
    entrepreneurshipSchema,
    "Entrepreneurship_Table"
);

const Record1 = {
    level: 1,
    businessTitle: "Food Delivery Service",
    businessDescription: "Busy individuals often struggle to find the time and energy to cook healthy meals, leading to unhealthy eating habits and potential health issues. A food delivery service offers healthy and customizable meals with locally sourced and organic ingredients, providing a convenient and accessible option for individuals who don't have the time or resources to cook for themselves.",
    details: [
      {
        questionNumber: "Q1",
        question: "What problem does the Food Delivery Service idea solve?",
        options: [
          { optionNumber: "A", option: "Finding a suitable exercise routine" },
          { optionNumber: "B", option: "Eating unhealthy food" },
          { optionNumber: "C", option: "Learning a new language" },
          { optionNumber: "D", option: "Fixing a broken phone" },
        ],
        correctAnswer: "Eating unhealthy food",
      },
      {
        questionNumber: "Q2",
        question: "Who are the target customers for the Food Delivery Service idea?",
        options: [
          { optionNumber: "A", option: "Individuals who enjoy cooking" },
          { optionNumber: "B", option: "Busy professionals and families" },
          { optionNumber: "C", option: "Professional athletes" },
          { optionNumber: "D", option: "Students living in dorms" },
        ],
        correctAnswer: "Busy professionals and families",
      },
      {
        questionNumber: "Q3",
        question: "What is the unique value proposition of the Food Delivery Service idea?",
        options: [
          { optionNumber: "A", option: "Free delivery to any location" },
          { optionNumber: "B", option: "Use of only fast food ingredients" },
          { optionNumber: "C", option: "Healthy and customizable meals with locally sourced and organic ingredients" },
          { optionNumber: "D", option: "No minimum order required" },
        ],
        correctAnswer: "Healthy and customizable meals with locally sourced and organic ingredients",
      },
      {
        questionNumber: "Q4",
        question: "How will the Food Delivery Service idea generate revenue?",
        options: [
          { optionNumber: "A", option: "By selling cooking utensils" },
          { optionNumber: "B", option: "Through meal plan subscriptions and individual meal orders" },
          { optionNumber: "C", option: "By charging for delivery fees only" },
          { optionNumber: "D", option: "Through advertising revenue on the website" },
        ],
        correctAnswer: "Through meal plan subscriptions and individual meal orders",
      },
      {
        questionNumber: "Q5",
        question: "What are the potential risks of the Food Delivery Service idea?",
        options: [
          { optionNumber: "A", option: "Meeting customer expectations regarding taste and quality" },
          { optionNumber: "B", option: "Low demand for healthy food options" },
          { optionNumber: "C", option: "Difficulty sourcing high-quality ingredients" },
          { optionNumber: "D", option: "All of the above" },
        ],
        correctAnswer: "All of the above",
      }
    ]
  };
entrepreneurshipDetail.upsert(Record1);
  

module.exports = entrepreneurshipDetail;
