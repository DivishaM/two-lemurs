import Button from "../../common/Button";
import ProcessStep from "./ProcessStep";
import { processData } from "../../../data/processData";

export default function ProcessSection() {
    return (
        <section className="bg-white py-20 md:py-24">
            <div className="container">
                {/* Section Heading */}
                <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end lg:mb-12">

                    <h2 className="max-w-xl text-[28px] font-extrabold leading-[56px] text-[#000912] md:text-[48px]">
                        From first
                        <br className="hidden md:block" />
                        {" "}idea to final launch.
                    </h2>

                    <p className="max-w-md text-[14px] font-medium leading-[28px] text-[##000912] md:text-[18px] md:justify-self-end">
                        A simple, focused process that keeps strategy,
                        design and execution moving in the same direction.
                    </p>

                </div>

                {/* Process Cards */}
                <div className="grid grid-cols-1 border border-[#D9DBDD] sm:grid-cols-2 xl:grid-cols-4">
                    {processData.map((step) => (
                        <ProcessStep key={step.number} step={step} />
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="mt-3 flex flex-col gap-5 border border-[#D9DBDD] bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
                    <div>
                        <p className="text-[14px] md:text-[16px] font-normal leading-5 text-[#68727D]">
                            Have a project in mind?
                        </p>

                        <p className="mt-1 text-[16px] md:text-[18px] font-semibold leading-7 text-[#000912]">
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
