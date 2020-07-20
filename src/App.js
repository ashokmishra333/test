import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import Loading from './Loading'
//import Warning from './Warning'
const Warning = React.lazy(() => import('./Warning'))

const a = 'hello world'
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Hello World!!!!</h1>
      <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
      <img src="./login.png" alt="company logo" />
      <button onClick={() => setCount((state) => state + 1)}>+</button>
      <button onClick={() => setCount((state) => state - 1)}>-</button>
      {count > 10 ? (
        <React.Suspense fallback={<Loading />}>
          <Warning />
        </React.Suspense>
      ) : null}
    </div>
  )
}

export default hot(module)(App)
