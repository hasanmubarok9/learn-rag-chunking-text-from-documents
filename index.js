// import { CharacterTextSplitter } from "langchain/text_splitter";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import fs from 'fs/promises';

// LangChain text splitter
async function splitDocument() {
	const text = await fs.readFile('podcasts.txt', 'utf8'); 
	// console.log(text);

	const splitter = new RecursiveCharacterTextSplitter({
		chunkSize: 150,
		chunkOverlap: 15,
	});
	const output = await splitter.createDocuments([text]);
	console.log(output);
}

splitDocument();
