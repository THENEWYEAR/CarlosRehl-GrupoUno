import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                        Envíanos tu nombre, correo y las preguntas que nos quieras hacer
                    </h2>
                    <p className="text-gray-500">
                        Estamos aquí para ayudarte. Completa el formulario y nos pondremos
                        en contacto contigo lo antes posible.
                    </p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-800 font-bold">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Tu nombre"
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-800 font-bold">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Tu correo"
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-800 font-bold">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Escribe tu mensaje"
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
