import {useRef, useState} from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({ target: {name, value}}) => {
        setForm({...form, [name]: value })
    }
    // service_ncvuuml
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        // Basic validation: Check if fields are filled
        if (!form.name.trim()) {
            alert('Please enter your name');
            setLoading(false);
            return;
        }

        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            alert('Please enter a valid email');
            setLoading(false);
            return;
        }

        if (!form.message.trim()) {
            alert('Please enter your message');
            setLoading(false);
            return;
        }

        // handle the sending through the library of emailjs
        try {
            await emailjs.send(
                'service_ncvuuml',
                'template_cb6nfx9',
                {
                    from_name: form.name,
                    to_name: 'Dionis',
                    from_email: form.email,
                    to_email: 'dionis.cebanu003@gmail.com',
                    message: form.message,
                },
                'Om2GYi17iiz2sWWka'
                );
            setLoading(false);
            alert('your message has been sent!')
            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setLoading(false);
            alert('Something went wrong');
        }

    }
    return (
        <section className="c-cpace my-20" id="contact">

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/img/contact/screen.png" alt="terminal background" className="absolute inset-0 min-h-screen hidden xl2:block"/>
                <div className="contact-container">
                    <h3 className="head-text">Say Hello</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Are you looking for a skilled web developer to elevate your company's digital presence? Whether you're a startup, a growing business, or an established company, I can help turn your vision into a fully functional, high-performance website or web application.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} action="" className="mt-12 flex flex-col space-y-7">
                        <label htmlFor="name" className="space-y-3">
                            <span className="field-label">
                                Your Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Name"
                            />
                        </label>
                        <label htmlFor="name" className="space-y-3">
                            <span className="field-label">
                                Email
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="email.exemple@gmail.com"
                            />
                        </label>
                        <label htmlFor="name" className="space-y-3">
                            <span className="field-label">
                                Your Message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                required
                                onChange={handleChange}
                                rows={5}
                                className="field-input"
                                placeholder="Hey, i want to hire you for..."
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...': 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow up image" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
