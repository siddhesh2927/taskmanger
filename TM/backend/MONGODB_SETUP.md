# MongoDB Atlas Setup Guide

## Steps to Connect MongoDB Atlas

### 1. Create MongoDB Atlas Account
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Sign up or log in to your account

### 2. Create a Cluster
- Click "Build a Cluster" (Free tier is available)
- Choose your cloud provider and region
- Click "Create Cluster" (takes 3-5 minutes)

### 3. Create Database User
- Go to "Database Access" in the left sidebar
- Click "Add New Database User"
- Choose authentication method (Username/Password)
- Create username and password (save these!)
- Set user privileges to "Read and write to any database"
- Click "Add User"

### 4. Whitelist IP Address
- Go to "Network Access" in the left sidebar
- Click "Add IP Address"
- Click "Allow Access from Anywhere" (0.0.0.0/0) for development
- Or add your specific IP address for production
- Click "Confirm"

### 5. Get Connection String
- Go to "Database" in the left sidebar
- Click "Connect" on your cluster
- Choose "Connect your application"
- Copy the connection string (looks like: `mongodb+srv://...`)

### 6. Configure Your Application
- Open `TM/backend/.env` file
- Replace the `mongoDbURI` value with your connection string
- Replace `<username>` with your database username
- Replace `<password>` with your database password
- Replace `<database-name>` with your database name (e.g., `taskmanager`)
- Update `JWT_SECRET` with a secure random string

Example:
```
mongoDbURI=mongodb+srv://myuser:mypassword123@cluster0.abc123.mongodb.net/taskmanager?retryWrites=true&w=majority
PORT=1200
JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

### 7. Start Your Server
```bash
cd TM/backend
npm run server
```

You should see:
```
listening on port 1200
MongoDB Atlas connected successfully
```

## Troubleshooting

### Connection Error
- Check if your IP is whitelisted
- Verify username and password are correct
- Ensure no special characters in password need URL encoding

### Authentication Failed
- Double-check database user credentials
- Make sure user has proper permissions

### Network Timeout
- Check your internet connection
- Verify firewall settings
- Try whitelisting 0.0.0.0/0 temporarily

## Security Notes
- Never commit `.env` file to git (already in .gitignore)
- Use strong passwords for database users
- Restrict IP access in production
- Rotate JWT_SECRET regularly
