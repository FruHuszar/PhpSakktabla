# PhpSakktabla

## Funkciók
PHP által generált statikus tábla, ahol a bábuk elhelyezkedése JavaScript segítségével, kattintásra (`onclick`) véletlenszerűen generálódik.
- Feladvány: A generált kiindulóhelyzetből hány lépésben adható matt?

## Megjegyzések

### Fisher-Yates (Knuth) Shuffle
Ez az algoritmus garantálja a lista elemeinek megkeverését az elemek helyben történő felcserélésével.

```javascript
function mezokKeverese(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const ideiglenes = lista[i];
        lista[i] = lista[j];
        lista[j] = ideiglenes;
    }
}
```
​- A ciklus hátulról előre haladva minden mezőt kijelöl, majd egy véletlenszerűen választott, nála "korábbi" mezővel felcseréli azt. 
