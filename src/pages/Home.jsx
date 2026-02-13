import Card from "../components/CardComponent";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to My Portfolio</h1>

      <p>
        Hello! I'm Vaishnavi, a passionate developer learning React and modern
        web technologies.
      </p>

      <Card title="Skills" desc="C, C++, Java, Python, React, Data Analysis" />
      <Card title="Interests" desc="Frontend Development, UI Design, Machine Learning" />
      <Card title="Career Goal" desc="To become a full-stack developer and build impactful applications." />
    </div>
  );
}
