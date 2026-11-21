import mongoose,{Schema,Document,Types} from 'mongoose';
export interface IAnswer{questionIndex:number;selectedAnswer:string;correctAnswer:string;isCorrect:boolean}
export interface IResult extends Document{userId:Types.ObjectId;quizId:Types.ObjectId;category:string;difficulty:string;score:number;totalQuestions:number;percentage:number;answers:IAnswer[];completedAt:Date}
const schema=new Schema<IResult>({userId:{type:Schema.Types.ObjectId,ref:'User',required:true,index:true},quizId:{type:Schema.Types.ObjectId,ref:'Quiz',required:true},category:{type:String,required:true},difficulty:{type:String,required:true},score:Number,totalQuestions:Number,percentage:Number,answers:[{questionIndex:Number,selectedAnswer:String,correctAnswer:String,isCorrect:Boolean}],completedAt:{type:Date,default:Date.now}},{timestamps:false});
export default mongoose.model<IResult>('Result',schema);
