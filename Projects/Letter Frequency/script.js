const letterFrequency = (phrase) => {
    let freq = {};

    for(let letter of phrase){
        if (letter in freq){
            freq[letter] += 1;
        }
        else{
            freq[letter] = 1;
        }
    }
    return freq;
};

const wordFrequency = (phrase) => {
    let freq = {}
    let words = phrase.split(' ');
    
    for(let word of words){
        console.log(word);

        if(word in freq){
            freq[word]+= 1;
        }
        else{
            freq[word] = 1
        }
    }

    console.log(words);
    return freq;
};


//shortcut 
/*
    const wordFrequency = (phrase) => {
        let words = phrase.split(' ');
        return letterFrequency(words);
    }
*/

console.log(letterFrequency('Small World Madam'));

console.log(wordFrequency('well well well Hello World, Hello'));

