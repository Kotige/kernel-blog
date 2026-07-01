import { useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import posts from "../../data/MiniPostData";
import MiniPost from "../../components/MiniPostCards"
import MainContent from "./MainContent";

export default function Home() {
    const [heroFinished, setHeroFinished] = useState(false);

    return (
        <div className="min-h-screen bg-page">
            <Hero onFinish={() => setHeroFinished(true)} />

            {heroFinished && (
                <main className="mx-auto max-w-7xl px-6 py-1">
                    <Navbar />
                    <MiniPost posts={posts}/>
                    <MainContent />
                </main>
            )}
        </div>
    );
}