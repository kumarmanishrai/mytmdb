import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
    const [visible, setVisible] = useState(false);
    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let maxHeight = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > maxHeight) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll)
    }, []);

    return (
        <Wrapper>
            {visible && (
                <div className="top-btn" onClick={goToTop}>
                    <FaArrowUp className="top-btn--icon"  style={{fill: "#00fff5"}}/>
                </div>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .top-btn {
    font-size: 1.8rem;
    width: 4.6rem;
    height: 4.6rem;
    background-color: #222831;
    border-radius: 50%;
    position: fixed;
    bottom: 2.5rem;
    right: 2.5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
    }
  }
`;

export default GoToTop;