import React, {useEffect, useState} from 'react';
import { Card, Interrogation } from "./components/CardsComponents";
import {store} from "../redux/store";
import {selectedImages} from "../index";

export function HideCardsContents(props) {

    const {index, image, checkCards} = props;
    const [clicked, setClicked] = useState(0);
    const [visible, setVisible] = useState(false);
    let selectedCards=[];

    useEffect(() => {
        selectedCards=store.getState().puzzle.selectedCards;
        if ((selectedCards.length===2 && selectedCards[0].id===selectedCards[1].id)){
            selectedImages.forEach((image)=>{
                if (image.id===selectedCards[0].id && image.id===selectedCards[1].id){
                    image.matched=true;
                    setTimeout(()=>{},1000)
                }
            });
        }
        if ((selectedCards.length===2 && selectedCards[0].id!==selectedCards[1].id)){
            selectedImages.forEach((image)=>{
                setTimeout(()=>{setVisible(false)}, 1000);
            })
        }
    }, [clicked]);

    return (
    <>
        {!visible ? (
            <Card
                width="137px" height="145.75px" viewBox="0 0 197 206"
                onClick={() => {checkCards(image, image.id); setClicked(clicked + 1); setVisible(true);}}
                style={{marginLeft: (Number.isInteger(index / 5)) ? "0px" : "20px",  marginBottom: "20.25px", radius: "0.25em"}}
            >
                <Interrogation>
                    <path
                        d="M97.95 104.8C97.3833 104.8 96.9167 104.6 96.55 104.2C96.2167 103.8 96.05 103.25 96.05 102.55C96.05 100.717 96.3833 99.1667 97.05 97.9C97.7167 96.6333 98.6833 95.25 99.95 93.75C100.95 92.55 101.683 91.55 102.15 90.75C102.617 89.95 102.85 89.05 102.85 88.05C102.85 86.95 102.433 86.0833 101.6 85.45C100.8 84.7833 99.7 84.45 98.3 84.45C97.1 84.45 95.95 84.7167 94.85 85.25C93.75 85.75 92.4667 86.4833 91 87.45C90.1667 87.9167 89.4833 88.15 88.95 88.15C88.3833 88.15 87.8833 87.9 87.45 87.4C87.05 86.8667 86.85 86.25 86.85 85.55C86.85 84.5833 87.25 83.8 88.05 83.2C89.45 82 91.1 81.0667 93 80.4C94.9 79.7 96.8167 79.35 98.75 79.35C100.783 79.35 102.583 79.7 104.15 80.4C105.75 81.1 106.983 82.0667 107.85 83.3C108.75 84.5333 109.2 85.95 109.2 87.55C109.2 89.2833 108.783 90.8 107.95 92.1C107.117 93.3667 105.9 94.8 104.3 96.4C102.933 97.8 101.9 98.9833 101.2 99.95C100.533 100.883 100.117 101.95 99.95 103.15C99.85 103.683 99.6167 104.1 99.25 104.4C98.9167 104.667 98.4833 104.8 97.95 104.8ZM98.05 115.3C96.9833 115.3 96.1 114.95 95.4 114.25C94.7 113.517 94.35 112.617 94.35 111.55C94.35 110.483 94.7 109.6 95.4 108.9C96.1 108.167 96.9833 107.8 98.05 107.8C99.1167 107.8 100 108.167 100.7 108.9C101.4 109.6 101.75 110.483 101.75 111.55C101.75 112.617 101.383 113.517 100.65 114.25C99.95 114.95 99.0833 115.3 98.05 115.3Z"
                        fill="white"/>
                </Interrogation>
            </Card>
        ):(
            <>
            { image.matched ?(
            <Card
                width="137px" height="145.75px" viewBox="0 0 197 206"
                style={{marginLeft: (Number.isInteger(index / 5)) ? "0px" : "20px",  marginBottom: "20.25px", radius: "0.25em", backgroundColor:"white"}}
            >
                <Interrogation>
                    <path
                        d="M97.95 104.8C97.3833 104.8 96.9167 104.6 96.55 104.2C96.2167 103.8 96.05 103.25 96.05 102.55C96.05 100.717 96.3833 99.1667 97.05 97.9C97.7167 96.6333 98.6833 95.25 99.95 93.75C100.95 92.55 101.683 91.55 102.15 90.75C102.617 89.95 102.85 89.05 102.85 88.05C102.85 86.95 102.433 86.0833 101.6 85.45C100.8 84.7833 99.7 84.45 98.3 84.45C97.1 84.45 95.95 84.7167 94.85 85.25C93.75 85.75 92.4667 86.4833 91 87.45C90.1667 87.9167 89.4833 88.15 88.95 88.15C88.3833 88.15 87.8833 87.9 87.45 87.4C87.05 86.8667 86.85 86.25 86.85 85.55C86.85 84.5833 87.25 83.8 88.05 83.2C89.45 82 91.1 81.0667 93 80.4C94.9 79.7 96.8167 79.35 98.75 79.35C100.783 79.35 102.583 79.7 104.15 80.4C105.75 81.1 106.983 82.0667 107.85 83.3C108.75 84.5333 109.2 85.95 109.2 87.55C109.2 89.2833 108.783 90.8 107.95 92.1C107.117 93.3667 105.9 94.8 104.3 96.4C102.933 97.8 101.9 98.9833 101.2 99.95C100.533 100.883 100.117 101.95 99.95 103.15C99.85 103.683 99.6167 104.1 99.25 104.4C98.9167 104.667 98.4833 104.8 97.95 104.8ZM98.05 115.3C96.9833 115.3 96.1 114.95 95.4 114.25C94.7 113.517 94.35 112.617 94.35 111.55C94.35 110.483 94.7 109.6 95.4 108.9C96.1 108.167 96.9833 107.8 98.05 107.8C99.1167 107.8 100 108.167 100.7 108.9C101.4 109.6 101.75 110.483 101.75 111.55C101.75 112.617 101.383 113.517 100.65 114.25C99.95 114.95 99.0833 115.3 98.05 115.3Z"
                        fill="white"/>
                </Interrogation>
            </Card>
            ):(
                <img
                    key={index} src={image.path} width="137px" height="145.75px"
                    style={{ marginLeft: (Number.isInteger(index / 5)) ? "0px" : "20px", marginBottom: "20.25px", radius: "0.25em", borderRadius: "0.25em" }}
                />
            )
            }
            </>
        )}
    </>
    );
}
export default HideCardsContents;