import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
    const [qrcode, setQRCode] = useState("");
    const [input, setInput] = useState("");

    function handleGenerateQRCode() {
        setQRCode(input);
        setInput('');
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    value={input}
                    placeholder="Enter something"
                />
                <button
                    disabled={input && input.trim() !== "" ? false : true}
                    onClick={handleGenerateQRCode}
                >
                    Generate
                </button>
                <div>
                    {qrcode && (
                        <QRCode
                            id="qr-code-value"
                            value={qrcode}
                            size={400}
                            bgColor="white"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
