**Task 3: Data Fetching Using Redux Toolkit Async Thunks**

This repository extends the functionality of the previous task, "State Management Through Redux Toolkit," by integrating data fetching using Redux async thunks. Below is an overview of the task and its implementation:

**Task Description:**
- Task 3 focuses on fetching data from a third-party API using Redux async thunks.
- The primary goal is to demonstrate the integration of asynchronous operations with Redux state management for data fetching and updating.

**Implementation Overview:**
- Building upon the existing React application, configured with Redux Toolkit, the implementation includes integrating Redux async thunks for data fetching.
- A mock API is created using WireMock Cloud (https://app.wiremock.cloud/) to simulate the backend service.
- Redux async thunks are utilized to handle asynchronous data fetching operations, ensuring seamless integration with Redux state management.
- Data fetched from the mock API is stored in the Redux store and used within the application components for rendering.

**Key Features:**
1. **Redux Async Thunks:**
   - Redux async thunks are employed for handling asynchronous data fetching operations.
   - Thunks are created to interact with the mock API and fetch data asynchronously.
   - Thunk actions dispatch corresponding actions to update the Redux store with fetched data.

2. **Integration with Redux Toolkit:**
   - The implementation seamlessly integrates Redux async thunks with the existing Redux Toolkit setup.
   - Thunks are dispatched from React components to fetch data, and the updated data is reflected in the Redux store.

**Libraries Used:**
- **Chakra UI:** Provides a component library for building React applications with customizable and accessible UI components.
- **Redux Toolkit:** Provides utilities for efficient state management, including async thunk middleware for handling asynchronous operations.
- **React Redux:** Official React bindings for Redux, facilitating the integration of Redux with React components.

**Usage:**
1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd [project-directory]`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Access the application in your browser at the provided address.

**Notes:**
- Redux async thunks are chosen for data fetching due to their seamless integration with Redux state management and simplicity in handling asynchronous operations.
- Detailed documentation and instructions for this task's implementation are provided within the repository.

For any inquiries or assistance regarding this task implementation, feel free to reach out to the repository maintainer.
