import { ErrorBoundary } from 'react-error-boundary'
import { useReducer } from 'react'
import * as ReactDOM from 'react-dom'

interface ErrorInterface {
  error: any
  resetErrorBoundary: any
}

function ErrorFallback(bundary: ErrorInterface) {

  return (
    <div role="alert">
      <h4>Something went wrong:</h4>
      <h3>{bundary.error.message}</h3>
      <button onClick={bundary.resetErrorBoundary}>Try again</button>
    </div>
  )
}


function ErrorFallbackCounter2(bundary: ErrorInterface) {

  return (
    <div role="alert">
      <h4>Something went wrong:</h4>
      <h3>{bundary.error.message}</h3>
      <button onClick={bundary.resetErrorBoundary}>Try again</button>
    </div>
  )
}


const BuggyCounter = () => {
  const [counter, dispatch] = useReducer((state: any, action: any) => {
    if (state === 5) {
      throw new Error('I crashed!');
    }
    
    return state + 1;
  }, 0)

  const handleClick = () => {
    dispatch('increment')
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>increment</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
      >
        <BuggyCounter />
        </ErrorBoundary>

      <ErrorBoundary
        FallbackComponent={ErrorFallbackCounter2}
      >
      <BuggyCounter />
      </ErrorBoundary>

    </div>
  )
}

export {App}

ReactDOM.render(<App />, document.getElementById('root'))
