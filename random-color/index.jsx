import { useState } from "react";

export default function RandomColor() {
    const [typeofcolor, settypeofcolor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomcolorutility(length) {
        return Math.floor(Math.random() * length);
    }

    function handlecreaterandomhexcolor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexcolor = '#';
        for (let i = 0; i < 6; i++) {
            hexcolor += hex[randomcolorutility(hex.length)];
        }
        console.log(hexcolor);
        setColor(hexcolor);
    }

    function handlecreaterandomrgbcolor() {
        const r = randomcolorutility(256);
        const g = randomcolorutility(256);
        const b = randomcolorutility(256);
        console.log(r, g, b);
        setColor(`rgb(${r},${g},${b})`);
    }

    return (
        <div style={{ width: "100vw", height: "100vh", background: color }}>
            <button onClick={() => settypeofcolor('hex')}>Create Hex Color</button>
            <button onClick={() => settypeofcolor('rgb')}>Create RGB Color</button>
            <button onClick={typeofcolor === "hex" ? handlecreaterandomhexcolor : handlecreaterandomrgbcolor}>Generate Random Color</button>
        </div>
    );
}
