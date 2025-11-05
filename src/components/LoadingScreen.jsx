import { useEffect, useState } from "react"

export const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("");
    const phrases = [
        "<The World is Yours/>",
        "<Welcome to HollyHock Automations/>",
        "<Innovate. Automate. Elevate/>",
        "<Hello World/>",
        "<Grateful Dead/>",
        "<The Future is Bright/>",
        "<This/>",
        "<Roaring Fork Valley/>",
        "<Aspen/>",       
    ];

    // Function to randomly pick a phrase
    const getRandomPhrase = () => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randomIndex];
    };

    useEffect(() =>{

        const fullText = getRandomPhrase();
        let index =0;
        const interval = setInterval (() =>{
            setText(fullText.substring(0, index))
            index++;

            if (index > fullText.length){
                clearInterval(interval)

                setTimeout(()=>{
                    onComplete();
                },500)
            }

        },100)

        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-[var(--hh-cream)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(16,33,43,0.78)] via-[rgba(11,20,28,0.82)] to-[rgba(7,12,18,0.78)]" />
            <div className="absolute w-[360px] h-[360px] rounded-full bg-[rgba(199,59,50,0.16)] blur-3xl -top-24 left-1/3" />
            <div className="absolute w-[320px] h-[320px] rounded-full bg-[rgba(242,217,161,0.1)] blur-3xl bottom-0 right-1/4" />

            <div className="relative text-center space-y-6 px-6">
                <div className="text-sm uppercase tracking-[0.4em] text-[var(--hh-cream)]/70">Initializing</div>
                <div className="text-4xl sm:text-5xl font-['Playfair_Display'] font-semibold">
                    {text}
                    <span className="animate-blink ml-1 text-[var(--hh-red)]">|</span>
                </div>
                <div className="w-[220px] h-[3px] bg-white/10 rounded-full overflow-hidden mx-auto">
                    <div className="w-[40%] h-full bg-[var(--hh-red)] shadow-[0_0_20px_rgba(199,59,50,0.6)] animate-loading-bar" />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#cdd6dd]">
                    Tailoring experience<span className="ml-1 text-[var(--hh-red)]">…</span>
                </p>
            </div>
        </div>
    );
}
