/**
 * N00: System Check & Warm-up
 * Your first CodeQuest challenge!
 */

/**
 * Returns environment information
 * @returns {Object} Environment details with node version, platform, and ready status
 */
function getEnvironment() {
  const v = (process.versions?.node || process.version.replace(/^v/, '')); 
  const major = parseInt(v.split('.'), 10); // récupère la version majeure 
  return {
    node: process.version,            // conserve le préfixe "v" tel quel 
    platform: process.platform,       // plateforme en cours 
    ready: major >= 16                
  };
}

/**
 * Creates a welcome message
 * @param {string} name - The name to welcome
 * @returns {string} Welcome message
 */
function warmUp(name = 'Adventurer') { 
  return `Welcome ${name} to CodeQuest!`;
}

/**
 * ==============================
 * Extra: 20 Warm-up mini-défis
 * ==============================
 * 5 simples, 5 faciles, 5 moyens, 5 complexes.
 */

// Simples
function greetUpper(name) {
  // TODO: Retourner un message en UPPERCASE: `HELLO, ${name}!`
}

function reverseString(s) {
  // TODO: Retourner la chaîne inversée
}

function repeatString(s, n) {
  // TODO: Répéter s n fois (n>=0) sans effets de bord
}

function parseSemver(version) {
  // TODO: Retourner { major, minor, patch } depuis 'v16.14.2' ou '16.14.2'
}

function isNodeGte(required) {
  // TODO: Retourner true si process.version >= required (ex: '16.0.0') sans effets de bord
}

// Faciles
function sumRange(n) {
  // TODO: Somme 1..n (n>=1)
}

function factorial(n) {
  // TODO: Factorielle de n (0! = 1)
}

function isPrime(n) {
  // TODO: Tester primalité (n entier >= 0)
}

function toKebab(str) {
  // TODO: Convertir 'Hello World_test' → 'hello-world-test'
}

function formatBytes(bytes) {
  // TODO: Retourner une chaîne formatée (ex: 1024 → '1 KB') sans I/O
}

// Moyens
function range(start, end, step = 1) {
  // TODO: Retourner un tableau [start, start+step, ..., <= end]
}

function uniqueSorted(arr) {
  // TODO: Retourner valeurs uniques triées (asc)
}

function chunkArray(arr, size) {
  // TODO: Retourner un tableau de sous-tableaux de taille size
}

function median(arr) {
  // TODO: Retourner la médiane (tableau non vide)
}


// Don't forget to export your functions!
module.exports = {
  getEnvironment,
  warmUp,
  // extras
  greetUpper,
  reverseString,
  repeatString,
  parseSemver,
  isNodeGte,
  sumRange,
  factorial,
  isPrime,
  toKebab,
  formatBytes,
  range,
  uniqueSorted,
  chunkArray,
  median
};
