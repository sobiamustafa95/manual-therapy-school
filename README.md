Manual Therapy School Digital Platform
A digital platform for Steven DiMarino's Manual Therapy School, focused on migraine and facial pain treatment. It digitizes practitioner intake, provides AI-driven protocol recommendations, and supports research data collection.
About the Project
This platform streamlines the practitioner intake process, leverages a GPT-based AI assistant for treatment recommendations, and enables secure admin management of a 400-page manual and instructional videos. It ensures anonymized data storage for research and integrates with third-party services for email and video streaming.
Main Features

Secure role-based authentication (Admin/Practitioner)
Practitioner Dashboard for intake forms and AI recommendations
Admin Panel for manual/video management and data oversight
GPT-powered AI assistant for tailored treatment plans
Anonymized data storage for research
Email notifications for intake PDFs
Instructional video streaming (YouTube/Vimeo)
Optional Zoom/Google Meet for live sessions

Tech Stack

Frontend: React, Vite, TypeScript, Tailwind CSS, shadcn/ui
Form Handling: React Hook Form, Yup
State Management: Zustand
Data Fetching: React Query
Code Quality: ESLint, Prettier, Husky
Integrations: OpenAI API, SendGrid, YouTube/Vimeo, Zoom/Google Meet (optional)

Prerequisites

Node.js (>=18.x)
npm (>=9.x)
API keys: OpenAI, SendGrid, YouTube/Vimeo, Zoom/Google Meet (optional)

Installation and Setup

Clone the repository:
git clone <repository-url>
cd manual-therapy-school


Install dependencies:
npm install


Set up environment variables:Create a .env file in the root:
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_SENDGRID_API_KEY=your_sendgrid_api_key
VITE_YOUTUBE_API_KEY=your_youtube_api_key
VITE_ZOOM_API_KEY=your_zoom_api_key # Optional
VITE_API_URL=http://localhost:3000/api


Initialize Husky for Git hooks:
npm run prepare


Run the development server:
npm run dev

Access at http://localhost:5173.

Lint and format code:
npm run lint
npm run format



Usage

Admin: Log in to upload manuals, manage videos, and export anonymized data.
Practitioner: Submit intake forms, receive AI recommendations, and access videos.

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit changes (git commit -m 'Add YourFeature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.

License
MIT License
