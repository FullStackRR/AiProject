// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const app = express();
// const port = 3000;
// app.use(cors());
// app.use(express.json());
// let index=0
// const chatGptApiKey = process.env.OPENAI_API_KEY; // Replace with your OpenAI GPT-3 API key

// app.get('/getBlessings', async (req, res) => {
//   try {
//     let blessingsList=[]
//     console.log("ooooooo")
//     blessingsList=["n","p"]
//     const { enviorment, length,type,target } = req.query
//     const prompt=generatPrompt(enviorment,type,length,target)
//     // blessingsList=demo(prompt);
   
    
//     const blessings = await getChatGptBlessings(prompt);
//      blessingsList = blessings.data.choices.map(choice => choice.text);
//     const firstBlessing = blessingsList[0];

//     res.json( firstBlessing );
//   } catch (error) {
//     console.error(error.message+"oooooooooooooooops");
//   }
// });
function generatPrompt(enviorment,type,length,target){
  return `Generate a ${enviorment} ${length} blessing for a ${target}`
  }
// async function getChatGptBlessings(prompt) {

//   const maxTokens = 50; // You can adjust this based on your preference

//   const response = await axios.post(
//     'https://api.openai.com/v1/engines/davinci-codex/completions',
//     {
//       prompt,
//       max_tokens: maxTokens,
//       n: 3, // Generate three completions
//     },
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${chatGptApiKey}`,
//       },
//     }
//   );

//   return response.data;
// }
//  function demo(prompt){
//   return [prompt+'111',prompt+'222',prompt+'333']
// }
// app.get('/another',(req,res)=>{
// if(index<3)
//   return blessingsList[index++]
// const ans= "no more blessings for this category please enter ypur request again"
// res.json({ blessing: ans });
// })

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser'); // Import body-parser module

const openai = require('openai');

const app = express();

app.use(express.static('staticFiles'));

app.use(bodyParser.json()); 

app.set('view engine', 'ejs');

openai.apiKey = process.env.OPENAI_API_KEY;

const { OpenAI } = require('openai');

client = new OpenAI()
 var i=0
 var index=0
var arr=[]
app.get('/getBlessings', async (req, res) => {
 
  
  // const formData = req.body;
 try {
  i=0
  const { enviorment, length,type,target } = req.query
  const dynamicPrompt = generatPrompt(enviorment,type,length,target)//generateDynamicPrompt(formData);
  // Use the dynamic prompt to generate poems
  do{
  const response = await client.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      prompt: dynamicPrompt,
      max_tokens: 1000,
  });
   const parsableJSONResponse = response.choices[0].text;
  arr.push(parsableJSONResponse)
i++
}while(i<3)

 
} catch (error) {
    console.log('JSON Parsing Error:', error.message);

}

  res.json(arr[0]);
});

app.get('/another',(req,res)=>{
  console.log(index)
if(index<3)
  res.json( arr[index++])
const ans= "no more blessings for this category please enter ypur request again"
res.json(ans);
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
