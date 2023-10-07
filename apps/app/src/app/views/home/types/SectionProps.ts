export interface SectionProps{
    name:string
    handleGoTo?:{
        go:(y:number)=>void,
        name:string
    }
}