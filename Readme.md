# Moodify Backend

Backend API for the Moodify project.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Redis
- JWT Authentication
- ImageKit
- Multer
- Bcrypt
- Cookie Parser

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to project folder

```bash
cd Backend
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root folder.

```env
PORT=3000

MONGO_URI=

JWT_SECRET=

REDIS_HOST=
REDIS_PORT=
REDIS_PASSWORD=

IMAGEKIT_PRIVATE_KEY=
```

---

## Required Services

### MongoDB Atlas

- Create a MongoDB Atlas Cluster
- Create a Database User
- Add IP Address
- Copy Connection String

> Note:
>
> If `mongodb+srv://` gives DNS/SRV errors on your machine,
> use the standard `mongodb://host1,host2,host3...` connection string.

---

### Redis Cloud

Create a free Redis database and copy

- Host
- Port
- Password

---

### ImageKit

Create an ImageKit account and copy

- Private Key

---

## Install Packages

```bash
npm install express
npm install mongoose
npm install dotenv
npm install bcryptjs
npm install jsonwebtoken
npm install cookie-parser
npm install multer
npm install cors
npm install ioredis
npm install @imagekit/nodejs
npm install node-id3
```

Install Nodemon

```bash
npm install -g nodemon
```

---

## Run Server

```bash
npm run dev
```

---

## Folder Structure

```
Backend
│
├── src
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── utils
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## Common Issues

### MongoDB SRV Error

```
querySrv ECONNREFUSED
```

Solution:

Use the standard MongoDB URI instead of `mongodb+srv://`

Example

```
mongodb://host1,host2,host3/databaseName?replicaSet=...
```

---

### PowerShell Error

```
npm.ps1 cannot be loaded
```

Run

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

---

## Author

Trushit Darji