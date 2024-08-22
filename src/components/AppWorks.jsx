const AppWorks = () => {
  return (
    <div className="w-full lg:h-screen md:h-[90vh] h-[100vh] flex flex-col lg:justify-center items-center gap-8 md:mt-8 lg:mt-0">
      <div className="w-full h-[10%] flex justify-center items-center">
        <p className="uppercase 2xl:text-[4rem] xl:text-[4rem] lg:text-[3rem] md:text-[3rem] text-[2rem] font-bold">How’S App works?</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:flex-wrap gap-8 w-full lg:h-[40%] md:h-[40%] h-[85%]">
      <div className="lg:w-[25%] md:w-[40%] w-[80%] md:h-[80%] h-[60%] flex flex-col justify-center items-center text-center gap-2 bg-custom-gradient2 rounded-md p-4">
                <div className="w-[15%] 2xl:h-[25%] xl:h-[20%] lg:h-[20%] md:h-[20%] h-[20%]  group30"></div>
                <p className=" 2xl:text-[1.5rem] xl:text-[1.25rem] lg:text-[1.1rem] md:text-[1.5rem] text-[1.25rem] font-bold text-[#444444] uppercase">Install the App</p>
                <p className="2xl:text-[1rem] xl:text-[1.1rem] lg:text-[0.9rem] md:text-[1.25rem] text-[1rem] px-2 text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="lg:w-[25%] md:w-[40%] w-[80%] md:h-[80%] h-[60%] flex flex-col justify-center items-center text-center gap-2 bg-custom-gradient2 rounded-md p-4">
                <div className="w-[15%] 2xl:h-[25%] xl:h-[20%] lg:h-[20%] md:h-[20%] h-[20%] group31"></div>
                <p className=" 2xl:text-[1.5rem] xl:text-[1.25rem] lg:text-[1.1rem] md:text-[1.5rem] text-[1.25rem] font-bold text-[#444444] uppercase">Setup your profile</p>
                <p className="2xl:text-[1rem] xl:text-[1.1rem] lg:text-[0.9rem] md:text-[1.25rem] text-[1rem] px-2 text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="lg:w-[25%] md:w-[40%] w-[80%] md:h-[80%] h-[60%] flex flex-col justify-center items-center text-center gap-2 bg-custom-gradient2 rounded-md p-4">
                <div className="w-[15%] 2xl:h-[25%] xl:h-[20%] lg:h-[20%] md:h-[20%] h-[20%] group32"></div>
                <p className=" 2xl:text-[1.5rem] xl:text-[1.25rem] lg:text-[1.1rem] md:text-[1.5rem] text-[1.25rem] font-bold text-[#444444] uppercase">Book yor ride</p>
                <p className="2xl:text-[1rem] xl:text-[1.1rem] lg:text-[0.9rem] md:text-[1.25rem] text-[1rem]  px-2 text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
      </div>
    </div>
  )
}

export default AppWorks

