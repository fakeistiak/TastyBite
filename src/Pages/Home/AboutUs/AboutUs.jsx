
const AboutUs = () => {
    return (
      <div>
        <section
          className="bg-cover bg-center h-[572px] items-center flex my-12"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/WDMscJR/side-view-male-chef-flambeing-dish-1.jpg")',
          }}
        >
          <div className="text-center flex justify-center items-center w-[1096px] h-[333px] mx-auto bg-white">
            <h3 className="text-4xl font-bold mb-4 w-[762px] font-serif">
              TastyBite <br />
              <span className="text-base font-medium">
                Discover a world of culinary delights with our food delivery
                website. From local favorites to global cuisines, our platform
                offers a diverse menu. Order conveniently, experience swift
                deliveries, and indulge in a seamless dining experience from the
                comfort of your home.
              </span>
            </h3>
          </div>
        </section>
      </div>
    );
};

export default AboutUs;