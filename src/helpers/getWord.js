import { words } from '../data/words';

export const getWord = () => {

    const allWords = words.split('\n');
    const filteredWords = allWords.filter( el => el.length === 5 );
    const specialWords = filteredWords.filter(el => el.includes("ñ"));
    const normalizedWords = filteredWords.map( el => el.normalize('NFD').replace(/[\u0300-\u036f]/g,""));
    
    allWords.length = 0;
    filteredWords.length = 0;

    const dataArr = new Set([...normalizedWords,...specialWords]);
    const result = [...dataArr];

    specialWords.length = 0;
    normalizedWords.length = 0;
    const randomWord = Math.floor(Math.random() * result.length);
console.log(result.length);
    return result[randomWord].toUpperCase();
}