// const mongoose = require("mongoose");

// const entrepreneurshipSchema = new mongoose.Schema({
//     level: { type: Number, unique: true },
//     businessTitle: { type: String },
//     businessDescription: { type: String },
//     details: [{
//         questionNumber: { type: String },
//         question: { type: String },
//         options: [{
//             optionNumber: { type: String },
//             option: { type: String },
//         }],
//         correctAnswer: { type: String },
//     }]
// });

// entrepreneurshipSchema.statics.upsert = async function (record) {
//   const filter = { level: record.level };
//   const update = {
//     businessTitle: record.businessTitle,
//     businessDescription: record.businessDescription,
//     details: record.details,
//   };
//   const options = { upsert: true, new: true };
//   const doc = await this.findOneAndUpdate(filter, update, options);
//   return doc;
// }

// const entrepreneurshipDetail = new mongoose.model(
//     "Entrepreneurship_Table",
//     entrepreneurshipSchema,
//     "Entrepreneurship_Table"
// );

// const Record1 = {
//     level: 1,
//     businessTitle: "Food Delivery Service",
//     businessDescription: "Busy individuals often struggle to find the time and energy to cook healthy meals, leading to unhealthy eating habits and potential health issues. A food delivery service offers healthy and customizable meals with locally sourced and organic ingredients, providing a convenient and accessible option for individuals who don't have the time or resources to cook for themselves.",
//     details: [
//       {
//         questionNumber: "Q1",
//         question: "What problem does the Food Delivery Service idea solve?",
//         options: [
//           { optionNumber: "A", option: "Finding a suitable exercise routine" },
//           { optionNumber: "B", option: "Eating unhealthy food" },
//           { optionNumber: "C", option: "Learning a new language" },
//           { optionNumber: "D", option: "Fixing a broken phone" },
//         ],
//         correctAnswer: "Eating unhealthy food",
//       },
//       {
//         questionNumber: "Q2",
//         question: "Who are the target customers for the Food Delivery Service idea?",
//         options: [
//           { optionNumber: "A", option: "Individuals who enjoy cooking" },
//           { optionNumber: "B", option: "Busy professionals and families" },
//           { optionNumber: "C", option: "Professional athletes" },
//           { optionNumber: "D", option: "Students living in dorms" },
//         ],
//         correctAnswer: "Busy professionals and families",
//       },
//       {
//         questionNumber: "Q3",
//         question: "What is the unique value proposition of the Food Delivery Service idea?",
//         options: [
//           { optionNumber: "A", option: "Free delivery to any location" },
//           { optionNumber: "B", option: "Use of only fast food ingredients" },
//           { optionNumber: "C", option: "Healthy and customizable meals with locally sourced and organic ingredients" },
//           { optionNumber: "D", option: "No minimum order required" },
//         ],
//         correctAnswer: "Healthy and customizable meals with locally sourced and organic ingredients",
//       },
//       {
//         questionNumber: "Q4",
//         question: "How will the Food Delivery Service idea generate revenue?",
//         options: [
//           { optionNumber: "A", option: "By selling cooking utensils" },
//           { optionNumber: "B", option: "Through meal plan subscriptions and individual meal orders" },
//           { optionNumber: "C", option: "By charging for delivery fees only" },
//           { optionNumber: "D", option: "Through advertising revenue on the website" },
//         ],
//         correctAnswer: "Through meal plan subscriptions and individual meal orders",
//       },
//       {
//         questionNumber: "Q5",
//         question: "What are the potential risks of the Food Delivery Service idea?",
//         options: [
//           { optionNumber: "A", option: "Meeting customer expectations regarding taste and quality" },
//           { optionNumber: "B", option: "Low demand for healthy food options" },
//           { optionNumber: "C", option: "Difficulty sourcing high-quality ingredients" },
//           { optionNumber: "D", option: "All of the above" },
//         ],
//         correctAnswer: "All of the above",
//       }
//     ]
//   };
// entrepreneurshipDetail.upsert(Record1);

