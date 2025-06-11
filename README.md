# manual therapy school digital platform

a digital platform for steven dimarino's manual therapy school, focusing on migraine and facial pain treatment. it digitizes practitioner intake, provides ai-driven protocol recommendations, and supports research data collection.

## about the project

this platform streamlines practitioner intake, uses a gpt-based ai assistant for treatment recommendations, and enables secure admin management of a 400-page manual and instructional videos. it ensures anonymized data storage for research and integrates with third-party services for email and video streaming.

## main features

- secure role-based authentication (admin/practitioner)
- practitioner dashboard for intake forms and ai recommendations
- admin panel for manual/video management and data oversight
- gpt-powered ai assistant for tailored treatment plans
- anonymized data storage for research
- email notifications for intake pdfs
- instructional video streaming (youtube/vimeo)
- optional zoom/google meet for live sessions

## tech stack

- **frontend**: react, vite, typescript, tailwind css, shadcn/ui
- **form handling**: react hook form, yup
- **state management**: zustand
- **data fetching**: react query
- **code quality**: eslint, prettier, husky
- **date handling**: dayjs (utc format)
- **integrations**: openai api

## prerequisites

- node.js (>=18.x)
- yarn (>=1.22.x)
- api keys: openai 

## installation and setup

1. clone the repository:
   ```bash
   git clone <repository-url>
   cd manual-therapy-school
   ```

2. install dependencies:
   ```bash
   yarn 
   ```

3. set up environment variables:
   create a `.env` file in the root:
   ```env
   VITE_OPENAI_API_KEY=your_openai_api_key
   VITE_SENDGRID_API_KEY=your_sendgrid_api_key
   VITE_YOUTUBE_API_KEY=your_youtube_api_key
   VITE_API_URL=http://localhost:3000/api
   ```

4. initialize husky for git hooks:
   ```bash
   yarn prepare
   ```

5. run the development server:
   ```bash
   yarn dev
   ```
   access at [http://localhost:3000](http://localhost:3000).

6. lint and format code:
   ```bash
   yarn lint
   yarn format
   ```

## development rules

### project setup
- **linter**: eslint with strict rules (no `any` type, naming conventions).
- **prettier**: enforces code formatting.
- **pre-commit**: husky runs linting, formatting, and lighthouse.
- **build on push**: github actions triggers build on push to `main`.

### linter settings
- enforce function/variable naming (camelcase for variables, pascalcase for components).
- ban `any` type; use explicit types.
- file naming: pascalcase for components (e.g., `IntakeForm.tsx`), lowercase for others (e.g., `common.ts`).

### folder structure
```
src/
├── components/           # reusable components 
├── constants/            # separated by purpose (e.g., api.ts, ui.ts)
├── hooks/                # custom hooks (max 6-8 returns)
├── pages/                # page-specific components/sections
├── routes/               # routing logic
├── services/             # state management (zustand)
├── types/                # separated by purpose (e.g., auth.ts, intake.ts)
├── utils/                # separated by purpose (e.g., format.ts, api.ts)
├── index.css             # global styles (theme/colors/fonts)
└── main.tsx
```

### strict don'ts
- no hardcoded strings/enums; use constants.
- no enums/types in component files; use `types/`.
- no duplicated logic; centralize in `utils/`.
- no logical utils in components.
- no missing `useCallback` for `onClick` handlers.
- no missing `useMemo` for prop/api-derived data.
- no untyped api payloads or props.
- no `any` type usage.

### do's
- use dayjs with utc format for dates.
- configure theme/colors/fonts in `index.css`.
- develop isolated components for reusability.

## contributing

1. fork the repository.
2. create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. run lighthouse and remove unused variables.
4. commit changes (use prefixes like `fix:`, `chore:`, `feature:`):
   ```bash
   git commit -m 'feature: add your feature'
   ```
5. push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
6. open a pull request.

## license

[mit license](LICENSE)