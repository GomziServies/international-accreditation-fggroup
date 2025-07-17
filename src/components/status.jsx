import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.3,    
    });

    return (
        <section id="stats" className="stats section light-background" ref={ref}>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">

                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <span>{inView && <CountUp end={232} duration={2} />}</span>
                            <p>Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <span>{inView && <CountUp end={521} duration={2} />}</span>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <span>{inView && <CountUp end={1453} duration={2} />}</span>
                            <p>Hours Of Support</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stats-item text-center w-100 h-100">
                            <span>{inView && <CountUp end={32} duration={2} />}</span>
                            <p>Workers</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;
