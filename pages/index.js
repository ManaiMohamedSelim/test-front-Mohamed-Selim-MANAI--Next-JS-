import React, {useState, useEffect} from "react";
import {Container, Title} from "./containers/components/MainComponents";
import CardsContents from "./containers/CardsContents";
import {initialData} from "./data/images";
import {mixData} from "./functions/functions";
import {connect, useDispatch} from "react-redux";
import {refresh} from "./redux/actions/PuzzleActions";
export let selectedImages = initialData;

export function Home(props) {

    let {images} = props;
    const [visible, setVisible] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        selectedImages=mixData(images.concat(images))
    }, []);

    function replace (size) {
        setVisible(true);
        dispatch(refresh(size))
        setTimeout(()=>setVisible(false),5000);
        selectedImages=mixData(images.concat(images))
        selectedImages.forEach((image)=>{image.selected=false; image.matched=false;})
    }

  return (
      <Container>
        <Title>Find the pairs</Title>
        <CardsContents setVisible={setVisible} visible={visible} replace={replace}/>
      </Container>
  )
}

const mapStateToProps= (state) => {
    const { puzzle } = state
    return { images: puzzle.images }
}
export default connect(mapStateToProps)(Home);