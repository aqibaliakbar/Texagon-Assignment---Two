**Task 2: State Management Through Redux Toolkit**

This repository builds upon the previous task, "React Component Composition & Styling using Chakra UI," and focuses on implementing state management using Redux Toolkit. Below is a summary of the task and its implementation:

**Task Description:**
- Task 2 involves integrating Redux Toolkit for state management into the existing React application.
- The primary objectives include configuring the Redux store, defining actions, and writing reducers to manage application state efficiently.

**Implementation Overview:**
- The React application, initialized using Vite, continues from the previous task's implementation.
- Additional components, including a navbar, delete button, and reset button, were added to enhance functionality.
- A `data` folder was introduced to store product data, which is imported and used within the application.
- Within the `store` folder, Redux Toolkit is configured to manage the application's state.
- Actions and reducers are created to handle displaying products, deleting specific products, and resetting the product list.

**Key Features:**
1. **Redux Toolkit Integration:**
   - Redux Toolkit is used for efficient state management in the React application.
   - It simplifies the Redux workflow by providing utilities for common tasks, such as creating actions and reducers.
   - `configureStore` is used to set up the Redux store, and `createSlice` is utilized for defining reducers.

2. **Actions and Reducers:**
   - Actions and reducers are defined to manage the state related to displaying products, deleting specific products, and resetting the product list.

**Libraries Used:**
- **Redux Toolkit:** Provides utilities that streamline common Redux tasks, simplifying the Redux workflow.
- **React Redux:** Official React bindings for Redux, facilitating the integration of Redux with React components.

**Usage:**
1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd [project-directory]`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Access the application in your browser at the provided address.

**Notes:**
- Redux Toolkit is chosen for state management due to its simplicity and efficiency, as recommended by the official Redux documentation.
- Detailed documentation and instructions for this task's implementation are provided within the repository.

For any inquiries or assistance regarding this task implementation, feel free to reach out to the repository maintainer.
