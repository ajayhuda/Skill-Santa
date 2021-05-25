function countVowels(str) {

    const count = str.match(/[aeiou]/gi).length;

    return count;
}

const string = ("Hey This is Skillsanta JS Training");

const result = countVowels(string);

document.write(result);