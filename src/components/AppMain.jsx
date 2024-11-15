import {languages} from '../data/languages'

export default function AppMain(){
    return(
        <main id="">
            <div className='col-8 card'>
                <div className='list_btns_lingprogram'>
                    {languages.map((item,index)=>{})}
                </div>
                <div className='description'>
                    <h2></h2>
                    <p></p>
                </div>
            </div>
        </main>
    );
}