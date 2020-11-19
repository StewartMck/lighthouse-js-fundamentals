const makeCase = function (input, caseInput) {

  const cases = {
    camel: function (words) {
      // camel case: thisIsAString
      let camelString = words[0];
      for (let word = 1; word < words.length; word++) {
        camelString += words[word].replace(words[word].charAt(0), words[word].charAt(0).toUpperCase());
      }
      return camelString;
    },
    pascal: function (words) {
      // pascal case: ThisIsAString
      let pascalString = "";
      words.forEach(word => {
        word = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
        pascalString += word;
      });
      return pascalString;
    },
    snake: function (words) {
      // snake case: this_is_a_string
      let snakeString = "";
      for (let word = 0; word < words.length; word++) {
        snakeString += (words[word] + (word < words.length - 1 ? "_" : ""));
      }
      return snakeString;
    },
    kebab: function (words) {
      // kebab case: this-is-a-string
      let kebabString = "";
      for (let word = 0; word < words.length; word++) {
        kebabString += (words[word] + (word < words.length - 1 ? "-" : ""));
      }
      return kebabString;
    },
    title: function (words) {
      // title case: This Is A String
      let titleString = "";
      words.forEach(word => {
        word = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
        titleString += (word + " ");
      });
      return titleString.trim();
    },
    vowel: function (words) {
      // vowel case: thIs Is A strIng
      let vowelString = "";
      for (let word of words) {
        for (let char = 0; char < word.length; char++) {
          if (word[char] === "a" || word[char] === 'e' || word[char] === 'i' || word[char] === 'o' || word[char] === 'u') word = word.replace(word.charAt(char), word.charAt(char).toUpperCase());
        }
        vowelString += word + " ";
      }
      return vowelString.trim();
    },
    consonant: function (words) {
      // consonant case: THiS iS a STRiNG
      let consonantString = "";
      for (let word of words) {
        word = word.toUpperCase();
        for (let char = 0; char < word.length; char++) {
          if (word[char] === "A" || word[char] === 'E' || word[char] === 'I' || word[char] === 'O' || word[char] === 'U') word = word.replace(word.charAt(char), word.charAt(char).toLowerCase());
        }
        consonantString += word + " ";
      }
      return consonantString.trim();
    },
    upper: function (words) {
      // upper case: THIS IS A STRING
      let upperString = "";
      for (let word of words) {
        word = word.toUpperCase();
        upperString += word + " ";
      }
      return upperString.trim();
    }
  };

  // Extract words from string
  input.trim();
  let words = input.split(" ");

  if (caseInput instanceof Array) {
    let string;
    for (let i = 0; i < caseInput.length; i++) {
      if (i === 0) string = (cases[caseInput[i]](words));
      string = string.split(" ")
      string = (cases[caseInput[i]](string));
    }
    return string;
  } else {
    return (cases[caseInput](words));
  }
}



console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));