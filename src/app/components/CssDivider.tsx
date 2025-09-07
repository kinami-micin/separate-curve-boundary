
const CssDivider = () => {
    return (
        <div>
            <div id="css-div1" className="w-full h-[150px] bg-red-200" />
            <div
                id="css-separator"
                className="w-full h-[40px] -mt-[40px] z-10 bg-blue-200"
                style={{
                    clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 50% 100%)',
                    WebkitClipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 50% 100%)',
                }}
            />
            <div id="css-div2" className="w-full h-[150px] bg-blue-200" />
        </div>
    );
};

export default CssDivider;
