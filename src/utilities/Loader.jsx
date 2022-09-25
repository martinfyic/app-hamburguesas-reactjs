import styled from "./Loader.module.css";

export const Loader = () => {
    return (
        <div className={styled.item}>
            <div className={styled.loaderPulse}></div>
        </div>
    );
};
