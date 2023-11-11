
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center md:w-4/12 mx-auto py-12">
            <p className="text-amber-500 pb-2 font-medium text-lg">---{subHeading}---</p>
            <h3 className="text-4xl font-medium font-serif uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;