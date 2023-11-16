'use server'
require('dotenv').config({})

// const XLSX = require('xlsx');
// const fs = require('fs');

const {OpenAI} = require('langchain/llms/openai')
const {ChatOpenAI} = require('langchain/chat_models/openai');

const llm = new OpenAI({
  openAIApiKey: `${process.env.OpenAI_API_KEY}`,
//   maxTokens:500,
  model_name: 'davinci-002',
  maxConcurrency:2
});

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
    const chatResult =  llm.predict(data).then((res:any) => {
        console.log(res);
        return res;
    })
    // return()
    return chatResult;
    
}
export default handleSummarize;