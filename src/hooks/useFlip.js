import React, { useState } from "react"

const useFlip = (initial = true) => {
    const [isFacingUp, setIsFacingUp] = useState(initial);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };

    return [isFacingUp, flipCard]
}

export default useFlip;