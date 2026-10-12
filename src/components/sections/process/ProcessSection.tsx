import Button from "../../common/Button";
import ProcessStep from "./ProcessStep";
import { processData } from "../../../data/processData";

export default function ProcessSection() {
    return (
        <section className="bg-white py-20 md:py-[128px]">
            <div className="container">
                {/* Section Heading */}
                <div className="mb-[64px] flex gap-2 justify-between items-end">

                    <h2 className="max-w-xl text-[28px] font-extrabold leading-[56px] text-typography-dark md:text-[48px] gothic-800">
                        From first
                        <br className="hidden md:block" />
                        {" "}idea to final launch.
                    </h2>

                    <p className="text-lg font-medium text-typography-dark md:text-[18px] max-w-[600px] avenir-500">
                        A simple, focused process that keeps strategy,
                        design and execution moving in the same direction.
                    </p>

                </div>

                {/* Process Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border-r border-neutral-100">
                    {processData.map((step) => (
                        <ProcessStep key={step.number} step={step} />
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="mt-[20px] flex flex-col gap-5 border border-[#D9DBDD] bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm md:text-base font-normal text-typography-light avenir-400">
                            Have a project in mind?
                        </p>

                        <p className="mt-1 text-base md:text-lg font-semibold text-typography-dark avenir-600 ">
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
