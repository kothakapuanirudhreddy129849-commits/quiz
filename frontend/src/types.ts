export type User={id:string;username:string;email:string;createdAt:string};
export type Quiz={id:string;title:string;category:string;difficulty:'Easy'|'Moderate'|'Difficult';description:string;totalQuestions:number};
export type Question={questionIndex:number;question:string;options:string[]};
export type Answer={questionIndex:number;selectedAnswer:string};
export type Result={id:string;score:number;totalQuestions:number;percentage:number;passed:boolean;answers:any[];completedAt?:string;category?:string;difficulty?:string};
