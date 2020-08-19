module.exports = ({ wo, description }) => {
  return `
       <!doctype html>
       <html>
          <head>
             <meta charset="utf-8">
             <title>PDF Result Template</title>
             <link href="/bower_components/arial-geo/css/arial-geo.css">
             <style>
                .pdf-box {
                padding-left: 5px;
                line-height: 1;
                border: 2px solid black;
                font-size: 11px;
                font-family: 'Arial GEO', sans-serif;
                color: black;
                }
                .pdf-box table {
                width: 100%;
                line-height: inherit;
                text-align: left;
                }
                .img-container {
                  text-align: center;
                  display: block;
                }
             </style>
          </head>
          <body>
             <div style="border: none;" class="pdf-box">
                <table cellpadding="0" cellspacing="0">
                   <tr class="top">
                      <td colspan="2">
                         <table>
                            <tr>
                               <td class="title"><img src="https://iili.io/JXIaQp.png" alt="JXIaQp.png" border="0"
                               style="width:70%;
                               text-align: center; 
                               display: block;"/><div></td>
                            </tr>
                         </table>
                      </td>
                   </tr>
                </table>
                <br />
                <div class="pdf-box" style="max-width: 540px; margin: auto; margin-bottom: 5px;">
                  <p class="wo" style="white-space: pre;">${wo}
                  </p>
                </div>
                <div class="pdf-box" style="max-width: 540px; margin: auto; margin-bottom: 5px;">
                <p>Service Provider: 1077124 / Midwest Constructors Inc</p>
              </div>
              <div class="pdf-box" style="max-width: 540px; margin: auto; margin-bottom: 5px;">
                <p>Description of Work:</p>
                <p>${description}</p>
              </div>
              <table >
                   <tr >
                      <td >
                         <table>
                            <tr>
                               <td ><img src="https://iili.io/JUZJtI.png" alt="JUZJtI.png" border="0" 
                               style="width:99%; 
                               margin: auto;"
                               />
                              </td>
                            </tr>
                         </table>
                      </td>
                   </tr>
                </table>
          </body>
       </html>
       `;
};
