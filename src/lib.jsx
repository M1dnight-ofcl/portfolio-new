// components
export const SectionS1=({ children, height="85vmin", id="", className="" })=>{
    return(<>
        <section className={`${className} section`} id={id} style={{height}}>
            {/* <div className="textWrapper" id={`${id}_textWrapper`}> */}
                {children}
            {/* </div> */}
        </section>
    </>);
}
export const Left=({children,id=""})=>{
    return(<>
        <div className="left" id={id}>
            <div className="textWrapper" id={`${id}_textWrapper`}>
                {children}
            </div>
        </div>
    </>);
}
export const Right=({children,id=""})=>{
    return(<>
        <div className="right" id={id}>
            <div className="textWrapper" id={`${id}_textWrapper`}>
                {children}
            </div>
        </div>
    </>);
}
export const Grid=()=>{
    return(<svg width="120%" height="120%" xmlns="http://www.w3.org/2000/svg" className="grid">
        <defs>
            <pattern id="smallGrid" width="35" height="35" patternUnits="userSpaceOnUse">
                <path d="M 35 0 L 0 0 0 35" fill="none" stroke="#2a2a2a" strokeWidth="1"/>
            </pattern>
            <pattern id="grid" width="350" height="350" patternUnits="userSpaceOnUse">
                <rect width="350" height="350" fill="url(#smallGrid)"/>
                <path d="M 350 0 L 0 0 0 350" fill="none" stroke="#2a2a2a" strokeWidth="1"/>
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>);
}
export const Shade=({style={style}})=>{return <div className="shade" style={style}></div>;}
export const Stripe=({style={},customStripColor})=>{
    return <div className="stripe" style={
        {
            ...style,
            background:`repeating-linear-gradient(
                45deg,
                transparent,
                transparent 5px,
                ${customStripColor?customStripColor:"#121212"} 5px,
                ${customStripColor?customStripColor:"#121212"} 10px
            )`,
        }
    }></div>;}
export const BorderGlow=({style={}})=>{return <div className="borderglow" style={style}></div>;}
export const BorderGlow_l=({style={}})=>{return <div className="borderglow_l" style={style}></div>;}
// functions
export const generateId=(length)=>{
    let result='';
    const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter=0;
    while (counter<length) {
        result+=characters.charAt(Math.floor(Math.random() * charactersLength));
        counter+=1;
    }
    return btoa(result);
}
export const timeout=(ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
}