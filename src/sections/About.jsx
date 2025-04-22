import React, {useEffect, useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('dionis.cebanu003@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    //Use Effect to add the effect on scroll
    useEffect(() => {
        const elements = document.querySelectorAll(".col-span-1, .xl\\:col-span-2, .xl\\:col-span-1");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${index * 200 + 2000}ms`; // Delay increases by 200ms for each element
                    entry.target.classList.add("slide-in");
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, { threshold: 0.3 });

        elements.forEach(element => observer.observe(element));

        return () => observer.disconnect(); // Clean up observer on unmount
    }, []);

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/img/profile/profile.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit rounded-full object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, i'm Dionis</p>
                            <p className="grid-subtext">An ambitious web-developer, experienced in
                                both front and backend </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png"
                             alt="grid-2"
                             className="w-full sm:w-[276px] h-fit object-contain m-auto"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in React with a server language of PHP and React
                                Native for mobile apps</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 45.5017,
                                    lng: -73.5673,
                                    text: "I'm here - Montreal, Canada",
                                    color: 'white',
                                    size: 15
                                }]}

                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I am flexible all over the world, remotely.
                            </p>
                            <p className="grid-subtext">
                                Based in Montreal, Canada.
                            </p>

                             <a href="#contact">
                                 <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                             </a>

                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.webp" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain opacity-50"/>

                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my
                                skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">dionis.cebanu003@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