// const Record2 = {
//   level: 2,
//   businessTitle: "Eco-Friendly Cleaning Service",
//   businessDescription: "The use of traditional cleaning products and methods can harm the environment and contribute to air and water pollution. Many individuals and businesses are looking for more eco-friendly alternatives. An eco-friendly cleaning service that uses non-toxic and biodegradable cleaning products and methods to provide a safer and healthier cleaning experience. This service will also educate clients on the benefits of eco-friendly cleaning and provide tips on how to maintain a clean and sustainable environment.",
//   details: [
//     {
//       questionNumber: "Q1",
//       question: "What is the main problem with traditional cleaning products?",
//       options: [
//         { optionNumber: "A", option: "They are too expensive" },
//         { optionNumber: "B", option: "They are difficult to find in stores" },
//         { optionNumber: "C", option: "They contain harsh chemicals that can harm the environment and health" },
//         { optionNumber: "D", option: "They are not effective at cleaning" },
//       ],
//       correctAnswer: "They contain harsh chemicals that can harm the environment and health",
//     },
//     {
//       questionNumber: "Q2",
//       question: "What does an eco-friendly cleaning service prioritize in their operations?",
//       options: [
//         { optionNumber: "A", option: "Using harsh chemicals to ensure a thorough clean" },
//         { optionNumber: "B", option: "Using single-use cleaning products for convenience" },
//         { optionNumber: "C", option: "Using sustainable cleaning practices and natural, non-toxic products" },
//         { optionNumber: "D", option: "None of the above" },
//       ],
//       correctAnswer: "Using sustainable cleaning practices and natural, non-toxic products",
//     },
//     {
//       questionNumber: "Q3",
//       question: "What is a potential benefit of using an eco-friendly cleaning service?",
//       options: [
//         { optionNumber: "A", option: "Lower cost compared to traditional cleaning services" },
//         { optionNumber: "B", option: "More thorough cleaning of surfaces" },
//         { optionNumber: "C", option: "Minimizing environmental impact and potential health risks" },
//         { optionNumber: "D", option: "Faster cleaning time" },
//       ],
//       correctAnswer: "Minimizing environmental impact and potential health risks",
//     },
//     {
//       questionNumber: "Q4",
//       question: "What is the unique value proposition of the Eco-Friendly Cleaning Service?",
//       options: [
//         { optionNumber: "A", option: "Offering free cleaning supplies to customers" },
//         { optionNumber: "B", option: "Providing eco-friendly and non-toxic cleaning solutions" },
//         { optionNumber: "C", option: "Offering a 24/7 cleaning service" },
//         { optionNumber: "D", option: "Providing a free trial of the cleaning service" },
//       ],
//       correctAnswer: "Providing eco-friendly and non-toxic cleaning solutions",
//     },
//     {
//       questionNumber: "Q5",
//       question: "How will the Eco-Friendly Cleaning Service generate revenue?",
//       options: [
//         { optionNumber: "A", option: "Through selling cleaning supplies to customers" },
//         { optionNumber: "B", option: "Through monthly subscription plans" },
//         { optionNumber: "C", option: "Through offering free cleaning services" },
//         { optionNumber: "D", option: "Through selling advertising space on their cleaning equipment" },
//       ],
//       correctAnswer: "Through monthly subscription plans",
//     }
//   ]
// };
// entrepreneurshipDetail.upsert(Record2);

// const Record3 = {
//   level: 3,
//   businessTitle: "Social media marketing agency",
//   businessDescription: "This business involves managing social media accounts for other businesses and creating content to increase their online presence.",
//   details: [
//     {
//       questionNumber: "Q1",
//       question: "What is the primary goal of a social media marketing agency?",
//       options: [
//         { optionNumber: "A", option: "To increase social media followers" },
//         { optionNumber: "B", option: "To drive website traffic" },
//         { optionNumber: "C", option: "To generate leads and sales" },
//         { optionNumber: "D", option: "To improve search engine optimization" },
//       ],
//       correctAnswer: "To generate leads and sales",
//     },
//     {
//       questionNumber: "Q2",
//       question: "Which social media platform has the largest user base as of 2021?",
//       options: [
//         { optionNumber: "A", option: "Facebook" },
//         { optionNumber: "B", option: "Instagram" },
//         { optionNumber: "C", option: "TikTok" },
//         { optionNumber: "D", option: "Twitter" },
//       ],
//       correctAnswer: "Facebook",
//     },
//     {
//       questionNumber: "Q3",
//       question: "What is the purpose of a social media content calendar?",
//       options: [
//         { optionNumber: "A", option: "To track social media metrics" },
//         { optionNumber: "B", option: "To schedule social media posts" },
//         { optionNumber: "C", option: "To create social media graphics" },
//         { optionNumber: "D", option: "To analyze social media trends" },
//       ],
//       correctAnswer: "To schedule social media posts",
//     },
//     {
//       questionNumber: "Q4",
//       question: "What is the recommended frequency for posting on social media platforms?",
//       options: [
//         { optionNumber: "A", option: "Once a week" },
//         { optionNumber: "B", option: "Once a day" },
//         { optionNumber: "C", option: "Twice a day" },
//         { optionNumber: "D", option: "Twice a week" },
//       ],
//       correctAnswer: "Once a day",
//     },
//     {
//       questionNumber: "Q5",
//       question: "What is a key performance indicator (KPI) in social media marketing?",
//       options: [
//         { optionNumber: "A", option: "Number of social media followers" },
//         { optionNumber: "B", option: "Number of social media likes" },
//         { optionNumber: "C", option: "Engagement rate" },
//         { optionNumber: "D", option: "All of the above" },
//       ],
//       correctAnswer: "Engagement rate",
//     }
//   ]
// };
// entrepreneurshipDetail.upsert(Record3);
  

// module.exports = entrepreneurshipDetail;
