import {Score, Menu, Note, Total, Label, Line, Input, Button, ButtonLabel} from "./components/MenuComponents";
import {useState} from "react";

export function MenuContents(props) {

    const {replace, clicked, setClicked, score, setScore} = props;
    const [size, setSize] = useState(10);

    const handleChange = (event) => {
        setSize(parseInt(event.target.value))
        replace(parseInt(event.target.value))
    };

    return (
        <Menu>
            <Score>Score</Score>
            <Note>{score}</Note>
            <Total>/</Total>
            <Total style={{left: "75px"}}>{size}</Total>
            <Label>Tries : {Math.ceil(clicked/2)}</Label>
            <Line/>
            <Score style={{top:"218px"}}>Options</Score>
            <Label style={{top:"265px"}}>Size: </Label>
            <Input>
                <select
                    onChange={(e)=>{ handleChange(e); setClicked(0); setScore(0)}}
                    value={size}
                    style={{width:"158px", height:"30px"}}>
                    <option value={5} >5 pairs</option>
                    <option value={10} defaultValue>10 pairs</option>
                    <option value={15}>15 pairs</option>
                    <option value={20}>20 pairs</option>
                </select>
            </Input>
            <Button onClick={()=>{replace(size); setClicked(0); setScore(0)}}>
                <ButtonLabel>Restart</ButtonLabel>
            </Button>
        </Menu>
    );
}
export default MenuContents;
