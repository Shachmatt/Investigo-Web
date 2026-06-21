# InvestiGO — Landing page

Marketingová landing page pro InvestiGO — aplikaci, která učí mladou generaci investovat
bezpečně, snadno a zábavně.

## Stack

- **Vite** + **React 18**
- **Tailwind CSS** (vlastní barevná paleta v `tailwind.config.js`)
- **Framer Motion** (plynulé „reveal" animace při scrollování)
- Fonty: **Space Grotesk** (nadpisy) + **Inter** (text) přes Google Fonts

## Spuštění

```bash
npm install
npm run dev      # vývojový server (http://localhost:5173)
npm run build    # produkční build do /dist
npm run preview  # náhled produkčního buildu
```

## Struktura

```
src/
  App.jsx            # skládá jednotlivé sekce
  anim.js            # sdílené Framer Motion varianty
  index.css          # Tailwind + základní styly
  assets/logo.png    # logo aplikace
  components/
    Nav.jsx          # sticky navigace + Discord
    Hero.jsx         # „Naučíme tě investovat."
    Problem.jsx      # Krize / The Crisis
    Solution.jsx     # Řešení
    HowItWorks.jsx   # funkce aplikace (lekce, VIP, poznámky, gamifikace)
    Impact.jsx       # cílová skupina — generace Z
    Countdown.jsx    # odpočet do spuštění (31. 7. 2026)
    About.jsx        # tým + podpora VŠCHT / KEM VŠCHT
    Footer.jsx       # vize + kontakt
```

## Barvy (z `colorful.js` aplikace)

| Token | Hex |
|-------|-----|
| primary | `#850f8d` |
| secondary | `#c738bd` |
| tertiary | `#e49bff` |
| lilac (bg) | `#f2d2fe` |
| butter (bg) | `#f8f9d7` |
| ink (text) | `#36064d` |

## Úpravy obsahu

- **Discord odkaz**: `DISCORD_URL` v `src/App.jsx`
- **Kontakt**: `CONTACT` v `src/components/Footer.jsx`
- **Datum spuštění**: `TARGET` v `src/components/Countdown.jsx`
