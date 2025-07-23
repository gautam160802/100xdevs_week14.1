import React from "react"

export default function s({children} : {
    children: React.ReactNode 
}) {
  return <div>
    <div className="border-b border-gray-200 p-4 text-center">
      20% off for next 3 days
    </div>
    {children}
    </div>
  
}