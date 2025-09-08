# 🔀 N03 - Map/Filter Pipeline

## 🎯 Objectifs  
- ✅ **Transformer** données avec `.map()`
- ✅ **Filtrer** éléments avec `.filter()` 
- ✅ **Chaîner** opérations en pipeline propre
- ✅ **Éviter** boucles for classiques
- ✅ **Composer** fonctions sans if explicites

## 📝 Missions

### 1. `doubleNumbers(numbers)`
Double tous les nombres d'un tableau.

### 2. `filterEven(numbers)`  
Filtre les nombres pairs uniquement.

### 3. `evenDoubled(numbers)`
Pipeline : garde les pairs ET les double.

### Exemples
```javascript
doubleNumbers([1, 2, 3])    // → [2, 4, 6]
filterEven([1, 2, 3, 4])    // → [2, 4] 
evenDoubled([1, 2, 3, 4])   // → [4, 8]
```

## ⚡ Contraintes
- ✅ **Pipeline** : chaîner `.filter().map()`
- ✅ **Pas de boucles for** explicites
- ✅ **Fonctions pures** : pas d'effets de bord
- ✅ **Prédicats** : functions de test réutilisables

## 🏆 Challenge Trophy
**Zéro if** : utiliser prédicats et composition de fonctions pures

## ⚠️ Piège courant
❌ `numbers.map(n => if (n % 2 === 0) return n * 2)` // Syntax error!  
✅ `numbers.filter(n => n % 2 === 0).map(n => n * 2)` // Clean pipeline

## ⏱️ Estimation : 10-15 minutes