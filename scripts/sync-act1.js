#!/usr/bin/env node

/**
 * Sync act-1 reference files into student workspace (current), skipping N00-warmup.
 * - Source (reference): levels/act-1/<scene>
 * - Target (student):  student-workspace/current/<scene>
 * Copies only non-starter code: tests.spec.js, manifest.json, criteria.json, README.md
 * Does NOT touch: starter/, starter.js, solution.js
 */

const fs = require('fs');
const path = require('path');

function isDirectory(dirPath) {
  try {
    return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  } catch {
    return false;
  }
}

function copyFileIfExists(src, dest) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    return true;
  }
  return false;
}

function main() {
  const rootDir = process.cwd();
  const srcActDir = path.join(rootDir, 'levels', 'act-1');
  const destCurrentDir = path.join(rootDir, 'student-workspace', 'current');

  if (!isDirectory(srcActDir)) {
    console.error(`Reference directory not found: ${srcActDir}`);
    process.exit(1);
  }
  if (!isDirectory(destCurrentDir)) {
    console.error(`Student current directory not found: ${destCurrentDir}`);
    process.exit(1);
  }

  // Discover reference scenes
  const refScenes = fs.readdirSync(srcActDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(name => name.startsWith('N'));

  // Scenes currently present in student workspace
  const studentScenes = fs.readdirSync(destCurrentDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(name => name.startsWith('N'));

  // Skip list: do not touch N00-warmup, and ignore known duplicate folders in reference
  const skip = new Set(['N00-warmup', 'N03-destructuring']);
  const copiedSummary = [];

  // First, update scenes already present in student workspace (except skip)
  for (const scene of studentScenes) {
    if (skip.has(scene)) {
      copiedSummary.push({ scene, skipped: true, copied: [] });
      continue;
    }

    const srcSceneDir = path.join(srcActDir, scene);
    const destSceneDir = path.join(destCurrentDir, scene);

    if (!isDirectory(srcSceneDir)) {
      copiedSummary.push({ scene, skipped: false, copied: [], note: 'reference scene not found' });
      continue;
    }

    const filesToCopy = ['tests.spec.js', 'manifest.json', 'criteria.json', 'README.md'];
    const copied = [];

    for (const file of filesToCopy) {
      const src = path.join(srcSceneDir, file);
      const dest = path.join(destSceneDir, file);
      if (copyFileIfExists(src, dest)) {
        copied.push(file);
      }
    }

    copiedSummary.push({ scene, skipped: false, copied });
  }

  // Then, create any missing scenes from reference (except skip)
  for (const scene of refScenes) {
    if (skip.has(scene)) continue;
    const srcSceneDir = path.join(srcActDir, scene);
    const destSceneDir = path.join(destCurrentDir, scene);
    if (isDirectory(destSceneDir)) continue; // already handled above

    if (!isDirectory(srcSceneDir)) continue;

    // Create target dir
    fs.mkdirSync(destSceneDir, { recursive: true });

    const filesToCopy = ['tests.spec.js', 'manifest.json', 'criteria.json', 'README.md'];
    const created = [];

    // Copy starter directory if present (for new scenes only)
    const starterDir = path.join(srcSceneDir, 'starter');
    if (isDirectory(starterDir)) {
      const destStarter = path.join(destSceneDir, 'starter');
      copyDirRecursive(starterDir, destStarter);
      created.push('starter/');
    }

    // Copy top-level starter.js shim if present
    const starterFile = path.join(srcSceneDir, 'starter.js');
    if (fs.existsSync(starterFile)) {
      fs.copyFileSync(starterFile, path.join(destSceneDir, 'starter.js'));
      created.push('starter.js');
    } else if (isDirectory(starterDir) && fs.existsSync(path.join(starterDir, 'index.js'))) {
      const shim = "module.exports = require('./starter/index');\n";
      fs.writeFileSync(path.join(destSceneDir, 'starter.js'), shim);
      created.push('starter.js (shim)');
    }

    // Copy selected reference files
    for (const file of filesToCopy) {
      const src = path.join(srcSceneDir, file);
      const dest = path.join(destSceneDir, file);
      if (copyFileIfExists(src, dest)) {
        created.push(file);
      }
    }

    copiedSummary.push({ scene, skipped: false, created });
  }

  // Report
  console.log('Sync act-1 → student-workspace/current (reference → student)');
  for (const entry of copiedSummary) {
    if (entry.skipped) {
      console.log(`- ${entry.scene}: skipped`);
    } else if (entry.note === 'reference scene not found') {
      console.log(`- ${entry.scene}: reference not found`);
    } else if (entry.copied && entry.copied.length === 0) {
      console.log(`- ${entry.scene}: no files updated`);
    } else if (entry.copied) {
      console.log(`- ${entry.scene}: copied [${entry.copied.join(', ')}]`);
    } else if (entry.created) {
      console.log(`- ${entry.scene}: created [${entry.created.join(', ')}]`);
    }
  }
}

if (require.main === module) {
  main();
}

// Helpers
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}


