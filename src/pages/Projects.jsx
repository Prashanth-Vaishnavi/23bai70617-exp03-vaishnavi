import Card from "../components/CardComponent";

export default function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <Card
        title="Library Management System"
        desc="Python class-based system for managing books, users and issue records."
      />

      <Card
        title="Video Rental Store System"
        desc="Java inventory system for managing movies, rentals and customers."
      />

      <Card
        title="Data Analysis Toolkit"
        desc="Performed data cleaning, correlation analysis and filtering using datasets."
      />
    </div>
  );
}
