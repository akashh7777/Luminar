import React from 'react'
import './concepts.css'

const Concepts = () => {
  return (
    <>
        <div className="concepts">

      <h1>React Concepts</h1>

      <p className="intro">
        React has several concepts that help developers create
        interactive and organized applications. The following
        topics are important for understanding React.
      </p>


      <section>
        <h2>Components</h2>

        <p>
          Components allow developers to divide an application
          into smaller and reusable parts.
        </p>

        <p>
          A component can represent a button, navigation bar,
          form, card or an entire page.
        </p>
      </section>


      <section>
        <h2>Props and State</h2>

        <p>
          Props are used to pass information between components,
          while state is used to manage information that can
          change inside a component.
        </p>

        <p>
          Understanding the difference between props and state
          is an important part of learning React.
        </p>
      </section>


      <section>
        <h2>Events</h2>

        <p>
          Events allow React applications to respond to actions
          performed by users.
        </p>

        <p>
          Common examples include button clicks, form submissions
          and changes to input fields.
        </p>

      
      </section>


      <section>
        <h2>Conditional Rendering</h2>

        <p>
          Conditional rendering allows different content to be
          displayed depending on a condition.
        </p>

        <p>
          For example, an application can display a dashboard when
          a user is logged in and a login page when the user is not
          logged in.
        </p>
      </section>


      <section>
        <h2>Lists</h2>

        <p>
          React can display multiple items from an array. Lists
          are commonly used for displaying products, users,
          tasks and other collections of information.
        </p>

        
      </section>


      <section>
        <h2>Forms</h2>

        <p>
          Forms are used to collect information from users.
          They are commonly found in login pages, registration
          pages, search boxes and contact forms.
        </p>
      </section>

    </div></>
  )
}

export default Concepts