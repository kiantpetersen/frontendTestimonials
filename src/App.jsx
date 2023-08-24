import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './queries.css'
import { testimonialData } from './assets/testimonialData'
import TestimonialCard from './TestimonialCard'
function App() {
  const [data, setData] = useState(testimonialData)

  return (
    <div className='testimonial-section'>
      <h1>Testimonial Section</h1>
      <div className='testimonial-grid'>

        {/* </div> */}

        <TestimonialCard testimonialData={data[0]} />
        <TestimonialCard testimonialData={data[1]} />
        <TestimonialCard testimonialData={data[4]} />
        <TestimonialCard testimonialData={data[2]} />
        <TestimonialCard testimonialData={data[3]} />

      </div>
    </div>
  )
}

export default App
