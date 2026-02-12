export const StepperComponent = () => {

    const steps = [
        { label: "Serial number", path: "/register/serial" },
        { label: "Bike information", path: "/register/bike" },
        { label: "Personal information", path: "/register/personal" },
        { label: "Registration confirmation", path: "/register/confirmation" },
    ];

    

    const pathName = '/register/serial';
    const currentStepIndex = steps.findIndex((stp) => stp.path === pathName);
    const activeIndex = currentStepIndex !== -1 ? currentStepIndex : 0;


    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">
                Stepper Component
            </h1>

            <div className="mt-20 relative bg-gray-200 rounded-full h-1">
                <div  className="absolute h-1 bg-blue-500 rounded-full transition-all duration-300"
            style={{
              width: `${(activeIndex / (steps.length - 1)) * 100}%`
            }}>
                    {
                        steps.map((step, index) => (
                            <div
                                key={step.path}
                                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                                style={{
                                    left: `${(index/(steps.length - 1)) * 100}%`
                                }}
                            >
                                <div
                                    className={`w-6 h-6 rounded-full transition-all duration-300 ${index===activeIndex ? 'bg-blue-500 scale-125' : index < activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                                >

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}