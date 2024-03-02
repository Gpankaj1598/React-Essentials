import { useState } from 'react';
import logo from './assets/logo.png';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './TabButton.jsx';
// import { EXAMPLES } from './data.js';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={logo} alt="react_logo" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}


function CoreConcept({ image, title, description }) {
  return (
    <li>
      {/* <img src={image} alt={title} /> */}
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}


function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please select a initial topic ...');
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log('APP COMPONENT EXECUTING');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {[<p>Welcome to React Course</p>]} 
          {[<p>React course for Beginner</p>]}


          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              // image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> */}
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;