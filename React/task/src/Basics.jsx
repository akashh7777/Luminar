import React from 'react'
import './basics.css'

const Basics = () => {
  return (
    <>
     <div className="basics">

      <h1>React Basics</h1>

      <p className="intro">
        Before building React applications, it is important to
        understand some basic concepts. This section introduces
        JSX, components, props and state.
      </p>


      <section>
        <h2>What is JSX?</h2>

        <p>
          JSX is a syntax extension for JavaScript that allows
          developers to write HTML-like code inside JavaScript.
        </p>

        <p>
          JSX makes it easier to describe what the user interface
          should look like.
        </p>

        
      </section>


      <section>
        <h2>Components</h2>

        <p>
          Components are the building blocks of a React application.
          A component represents a part of the user interface.
        </p>

        <p>
          For example, a website can have separate components for
          the navigation bar, header, button, content and footer.
        </p>

        
      </section>


      <section>
        <h2>Props</h2>

        <p>
          Props are used to pass information from one component
          to another.
        </p>

        <p>
          A parent component can send data to a child component
          using props.
        </p>

        
      </section>


      <section>
        <h2>State</h2>

        <p>
          State is information that can change while an application
          is running.
        </p>

        <p>
          For example, a counter value can change when a user clicks
          a button.
        </p>
      </section>

    </div>
    </>
  )
}

export default Basics