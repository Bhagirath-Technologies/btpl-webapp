import React, { useEffect } from "react";

const TopToBottom = () => {
    const goDown = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };

    const listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <>
            {(
                <div className="scroll-down scroll-down-light m-5 d-none d-md-block" onClick={goDown}>
                    <div className="scroll-line"></div>
                    <span className="scoll-text">Scroll Down</span>
                </div>
            )}
        </>
    );
}

export default TopToBottom;
