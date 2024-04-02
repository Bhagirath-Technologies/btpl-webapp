import React, { useEffect, useState } from "react";

const BottomToTop = () => {
    const [isVisible, setVisible] = useState(false);
    const goUp = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 250;

        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <>
            {isVisible &&(
                <div className="back-top back-top-show" onClick={goUp}>
                    <div className="scroll-line"></div>
                    <span className="scoll-text">Go Up</span>
                </div>
            )}
        </>
    );
}

export default BottomToTop;
