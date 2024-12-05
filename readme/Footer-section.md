# Implementering af hjemmeværnets dynamiske Footer

Denne guide forklarer, hvordan du implementerer den dynamiske footer på din HTML side. Footeren er bygget i et separat HTML-dokument og indlæses ved hjælp af JavaScript, hvilket gør det nemt at genbruge footeren på tværs af flere sider.

## Struktur og Funktionalitet

1. **Footerens indhold er defineret i et separat HTML-dokument**:

   - Footeren opbevares i en fil kaldet `footer.html`.
   - Indholdet af denne fil hentes ved hjælp af JavaScript.

2. **JavaScript fetcher og indsætter footerens indhold**:

   - En JavaScript-fil (`footer.js`) bruges til at hente indholdet af `footer.html`.
   - Indholdet indsættes i et HTML-element med id'et **`footer`**.

3. **Integration i hoveddokumentet**:
   - HTML-dokumentet, hvor footeren skal vises, skal indeholde et tomt element med id'et `footer`.
   - Ved hjælp af CSS og JavaScript bliver footeren vist korrekt på siden.

---

## Sådan får du footeren til at blive vist

### 1. Tilføj et tomt footer-element i din HTML-fil

For at vise footeren skal du tilføje et tomt HTML-element med id'et **`footer`**, hvor indholdet skal placeres:

```html
<footer id="footer"></footer>
```

### 2. Link til de nødvendige filer i dit HTML dokumnet

For at få vist footeren på din HTML side, skal du linke til de rigtige filer i dit dokument. Eksempel:

```html
<link rel="stylesheet" href="/dist/style/global.css" />
<script src="/Src/js/footer.js" defer></script>
```

### 3. Tjek at footeren bliver vist korrekt på siden

Som det sidste, tjek om footeren bliver vist korrekt på siden og at der ikke bliver givet nogle fejl i consollen.
