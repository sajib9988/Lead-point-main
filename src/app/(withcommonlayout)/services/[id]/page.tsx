
"use client"

import { getServiceById } from "@/service/addService";
import { useParams } from "next/navigation"
import { useEffect } from "react";


const ServiceDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
    
        const fetchService = async () => {
            try {
                // Assuming getServiceById is a function that fetches service details by ID
                const response = await getServiceById(id);
                if (response && response.data) {
                    // Handle the response data, e.g., set it to state or display it
                    console.log("Service details:", response.data);
                } 
            } catch (error) {
                console.error(`Failed to fetch service ${id}:`, error);
            }
        };

        fetchService();
    }, [id]);




  return (
    <div>
      {/* Render service details here */}
      Service Details Page
    </div>
  )
}

export default ServiceDetailsPage