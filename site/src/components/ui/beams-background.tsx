"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSpring, animated, AnimatedProps } from "@react-spring/web";
import React from "react";
// import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { TextShimmer } from "./text-shimmer";

interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        angle: angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.25 + Math.random() * 0.25,
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

const OPACITY_MAP = {
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
};

export function BeamsBackground({
    className,
    intensity = "strong",
    children,
}: AnimatedGradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 20;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            const totalBeams = MINIMUM_BEAMS * 1.5;
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            if (!canvas) return beam;
            
            const column = index % 3;
            const spacing = canvas.width / 3;

            beam.y = canvas.height + 100;
            beam.x =
                column * spacing +
                spacing / 2 +
                (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 100 + Math.random() * 100;
            beam.speed = 0.5 + Math.random() * 0.4;
            beam.hue = 190 + (index * 70) / totalBeams;
            beam.opacity = 0.2 + Math.random() * 0.1;
            return beam;
        }

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            // Calculate pulsing opacity
            const pulsingOpacity =
                beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                OPACITY_MAP[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

            // Enhanced gradient with multiple color stops
            gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
            gradient.addColorStop(
                0.1,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
            );
            gradient.addColorStop(
                0.4,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.6,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
            );
            gradient.addColorStop(
                0.9,
                `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
            );
            gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.filter = "blur(50px)";

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                // Reset beam when it goes off screen
                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams);
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div
            className={cn(
                "relative w-full overflow-hidden",
                className
            )}
        >
            <div className="relative z-0 w-full h-full">
                {children}
            </div>

            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ filter: "blur(30px)" }}
            />
        </div>
    );
}

// Define the animated div properly for TypeScript
const AnimatedDiv = animated.div as React.FC<AnimatedProps<React.HTMLAttributes<HTMLDivElement>>>

interface HeroWithBeamsProps {
    scrollY: number;
}

export function HeroWithBeams({ scrollY }: HeroWithBeamsProps) {
    const imageAnimation = useSpring({
        transform: `scale(${1 + Math.min(scrollY / 1000, 0.02)})`,
        config: { mass: 1, tension: 70, friction: 40 }
    })

    const terms = ["Music Producer", "Recording Engineer", "Mixing Engineer"];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.6,
                delayChildren: 0.8
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <AnimatedDiv
                    style={imageAnimation}
                    className="w-full h-full relative"
                >
                    <div className="w-full h-full relative" style={{ transform: 'scale(1.2)' }}>
                        <Image
                            src="/images/jeetzingh-website-header.png"
                            alt="JEETZINGH music producer background image"
                            fill
                            priority
                            className="object-cover object-[20%_center] filter blur-sm"
                        />
                    </div>
                    <BeamsBackground className="absolute inset-0" intensity="strong">
                        <div />
                    </BeamsBackground>
                </AnimatedDiv>
            </div>

            <div className="container mx-auto px-4 z-20 text-center relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}>
                    <TextShimmer
                        duration={5}
                        className='text-5xl md:text-7xl font-bold mb-6 [--base-color:var(--color-indigo-400)] [--base-gradient-color:var(--color-indigo-200)]'
                    >
                        JEETZINGH
                    </TextShimmer>
                </motion.div>

                <div className="container mx-auto p-8">
                    <motion.div
                        className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {terms.map((term, i) => (
                            <React.Fragment key={i}>
                                <motion.span variants={item} className="inline-block">
                                    {term}
                                </motion.span>

                                {i < terms.length - 1 && (
                                    <motion.span
                                        variants={item}
                                        className="inline-block mx-2"
                                    >
                                        •
                                    </motion.span>
                                )}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 py-4">
                    <Link
                        href="/about"
                        className="bg-white border-2 border-white text-black py-3 px-8 rounded-full font-medium hover:bg-gray-200 hover:border-gray-200 transition-colors"
                    >
                        Bio
                    </Link>
                    <Link
                        href="/mywork"
                        className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-medium hover:bg-white/10 transition-colors"
                    >
                        Projects
                    </Link>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/contact"
                        className="bg-indigo-400 border-2 border-indigo-400 text-white py-3 px-22 rounded-full font-medium hover:bg-indigo-500 hover:border-indigo-500 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </section>
    );
}
