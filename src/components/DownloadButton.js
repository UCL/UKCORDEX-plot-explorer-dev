// Download button for individual plots
import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import './DownloadButton.css';

function DownloadButton(){

    // const [visible, setVisible] = useState(false)
    
    // const toggleVisible = () => {
    //     const scrolled = document.documentElement.scrollTop;
    //     if (scrolled > 500){
    //     setVisible(true)
    //     } 
    //     else if (scrolled <= 500){
    //     setVisible(false)
    //     }
    // };
    // window.addEventListener('scroll', toggleVisible);


    return(
<Button variant="primary" size="lg" className="downloadbtn" /*href={`/public/images/${plotvar.value}/${plottype.value}_${plotvar.value}_${season.value}_${period.value}.png`}*/



// <>
// {plotvars.map(plotvar => (
//   seasons.map(season => (
//     periods.map(period => (
//       plottypes.map(plottype => (
//         <Row className="py-4">
//           <Figure>
//             <FigureImage
//              alt={plottype.label + " not found for '" + plotvar.label + "' on season '" + season.label + "' and period '" + period.label + "'."}
//              src={`${process.env.PUBLIC_URL}/images/${plotvar.value}/${plottype.value}_${plotvar.value}_${season.value}_${period.value}.png`}
//             />
>




      Download Plots

</Button>
    )
};

export default DownloadButton;