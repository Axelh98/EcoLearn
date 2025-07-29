"use client"
import { useState, useEffect } from "react"
import { MapPin, Navigation, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"




const mockRecyclingCenters = [
  {
    id: 1,
    name: "GreenCycle Recycling Center",
    address: "123 Eco Street, Green Valley, CA 90210",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
    types: ["paper", "plastic", "glass", "metal", "electronics"],
    lat: 34.0522,
    lng: -118.2437,
    rating: 4.5,
    distance: 0,
  },
  {
    id: 2,
    name: "Metro Waste Management",
    address: "456 Recycle Blvd, Downtown, CA 90211",
    phone: "(555) 234-5678",
    hours: "Mon-Sat: 7AM-7PM",
    types: ["paper", "plastic", "glass", "metal"],
    lat: 34.0622,
    lng: -118.2537,
    rating: 4.2,
    distance: 0,
  },
  {
    id: 3,
    name: "EcoTech Electronics Recycling",
    address: "789 Tech Drive, Silicon Beach, CA 90212",
    phone: "(555) 345-6789",
    hours: "Tue-Sat: 10AM-6PM",
    types: ["electronics", "batteries"],
    lat: 34.0422,
    lng: -118.2337,
    rating: 4.8,
    distance: 0,
  },
  {
    id: 4,
    name: "Community Recycling Hub",
    address: "321 Community Ave, Westside, CA 90213",
    phone: "(555) 456-7890",
    hours: "Daily: 6AM-8PM",
    types: ["paper", "plastic", "glass", "metal", "textiles"],
    lat: 34.0722,
    lng: -118.2637,
    rating: 4.0,
    distance: 0,
  },
  {
    id: 5,
    name: "Hazardous Waste Facility",
    address: "654 Safety Road, Industrial District, CA 90214",
    phone: "(555) 567-8901",
    hours: "Wed-Sun: 9AM-5PM",
    types: ["hazardous", "batteries", "paint"],
    lat: 34.0322,
    lng: -118.2237,
    rating: 4.3,
    distance: 0,
  },
]

const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const R = 3959 // Earth's radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

const getRecyclingCenters = (userLat: number, userLng: number, filter: string, radius: string) => {
  let centers = mockRecyclingCenters.map((center) => ({
    ...center,
    distance: calculateDistance(userLat, userLng, center.lat, center.lng),
  }))

  // Filter by radius
  centers = centers.filter((center) => center.distance <= Number.parseInt(radius))

  // Filter by type
  if (filter !== "all") {
    centers = centers.filter((center) => center.types.includes(filter))
  }

  // Sort by distance
  return centers.sort((a, b) => a.distance - b.distance)
}


const FindCenters = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [recyclingCenters, setRecyclingCenters] = useState<any[]>([])
  const [locationLoading, setLocationLoading] = useState(false)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchRadius, setSearchRadius] = useState("10")

  const getUserLocation = () => {
    setLocationLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setUserLocation({ lat: latitude, lng: longitude })
        setRecyclingCenters(getRecyclingCenters(latitude, longitude, selectedFilter, searchRadius))
        setLocationLoading(false)
      },
      (error) => {
        setLocationError("Unable to retrieve your location. Please allow location access.")
        setLocationLoading(false)
      }
    )
  }

  useEffect(() => {
    if (userLocation) {
      setRecyclingCenters(getRecyclingCenters(userLocation.lat, userLocation.lng, selectedFilter, searchRadius))
    }
  }, [selectedFilter, searchRadius, userLocation])

  return (
    <FindCenters />
  )
}


export default function FindCenters() {
    return (
                <section className="mb-12" data-locator>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-blue-500" />
              <h3 className="text-3xl font-bold text-gray-900">Find Nearby Recycling Centers</h3>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  onClick={getUserLocation}
                  disabled={locationLoading}
                  className="bg-blue-600 hover:bg-blue-700 gap-2"
                >
                  <Navigation className="h-4 w-4" />
                  {locationLoading ? "Finding Location..." : "Find Centers Near Me"}
                </Button>

                <div className="flex gap-2 flex-1">
                  <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="paper">Paper & Cardboard</SelectItem>
                      <SelectItem value="plastic">Plastic</SelectItem>
                      <SelectItem value="glass">Glass</SelectItem>
                      <SelectItem value="metal">Metal</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                      <SelectItem value="batteries">Batteries</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={searchRadius} onValueChange={setSearchRadius}>
                    <SelectTrigger className="w-full sm:w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 miles</SelectItem>
                      <SelectItem value="10">10 miles</SelectItem>
                      <SelectItem value="25">25 miles</SelectItem>
                      <SelectItem value="50">50 miles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Error Message */}
              {locationError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-center">{locationError}</p>
                </div>
              )}

              {/* Results */}
              {userLocation && recyclingCenters.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>
                      Found {recyclingCenters.length} recycling centers within {searchRadius} miles
                    </span>
                  </div>

                  <div className="grid gap-4">
                    {recyclingCenters.map((center) => (
                      <Card key={center.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="bg-blue-100 p-2 rounded-full mt-1">
                                  <MapPin className="h-4 w-4 text-blue-600" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{center.name}</h4>
                                  <p className="text-gray-600 text-sm mb-2">{center.address}</p>
                                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                      <Phone className="h-3 w-3" />
                                      <span>{center.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      <span>{center.hours}</span>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap gap-1 mb-2">
                                    {center.types.map((type: string, index: number) => (
                                      <Badge key={index} variant="secondary" className="text-xs">
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-600 mb-1">
                                {center.distance.toFixed(1)} mi
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <span>★</span>
                                <span>{center.rating}</span>
                              </div>
                              <Button
                                size="sm"
                                className="mt-2 bg-green-600 hover:bg-green-700"
                                onClick={() =>
                                  window.open(
                                    `https://maps.google.com?q=${encodeURIComponent(center.address)}`,
                                    "_blank",
                                  )
                                }
                              >
                                Get Directions
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {userLocation && recyclingCenters.length === 0 && !locationLoading && (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-4">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>No recycling centers found within {searchRadius} miles.</p>
                    <p className="text-sm">Try expanding your search radius or changing the filter.</p>
                  </div>
                </div>
              )}

              {/* Instructions */}
              {!userLocation && !locationLoading && (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <Navigation className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Find Recycling Centers Near You</h4>
                  <p className="text-gray-600 mb-4">
                    Click "Find Centers Near Me" to discover recycling facilities in your area. We'll use your location
                    to show the closest options.
                  </p>
                  <p className="text-sm text-gray-500">
                    Your location data is only used to find nearby centers and is not stored.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
    )
}