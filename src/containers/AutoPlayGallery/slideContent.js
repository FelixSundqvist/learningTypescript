import React from 'react';
import Button from '../../components/UI/Buttons/Button';
import theme from '../../assets/stylingTheme';

let slideContent = [
    {
      backgroundImage: ["https://media.playstation.com/is/image/SCEA/sekiro-shadows-die-twice-screen-01-ps4-us-21jun18?$native_xl_nt$"],
      backgroundColor: [theme.mainColor, theme.secondaryColor],
      content:[
        [<h1 key="title">{"Sekiro: Shadows Die Twice"}</h1>,  
          <div key="text"><p>Testing</p></div>
        ],
        [
            <h4 key="price">{"249$"}</h4>,
            <Button key="button">BUY NOW</Button>
        ],
      ],
      direction: "column"
    },
    {
        backgroundImage:["https://media.playstation.com/is/image/SCEA/kingdom-hearts-iii-screen-12-ps4-us-22jan19?$native_xxl_nt$"],
        content:[
          [
            <h1 key="title" style={{fontSize: "6vh"}}>SALE</h1>,
            <p key="text">Up to 50% off</p>,
            <Button key="button">EXPLORE</Button>
          ]
        ],
      },
      {
        backgroundColor: [theme.secondaryColor, theme.white],
        content:[
          [<h4 key="title" >Hottest hits</h4>,  
              <p key="text">{"Explore the newest From Software's title"}</p>
          ],
          [<h4 key="title">Sekiro: Shadows Die Twice</h4>]
        ],
      }, 
]

export default slideContent;