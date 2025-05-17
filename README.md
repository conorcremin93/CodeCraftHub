# 🧠 CodeCraftHub - User Management Service

This is the **User Service** for CodeCraftHub — a personalized learning platform for developers. The service is built with **Node.js**, **Express**, and **MongoDB**, and provides secure user authentication, profile management, and email notifications.

---

## 🚀 Features

- 🔐 User Registration & Login (with JWT-based auth)
- 🧠 Password hashing using Bcrypt
- 🔁 Token verification middleware
- 📧 Email sending via Nodemailer
- 📦 MongoDB integration with Mongoose
- 🐳 Docker + Docker Compose support
- 📂 Scalable folder structure (MVC + service layer)

---

## 🧱 Tech Stack

| Tech             | Version      |
|------------------|--------------|
| Node.js          | 20.x         |
| Express          | 4.x          |
| MongoDB          | 6.x (Docker) |
| Mongoose         | 6.x          |
| bcrypt           | 6.x          |
| JWT              | 8.5.x        |
| Nodemailer       | 6.x          |
| Joi              | 17.x         |
| Jest + Supertest | For testing  |
| Docker           | 3.8 Compose  |

---

## 📁 Folder Structure

```
user-service/
│
├── src/
│   ├── config/             # DB and server config
│   ├── controllers/        # Route controllers (auth, user)
│   ├── middleware/         # Auth & error handlers
│   ├── models/             # Mongoose schemas (User, Auth)
│   ├── routes/             # Express routes
│   ├── services/           # Business logic
│   ├── utils/              # Helpers (validation, mail, etc.)
│   └── index.js            # App entry point
│
├── tests/                  # Test cases
├── scripts/                # Seeder scripts
├── Dockerfile              # Docker app container
├── docker-compose.yml      # Docker Compose for app + MongoDB + UI
├── .env.example            # Environment variable template
├── .gitignore              # Git exclusions
└── README.md               # You're here
```

---

## ⚙️ Environment Variables

Create a `.env` file based on this template:

```env
PORT=3000
MONGO_URI=mongodb://root:example@mongo:27017
JWT_SECRET=your_jwt_secret
MAIL_USER=no-reply@example.com
MAIL_PASS=your_email_password
```

> Don’t commit `.env` — it’s already in `.gitignore`.

---

## 🐳 Running with Docker

```bash
# Build and run app, MongoDB, and Mongo-Express UI
docker-compose up --build
```

- App: http://localhost:3000
- Mongo Express UI: http://localhost:8081 (login: `admin / strongpassword`)

---

## 🧪 Testing

Run tests with:

```bash
npm test
```

Seed test users:

```bash
npm run seed
# or with Docker:
docker-compose exec app npm run seed
```

---

## 🔌 API Endpoints Overview

| Method | Endpoint          | Description            | Auth Required |
|--------|-------------------|------------------------|----------------|
| POST   | `/auth/register`  | Register new user      | ❌             |
| POST   | `/auth/login`     | Login and get JWT      | ❌             |
| POST   | `/auth/refresh`   | Refresh token (TBD)    | ✅             |
| GET    | `/users/:id`      | Get user profile       | ✅             |
| PUT    | `/users/:id`      | Update user info       | ✅             |

> All protected routes require a valid JWT in the `Authorization: Bearer <token>` header.

---

## 📬 Sending Emails

The service uses Gmail via Nodemailer. Configure your email credentials in `.env`. You may need to enable **less secure app access** or use an **app password** for Gmail.

---

## 👥 Contributing

1. Fork this repo
2. Create a new branch (`feature/my-feature`)
3. Commit your changes
4. Push and open a pull request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Built with care by **Conor Cremin**  
📍 Abu Dhabi | 💼 Bioinformatician & Data Scientist  
[LinkedIn](https://www.linkedin.com/in/conorcremin/) • [GitHub](https://github.com/conorcremin)