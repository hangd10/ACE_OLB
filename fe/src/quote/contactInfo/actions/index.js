export const GO_TO_VEHICLE_INFO = "GO_TO_VEHICLE_INFO";

export function goToVehicleInfo(contactInfo) {
    return {
        type : GO_TO_VEHICLE_INFO
        ,payload : contactInfo
    }
}