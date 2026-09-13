# Mon Hub Vercel

Un hub protégé par mot de passe (authentification basique côté serveur via middleware) qui liste tes applications Vercel.

## 1. Personnaliser la liste d'apps

Modifie `apps.config.js` : ajoute le nom, la description et l'URL de chacune de tes apps Vercel.

## 2. Déployer

### Option A — via GitHub (recommandé)
1. Crée un dépôt GitHub et pousse ce dossier dedans.
2. Va sur https://vercel.com → **Add New → Project** → importe le dépôt.
3. Laisse les réglages par défaut (Next.js est détecté automatiquement).

### Option B — via Vercel CLI (sans GitHub)
```bash
npm i -g vercel
cd hub-vercel
vercel
```

## 3. Activer la protection par mot de passe

Dans le dashboard Vercel du projet :
1. **Settings → Environment Variables**
2. Ajoute :
   - `HUB_USER` = ton identifiant (ex: `admin`)
   - `HUB_PASS` = ton mot de passe
3. Redéploie (**Deployments → ... → Redeploy**) pour que les variables soient prises en compte.

Le site sera accessible sur ton sous-domaine gratuit `https://ton-projet.vercel.app`, protégé par une fenêtre d'authentification (login/mot de passe) avant tout accès — géré côté serveur (Edge Middleware), donc ça fonctionne même sur le plan gratuit.

## 4. Ajouter un nom de domaine plus tard

Quand tu auras un domaine : **Settings → Domains** dans Vercel, et suis les instructions DNS.
