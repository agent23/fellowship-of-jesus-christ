# Admin Authentication & Upload System

## How Admin Login Works

The Fellowship of Jesus Christ website now has a secure admin authentication system that allows authorized users to upload files, manage content, and access the admin dashboard.

### Access Admin Login

1. **Admin Login Page**: Navigate to `/admin/login` in your browser
2. **Direct Navigation Link**: Click "Admin Login" in the top navigation bar (when not logged in)

### Demo Credentials

For demonstration purposes, the following credentials are available:

| Username | Password | Role | Permissions |
|----------|----------|------|-------------|
| `admin` | `church2024` | Admin | Full access to all features |
| `pastor` | `fellowship123` | Admin | Full access to all features |
| `moderator` | `mod2024` | Moderator | Limited access (no user management) |

### Admin Permissions

#### Admin Role
- ✅ Upload files (images, videos, audio)
- ✅ Manage blog posts and announcements
- ✅ Manage events and calendar
- ✅ Manage archives and documents
- ✅ User management
- ✅ View analytics and reports
- ✅ System settings

#### Moderator Role
- ✅ Upload files (images, videos, audio)
- ✅ Manage blog posts and announcements
- ✅ Manage events and calendar
- ✅ View analytics and reports
- ❌ User management
- ❌ System settings

### Upload Capabilities

Once logged in, admins can upload various types of content:

#### Supported File Types
- **Images**: JPG, PNG, GIF (up to 10MB)
- **Videos**: MP4, MOV (up to 500MB)
- **Audio**: MP3, WAV (up to 100MB)
- **Documents**: PDF, DOC, DOCX (up to 50MB)

#### Upload Features
- **Drag & Drop**: Drag files directly onto the upload area
- **Multiple Files**: Select multiple files at once
- **Progress Tracking**: Real-time upload progress indicators
- **File Management**: View, organize, and delete uploaded files

### How to Upload Content

1. **Login**: Use admin credentials to access `/admin/login`
2. **Navigate**: Go to Admin Dashboard (automatic redirect after login)
3. **File Management Tab**: Click on the "File Management" tab
4. **Upload**: Either drag files to the upload area or click "Choose Files"
5. **Monitor**: Watch the progress bar as files upload
6. **Manage**: View and organize uploaded files in the file library

### Admin Dashboard Features

The admin dashboard provides:

- **Overview Statistics**: Member count, attendance, donations, events
- **Content Management**: Create and edit blog posts, events, announcements
- **File Management**: Upload and organize media files
- **Blog Management**: Write and publish church blog posts
- **Event Management**: Create and manage church events and calendar
- **Archive Management**: Organize historical documents and records

### Security Features

- **Protected Routes**: Admin pages require authentication
- **Role-Based Access**: Different permission levels for different roles
- **Session Management**: Secure login sessions with localStorage
- **Auto-Redirect**: Unauthorized users are redirected to login
- **Logout Functionality**: Secure logout clears all session data

### Navigation Integration

The navigation bar intelligently shows:
- **When Not Logged In**: "Admin Login" button
- **When Logged In**: Admin dropdown with username, dashboard link, and logout option

### Development Notes

This is a **frontend-only demo system** for demonstration purposes. In a production environment, you would need:

- **Backend API**: Secure server-side authentication
- **Database**: User management and file storage
- **File Upload Service**: Cloud storage (AWS S3, Azure Blob, etc.)
- **Security**: HTTPS, secure cookies, CSRF protection
- **Email Integration**: Password reset, notifications

The current system uses localStorage for demo purposes and includes hardcoded credentials for testing the admin functionality.
