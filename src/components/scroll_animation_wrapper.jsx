import { useInView } from 'react-intersection-observer';
const ScrollAnimationWrapper = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-2000 ease-out
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
        >
            {children}
        </div>
    );
};

export default ScrollAnimationWrapper;