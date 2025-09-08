/**
 * CodeQuest 2.3 - N03 Map/Filter Pipeline
 */

/**
 * Double tous les nombres d'un tableau
 */
function doubleNumbers(numbers) {
  // TODO: Utiliser .map() pour doubler
}

/**
 * Filtre les nombres pairs
 */
function filterEven(numbers) {
  // TODO: Utiliser .filter() avec isEven
}

/**
 * Pipeline: garde les pairs et les double
 */
function evenDoubled(numbers) {
  // TODO: Chaîner .filter().map()
}

/**
 * Supplément: 20 défis (map/filter pipelines)
 */

// Simples
function squareNumbers(numbers) {
  // TODO: numbers.map(n => n*n)
}

function incrementAll(numbers) {
  // TODO: numbers.map(n => n+1)
}

function onlyPositive(numbers) {
  // TODO: numbers.filter(n => n > 0)
}

function onlyStrings(values) {
  // TODO: values.filter(v => typeof v === 'string')
}

function lengths(strings) {
  // TODO: strings.map(s => s.length)
}

// Faciles
function squareOdds(numbers) {
  // TODO: numbers.filter(n=>n%2!==0).map(n=>n*n)
}

function compact(values) {
  // TODO: Retirer valeurs falsy: v => Boolean(v)
}

function pluck(list, key) {
  // TODO: list.map(o => o[key])
}

function filterByKey(list, key) {
  // TODO: list.filter(o => key in o)
}

function tagEvenOdd(numbers) {
  // TODO: numbers.map(n => ({ n, type: n%2===0?'even':'odd' }))
}

// Moyens
function normalizeEmails(users) {
  // TODO: users.map(u=>({...u, email:u.email.toLowerCase().trim()}))
}

function uniqueById(list) {
  // TODO: Filtrer doublons par id en conservant le premier
}

function topNByScore(list, n) {
  // TODO: Trier copie par score desc puis prendre n premiers (utiliser map/filter uniquement si possible)
}

function pipelineNormalize(numbers) {
  // TODO: Retirer NaN/undefined, convertir strings → number, puis doubler
}

function annotateRank(list) {
  // TODO: Mappper vers { ...item, rank: index+1 } après pré-tri par score desc
}

// Complexes
function wordFrequencies(words) {
  // TODO: Compter fréquences via map/filter (sans reduce) en combinant structures
}

function windowedMax(numbers, k) {
  // TODO: Pour chaque i, max de numbers[i..i+k-1] (ébauche avec map)
}

function zipMap(a, b) {
  // TODO: Associer éléments par index → [{ a:a0, b:b0 }, ...]
}

function difference(a, b) {
  // TODO: Eléments de a non présents dans b
}

function intersection(a, b) {
  // TODO: Eléments communs entre a et b
}

module.exports = {
  doubleNumbers,
  filterEven,
  evenDoubled,
  squareNumbers,
  incrementAll,
  onlyPositive,
  onlyStrings,
  lengths,
  squareOdds,
  compact,
  pluck,
  filterByKey,
  tagEvenOdd,
  normalizeEmails,
  uniqueById,
  topNByScore,
  pipelineNormalize,
  annotateRank,
  wordFrequencies,
  windowedMax,
  zipMap,
  difference,
  intersection
};


