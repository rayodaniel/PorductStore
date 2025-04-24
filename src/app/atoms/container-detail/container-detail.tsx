import React from 'react';


export default function ContainerDetail({
    componentLeft,
    componentRight,
}: {
    componentLeft: React.ReactNode;
    componentRight: React.ReactNode;
}) {
    return (
        <section className="sm:flex w-auto md:w-[860px] max-w-4xl h-auto min-h-96">
            <div className="flex justify-center w-full sm:w-1/2">
                {componentLeft}
            </div>
            <div className="w-full sm:w-1/2">
                {componentRight}
            </div>
        </section>
    );
}
