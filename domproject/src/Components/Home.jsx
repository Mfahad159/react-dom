// src/pages/Home.jsx
const Home = () => {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to MySite</h2>
      <p className="text-gray-600 text-lg mb-6">
        This is a simple, modern, and responsive React project built with Tailwind CSS. Explore more using the navigation above.
      </p>
      <img 
        src="https://source.unsplash.com/800x400/?technology,react"
        alt="Tech banner"
        className="rounded-lg shadow-md mx-auto"
      />
    </section>
  );
};

export default Home;
