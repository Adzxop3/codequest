# 🚀 N00 - Warmup & CLI Tutorial

## 🎯 Objectifs
- ✅ **Valider** que votre environnement Node.js fonctionne
- ✅ **Comprendre** le workflow CodeQuest : start → code → validate
- ✅ **Implémenter** votre première fonction : `ping()`
- ✅ **Maîtriser** les commandes CLI essentielles

## 📝 Mission

Implémentez la fonction `ping()` qui :
1. Prend un message en paramètre
2. Retourne ce message préfixé par `"pong: "`

### Exemple d'entrées/sorties
```javascript
ping("hello")        // → "pong: hello"
ping("world")        // → "pong: world"  
ping("CodeQuest")    // → "pong: CodeQuest"
ping("")             // → "pong: "
```

## 🛠️ Workflow recommandé

1. **Démarrer** : `cq start N00`
2. **Coder** : Ouvrir `student-workspace/current/N00-warmup-tutorial/starter.js`
3. **Tester** : `cq validate N00` (souvent !)
4. **Aide** : `cq help-me N00` si besoin

## ⚡ Contraintes
- ✅ **Fonction pure** : pas d'effets de bord
- ✅ **Simple** : une seule responsabilité
- ✅ **Testable** : entrée → sortie prévisible

## ⏱️ Estimation
**5-10 minutes** pour un développeur débutant

## ⚠️ Pièges courants
- ❌ Oublier le préfixe `"pong: "`
- ❌ Ne pas gérer le cas string vide `""`
- ❌ Ajouter des `console.log()` (gardez les fonctions pures !)

## 🏆 Challenges

### Base ✅ (100 pts)
Tous les tests passent, fonction correctement implémentée

### Bonus ⭐ (150 pts)  
Terminé en moins de 5 minutes **OU** sans utiliser d'indices

### Challenge 🏆 (200 pts)
Code **ultra-minimal** :
- ✅ Un seul `return` dans la fonction
- ✅ Zéro variable temporaire
- ✅ Maximum 1 ligne de code utile

## 💡 Rappel TDD
Lancez `cq validate N00` **souvent** ! Les tests sont vos amis et vous guident vers la solution. Rouge → Vert → Refactor ! 🔴→🟢→✨

---

*Bonne chance pour votre première mission CodeQuest !* 🎮