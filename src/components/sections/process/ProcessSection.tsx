import Button from "../../common/Button";
import ProcessStep from "./ProcessStep";
import { processData } from "../../../data/processData";

export default function ProcessSection() {
    return (
        <section id="how-it-works" className="bg-white py-12 md:py-20 xl:py-32">
            <div className="container">
                {/* Section Heading */}
                <div className="mb-10 grid lg:gap-6 gap-4 md:grid-cols-2 md:items-end lg:mb-12">

                    <h2 className="font-extrabold text-typography-dark lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9">
                        From first
                        <br />
                        {" "}idea to final launch.
                    </h2>

                    <p className="text-sm font-medium leading-6 text-typography-dark md:text-lg md:justify-self-end">
                        A simple, focused process that keeps strategy,
                        design and execution moving in the same direction.
                    </p>

                </div>

                {/* Process Cards */}
                <div className="grid grid-cols-1 border-r border-neutral-100 sm:grid-cols-2 lg:grid-cols-4">
                    {processData.map((step) => (
                        <ProcessStep key={step.number} step={step} />
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="mt-5 flex flex-col gap-5 border border-neutral-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
                    <div>
                        <p className="text-sm md:text-base font-normal leading-5 text-typography-light">
                            Have a project in mind?
                        </p>

                        <p className="mt-1 text-base md:text-lg font-semibold leading-7 text-typography-dark">
                            Let's talk about what's next.
                        </p>
                    </div>

                    <Button
                        label="Start a Project"
                        variant="primary"
                        size="lg"
                        icon="arrow-up-right"
                    />
                </div>
            </div>
        </section>
    );
}