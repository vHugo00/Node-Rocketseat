function generateRandomNumbers() {
  const numberOfSets = 6;
  const numbersPerSet = 15;
  const min = 1;
  const max = 25;
  const sets = [];
  for (let i = 0; i < numberOfSets; i++) {
    const set = new Set();
    while (set.size < numbersPerSet) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      set.add(randomNumber);
    }
    sets.push(Array.from(set));
  }
  return sets;
}
const randomNumbersSets = generateRandomNumbers();
console.log(randomNumbersSets);
