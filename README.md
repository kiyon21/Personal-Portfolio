# Kiyon's Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Firebase. View it live at [www.kiyonfarokhi.ca](https://www.kiyonfarokhi.ca).

## 🚀 Features

- **Interactive Job Experience Timeline**: Showcases professional experience with expandable details
- **Project Showcase**: Displays personal and professional projects with descriptions and links
- **Modern UI/UX**: Built with Material-UI and styled-components for a polished look
- **Responsive Design**: Fully responsive across all device sizes
- **Contact Form**: Integrated with EmailJS for direct communication
- **Dynamic Content**: Job experiences and projects managed through Firebase

## 🛠️ Built With

- **Frontend Framework**: React 18
- **Type Safety**: TypeScript
- **Styling**: 
  - Material-UI
  - Styled Components
  - TailwindCSS
- **Backend/Database**: Firebase/Firestore
- **Routing**: React Router v6
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: React Typed
- **Deployment**: GitHub Pages

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/kiyon21/Personal-Portfolio.git
```

2. Install dependencies
```bash
yarn install
# or
npm install
```

3. Create a `.env` file in the root directory and add your Firebase configuration
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. Start the development server
```bash
yarn start
# or
npm start
```

## 📦 Build and Deployment

To build the project for production:

```bash
yarn build
# or
npm run build
```

To deploy to GitHub Pages:

```bash
yarn deploy
# or
npm run deploy
```

## 🔧 Project Structure

```
src/
├── components/     # React components
├── config/        # Configuration files
├── styles/        # Styled components and global styles
├── services/      # Firebase and other services
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── info/          # Static content
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📫 Contact

For any questions or feedback, feel free to reach out through the contact form on the website or create an issue in this repository.

---

⭐️ If you found this helpful, please star this repository!

