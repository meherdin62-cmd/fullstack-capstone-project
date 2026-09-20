const natural = require('natural');
const express = require('express');
const app = express();
app.use(express.json());

const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");

app.post('/sentiment', (req, res) => {
  const { sentence } = req.body;
  const analysis = analyzer.getSentiment(sentence.split(' '));
  const sentiment = analysis > 0 ? "positive" : analysis < 0 ? "negative" : "neutral";
  res.json({ sentiment, score: analysis });
});

app.listen(3050, () => console.log("Sentiment service running on 3050"));