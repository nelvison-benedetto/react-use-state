import { useState } from 'react'
import {languages} from '../data/languages'

export default function AppMain(){

    const [active, setActive] = useState(0);

    function handleClick(e){
      console.log(e.target);
      const newActive = Number(e.target.getAttribute('data-index'));
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
                        <div className='lang_item' key={item.id}>
                            <h2 onClick={handleClick} data-index={index}>{item.title}</h2>
                            <div className={active == index?'content_lang':'hide_lang'}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ) )}
                </div>
            </div>
        </main>
    );
}