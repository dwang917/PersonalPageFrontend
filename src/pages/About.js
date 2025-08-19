import React from "react";

function About() {
  return (
    <div className="py-10">
      <section className="mt-8">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="text-lg leading-7 mt-6">
          I'm a software engineer with a Computer Science education background from the Colorado School of Mines. I enjoy building elegant software and finding creative solutions to nontrivial problems. I also believe in continuous learning and effective collaboration, as they transform "coder" into "problem solver".
        </p>
        <p className="mt-6 text-lg leading-7">
          Previously, I worked at Thorlabs as a software engineer intern, where I made impactful contributions to both testing software and device firmware. I researched and validated the viability of using baremetal Rust code for embedded system in place of traditional C Hal and RTOS, greatly streamlining future firmware development by implementing the first working sample. My experience there has deepened my understanding of low-level programming and real-time systems.
        </p>
        <p className="mt-6 text-lg leading-7">
          I also worked as a software engineer intern at other SaaS companies, where I gained valuable experience building scalable, cloud-native, and distributed software facing clients all over the world using tools like Docker, Kubernetes, and AWS.
        </p>
        <p className="mt-6 text-lg leading-7">
          In my free time, I enjoy learning new technologies, sharpening my programming skills and trying out new tools. Currently, I continue to advance my knowledge in Rust language, while learning more about DevOps technologies.
        </p>
        <p className="mt-6 text-lg leading-7">
          Outside of work, I love to explore the outdoors, whether it's hiking, climbing, or just enjoying the nature.
        </p>
      </section>
  </div>
  );
}

export default About;
