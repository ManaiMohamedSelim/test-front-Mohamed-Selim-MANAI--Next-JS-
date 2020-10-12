import React, {useState, useEffect} from 'react';
import { Container } from "./components/CardsComponents";
import {selectedImages} from "../index";
import HideCardsContents from "./HideCardsContents";
import {addCard, clearSelected} from "../redux/actions/PuzzleActions";
import {store} from "../redux/store";
import {useDispatch} from "react-redux";
import MenuContents from "./MenuContents";

export function CardsContents(props) {

    const {visible, replace} = props;
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(0);
    const [score, setScore] = useState(0);
    let selectedCards=[];

    useEffect(() => {
        selectedCards=store.getState().puzzle.selectedCards;
        if (selectedCards.length===2 && selectedCards[0].id===selectedCards[1].id){setScore(score+1);}
    }, [clicked]);

    const checkCards = (img) => {
        if (selectedCards.length < 2) {
            dispatch(addCard(selectedCards, img));
        } else {
            dispatch(clearSelected(selectedCards));
            dispatch(addCard(selectedCards, img));
        }
        setClicked(clicked+1)
    }

    return (
        <div>
        <Container style={{display:"flex", justifyContent:"center"}}>
            <div>
                {visible && selectedImages.map((image, index)=>(
                    <img
                        key={index}
                        src={image.path}
                        width="137px"
                        height="145.75px"
                        style={{marginLeft:(Number.isInteger(index/5))?"0px":"1.25rem", marginBottom:"1.265625rem", radius:"0.25rem", borderRadius:"0.25em"}}
                    />
                ))}
                {!visible && selectedImages.map((image, index)=>(
                    <HideCardsContents key={index} index={index} image={image} selectedCards={selectedCards} checkCards={checkCards}/>
                ))}
            </div>
        </Container>
            <MenuContents replace={replace} clicked={clicked} setClicked={setClicked} score={score} setScore={setScore}/>
        </div>
    );
}

export default CardsContents;
