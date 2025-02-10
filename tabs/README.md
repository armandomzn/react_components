# Job Info Tabs
This is a **React** project using **TypeScript** and **Vite**, where users can explore job positions displayed as tabs. Each tab corresponds to a different job, and when clicked, it shows detailed information about the job, such as the company, title, date, and associated activities. The app uses **React Hooks** `(useState)` to manage the selected job, and the data is imported from a data.ts file. The interface is styled using pure CSS for a simple and intuitive design.
### Features:
- Displays a list of jobs as tabs, where each tab represents a job.
- Users can click on a tab to view details about the selected job, including the company name, job title, date, and activities.
- The state is managed using useState to dynamically display the job details based on the selected tab.
- The interface is styled with pure CSS for a clean, minimalist look.
- The job data is imported from a data.ts file.

---

## Getting Started

You can download just this folder using the link below:

[Download project folder](https://downgit.github.io/#/home?url=https://github.com/armandomzn/react_components/tree/main/tabs)

Once you've downloaded the project folder, follow the steps below to get it up and running.

---

### 1. Install Dependencies
In the root of the project folder, open a terminal and install the required dependencies with:

```sh
npm install
```

### 2. Run the Project in Development Mode

To start the development server, run the following command:
```sh
npm run dev
```
This will start the Vite development server and open the app in your default browser (usually at http://localhost:5173).

---

## Key Concepts: React Hooks

### useState
- Used to manage the currently selected job and display its corresponding details.
- The state-changing method is passed down to child component (BtnContainer).
- The selected job's details are dynamically updated based on the index, and this index is passed to the JobInfo and JobActivities components for rendering.
- The UI updates dynamically as users select different tabs (jobs).

## Live demo
![tabs](https://github.com/user-attachments/assets/9998d028-d17a-4cfa-a69d-eba38ea61f2b)
- [Tabs updating indexes with useState hook](https://stellular-cobbler-1e47a7.netlify.app/)
