# Fellowship of Jesus Christ Website

A modern, responsive church website built with Angular 17, featuring admin capabilities for content management, blog functionality, and community engagement tools.

## Features

- **Responsive Design**: Modern, mobile-first design with beautiful UI components
- **Navigation**: Clean navigation with church-appropriate styling
- **Home Page**: Hero section, service times, upcoming events, and quick links
- **About Us**: Information about the church's beliefs and community
- **Services**: Service schedules and worship information
- **Events**: Calendar and event management
- **Blog**: Announcements and blog posts
- **Archives**: Historical documents and content storage
- **Contact**: Contact information and forms
- **Admin Panel**: Content management system for uploading videos/images and managing content

## Technology Stack

- **Frontend**: Angular 17 with standalone components
- **UI Framework**: Angular Material
- **Styling**: SCSS with custom church theme
- **Icons**: Material Icons
- **Images**: Unsplash integration for realistic church imagery

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Future Enhancements

### Backend Integration Options
- **Firebase**: For real-time data, authentication, and file storage
- **Node.js/Express**: Custom backend with MongoDB or PostgreSQL
- **Headless CMS**: Integration with Strapi, Contentful, or Sanity

### Planned Features
- User authentication and member portal
- Online sermon streaming
- Prayer request system
- Event registration
- Donation integration
- Newsletter subscription
- Multi-language support

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/          # Landing page with hero section
│   │   ├── about/         # Church information
│   │   ├── services/      # Service times and worship
│   │   ├── events/        # Events and calendar
│   │   ├── blog/          # Blog and announcements
│   │   ├── archives/      # Document storage
│   │   ├── contact/       # Contact information
│   │   ├── admin/         # Admin dashboard
│   │   └── navigation/    # Main navigation component
│   ├── app.component.*    # Root component
│   ├── app.routes.ts      # Routing configuration
│   └── app.config.ts      # App configuration
├── assets/
│   ├── images/           # Church images and photos
│   └── icons/            # Custom icons
└── styles.scss           # Global styles and theme

```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
