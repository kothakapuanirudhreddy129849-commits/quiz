import mongoose,{Schema,Document} from 'mongoose';
export interface IQuestion{question:string;options:string[];correctAnswer:string;explanation:string}
export interface IQuiz extends Document{title:string;category:string;difficulty:'Easy'|'Moderate'|'Difficult';description:string;questions:IQuestion[]}
const question=new Schema<IQuestion>({question:{type:String,required:true},options:{type:[String],required:true,validate:(v:string[])=>v.length===4},correctAnswer:{type:String,required:true},explanation:{type:String,required:true}},{_id:false});
const schema=new Schema<IQuiz>({title:{type:String,required:true},category:{type:String,required:true,index:true},difficulty:{type:String,enum:['Easy','Moderate','Difficult'],required:true,index:true},description:String,questions:{type:[question],required:true}},{timestamps:true});
schema.index({category:1,difficulty:1},{unique:true});
export default mongoose.model<IQuiz>('Quiz',schema);
