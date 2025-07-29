"use client"

export default function ImpactStats() {
    return (
        <section className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Environmental Impact</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
                        <p className="text-gray-600">Less energy used when recycling aluminum vs. making new</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">1 Ton</div>
                        <p className="text-gray-600">Of recycled paper saves 17 trees and 7,000 gallons of water</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">450</div>
                        <p className="text-gray-600">Years for a plastic bottle to decompose in landfill</p>
                    </div>
                </div>
            </div>
        </section>
    )
}