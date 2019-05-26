import React from 'react';
import Button from '../../components/UI/Button/Button';
import theme from '../../assets/stylingTheme';

let slideContent = [
    {
      backgroundColor: [theme.mainColor, theme.secondaryColor],
      content:[
        [<h1 key="title">{"Weeee"}</h1>,  
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
        backgroundImage:["https://images.unsplash.com/photo-1558199528-c321954fe30b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"],
        content:[
          [
            <h4 key="title">SALE</h4>,
            <p key="text">Up to 50% off</p>,
            <Button key="button">EXPLORE</Button>
          ]
        ],
      },
      {
        backgroundColor: [theme.secondaryColor, theme.white],
        content:[
          [<h4 key="title">Hottest hits</h4>,  
              <p key="text">{"Explore the newest From Software's title"}</p>
          ],
          [<h4 key="title">Sekiro: Shadows Die Twice</h4>]
        ],
      }, 
]

export default slideContent;