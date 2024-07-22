import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleOneSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function multipleSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexofCurrentId = copyMultiple.indexOf(getCurrentId);
        console.log(findIndexofCurrentId);
        if (findIndexofCurrentId === -1) {
            copyMultiple.push(getCurrentId);
        } else {
             copyMultiple.splice(findIndexofCurrentId, 1);
        }
        setMultiple(copyMultiple);
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Selection</button>
            {data && data.length > 0 ? (
                data.map((dataItem) => (
                    <div key={dataItem.id}>
                        <div 
                            onClick={enableMultiSelection
                                ? () => multipleSelection(dataItem.id)
                                : () => handleOneSelection(dataItem.id)
                            } 
                            className="title"
                        >
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {enableMultiSelection ? (
                            multiple.includes(dataItem.id) && (
                                <div className="content">{dataItem.answer}</div>
                            )
                        ) : (
                            selected === dataItem.id && (
                                <div className="content">{dataItem.answer}</div>
                            )
                        )}
                    </div>
                ))
            ) : (
                <div>No data found</div>
            )}
        </div>
    );
}
