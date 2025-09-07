
const SvgDivider = () => {
    return (
        <div>
            <div id="svg-div1" className="w-full h-[150px] bg-red-200" />
            <svg
                id="svg-separator"
                className="w-full block -mt-[40px]"
                viewBox="0 0 1000 40"
                width="100%"
                height="40"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,0 C167,40 333,0 500,40 C667,80 833,40 1000,0 L1000,40 L0,40 Z"
                    fill="#bfdbfe"
                />
            </svg>
            <div id="svg-div2" className="w-full h-[150px] bg-blue-200" />
        </div>
    );
};

export default SvgDivider;
