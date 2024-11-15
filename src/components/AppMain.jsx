import {useState} from 'react'
import {languages} from '../data/languages'

export default function AppMain(){

    const [active, setActive] = useState(0);
    const colorMap = {
        "JavaScript": "backgr_js",
        "HTML": "backgr_html",
        "CSS": "backgr_css",
        "Node.js": "backgr_nodejs",
        "Express": "backgr_express",
        "ReactJS":  "backgr_reactjs"
    };

    function handleClick(e){
      console.log(e.target);
      const newActive = Number(e.currentTarget.getAttribute('data-index'));  //e.target funziona sul figlio non sul padre, currentTarget prende padre-figlio
      console.log(newActive);
      setActive(newActive);
    }
  
    // {accordions.map((item,index)=>(
    //     <div className='accordion-item' key={item.id}>
    //       <h2 onClick={handleClick}data-index={index} >{item.title}</h2>
    //       <div className={active == index? 'content':'hide'}>
    //         {item.content}
    //       </div>
    //     </div>
    //   ))}

    return(
        <main id="">
            <div className='col-8 container'>
                <div className='list_btns'>
                    {languages.map((item,index)=>(
                        <div className={`
                            lang_item color_white ${active===index? `color_white ${colorMap[item.title]}` :null}
                            `} 
                            onClick={handleClick}
                            data-index={index}
                            key={item.id}>
                            <h2 >{item.title}</h2>     
                        </div>
                    ) )}
                </div>
                <div className='content_lang'>
                    <h2>{languages[active].title}</h2>
                    <p>{languages[active].description}</p>
                </div>
            </div>
        </main>
    );
}