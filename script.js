// ESERCIZIO 1
console.log("ESERCIZIO 1");
console.log();

const checkNumbers = function (a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    return true;
  }
  return false;
};

console.log(checkNumbers(50, 6)); //Ritorna "true"
console.log(checkNumbers(55, 6)); //Ritorna "false"

// ESERCIZIO 2
console.log();
console.log("ESERCIZIO 2");
console.log();

const removeCharFromIndex = function (str, index) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (i !== index) {
      newString += str[i];
    }
  }
  return newString;
};
console.log(removeCharFromIndex("qwerty", 2)); //ritorna qwrty

// ESERCIZIO 3
console.log();
console.log("ESERCIZIO 3");
console.log();

const checkNumbers2 = function (a, b) {
  const aValid = (a >= 40 && a <= 60) || (a >= 70 && a <= 100);
  const bValid = (b >= 40 && b <= 60) || (b >= 70 && b <= 100);

  if (aValid && bValid) {
    return true;
  } else {
    return false;
  }
};

console.log(checkNumbers2(45, 80)); //ritorna true, 45 e 80 sono compresi
console.log(checkNumbers2(20, 80)); //ritorna false, 80 è compreso ma 20 non lo è

// ESERCIZIO 4
console.log();
console.log("ESERCIZIO 4");
console.log();

const checkCityName = function (cityName) {
  if (cityName.startsWith("Los") || cityName.startsWith("New")) {
    return cityName;
  }
  return false;
};

console.log(checkCityName("New Town of Poggioreale"));

// ESERCIZIO 5
console.log();
console.log("ESERCIZIO 5");
console.log();

const arraySum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(arraySum([1, 2, 5]));

// ESERCIZIO 6
console.log();
console.log("ESERCIZIO 6");
console.log();

const checkArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === 1 || element === 3) {
      return false;
    }
  }
  return true;
};

console.log(checkArray([1, 5, 6, 12])); //ritorna false
console.log(checkArray([5, 6, 12])); //ritorna trie

// ESERCIZIO 7
console.log();
console.log("ESERCIZIO 7");
console.log();

const checkAngle = function (angle) {
  if (angle < 90) {
    return "acuto";
  } else if (angle > 90 && angle < 180) {
    return "ottuso";
  } else if (angle === 90) {
    return "retto";
  } else if (angle === 180) {
    return "piatto";
  }
};

console.log(checkAngle(90));
console.log(checkAngle(180));
console.log(checkAngle(100));
console.log(checkAngle(30));

// ESERCIZIO 8
console.log();
console.log("ESERCIZIO 8");
console.log();

const createAcronym = function (str) {
  let acronym = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      acronym += str[i];
    }
  }
  return acronym;
};

console.log(createAcronym("Fabbrica Italiana Automobili Torino"));
