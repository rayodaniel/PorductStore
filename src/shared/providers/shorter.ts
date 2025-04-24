export const wordShortener = (paragraph:string , max:number):string =>{

    const paragraphShortener = paragraph.slice(0,max)
    return `${paragraphShortener}...`
}