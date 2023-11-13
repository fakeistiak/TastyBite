const AboutUs = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-[572px] md:h-[400px] lg:h-[572px] items-center flex my-12"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/WDMscJR/side-view-male-chef-flambeing-dish-1.jpg")',
        }}
      >
        <div className="text-center flex justify-center items-center mx-auto bg-white p-4 md:p-8 lg:p-12">
          <h3 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 w-full md:w-[762px] font-serif">
            TastyBite <br />
            <span className="text-base md:text-lg lg:text-xl font-medium">
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
