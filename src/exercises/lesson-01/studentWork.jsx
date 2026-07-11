//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Ines';
  const age = 29;
  const hobbies = ['Coding', 'Reading', 'Pugs', 'Music'];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi! My name is {name}. I am {age} years old and excited to learn React!
      </p>

      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
