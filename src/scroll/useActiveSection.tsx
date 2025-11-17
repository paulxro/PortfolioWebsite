import { useState, useEffect } from "react";



export function useActiveSection(sectionIds: Array<string>) {
    const [active, setActive] = useState(sectionIds[0]);

    const handleScroll = () => {
        const y_pos: number =
        document.documentElement.scrollTop || document.body.scrollTop;

        const sectionSizes: number[] = [];
        let heightSoFar = 0;

        sectionIds.forEach((sectionName) => {
            const sectionElement = document.getElementById(sectionName);
            if (!sectionElement) {
                sectionSizes.push(heightSoFar);
                return;
            }

            heightSoFar += sectionElement.offsetHeight;
            sectionSizes.push(heightSoFar);
        });

        let active = sectionIds[0];

        for (let i = 0; i < sectionSizes.length; i++) {
            if (y_pos < sectionSizes[i]) {
                active = sectionIds[i];
                break;
            }
        }

        setActive(active);
    };

    

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);


  return active;
}
