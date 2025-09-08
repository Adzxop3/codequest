#!/usr/bin/env node

const { doubleNumbers, filterEven, evenDoubled } = require('./starter.js');

console.log('🧪 N03 - Map/Filter Tests\n');

let passed = 0, failed = 0;

function test(desc, actual, expected) {
  const match = JSON.stringify(actual) === JSON.stringify(expected);
  if (match) {
    console.log(`✅ ${desc}`);
    passed++;
  } else {
    console.log(`❌ ${desc}`);
    console.log(`   Expected: ${JSON.stringify(expected)}`);
    console.log(`   Actual:   ${JSON.stringify(actual)}`);
    failed++;
  }
}

try {
  // Test doubleNumbers
  test('doubleNumbers([1, 2, 3])', doubleNumbers([1, 2, 3]), [2, 4, 6]);
  test('doubleNumbers([0, 5])', doubleNumbers([0, 5]), [0, 10]);
  test('doubleNumbers([])', doubleNumbers([]), []);

  // Test filterEven  
  test('filterEven([1, 2, 3, 4])', filterEven([1, 2, 3, 4]), [2, 4]);
  test('filterEven([1, 3, 5])', filterEven([1, 3, 5]), []);
  test('filterEven([2, 4, 6])', filterEven([2, 4, 6]), [2, 4, 6]);

  // Test pipeline
  test('evenDoubled([1, 2, 3, 4])', evenDoubled([1, 2, 3, 4]), [4, 8]);
  test('evenDoubled([1, 3, 5])', evenDoubled([1, 3, 5]), []);
  
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
  process.exit(failed === 0 ? 0 : 1);
} catch (error) {
  console.log(`❌ Error: ${error.message}`);
  process.exit(1);
}