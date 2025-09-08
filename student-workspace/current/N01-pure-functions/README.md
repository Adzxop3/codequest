# 🧪 N01 - Pure Functions

## 🎯 Objectifs
- ✅ **Comprendre** les fonctions pures (pure functions)
- ✅ **Implémenter** `add(a, b)` pour addition de deux nombres
- ✅ **Implémenter** `isEven(n)` pour tester la parité
- ✅ **Implémenter** `sum(arr)` pour somme d'un tableau
- ✅ **Éviter** tous les effets de bord

## 🧬 Concept : Fonction Pure

Une **fonction pure** respecte deux règles :
1. **Même entrée → Même sortie** (déterministe)
2. **Aucun effet de bord** (pas de console.log, mutations, etc.)

```javascript
// ✅ Pure : toujours le même résultat
const add = (a, b) => a + b;

// ❌ Impure : dépend de l'état externe  
let counter = 0;
const increment = () => ++counter;

// ❌ Impure : effet de bord (console.log)
const addWithLog = (a, b) => {
  console.log('Adding', a, b);
  return a + b;
};
```

## 📝 Missions

### 1. `add(a, b)`
Additionne deux nombres.

### 2. `isEven(n)`  
Retourne `true` si le nombre est pair, `false` sinon.

### 3. `sum(arr)`
Calcule la somme de tous les éléments d'un tableau.

### Exemples d'entrées/sorties
```javascript
add(2, 3)           // → 5
add(0, 0)           // → 0
add(-1, 1)          // → 0

isEven(4)           // → true
isEven(3)           // → false  
isEven(0)           // → true

sum([1, 2, 3])      // → 6
sum([])             // → 0
sum([5, -2, 7])     // → 10
```

## ⚡ Contraintes
- ✅ **Fonctions pures** : aucun effet de bord
- ✅ **Déterministes** : même entrée → même sortie
- ✅ **Pas de console.log** dans les fonctions
- ✅ **Pas de variables globales** modifiées

## ⏱️ Estimation
**10-15 minutes** pour maîtriser les fonctions pures

## ⚠️ Pièges courants
- ❌ Ajouter `console.log()` dans les fonctions (effet de bord)
- ❌ Modifier des variables externes (impureté)
- ❌ Utiliser `Math.random()` ou `Date.now()` (non-déterministe)
- ❌ Oublier le `return` (fonctions qui ne retournent rien)

## 🏆 Challenges

### Base ✅ (100 pts)
Les 3 fonctions passent tous les tests

### Bonus ⭐ (150 pts)  
Terminé en moins de 10 minutes **OU** sans utiliser d'indices

### Challenge 🏆 (200 pts)
Code **ultra-compact** : toutes les fonctions en **≤ 5 lignes cumulées**
- `add`: 1 ligne
- `isEven`: 1 ligne  
- `sum`: ≤ 3 lignes

*Astuce : utilisez les arrow functions et méthodes tableau modernes !*

## 💡 Rappel TDD
Implémentez une fonction à la fois et validez avec `cq validate N01`. Rouge → Vert → Refactor ! 🔴→🟢→✨