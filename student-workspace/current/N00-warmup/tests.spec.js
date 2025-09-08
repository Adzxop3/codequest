/**
 * N00: System Check & Warm-up - Test Suite
 */

const {
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
} = require('./starter/index');

const startTime = Date.now();
let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`✅ ${description}`);
    passed++;
  } catch (error) {
    console.log(`❌ ${description}`);
    console.log(`   Error: ${error.message}`);
    failed++;
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('🧪 N00: System Check & Warm-up Tests\n');

// Test getEnvironment
test('getEnvironment returns an object', () => {
  const env = getEnvironment();
  assert(typeof env === 'object' && env !== null, 'Should return an object');
});

test('getEnvironment includes node version', () => {
  const env = getEnvironment();
  assert(env.node, 'Should have node property');
  assert(env.node.startsWith('v'), 'Node version should start with v');
});

test('getEnvironment includes platform', () => {
  const env = getEnvironment();
  assert(env.platform, 'Should have platform property');
  assert(['linux', 'darwin', 'win32'].includes(env.platform), 
    'Platform should be linux, darwin, or win32');
});

test('getEnvironment indicates ready status', () => {
  const env = getEnvironment();
  assert(typeof env.ready === 'boolean', 'ready should be a boolean');
  
  // Check if Node version is >= 16
  const version = parseInt(process.version.slice(1).split('.')[0]);
  assert(env.ready === (version >= 16), 
    `ready should be ${version >= 16} for Node ${process.version}`);
});

// Test warmUp
test('warmUp returns welcome message with name', () => {
  const result = warmUp('Alice');
  assert(result === 'Welcome Alice to CodeQuest!', 
    `Expected "Welcome Alice to CodeQuest!" but got "${result}"`);
});

test('warmUp uses default name when no argument', () => {
  const result = warmUp();
  assert(result === 'Welcome Adventurer to CodeQuest!', 
    `Expected "Welcome Adventurer to CodeQuest!" but got "${result}"`);
});

// Environment check
test('Node.js version is 16 or higher', () => {
  const version = parseInt(process.version.slice(1).split('.')[0]);
  assert(version >= 16, `Node.js version ${process.version} is too old. Need v16+`);
});

// Extras: 20 Warm-up mini-challenges
// Simples
test('greetUpper formats upper message', () => {
  const msg = greetUpper('Bob');
  assert(msg === 'HELLO, Bob!', `Expected 'HELLO, Bob!' but got '${msg}'`);
});

test('reverseString returns reversed string', () => {
  const res = reverseString('abc');
  assert(res === 'cba', `Expected 'cba' but got '${res}'`);
});

test('repeatString repeats without side effects', () => {
  const res = repeatString('ab', 3);
  assert(res === 'ababab', `Expected 'ababab' but got '${res}'`);
});

test('parseSemver parses v16.14.2', () => {
  const res = parseSemver('v16.14.2');
  assert(
    res && res.major === 16 && res.minor === 14 && res.patch === 2,
    `Expected {16,14,2} but got ${JSON.stringify(res)}`
  );
});

test('isNodeGte true for very low requirement', () => {
  const ok = isNodeGte('0.0.1');
  assert(ok === true, 'Expected true for 0.0.1');
});

// Faciles
test('sumRange computes 1..n', () => {
  const res = sumRange(5);
  assert(res === 15, `Expected 15 but got ${res}`);
});

test('factorial(5) is 120', () => {
  const res = factorial(5);
  assert(res === 120, `Expected 120 but got ${res}`);
});

test('isPrime detects primes', () => {
  const res = isPrime(7);
  assert(res === true, 'Expected true for 7');
});

test('toKebab converts string to kebab-case', () => {
  const res = toKebab('Hello World_test');
  assert(res === 'hello-world-test', `Expected 'hello-world-test' but got '${res}'`);
});

test('formatBytes formats 1024 as 1 KB', () => {
  const res = formatBytes(1024);
  assert(res === '1 KB', `Expected '1 KB' but got '${res}'`);
});

// Moyens
test('range generates arithmetic progression', () => {
  const res = range(1, 5, 2);
  const exp = [1, 3, 5];
  assert(JSON.stringify(res) === JSON.stringify(exp), `Expected ${JSON.stringify(exp)} but got ${JSON.stringify(res)}`);
});

test('uniqueSorted returns unique values sorted asc', () => {
  const res = uniqueSorted([3, 1, 3, 2]);
  const exp = [1, 2, 3];
  assert(JSON.stringify(res) === JSON.stringify(exp), `Expected ${JSON.stringify(exp)} but got ${JSON.stringify(res)}`);
});

test('chunkArray splits into chunks of size', () => {
  const res = chunkArray([1, 2, 3, 4, 5], 2);
  const exp = [[1, 2], [3, 4], [5]];
  assert(JSON.stringify(res) === JSON.stringify(exp), `Expected ${JSON.stringify(exp)} but got ${JSON.stringify(res)}`);
});

test('median computes median for odd length', () => {
  const res = median([1, 3, 5]);
  assert(res === 3, `Expected 3 but got ${res}`);
});

// Summary
const elapsedTime = Date.now() - startTime;
console.log('\n' + '='.repeat(50));
console.log(`📊 Results: ${passed}/${passed + failed} tests passed`);
console.log(`⏱️  Time: ${elapsedTime}ms`);

if (failed === 0) {
  console.log('🎉 All tests passed! Well done!');
  
  // Check for bonus/challenge criteria
  if (elapsedTime < 3 * 60 * 1000) { // Less than 3 minutes
    console.log('🏆 Challenge achieved: Completed in under 3 minutes!');
  }
  
  process.exit(0);
} else {
  console.log('❌ Some tests failed. Keep trying!');
  console.log('💡 Hint: Use `cq help-me N00` if you need help');
  process.exit(1);
}