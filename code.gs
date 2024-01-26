function BARD(prompt){

  var api_key='ENTER_YOUR_API_KEY_HERE';
  var apiurl='https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  var url= apiurl+'?key='+api_key;

  var headers = {
    "Content-Type": "application/json"
  };

  var requestBody={
    "contents":{
    "parts":{
      "text": prompt
    }
    }
  }

  var options ={
    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify(requestBody)
  }
var response = UrlFetchApp.fetch(url,options);
var data= JSON.parse(response.getContentText());
var output = data.candidates[0].content.parts[0].text;
Logger.log(output);
return output;
}
