# Manas Bolt

A Next.js project with Gemini AI integration, Google Authentication, and Convex backend.

## Project Overview

Manas Bolt is a web application built with Next.js that integrates Google's Gemini AI, Google Authentication, and uses Convex as a backend database solution.

## Features

- Next.js 15.1 application framework
- Google Authentication via @react-oauth/google
- Gemini AI integration with @google/generative-ai
- Convex backend for data management
- Sandpack code editor integration
- Responsive UI with Tailwind CSS and Radix UI components

## Prerequisites

Before you begin, ensure you have:

- Node.js (latest LTS version recommended)
- npm or yarn package manager
- A Google Cloud Platform account for authentication and Gemini API
- A Convex account for backend services

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY=
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_GEMINI_API_KEY=
```

### How to obtain these values:

1. **NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY**: 
   - Go to the [Google Cloud Console](https://console.cloud.google.com)
   - Create a project and enable the Google OAuth API
   - Create credentials for a web application to get your client ID

2. **CONVEX_DEPLOYMENT** and **NEXT_PUBLIC_CONVEX_URL**:
   - Sign up at [Convex](https://www.convex.dev/)
   - Create a new project
   - These values will be provided in your project dashboard

3. **NEXT_PUBLIC_GEMINI_API_KEY**:
   - Go to the [Google AI Studio](https://aistudio.google.com/)
   - Get an API key for the Gemini model

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mdkulkarni2005/manas-bolt-testing-1.git
cd manas-bolt-testing-1
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Start the Convex development server in a separate terminal:
```bash
npx convex dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/app` - Next.js application routes and pages
- `/components` - Reusable UI components
- `/configs` - Configuration files
- `/context` - React context providers
- `/convex` - Convex schema and functions
- `/data` - Static data files
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and libraries
- `/public` - Static assets

## Deployment

The project can be deployed on Vercel or any other Next.js-compatible hosting service:

1. Connect your repository to Vercel
2. Set up the environment variables
3. Deploy the application

For Convex backend deployment, follow the instructions in the [Convex documentation](https://docs.convex.dev/production/deployment).

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Convex](https://www.convex.dev/)
- [Google AI](https://ai.google/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Sandpack](https://sandpack.codesandbox.io/)