import React from 'react'
import './learningpath.css'

const LearningPath = () => {
  return (
    <>
    <div className="learning">

      <h1>React Learning Path</h1>

      <p className="intro">
        Follow these steps to gradually develop your React skills.
        Start with JavaScript basics and move towards building
        complete React applications.
      </p>


      <section>
        <h2>Step 1: Learn JavaScript</h2>

        <p>
          Start by understanding the basics of JavaScript.
          Learn variables, functions, arrays, objects, conditions
          and loops.
        </p>
      </section>


      <section>
        <h2>Step 2: Learn JSX</h2>

        <p>
          Understand JSX and learn how JavaScript can be used
          together with HTML-like syntax to create user interfaces.
        </p>
      </section>


      <section>
        <h2>Step 3: Learn Components</h2>

        <p>
          Learn how to create small and reusable components.
          Practice creating components such as buttons, cards,
          navigation bars and forms.
        </p>
      </section>


      <section>
        <h2>Step 4: Learn Props</h2>

        <p>
          Learn how components can communicate with each other
          by passing information through props.
        </p>
      </section>


      <section>
        <h2>Step 5: Learn State</h2>

        <p>
          Learn how to manage information that changes inside
          a component using state.
        </p>
      </section>


      <section>
        <h2>Step 6: Learn Events</h2>

        <p>
          Learn how to respond to user interactions such as
          clicks, typing and form submissions.
        </p>
      </section>


      <section>
        <h2>Step 7: Learn Hooks</h2>

        <p>
          Start with important Hooks such as useState and useEffect.
          Hooks allow function components to use React features.
        </p>
      </section>


      <section>
        <h2>Step 8: Build Projects</h2>

        <p>
          Apply everything you have learned by creating small
          React projects.
        </p>
      </section>


      <section>
        <h2>Beginner Project Ideas</h2>

        <p>1. Counter Application</p>

        <p>2. Todo List</p>

        <p>3. Calculator</p>

        <p>4. Quiz Application</p>

        <p>5. Notes Application</p>
      </section>

    </div></>
  )
}

export default LearningPath