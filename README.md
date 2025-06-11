# Manual Therapy School Digital Platform

A digital platform for Steven DiMarino's Manual Therapy School, focused on migraine and facial pain treatment. It digitizes practitioner intake, provides AI-driven protocol recommendations, and supports research data collection.

## About the Project

This platform streamlines the practitioner intake process, leverages a GPT-based AI assistant for treatment recommendations, and enables secure admin management of a 400-page manual and instructional videos. It ensures anonymized data storage for research and integrates with third-party services for email and video streaming.

## Main Features

- Secure role-based authentication (Admin/Practitioner)
- Practitioner Dashboard for intake forms and AI recommendations
- Admin Panel for manual/video management and data oversight
- GPT-powered AI assistant for tailored treatment plans
- Anonymized data storage for research
- Email notifications for intake PDFs
- Instructional video streaming (YouTube/Vimeo)
- Optional Zoom/Google Meet for live sessions

## Tech Stack

- **Frontend**: React, Vite, TypeScript, Tailwind CSS, shadcn/ui
- **Form Handling**: React Hook Form, Yup
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Code Quality**: ESLint, Prettier, Husky
- **Integrations**: OpenAI API, SendGrid, YouTube/Vimeo, Zoom/Google Meet (optional)

## Prerequisites

- Node.js (>=18.x)
- npm (>=9.x)
- API keys for OpenAI, SendGrid, YouTube/Vimeo, and Zoom/Google Meet (optional)

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd manual-therapy-school
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```env
   VITE_OPENAI_API_KEY=your_openai_api_key
   VITE_SENDGRID_API_KEY=your_sendgrid_api_key
   VITE_YOUTUBE_API_KEY=your_youtube_api_key
   VITE_ZOOM_API_KEY=your_zoom_api_key # Optional
   VITE_API_URL=http://localhost:3000/api
   ```

4. Initialize Husky for Git hooks:
   ```bash
   npm run prepare
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```
   Access the app at [http://localhost:5173](http://localhost:5173).

6. Lint and format code:
   ```bash
   npm run lint
   npm run format
   ```

## Usage

- **Admin**: Log in to upload manuals, manage videos, and export anonymized data.
- **Practitioner**: Submit intake forms, receive AI recommendations, and access videos.

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit changes:
   ```bash
   git commit -m 'Add YourFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request.

## License

[MIT License](LICENSE)