

function TestimonialCard({ testimonialData }) {
    return <div className='testimonial-card'>
        <div className='testimonial-header'>
            <div className='testimonial-img-container'>
                <img className='testimonial-profile-img' src={testimonialData.image} alt='testimonial_profile_image' />
            </div>
            <div className='testimonial-header-textbox'>
                <p className=' testimonial-header-text testimonial-author'>{testimonialData.name}</p>
                <p className='testimonial-header-text'>Verified Graduate</p>
            </div>
        </div>
        <div>
            <p className='testimonial-title'>{testimonialData.title}</p>
            <p className='testimonial-content'>{testimonialData.content}</p>
        </div>
    </div>
}

export default TestimonialCard