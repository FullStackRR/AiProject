


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



function generatPrompt(enviorment,type,length,target){
 // return `Generate a ${enviorment} ${length} blessing for a ${target}`
   return `כתוב ברכה באוירה ${enviorment} באורך ${length} מסוג ${type} עבור ${target}`
  }
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
 let ans="";
if(index<3)
  ans= arr[index++]
else
 ans= "no more blessings for this category please enter ypur request again"
res.json(ans);
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
