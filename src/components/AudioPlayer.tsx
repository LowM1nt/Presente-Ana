import { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';
import { motion } from 'framer-motion';

export interface AudioPlayerHandle {
    play: () => void;
}

export const AudioPlayer = forwardRef<AudioPlayerHandle>((_, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useImperativeHandle(ref, () => ({
        play: () => {
            audioRef.current?.play().then(() => setIsPlaying(true)).catch(console.error);
        }
    }));

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <audio ref={audioRef} loop>
                <source src={`${import.meta.env.BASE_URL}music.mp3`} type="audio/mpeg" />
            </audio>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-kawaii-primary border-2 border-kawaii-primary cursor-pointer"
            >
                {isPlaying ? <FaMusic size={20} /> : <FaVolumeMute size={20} />}
            </motion.button>
        </div>
    );
});
