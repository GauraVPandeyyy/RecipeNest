const About = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-6 md:px-20 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">About RecipeNest</h1>

      <p className="text-lg text-gray-600 mb-4">
        <strong>RecipeNest</strong> is a personal recipe management web application built to simplify how home cooks,
        food bloggers, and culinary explorers organize their cooking journey.
      </p>

      <p className="text-gray-600 mb-4">
        Developed using modern web technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>, and
        <strong> Context API</strong>, RecipeNest allows users to create, view, edit, and delete recipes with ease.
        It supports persistent storage through <strong>localStorage</strong> and includes a convenient
        <strong> Favorites</strong> section for quick access to your best meals.
      </p>

      <p className="text-gray-600 mb-4">
        Whether you're documenting your grandmother’s secret curry, building a collection of dinner ideas, or simply
        exploring your own culinary creativity, RecipeNest is here to make recipe management organized, elegant, and enjoyable.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Tech Stack Used:</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>React.js with React Router DOM</li>
          <li>Tailwind CSS for responsive UI</li>
          <li>React Hook Form for form control</li>
          <li>React Toastify for notifications</li>
          <li>LocalStorage for persistence (can be upgraded to APIs)</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Built By:</h2>
        <p className="text-gray-600">
          <strong>Gaurav Pandey</strong> – A BCA student passionate about frontend development and building real-world products.
        </p>
      </div>
    </section>
  );
};

export default About;
