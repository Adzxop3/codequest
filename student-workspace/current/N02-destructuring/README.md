# ⚡ N02 - Destructuring & Rest/Spread

## 🎯 Objectifs
- ✅ **Destructuring** : extraire propriétés `{ name, age } = user`
- ✅ **Rest/Spread** : copier et fusionner `{ ...obj1, ...obj2 }`
- ✅ **Immutabilité** : pas de mutations d'objets
- ✅ **Object.freeze** : protection contre modifications

## 📝 Missions

### 1. `extractName(user)`
Extraire la propriété `name` d'un objet user.

### 2. `mergeObjects(obj1, obj2)`  
Fusionner deux objets, obj2 écrase obj1 en cas de conflit.

### 3. `setDefault(config)`
Ajouter des valeurs par défaut à un objet config.

### Exemples
```javascript
extractName({ name: 'Alice', age: 25 })  // → 'Alice'

mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })  
// → { a: 1, b: 3, c: 4 }

setDefault({ theme: 'dark' })
// → { theme: 'dark', lang: 'en', debug: false }
```

## ⚡ Contraintes
- ✅ **Immutabilité** : ne pas modifier les objets d'entrée
- ✅ **Destructuring** : utiliser syntaxe `{ }`
- ✅ **Spread** : utiliser `...obj` pour copier

## 🏆 Challenge Trophy
**Aucune mutation** : tests utilisent `Object.freeze` pour détecter modifications