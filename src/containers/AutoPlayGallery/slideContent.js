import React from 'react';
import theme from '../../assets/stylingTheme';

let slideContent = [
    {
      backgroundImage: ["https://media.playstation.com/is/image/SCEA/sekiro-shadows-die-twice-screen-01-ps4-us-21jun18?$native_xl_nt$"],
      backgroundColor: [theme.mainColor, theme.secondaryColor],
      content:[
        [<h1 key="title">{"Sekiro: Shadows Die Twice"}</h1>,  
          <div key="text"><p>Testing</p></div>
        ]
      ],
      
    },
    {
        backgroundColor: [theme.mainColor, theme.white],
        content:[
          [
            <h1 key="title" style={{fontSize: "6vh"}}>SALE</h1>,
            
          ],
          [
            <p key="text">Up to 50% off</p>,
          ]
        ],
        direction: "column"
      },
      {

        backgroundColor: [theme.secondaryColor, theme.white],
        content:[
          [<h1 key="title" >Hottest hits</h1>
          ],
          [<h1 key="title">Comming Soon</h1>]
        ],
      }, 
]

export default slideContent;