import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                            alt="Team collaboration"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React App Code Flow & Execution
                        </h2>
                        
                        <div className="mt-6 space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-blue-900 mb-2">1. Entry Point (main.jsx)</h3>
                                <p className="text-gray-700 text-sm">
                                    App starts here → Creates React Router → Renders RouterProvider with our route configuration
                                </p>
                            </div>
                            
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-green-900 mb-2">2. Router Configuration</h3>
                                <p className="text-gray-700 text-sm">
                                    Routes defined: "/" (Home), "/home" (Home), "/about" (About) → All wrapped in Layout component
                                </p>
                            </div>
                            
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-purple-900 mb-2">3. Layout Component</h3>
                                <p className="text-gray-700 text-sm">
                                    Renders Header → &lt;Outlet /&gt; (dynamic content) → Footer on every page
                                </p>
                            </div>
                            
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-orange-900 mb-2">4. Component Rendering</h3>
                                <p className="text-gray-700 text-sm">
                                    Based on URL, React Router injects Home or About component into &lt;Outlet /&gt;
                                </p>
                            </div>
                            
                            <div className="bg-red-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-red-900 mb-2">5. Navigation Flow</h3>
                                <p className="text-gray-700 text-sm">
                                    Header links trigger route changes → Router updates &lt;Outlet /&gt; → New component renders
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
