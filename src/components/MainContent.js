function MainContent() {
    return (
      <main className="p-8 max-w-4xl mx-auto">
        <section className="mt-8">
          <h2 className="text-3xl font-bold">Welcome!</h2>
          <p className="text-lg leading-7 mt-8">
            My name is Daming. I'm a graduate student at Colorado School of Mines. I'm interested in the latest on AI, and I'm on the contant lookout for the newest AI tools to help boost productivity.
          </p>
          <p className="text-lg mt-6 leading-7">
            Currently, I'm learning about Clound and deployment tools. With that said, this site is hosted on AWS EC2, and I plan to incorporate more cloud services in the future. At the meantime, feel free to check out my <a href="https://github.com/dwang917" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Github</a> page and connect with me on <a href="https://www.linkedin.com/in/daming-wang-0a9a8b1bb/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
          <p className="mt-6 text-lg leading-7">
            More updates coming soon.
          </p>
        </section>
      </main>
    );
  }
  
  export default MainContent;
  