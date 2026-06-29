# Smart Job Portal

Smart Job Portal is a modern React + Vite job management dashboard designed to help recruiters and hiring teams manage job listings and applicant applications in one place.

## Overview

This project provides a simple front-end portal where users can:

- view available jobs
- add new job postings
- search and filter jobs by keyword or category
- apply for jobs
- track applicant status through a summary dashboard

## Features

- Responsive job portal UI
- Job listing with company, location, salary, category, experience, and description
- Add new jobs through a form
- Search and category-based filtering
- Applicant submission form for job applications
- Dashboard cards showing total jobs, applicants, interviews, and selected candidates

## Tech Stack

- React 19
- Vite
- CSS for styling
- JavaScript (ES6+)

## Project Structure

- src/App.jsx – main app layout and state management
- src/components/ – reusable UI components for navbar, dashboard, forms, lists, and filters
- src/data/sampleData.js – sample job data used by the app
- src/styles/ – component styling files

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Clone the repository
2. Navigate to the project folder:
   ```bash
   cd smart-job-portal
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Run the app locally

```bash
npm run dev
```

Then open your browser and visit:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

## Notes

This project currently uses local React state for job and applicant data. It does not connect to a backend or database yet, so data is reset on refresh.
