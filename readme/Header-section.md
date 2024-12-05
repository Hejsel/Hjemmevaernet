# Implementering af hjemmeværnets dynamiske Header

Denne guide forklarer, hvordan du implementerer den dynamiske header på din HTML side. Headeren er bygget i et separat HTML-dokument og indlæses ved hjælp af JavaScript, hvilket gør det nemt at genbruge headeren på tværs af flere sider.

## Struktur og Funktionalitet

1. **Headerens indhold er defineret i et separat HTML-dokument**:

   - Headeren opbevares i en fil kaldet `header.html`.
   - Indholdet af denne fil hentes ved hjælp af JavaScript.

2. **JavaScript fetcher og indsætter headerens indhold**:

   - En JavaScript-fil (`header.js`) bruges til at hente indholdet af `header.html`.
   - Indholdet indsættes i et HTML-element med id'et **`header`**.

3. **Integration i hoveddokumentet**:
   - HTML-dokumentet, hvor headeren skal vises, skal indeholde et tomt element med id'et `header`.
   - Ved hjælp af CSS og JavaScript bliver headeren vist korrekt på siden.

---

## Sådan får du headeren til at blive vist

### 1. Tilføj et tomt header-element i din HTML-fil

For at vise headeren skal du tilføje et tomt HTML-element med id'et **`header`**, hvor indholdet skal placeres:

```html
<header id="header"></header>
```

### 2. Link til de nødvendige filer i dit HTML dokumnet

For at få vist headeren på din HTML side, skal du linke til de rigtige filer i dit dokument. Eksempel:

```html
<link rel="stylesheet" href="/dist/style/global.css" />
<script src="/Src/js/header.js" defer></script>
```

### 3. Tjek at headeren bliver vist korrekt på siden

Som det sidste, tjek om headeren bliver vist korrekt på siden og at der ikke bliver givet nogle fejl i consollen.
