import {Header} from "../../../components";
import React from "react";

const Trips = () => {
    return (
        <main className="all-users wrapper">
            <Header
                title="Manage Trips"
                description="View and edit AI-generated plans"
                ctaText="Create a trip"
                ctaUrl="/trips/create"
            />
        </main>
    )
}
export default Trips
