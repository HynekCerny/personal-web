import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type Animation = 'fade-in' | 'fade-slide-in' | 'fade-slide-left' | 'fade-slide-right';

interface Props {
    children: ReactNode;
    className?: string;
    animation?: Animation;
    delay?: number;
    threshold?: number;
}

const AnimateOnScroll = ({
    children,
    className = '',
    animation = 'fade-slide-in',
    delay = 0,
    threshold = 0.15,
}: Props) => {
    const [ref, isInView] = useInView({ threshold });

    return (
        <div
            ref={ref}
            className={`animate-on-scroll ${isInView ? animation : ''} ${className}`}
            style={isInView && delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
};

export default AnimateOnScroll;
