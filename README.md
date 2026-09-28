# PigmentOCO — site web

Site vitrine bilingue (EN / FR) de PigmentOCO, *Ocean Conscious Textiles*.
Stack : **Next.js 16** (App Router) · TypeScript · Tailwind CSS v4 · hébergement **Vercel**.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000 → redirige vers /en ou /fr selon la langue du navigateur
npm run build      # vérifie que tout compile avant de pousser
```

## Mettre en ligne sur Vercel

1. Créer un dépôt GitHub (ex. `pigmentoco-web`) et y pousser ce dossier :
   ```bash
   git remote add origin git@github.com:<compte>/pigmentoco-web.git
   git push -u origin main
   ```
2. Sur vercel.com → **Add New… → Project** → importer le dépôt. Vercel détecte Next.js tout seul, aucun réglage ni variable d'environnement n'est nécessaire.
3. **Settings → Domains** → ajouter `pigmentoco.com` et `www.pigmentoco.com`, puis mettre à jour les DNS chez le registrar selon les valeurs affichées par Vercel.
   ⚠️ Le site actuel reste en ligne tant que les DNS ne sont pas basculés : on peut tester d'abord sur l'URL `*.vercel.app`.

Chaque `git push` sur `main` redéploie automatiquement.

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Les textes anglais / français | `src/i18n/en.ts` et `src/i18n/fr.ts` (même structure) |
| Les articles de presse (page News + accueil) | `src/i18n/news.ts` — ajouter les nouveaux en haut |
| L'email de contact, LinkedIn, Instagram, l'URL du site | `src/i18n/config.ts` |
| Les couleurs de la charte | `src/app/globals.css` (bloc `@theme`) |
| Le logo | `public/logo.webp` (fond clair) et `public/logo-reverse.webp` (fond sombre) |
| Le favicon | `src/app/icon.png` et `src/app/apple-icon.png` |

### Remplacer les emplacements photo

Les blocs « Image à venir » utilisent le composant `ImageSlot`. Pour mettre une vraie photo :
1. déposer l'image dans `public/images/` (ex. `coton-teint.jpg`, idéalement ≤ 300 Ko, format .jpg ou .webp) ;
2. dans la page, ajouter `src` et `alt` :
   ```tsx
   <ImageSlot src="/images/coton-teint.jpg" alt="Coton teint au CO₂" label="" className="aspect-[4/5]" />
   ```

Emplacements actuels : accueil (tissu teint, récif corallien), technologie (labo / échantillons), impact (océan), à propos (photo de chaque fondateur).

## Structure

```
src/
  proxy.ts                 redirection / → /en ou /fr (langue du navigateur)
  app/[lang]/              pages : accueil, technology, impact, about, news, contact
  components/              Header, Footer, cartes presse, briques UI
  i18n/                    textes, presse, configuration
```

Charte : rouge corail `#CA0A0C`, bleu océan `#0314CF`, noir, blanc — police Noto Sans (auto-hébergée, pas d'appel à Google Fonts).
