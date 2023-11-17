'use server'
require('dotenv').config({})
const OpenAI = require('openai')
// const XLSX = require('xlsx');
// const fs = require('fs');
const openai = new OpenAI({
  apiKey: `${process.env["API_KEY"]}`, // defaults to process.env["OPENAI_API_KEY"]
});


// const llm = new OpenAI({
//   openAIApiKey: `${process.env.OpenAI_API_KEY}`,
// //   maxTokens:500,
//   model_name: 'davinci-002',
// });

// const chatModel = new ChatOpenAI({
//     openAIApiKey: `${process.env.OpenAI_API_KEY}`,
//   modelName: 'gpt-3.5-turbo-instruct',
//   maxConcurrency:2
// }); 




const handleSummarize = async(file:any, description:string) => {

    // const workbook = XLSX.readFile('nikhil.xlsx')
    // const sheetName = workbook.SheetNames[0];
    // const sheet = workbook.Sheets[sheetName];

    const txt = file.toString('utf8');
    const data = `${txt} ${description} `
    const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
  messages: [{"role": "system", "content": "You are a Data analyist and take out meaningfull information from the file."},
  {"role": "user", "content": `${data}`}],
    max_tokens: 100,
    });

    console.log(chatCompletion.choices[0].message.content)
    return chatCompletion.choices[0].message.content;
    
}
export default handleSummarize;