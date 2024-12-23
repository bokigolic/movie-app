# React Movie Search App

This project is a simple React-based application for searching and displaying a list of movies. The `Home` component demonstrates the use of **form handling**, **controlled inputs**, and **event handling** in React.

---

## Key Features

### Search Functionality:

- A form with an input field and a button allows users to search for movies.
- The `searchQuery` state dynamically tracks the input value.
- The `handleSearch` function manages form submission, displays an alert, and clears the input field.

### Movie Display:

- A list of predefined movies is rendered using the `MovieCard` component.

---

## Code Breakdown

### Form Structure

The form includes:

- A text input field for entering a search query.
- A submit button to trigger the search functionality.

```jsx
<form onSubmit={handleSearch} className="search-form">
  <input
    type="text"
    placeholder="Search for a movies ..."
    className="searh-input"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <button type="submit" className="search-button">
    Search
  </button>
</form>
```
