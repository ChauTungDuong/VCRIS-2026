## VCRIS 2026 Content Management System
This repository has been upgraded to a full-stack CMS architecture. It supports dynamic pages, visual drag-and-drop editing (via Puck), database-driven site configurations, and multi-language support.

### 📋 Architecture

**Frontend:**
- React (Vite)
- Tailwind CSS
- Protected Admin routes (`/admin`)
- Drag-and-drop Visual Editor (Puck)
- Axios for API communication

**Backend:**
- Node.js & Express
- Prisma ORM
- MySQL 8 Database
- JWT Authentication

**Deployment:**
- Docker & Docker Compose
- Multi-stage builds
- Nginx for serving SPA and proxying API

---

### 🚀 Quick Start (Local Development)

1. **Install dependencies:**
   ```bash
   npm install      # Install frontend dependencies
   cd server
   npm install      # Install backend dependencies
   ```

2. **Setup environment variables:**
   - In the `server` directory, copy `.env.example` to `.env`
   - Set `DATABASE_URL` (requires a running MySQL instance)

3. **Database Setup:**
   ```bash
   cd server
   npx prisma db push --accept-data-loss
   npx prisma db seed
   ```

4. **Start Dev Servers:**
   ```bash
   # Terminal 1: Backend
   cd server
   npm run dev

   # Terminal 2: Frontend
   npm run dev
   ```

---

### 🐳 Deployment (Linux VPS using Docker)

The project includes a ready-to-use Docker Compose configuration.

1. **Transfer files to VPS**
   Copy the entire directory to your Linux VPS.

2. **Configure Environment**
   Create a `.env` file in the root directory and update passwords:
   ```env
   DB_ROOT_PASSWORD=your_secure_root_password
   DB_USER=vcris_user
   DB_PASSWORD=your_secure_db_password
   DB_NAME=vcris_db

   JWT_SECRET=super_secret_jwt_key_123!
   JWT_EXPIRES_IN=7d
   ADMIN_EMAIL=admin@vcris.org
   ADMIN_PASSWORD=secret_admin_password

   VITE_API_URL=/api/v1
   ```

3. **Deploy using Docker Compose**
   ```bash
   # Build and start all services in detached mode
   docker-compose up -d --build
   ```

4. **Access the Application**
   - Public Website: `http://<your-vps-ip>`
   - Admin Panel: `http://<your-vps-ip>/admin/login`

**(Note):** The backend container is configured to automatically run Prisma migrations and seed the database with initial configurations and 14 base pages on startup.

---

### 📖 CMS Usage Notes

1. **Dynamic Pages**
   - Currently, dynamically created admin pages (e.g., `/:slug`) are rendering their content directly from the Database using the `PageRenderer` component.
   - You can edit these pages visually at `/admin/pages`.
   - If a page is deleted or has no database content, it falls back to the static hardcoded React design automatically.

2. **Site Configuration**
   - Important global values like "Conference Name", "Dates", and "Location" can be updated natively through `/admin/config`.

3. **Media Files**
   - Images uploaded via `/admin/media` are stored in the `/server/uploads` directory (which maps to a persistent Docker volume).
   - Use the "Copy URL" feature to easily use these images inside the Puck visual editor.