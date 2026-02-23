# Neues GitHub-Repository einrichten

## 1. Repository auf GitHub erstellen

1. Öffne: **https://github.com/new**
2. **Repository name:** `pixel-kraftwerk` (oder anderer Name)
3. **Description:** optional, z.B. "Pixel Kraftwerk Website"
4. **Public** auswählen
5. **Nicht** anhaken:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Auf **"Create repository"** klicken

## 2. Lokales Projekt mit dem neuen Repo verbinden

Nach dem Erstellen zeigt GitHub eine URL. Führe im Projektordner aus:

```bash
# Remote auf dein neues Repo umstellen (ersetze USERNAME durch deinen GitHub-Namen, z.B. PixelKraft94)
git remote set-url origin https://github.com/USERNAME/pixel-kraftwerk.git

# Prüfen
git remote -v

# Ersten Push
git push -u origin main
```

Beispiel für User **PixelKraft94**:

```bash
git remote set-url origin https://github.com/PixelKraft94/pixel-kraftwerk.git
git push -u origin main
```

Falls du **SSH** nutzt:

```bash
git remote set-url origin git@github.com:USERNAME/pixel-kraftwerk.git
git push -u origin main
```

## 3. Fertig

Danach ist das Projekt mit deinem GitHub-Repository synchronisiert.
