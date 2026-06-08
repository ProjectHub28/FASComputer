# Father Agnelo School - Computer Science Portal

A modern, highly interactive, and responsive single-page web portal designed for students and educators to access Computer Science curriculum coursework (Classes 1-10), chapter-wise video tutorials, and answer keys.

---

## 🚀 How to Run Locally

Since this is a lightweight static website built with pure HTML, CSS, and Vanilla JavaScript, there are several simple ways to run it:

### Option 1: Direct Execution (Quickest)
Simply double-click the **`index.html`** file in your file explorer. It will open directly in your default web browser.

### Option 2: Using Python (Local Web Server)
If you have Python installed, you can start a local development server. 
1. Open PowerShell, Command Prompt, or Terminal in the project root directory.
2. Run the following command:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to: **[http://localhost:8000](http://localhost:8000)**

### Option 3: VS Code "Live Server" Extension
If you are using VS Code:
1. Install the **Live Server** extension.
2. Open the project folder.
3. Click the **"Go Live"** button in the bottom status bar.

---

## 🌐 Deploying to Hosting Platforms

Hosting this static portal is entirely **free** and takes less than 2 minutes.

### ⚡ Deploying on Vercel (Recommended)
Vercel is extremely fast and requires zero configuration for static sites.
1. Push your project code to a git repository (GitHub, GitLab, or Bitbucket).
2. Go to **[Vercel](https://vercel.com/)** and log in (sign up with GitHub is easiest).
3. Click **Add New** -> **Project**.
4. Import your Git repository.
5. In the configuration page:
   - **Framework Preset**: Choose **Other**.
   - **Build Command**: Leave empty.
   - **Output Directory**: Leave empty (default is the root folder `.`).
6. Click **Deploy**. Vercel will build and give you a public URL (e.g. `your-project.vercel.app`).

### ☁️ Deploying on Render
1. Push your project code to a GitHub repository.
2. Go to **[Render](https://render.com/)** and sign in.
3. Click **New +** -> **Static Site**.
4. Connect your GitHub account and select this repository.
5. In the configuration settings:
   - **Name**: `fas-computer-science` (or your preferred name).
   - **Branch**: `main` (or your active branch).
   - **Build Command**: Leave blank/empty.
   - **Publish Directory**: Enter `.` (meaning the root folder).
6. Click **Create Static Site**. Render will deploy it automatically.

### 🐙 Deploying on GitHub Pages (Bonus Option)
1. Go to your repository settings on GitHub.
2. Scroll down to the **Pages** tab on the left sidebar.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select your branch (e.g. `main`) and folder (select `/ (root)`).
5. Click **Save**. Within a minute, your site will be live at `https://<username>.github.io/<repo-name>/`.

---

## 📁 Project Structure

* `index.html` — Main HTML outline with Google Fonts, school details, layout grids, and search inputs.
* `styles.css` — Modern design system featuring custom CSS variables, dark-mode styling, glassmorphism, responsive grids, and animations.
* `app.js` — All academic data, selection event handler script, and instant search logic.
