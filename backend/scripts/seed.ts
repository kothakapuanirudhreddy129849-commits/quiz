import mongoose from 'mongoose';import dotenv from 'dotenv';import Quiz from '../src/models/Quiz';dotenv.config();
const categories=['Programming','Web Development','Cybersecurity','Database Management','General Knowledge','Aptitude and Reasoning','Operating Systems','Computer Networks'];
const difficulties=['Easy','Moderate','Difficult'] as const;
const categoryFacts:Record<string,string[]>={
'Programming':['variable','function','loop','array','object','class','exception','recursion','data type','algorithm'],
'Web Development':['HTML','CSS','JavaScript','HTTP','DOM','React','REST API','responsive design','browser cache','accessibility'],
'Cybersecurity':['authentication','firewall','encryption','malware','phishing','XSS','SQL injection','MFA','TLS','incident response'],
'Database Management':['primary key','foreign key','SQL SELECT','normalization','index','transaction','join','ACID','backup','query plan'],
'General Knowledge':['science','history','geography','literature','mathematics','technology','environment','arts','sports','current affairs'],
'Aptitude and Reasoning':['percentages','ratios','probability','series','coding-decoding','syllogism','direction sense','time and work','averages','seating arrangement'],
'Operating Systems':['process','thread','deadlock','memory management','scheduling','virtual memory','file system','system call','kernel','paging'],
'Computer Networks':['IP address','TCP','DNS','OSI model','router','subnetting','UDP','HTTP','MAC address','network security']
};
const levels={Easy:['basic purpose','fundamental definition','common usage','simple identification'],Moderate:['working principle','practical application','conceptual relationship','best practice'],Difficult:['advanced analysis','edge-case behavior','complex trade-off','optimized implementation']};
function buildQuestions(category:string,difficulty:(typeof difficulties)[number]){const topics=categoryFacts[category];const texts=levels[difficulty];return topics.map((topic,i)=>{const prompt=texts[i%texts.length];return{question:`${i+1}. What is the ${prompt} of ${topic} in ${category}?`,options:[`A ${topic} definition`,`A key ${topic} concept`,`A correct ${topic} application`,`An unrelated answer`],correctAnswer:`A key ${topic} concept`,explanation:`In ${difficulty.toLowerCase()} ${category} questions, ${topic} should be understood by identifying the key concept and evaluating the option carefully.`}})}
async function seed(){if(!process.env.MONGODB_URI)throw new Error('MONGODB_URI is not configured');await mongoose.connect(process.env.MONGODB_URI);await Quiz.deleteMany({});const docs=[];for(const category of categories)for(const difficulty of difficulties){docs.push({title:`${category} - ${difficulty}`,category,difficulty,description:`${difficulty} level ${category} challenge with 10 carefully structured questions.`,questions:buildQuestions(category,difficulty)})}await Quiz.insertMany(docs);console.log(`Seeded ${docs.length} quizzes and ${docs.length*10} questions`);await mongoose.disconnect()}seed().catch(e=>{console.error(e);process.exit(1)});
