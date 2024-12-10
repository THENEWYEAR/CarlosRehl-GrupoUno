import React from "react";

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-12">
            <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                        Sobre Nosotros
                    </h1>
                    <p className="text-lg text-gray-600">
                        Bienvenidos a nuestra tienda. Nos apasiona ofrecer productos de alta calidad
                        y un servicio excepcional para satisfacer todas tus necesidades.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
                        <h2 className="text-2xl font-bold text-blue-600">Nuestra Misión</h2>
                        <p className="mt-4 text-gray-600">
                            Brindar productos de calidad que mejoren la vida de sus computadores,
                            ofreciendo soluciones baratas y rentables.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
                        <h2 className="text-2xl font-bold text-blue-600">Nuestra Visión</h2>
                        <p className="mt-4 text-gray-600">
                            Ser una empresa reconocida globalmente por nuestros buenos precios
                            y servicio al cliente.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
                        Conoce a Nuestro Equipo
                    </h2>
                    <div className="flex flex-col items-center">
                        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
                            <img
                                src='src/Images/ae5efb0a-58bd-4e52-beb5-dd86a8f9f17e.jpg'
                                alt="Miembro del equipo"
                                className="w-32 h-32 rounded-full object-cover"
                            />
                            <h3 className="mt-4 text-xl font-bold text-gray-800">
                                Marlon Torralbo
                            </h3>
                            <p className="text-gray-600">CEO & Fundador</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
