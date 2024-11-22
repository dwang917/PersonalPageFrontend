function MainContent() {
    return (
      <main className="p-8 max-w-4xl mx-auto">
        <section className="mt-10">
          <h2 className="text-4xl font-bold mb-4">Welcome!</h2>
          <p className="text-lg leading-7">
            This is my personal webpage built with React and Tailwind CSS.
          </p>
          <p className="mt-4 text-lg leading-7">
            This site is hosted on AWS EC2. More updates will be added soon.
          </p>
          {/* <p className="mt-4 text-lg leading-7">
            In my free time, I enjoy lifting weights, producing music, gaming, and working on cool projects.
          </p> */}
        </section>
  
        <hr className="my-8 border-gray-700" />
      </main>
    );
  }
  
  export default MainContent;
  