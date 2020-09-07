const express = require('express')
const router = express.Router()

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

//
const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: process.env.apikey,
  }),
  serviceUrl: process.env.serviceUrl,
});


router.post('/', (req, res) => {

  console.log(req.body.text)

  // prepares to be sent to the tone analyser api
  const toneParams = {
    toneInput: { 'text': req.body.text },
    contentType: 'application/json',
  };
  //actually sent
  toneAnalyzer.tone(toneParams)
    .then(toneAnalysis => {
      res.json(toneAnalysis)
    })
    .catch(err => {
      console.log('error:', err);
    });
})

module.exports = router