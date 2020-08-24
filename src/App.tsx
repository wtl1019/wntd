import React from 'react'
import Button from './components/Button/button'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button>Hello</Button>
        <Button disabled>Disabled Button</Button>
        <Button btnType='primary' btnSize='lg'>
          Large Primary
        </Button>
        <Button btnType='danger' btnSize='sm'>
          Small Danger
        </Button>
        <Button btnType='link' href='http://www.baidu.com'>
          Baidu Link
        </Button>
        <Button btnType='link' href='http://www.baidu.com' disabled>
          Disabled Link
        </Button>
        <h1>hello world</h1>
        <h2>hello world</h2>
        <h3>hello world</h3>
        <hr/>
        <code>
          const a = 1
        </code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
