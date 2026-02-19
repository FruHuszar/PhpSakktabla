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

### Véletlengenerálás (`math`)

```javascript
const index = Math.floor(Math.random() * feherBabuKeszlet.length);
```

- A Math.random() egy tört számot ad, amit a készlet aktuális hosszával szorzunk, majd a Math.floor() segítségével egész indexszé kerekítünk.

### Listaelemet eltávolítása (splice)
A splice() metódus képes elemeket véglegesen kivenni a tömbből, miközben a lista automatikusan "összehúzódik" a kivett elem helyén.

```javascript
feherBabuKeszlet.splice(index, 1);
```

- Az első paraméter (index) megadja, honnan kezdjük a törlést, a második paraméter (1) pedig azt, hogy hány elemet vegyünk ki onnan.
